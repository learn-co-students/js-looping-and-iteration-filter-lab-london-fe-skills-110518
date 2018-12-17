// Code your solution in this file


function findMatching (drivers, string) {
  let result = drivers.filter(x => x.toLowerCase().includes(string.toLowerCase()));
  
  return result;
  
}

function fuzzyMatch (drivers, string) {
  let result = drivers.filter(x => x[0,1] === string[0,1]);
  
  return result;
  
}


function matchName (drivers,string) {
  let result = drivers.filter (x => x.name === string);
  
  return result;
  
}