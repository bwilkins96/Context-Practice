//function changeContext(func, obj) {
//  return func.bind(obj)()
//}

//function changeContext(func, obj) {
//  return func.call(obj);
//}

function changeContext(func, obj) {
  return func.apply(obj);
}


class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
