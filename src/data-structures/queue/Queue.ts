import LinkedList from '../linked-list/linked-list';
import { IQueue } from './interfaces/queue.interface';

export default class Queue implements IQueue{
  linkedList: LinkedList = new LinkedList();

  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  /**
   * Read the element at the front of the queue without removing it.
   */
  peek(): any {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {any} value
   */
  enqueue(value: any): void {
    this.linkedList.append(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {any}
   */
  dequeue(): any {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  /**
   * @return {string}
   */
  toString(): string {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString();
  }
}
