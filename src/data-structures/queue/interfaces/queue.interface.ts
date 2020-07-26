export interface IQueue {
  isEmpty: () => boolean;
  peek: ()=> any;
  enqueue: (value: string)=> void;
  dequeue: ()=> any;
  toString:()=> string;
}
