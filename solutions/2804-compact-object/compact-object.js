function compactObject(obj) {

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(val => {
        if (typeof val === 'object') {
          return compactObject(val);
        }
        return val;
      })
     
  }

  for (const [key,val] of Object.entries(obj)) {

    if (!val) {
      delete obj[key];
      continue;
    }
    
    if (typeof val === 'object') {
      obj[key] = compactObject(val);
    }
  }

  return obj;

}