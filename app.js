var names = {
  blackboard: 'Blackboard',
  whiteboard: 'Whiteboard',
  projector: 'Projector',
  television: 'Television',
  tables: 'Tables',
  desks: 'Desks',
  north: 'North',
  south: 'South'
}

function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}