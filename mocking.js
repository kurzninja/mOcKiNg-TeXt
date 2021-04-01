let app = new Vue({
			el: "#app", 
			data: {
				text: "",
				copied: false
			},
			methods: {
				copy() {
					document.querySelector("#output").select();
					document.execCommand('copy');
					this.copied = true;
					setTimeout(function() {
						this.copied = false
					}, 3000);
				}
			},
			computed: {
				mocking() {
					return this.text.split('').map(
						(letter, index) => {
							return index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase();
						}
					).join('');
				}
			}
		});
