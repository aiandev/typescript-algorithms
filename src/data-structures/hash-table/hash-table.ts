import { ILinkedListNode } from '../linked-list/interfaces/linkedListNode.interface';
import LinkedList from '../linked-list/linked-list';

const defaultHashTableSize = 32;

export default class HashTable {
  buckets: LinkedList[];
  keys: { [key: string]: string } = {};

  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize: Number = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize)
      .fill(-1)
      .map(() => new LinkedList());
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash(key: string): number {
    const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0), 0);

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }

  /**
   * @param {string} key
   * @param {any} value
   */
  set(key: string, value: any): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash.toString();

    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: (nodeValue: { key: any }) => nodeValue.key === key });

    // Insert new node.
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      // Update value of existing node.
      node.value.value = value;
    }
  }

  /**
   * @param {string} key
   * @return {ILinkedListNode| null}
   */
  delete(key: string): ILinkedListNode | null {
    const keyHash = this.hash(key);
    delete this.keys[key];

    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: (nodeValue: { key: any }) => nodeValue.key === key });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  /**
   * @param {string} key
   * @return {string|undefined}
   */
  get(key: string): string | undefined {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: (nodeValue: { key: any }) => nodeValue.key === key });

    return node ? node.value.value : undefined;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * @return {string[]}
   */
  getKeys(): string[] {
    return Object.keys(this.keys);
  }
}
