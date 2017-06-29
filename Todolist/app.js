new Vue({
  el: "#todo", //Bind this Vue instance to our container div with an ID of todo

  data: {   //This is where we will register the values that hold data for our application
    newTask: "",
    taskList: []
  },

  methods: {   //This is where we will hold the methods we want to use in our application
    addTask : function() {
      var task = this.newTask.trim();
      if(task) {
        this.taskList.push({
          text: task,
          checked: false
        });
        this.newTask = "";
      }
    },
    removeTask : function(task) {
      var index = this.taskList.indexOf(task)
      this.taskList.splice(index, 1)
    },
    clearList : function() {
      this.taskList = []
    }
  }
});
