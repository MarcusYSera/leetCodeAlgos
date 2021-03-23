class Deque {
  constructor() {
    this.data = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.data = {};
    this.count = 0;
    this.lowestCount = 0;
    return this.data;
  }

  addBack(element) {
    this.data[this.count] = element;
    this.count++;
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.data[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.count++;
      this.data[0] = element;
    }
    return true;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.data[this.lowestCount];
    delete this.data[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;
    return result;
  }
}
