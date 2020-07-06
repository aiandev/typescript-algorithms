import { ILinkedListNode } from "./interfaces/linkedListNode.interface";

export class LinkedListNode implements ILinkedListNode {
  public value: any;
  public next: ILinkedListNode | null;

  constructor(value: any, next: ILinkedListNode | null = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}