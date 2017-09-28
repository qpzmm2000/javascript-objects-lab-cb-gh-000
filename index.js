var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newobj = Object.assign({}, object)
  newobj[key] = value;
  return newobj
}
