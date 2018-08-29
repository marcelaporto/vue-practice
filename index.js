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

// handling user input
