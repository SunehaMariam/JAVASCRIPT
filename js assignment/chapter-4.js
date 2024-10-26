
  var firstName = "John", lastName = "Doe", age = 25;

  var legalVariables = [
      "$myVariable",
      "_myVariable",
      "myVariable",
      "myVariable1",
      "myVariable$"
  ];

  var illegalVariables = [
      "1stVariable", 
      "my Variable",
      "my-Variable", 
      "var", 
      "my@Variable" 
  ];
  document.write("<b>Rules for naming JS variables</b>"+"<br>");
  document.write("Variable names can only contain,number , $ and _. For example: $my_1stVariable"+"<br>")
  document.write(" Variables must begin with a letter,$ or_. For example:$name, _name or name"+"<br>")
  document.write("Variable names are case sensitive" +"<br>" 
    ) 
    document.write("Variable names should not be JS keywords");


