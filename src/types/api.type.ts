interface IApi<T> {
    create(obj: T): boolean;
    update(obj: T): boolean;
    delete(id: number): boolean;
    find(fn: Function, callback?: Function): T
}