// hello world
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

// bind
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on' + new Date().toLocaleString()
  }
});

// conditional
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

// v-for
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Build Something' }
    ]
  }
});

// handling user input: v-on
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: "Hello, Vue Js!"
  }, 
  methods: {
    ReverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// model
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello, Vue'
  }
})

// component
// In Vue, a component is essentially a Vue instance with pre-defined options.

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
