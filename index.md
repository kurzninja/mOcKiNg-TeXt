<div id="app" class="container">

# Mocking Text Transformer ![](MSB.jpg)

<div class="row">

<div class="col-5"><label for="inputText">Input your text here:</label></div>

<div class="col-5"><label for="outputText">Your output will appear here</label></div>

</div>

<div class="row">

<div class="col-5"><textarea rows="8" cols="50" class="mocking" v-model="text" id="inputText"></textarea></div>

<div class="col-5"><textarea rows="8" class="mocking" v-model="mocking"></textarea></div>

</div>

</div>

<style>.mocking { font-size: 1.25em; font-weight: bold; border-style: dotted; width: 100%; } .fade-enter-active, .fade-leave-active { transition: opacity .5s; } .fade-enter, .fade-leave-to { opacity: 0; }</style>
