
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

class LRUCache {
    constructor(maxSize) {
        this.cache = {};
        this.maxSize = maxSize || 1;
        this.currentSize = 0;
        this.listOfMostRecent = new DoublyLinkedList();
    }

    // O(1) time | O(1) space
    insertKeyValuePair(key, value) {
        if(!(key in this.cache)) { // key not currently in LRUCache
            if(this.currentSize === this.maxSize) {
                this.evictLeastRecent();
            } else {
                this.currentSize++;
            }
            this.cache[key] = new Node(key, value);
        } else {
            this.replaceKey(key, value);
        }
        this.updateMostRecent(this.cache[key]);
    }

    // O(1) time | O(1) space
    getValueFromKey(key) {
        if(!(key in this.cache)) return null;
        this.updateMostRecent(this.cache[key]);
        return this.cache[key].value;
    }

    getMostRecentKey() {
        if(!this.listOfMostRecent.head) return;
        return this.listOfMostRecent.head.key;
    }

    evictLeastRecent() {
        const keyToRemove = this.listOfMostRecent.tail.key;
        this.listOfMostRecent.removeTail();
        delete this.cache[keyToRemove];
    }

    updateMostRecent(node) {
        this.listOfMostRecent.setHeadTo(node);
    }


    replaceKey(key, value) {
        if(!(key in this.cache)) { //key not currently in LRUCache
            throw new Error("The provided key isn't in the cache!");
        }
        this.cache[key].value = value;
    }

}


const lruc = new LRUCache(5);
lruc.insertKeyValuePair(1, 101);
lruc.insertKeyValuePair(2, 102);
lruc.insertKeyValuePair(3, 103);
lruc.insertKeyValuePair(4, 104);
lruc.insertKeyValuePair(5, 105);
lruc.insertKeyValuePair(6, 106);
lruc.getValueFromKey(3);
lruc.listOfMostRecent.printList();



