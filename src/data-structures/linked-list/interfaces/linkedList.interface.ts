import { ILinkedListNode } from "./linkedListNode.interface";

export interface ILinkedList {
    head: any;
    tail: any;
    prepend: (item: any) => ILinkedList;
    append: (item: any) => ILinkedList
    delete: (item: any) => ILinkedListNode | null;
    find: (value: any) => ILinkedListNode | null;
    //TODO: implement test
    deleteHead: () => ILinkedListNode | null;
    deleteTail: () => ILinkedListNode | null;
}