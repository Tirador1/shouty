class Person {
  moveTo(distance) {
    this.distance = distance;
  }

  shout(message) {
    this.message = message;
  }

  hear(message) {
    this.message = message;
  }

  messagesHeard() {
    return [this.message];
  }

  static all = [];
  constructor() {
    Person.all.push(this);
  }
}

export { Person };
