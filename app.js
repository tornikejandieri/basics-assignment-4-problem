const app = Vue.createApp({
  data(){
    return{
      input: '',
      isVisible: true,
			visibleClass: 'visible',
			hiddenClass: 'hidden',
			secondInput: ''
    }
  },
methods:{
		toggle() {
			this.isVisible = !this.isVisible
		}
	},
computed:{
		inputColor() {
			if (this.secondInput == '') return ''
			return this.secondInput + 'Class'
		},
		isComputedVisible() {
			if (this.isVisible) {
				return this.visibleClass
			} else {
				return this.hiddenClass
			}
		},
	}
});

app.mount('#assignment')