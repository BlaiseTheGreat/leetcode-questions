
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

    removeTail() {
        if(this.tail === null) return;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    printList() {
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
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


