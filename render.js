var asciidoctor = require('@asciidoctor/core')()
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
var options = { safe: 'safe' }
asciidoctor.convertFile('index.adoc', options)