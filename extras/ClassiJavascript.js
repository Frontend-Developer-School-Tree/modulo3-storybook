/**
 * Esempi di classi Javascript e del loro utilizzo.
 */

/**
 * Object constructor example (https://www.w3schools.com/js/js_object_prototypes.asp).
 * Esempio di creazione di una classe pre ES6.
 */

function PersonPreEs6(first, last, age, eyecolor) {
  this.firstName = first
  this.lastName = last
  this.age = age
  this.eyeColor = eyecolor
}

PersonPreEs6.prototype.nationality = "English"

PersonPreEs6.prototype.name = function() {
  return this.firstName + " " + this.lastName
}

var myFather = new PersonPreEs6("John", "Doe", 50, "blue")
var myMother = new PersonPreEs6("Sally", "Rally", 48, "green")

/**
 * Class constructor example
 * Esempio di creazione di una classe post ES6.
 */

class PersonPostEs6 {

  constructor(first, last, age, eyecolor) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eyecolor
  }

  name() {
    return this.firstName + " " + this.lastName
  }
}

/**
 * Esempio di oggetto Javascript.
 * Attenzione all'uso di function vs arrow functions.
 */

const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  name: function () {
    return this.firstName + ' ' + this.lastName
  },
  nameArrow: () => {
    return this.firstName + ' ' + this.lastName
  },
}

/**
 * Esempio creazione di istanze multiple di una classe.
 */

class Person {

  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

}

var pippo = new Person('Pippo')
var simone = new Person('Simone')