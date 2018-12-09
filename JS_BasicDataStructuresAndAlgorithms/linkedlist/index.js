// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let node = this.head;
    while (node.next) node = node.next;

    node.next = new Node(data);
  }

  getAt(index) {
    if (!this.head) return null;

    let node = this.head;
    while (index-- > 0 && node.next) {
      node = node.next;
    }

    if (index >= 0) return null;
    return node;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.removeFirst();
      return;
    }

    let prev = this.getAt(index - 1);
    if (prev && prev.next) prev.next = prev.next.next;

    // let prev = this.head;
    // let node = this.head.next;
    // while (index-- > 1 && node && node.next) {
    //   prev = node;
    //   node = node.next;
    // }
    //
    // if (index >= 1) return;
    // if (node) prev.next = node.next;
  }

  insertAt(data, index) {
    if (index === 0) return this.insertFirst(data);

    if (!this.head) return (this.head = new Node(data));

    const prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
