export class ArrayList<T> {
  private items: T[];
  private map: Map<string, T>;

  constructor(initialCapacity: number = 0) {
    this.items = new Array<T>(initialCapacity);
    this.map = new Map<string, T>();
  }

  add(element: T): void {
    this.items.push(element);
  }

  addAll(elements: T[]): void {
    this.items.push(...elements);
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    return this.items[index];
  }

  set(index: number, element: T): void {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    this.items[index] = element;
  }

  remove(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      throw new Error('Index out of bounds');
    }
    return this.items.splice(index, 1)[0];
  }

  removeElement(element: T): boolean {
    const index = this.items.indexOf(element);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  contains(element: T): boolean {
    return this.items.includes(element);
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return [...this.items];
  }

  indexOf(element: T): number {
    return this.items.indexOf(element);
  }

  lastIndexOf(element: T): number {
    return this.items.lastIndexOf(element);
  }

  subList(fromIndex: number, toIndex: number): T[] {
    if (fromIndex < 0 || toIndex > this.items.length || fromIndex > toIndex) {
      throw new Error('Index out of bounds');
    }
    return this.items.slice(fromIndex, toIndex);
  }

  forEach(callback: (element: T, index: number) => void): void {
    this.items.forEach(callback);
  }

  sort(compareFn?: (a: T, b: T) => number): void {
    this.items.sort(compareFn);
  }

  setKeyValue(key: string, value: T): void {
    this.map.set(key, value);
  }

  getValue(key: string): T | undefined {
    return this.map.get(key);
  }

  removeKey(key: string): boolean {
    return this.map.delete(key);
  }

  hasKey(key: string): boolean {
    return this.map.has(key);
  }

  clearMap(): void {
    this.map.clear();
  }

  mapSize(): number {
    return this.map.size;
  }
}
