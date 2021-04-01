<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
	<meta charset="utf-8">
	<title></title>
</head>

<body>
	<div id="app">
		<h1>Mocking Text Transformer</h1>
		<label for="inputText">Input your text here:</label>
		<input type="text" v-model="text" id="inputText" />
		<br />
		<label for="outputText">Your output will appear here</label>
		<br />
		<textarea rows="8" cols="50" class="mocking" v-model="mocking"></textarea>
		<button>Copy to Clipboard</button>
		<transition name="fade">
			<span v-if="copied">tExT HaS BeEn cOpIeD To yOuR ClIpBoArD</span>
		</transition>

	</div>

	<style>
		.mocking {
			font-size: 1.25em;
			font-weight: bold;
			border-style: dotted;
		}

		.fade-enter-active,
		.fade-leave-active {
			transition: opacity .5s;
		}

		.fade-enter,
		.fade-leave-to {
			opacity: 0;
		}
	</style>

	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script src="./mocking.js"></script>
</body>

</html>