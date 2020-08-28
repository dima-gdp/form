export default {
	data(){
		return {
			isOpened: false
		}
	},
	methods: {
		closeSelect(ev) {
			if (!ev.target.closest('.select')) {
				this.isOpened = false;
			}
		}
	},
	mounted() {
		document.body.addEventListener('click', this.closeSelect)
	},
	beforeDestroy() {
		document.body.removeEventListener('click', this.closeSelect)
	}
}
