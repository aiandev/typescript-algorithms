import Comparator from '../../tools/Comparator';
import { ILinkedList } from './interfaces/linkedList.interface';
import { ILinkedListNode } from './interfaces/linkedListNode.interface';
import { LinkedListNode } from './linked-list-node';

export default class LinkedList implements ILinkedList {
  public head: ILinkedListNode | null = null;
  public tail: ILinkedListNode | null = null;
  private compare: Comparator = new Comparator();
  public count = 0;

  /**
   * append to last element
   * @param {any} value
   * @return {ILinkedList}
   */
  append(value: any): ILinkedList {
    const newNode = new LinkedListNode(value);

    // If there is no head yet
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return this;
    }

    // Attach new node to the end of linked list.
    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    this.count++;
    return this;
  }

  /**
   * @param {*} value
   * @return {ILinkedList}
   */
  prepend(value: any) {
    // Create new node to be a head with next reference.
    const newNode = new LinkedListNode(value, this.head);

    // If there is no tail yet
    if (this.isEmpty()) {
      this.tail = newNode;
    }

    this.head = newNode;

    this.count++;
    return this;
  }

  /**
   * @param {any} value
   * @return {ILinkedListNode}
   */
  public delete(value: any): ILinkedListNode | null {
   
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    //If the head must be deleted then make next node that is differ
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head   = this.head?.next || null;
      this.count--;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          this.count--;
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.compare.equal(this.tail?.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * @param {*} value
   * @return {ILinkedListNode|null}
   */
  find(value: any): ILinkedListNode | null {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {ILinkedListNode}
   */
  deleteTail(): ILinkedListNode | null {
    if (this.isEmpty()) return null;

    const deletedTail = this.tail;
    this.count--;

    // There is only one node in linked list.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    // If there are many nodes in linked list...

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode?.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * @return {ILinkedListNode| null}
   */
  deleteHead():ILinkedListNode | null {
    if (!this.head) {
      return null;
    }
    this.count--;
    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @param {any[]} values - Array of values that need to be converted to linked list.
   * @return {ILinkedList}
   */
  fromArray(array: any[]): ILinkedList {
    array.forEach((item) => this.append(item));
    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray(): any[] {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /**
   * @return {String}
   */
  toString(): String {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }

  /**
   * Reverse a linked list.
   * @returns {ILinkedList}
  */
  reverse():ILinkedList {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  public isEmpty(): Boolean {
    return this.size() == 0 ? true : false;
  }

  private size(): Number {
    return this.count;
  }

  // private isValueOfHead(value: any): Boolean {
  //   return Boolean();
  // }

}
