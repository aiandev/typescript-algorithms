export interface IStack{
    peek:() => any;
    push:() => any;
    pop:() => any;
    isEmpty:()=> Boolean
}