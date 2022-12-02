let storedObjects = (key, value) => {
    let obj1 = {};
    obj1[key] = value;
    return obj1;
  }
  
  let obj1 = storedObjects("nama","zaki");
  obj1 = {...obj1, ...storedObjects("kota","Blora")};
  console.log(obj1);