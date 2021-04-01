<div id="app">
  
  # Mocking Text Transformer
  
  <label for="inputText">Input your text here:</label> <input type="text" v-model="text" id="inputText">
  <label for="outputText">Your output will appear here</label>  
  <textarea rows="8" cols="50" class="mocking" v-model="mocking"></textarea>
  
  <!-- <button>Copy to Clipboard</button> 
  <transition name="fade"><span v-if="copied">tExT HaS BeEn cOpIeD To yOuR ClIpBoArD</span></transition></div> -->
  
  <style>.mocking { font-size: 1.25em; font-weight: bold; border-style: dotted; } .fade-enter-active, .fade-leave-active { transition: opacity .5s; } .fade-enter, .fade-leave-to { opacity: 0; }</style>
