export interface ILinkedListNode {
  value: any;
  next: ILinkedListNode | null;
  toString: () => string;
}
