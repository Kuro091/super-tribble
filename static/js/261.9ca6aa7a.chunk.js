(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[261],{436:function(e,n){Prism.languages.liquid={comment:{pattern:/(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,lookbehind:!0},delimiter:{pattern:/^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,alias:"punctuation"},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},keyword:/\b(?:as|assign|break|continue|cycle|decrement|echo|else|elsif|(?:end)?(?:capture|case|comment|for|form|if|paginate|style|raw|tablerow|unless)|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,function:[{pattern:/(\|\s*)\w+/,lookbehind:!0,alias:"filter"},{pattern:/(\.\s*)(?:first|last|size)/,lookbehind:!0}],boolean:/\b(?:true|false|nil)\b/,range:{pattern:/\.\./,alias:"operator"},number:/\b\d+(?:\.\d+)?\b/,operator:/[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|or|contains(?=\s))\b/,punctuation:/[.,\[\]()]/},Prism.hooks.add("before-tokenize",(function(e){var n=!1;Prism.languages["markup-templating"].buildPlaceholders(e,"liquid",/\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,(function(e){var t=/^\{%-?\s*(\w+)/.exec(e);if(t){var i=t[1];if("raw"===i&&!n)return n=!0;if("endraw"===i)return!(n=!1)}return!n}))})),Prism.hooks.add("after-tokenize",(function(e){Prism.languages["markup-templating"].tokenizePlaceholders(e,"liquid")}))}}]);
//# sourceMappingURL=261.9ca6aa7a.chunk.js.map