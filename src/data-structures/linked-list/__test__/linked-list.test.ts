import LinkedList from '../linked-list';

describe(`LinkedList`, () => {
  it(`should create empty linked list`, () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe(``);
  });

  it(`should append node to linked list`, () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1).append(2);

    expect(linkedList.toString()).toEqual(`1,2`);
    expect(linkedList.tail?.next).toBeNull();
  });

  it(`should prepend node to linked list`, () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head?.toString()).toEqual(`2`);
    expect(linkedList.tail?.toString()).toEqual(`2`);

    linkedList.append(1).prepend(4);

    expect(linkedList.toString()).toBe(`4,2,1`);
  });

  it(`should find node by value`, () => {
    const linkedList = new LinkedList();

    expect(linkedList.find(5)).toBeNull();

    linkedList.append(1);
    expect(linkedList.find(1)).toBeDefined();

    linkedList.append(2).append(3);

    const node = linkedList.find(2);

    expect(node?.value).toBe(2);
    expect(linkedList.find(5)).toBeNull();
  });

  it(`should delete node by value from linked list`, () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head?.toString()).toBe(`1`);
    expect(linkedList.tail?.toString()).toBe(`5`);

    const deletedNode = linkedList.delete(3);
    expect(deletedNode?.value).toBe(3);
    expect(linkedList.toString()).toBe(`1,1,2,4,5`);

    linkedList.delete(1);

    expect(linkedList.toString()).toBe(`2,4,5`);

    expect(linkedList.head?.toString()).toBe(`2`);
    expect(linkedList.tail?.toString()).toBe(`5`);

    linkedList.delete(5);
    expect(linkedList.toString()).toBe(`2,4`);

    expect(linkedList.head?.toString()).toBe(`2`);
    expect(linkedList.tail?.toString()).toBe(`4`);

    linkedList.delete(4);
    expect(linkedList.toString()).toBe(`2`);

    expect(linkedList.head?.toString()).toBe(`2`);
    expect(linkedList.tail?.toString()).toBe(`2`);

    linkedList.delete(2);
    expect(linkedList.toString()).toBe(``);
  });

  it(`should create linked list from array`, () => {
    const linkedList = new LinkedList();
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(linkedList.toString()).toBe(`1,1,2,3,3,3,4,5`);
  });

  it(`should reverse linked list`, () => {
    const linkedList = new LinkedList();

    // Add test values to linked list.
    linkedList.append(1).append(2).append(3);

    // Reverse linked list.
    linkedList.reverse();
    expect(linkedList.toString()).toBe(`3,2,1`);
    expect(linkedList.head?.value).toBe(3);
    expect(linkedList.tail?.value).toBe(1);

    // Reverse linked list back to initial state.
    linkedList.reverse();
    expect(linkedList.toString()).toBe(`1,2,3`);
    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.tail?.value).toBe(3);
  });
});
