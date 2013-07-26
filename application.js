



$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('#todo').on('click',function(e) {
      if(e.target && e.target.className == 'add')
      {
      addTodo();
      }
      if(e.target && e.target.className == 'delete')
      {
        deleteTodo(e.target)
      }
      if(e.target && e.target.className == 'complete')
      {
        completeTodo(e.target)
      }
    })
  }
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
  }

  //Create functions to add, remove and complete todosgi

  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
