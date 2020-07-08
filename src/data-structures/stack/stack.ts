import LinkedList from "../linked-list/linked-list";
import { ILinkedList } from "../linked-list/interfaces/linkedList.interface";

export default class Stack {
  public linkedList: ILinkedList = new LinkedList();

  /**
   * @return {any}
   */
  peek(): any {
    if (this.linkedList.isEmpty()) {
      // If the linked list is empty then there is nothing to peek from.
      return null;
    }

    // Just read the value from the start of linked list without deleting it.
    return this.linkedList.head.value;
  }

  /**
   * @param {*} value
   */
  push(value:any): void {
    // Pushing means to lay the value on top of the stack. Therefore let's just add
    // the new value at the start of the linked list.
    this.linkedList.prepend(value);
  }

  /**
   * @return {any}
   */
  pop():any {
    // TODO: throw error if stack is empty
    // if(this.linkedList.isEmpty()){
    //   throw Error('Trying POP from empty Stack')
    // }
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @return {any[]}
   */
  toArray() {
    return this.linkedList
      .toArray()
      .map(linkedListNode => linkedListNode.value);
  }

  /**
   * @return {string}
   */
  toString() {
    return this.linkedList.toString();
  }

  /**
   * @return {boolean}
   */
  isEmpty(): Boolean {
    return this.linkedList.isEmpty();
  }
}