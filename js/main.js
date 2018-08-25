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
    attachRed: false,
    color: 'green'
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

new Vue({
  el: '#app3',
  data: {
    color: 'gray',
    width: 100
  },
  computed: {
    myStyle: function(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px'  //need 'px' when you set width
      }
    }
  }
})

// Assignemnt exercise4
new Vue({
  el: '#exercise4',
  data: {
    onhighlight: false,
    onshrink: false
  },
  methods: {
    startEffect: function() {
      return {
        highlight: this.onhighlight,
        shrink: !this.onshrink
      }
    }
  }
});
