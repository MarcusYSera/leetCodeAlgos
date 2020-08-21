// 938. Range Sum of BST

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    // this.left = null;
    // this.right = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

insertFirst(data){
  const node = new Node(data, this.head);
}

const list = new LinkedList();
list.head = new Node(10);

console.log(list);

// test();
rangeSumBST([10,5,15,3,7,null,18], 7, 15)