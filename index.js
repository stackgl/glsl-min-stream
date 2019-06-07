module.exports = minifier

var lang = require('cssauron-glsl')
  , is_variable = lang('decl > decllist > ident')
  , is_function = lang('decl > function > ident')
  , is_named_struct = lang('struct > ident')
  , through = require('through')
  , shortest = require('shortest')

function minifier(safe_words, mutate_storages) {
  safe_words = safe_words || ['main']

  var _ = {}
    , seen_names = {}
    , counter

  for(var i = 0, len = safe_words.length; i < len; ++i)
    _[safe_words[i]] = true
  safe_words = _

  counter = shortest()

  return through(mutate)

  function mutate(node) {
    // vec2(1.0, 1.0) => vec2(1.0)
    if(node.parent && is_redundant_vector_literal(node.parent) && node.parent.children.indexOf(node) > 1) return
    if(is_redundant_vector_literal(node)) node.children = node.children.slice(0, 2)

    if(should_mutate(node)) {
      var t = node.parent.parent.children[1]
      if(mutate_storages || (t.type === 'placeholder' || t.token.data === 'const')) {
        var x = seen_names[node.token.data] || counter()
        seen_names[node.token.data] = x
        node.data = x
      }
    }

    this.emit('data', node)
  }

  function should_mutate(node) {
    var base = (
      is_variable(node) ||
      is_function(node) ||
      is_named_struct(node)
    )

    return base &&
          !safe_words.hasOwnProperty(node.token.data)
  }

  function is_redundant_vector_literal(node) {
    if(node.type === 'call' && /^[ib]?vec[234]$/.test(node.children[0].data) &&
      (node.children[1].type === 'literal' || node.children[1].type === 'ident')) {
      var first = node.children[1].data
      for(var i = 2; i < node.children.length; i++) if(node.children[i].data !== first) return false
      return true
    }
    return false
  }
}
