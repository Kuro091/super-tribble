(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[102],{277:function(e,s){!function(e){var s=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extension|external|extends|factory|final|finally|for|get|hide|if|implements|interface|import|in|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],a=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,t={pattern:RegExp(a+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};e.languages.dart=e.languages.extend("clike",{string:[{pattern:/r?("""|''')[\s\S]*?\1/,greedy:!0},{pattern:/r?(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],"class-name":[t,{pattern:RegExp(a+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:t.inside}],keyword:s,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),e.languages.insertBefore("dart","function",{metadata:{pattern:/@\w+/,alias:"symbol"}}),e.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":t,keyword:s,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}(Prism)}}]);
//# sourceMappingURL=102.ae15d2da.chunk.js.map