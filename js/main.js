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
  effectClasses: {
    highlight: false,
    shrink: true
   },
   float: 'float', //'float' pointing css .float
   userClass: '',
   isVisible: true, //all strings are all true(even you input false, it is true)
   myStyle: {
     width: '100px',
     height: '150px',
     backgroundColor: 'gray'
   },
   progressBar: {
     width: '0px',
     backgroudColor: 'red',
   }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
       }, 1000);
     },
     startProgress: function() {
       var vm = this;
       var width =0;
       setInterval(function(){
         width = width + 10;
         vm.progressBar.width = width + 'px'
       }, 500)
     }
    }
});
