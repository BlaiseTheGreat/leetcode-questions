
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHeadTo(node) {
        if(this.head === node) {
            return;
        } else if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else if (this.head === this.tail) {
            this.tail.prev = node;
            this.head = node;
            this.head.next = this.tail;
        } else {
            if(this.tail === node) this.removeTail();
            node.removeBindings();
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    printList() {
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
        }
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    
    removeBindings() {
        if(this.prev !== null) {
            this.prev.next = this.next;
        }
        if(this.next !== null) {
            this.next.prev = this.prev;
        }
        this.prev = null;
        this.next = null;
    }
}


