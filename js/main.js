new Vue ({
  el: '#app1',
  data: {
    //by default - false means no red color at the beginning
    attachRed: false
  }
})

new Vue ({
  el: '#app2',
  data: {
    attachRed: false
  },
  computed: {
    divClass: function(){
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
})
