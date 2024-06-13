/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if(this.head === null) this.head = newNode;

    if(this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if(this.head !== null) this.head.next = newNode;

    if(this.tail === null) this.tail = newNode;

    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.tail.removeAt(this.length -1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.head.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error("Index is Invalid");
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0){
      throw new Error("Index is Invalid");
    }

    let newVal = this._get(idx);
    newVal.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx < 0){
      throw new Error("Index is Invalid");
    }

    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);

    // Finding previous index
    let pre = this._get(idx - 1);

    let newVal = new Node(val);
    newVal.next = pre.next;
    pre.next = newVal;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx > this.length || idx < 0){
      throw new Error("Index is Invalid");
    }

    // remove item at index 0
    if(idx === 0){
      let value = this.head.value;
      this.head = this.head.next;
      this.length -= 1;
      if(this.length < 2) this.tail = this.head;
      return value;
    }

    // Remove item at the end of list
    let pre = this._get(idx - 1);

    if(idx === this.length -1){
      let value = pre.next.value;
      pre.next = null;
      this.tail = pre;
      this.length -= 1;
      return val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;

    let total = 0;
    let count = this.head;

    while(count){
      total += count.val;
      count = count.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
