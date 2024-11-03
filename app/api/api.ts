export function executePromise<T>(promise: Promise<T>):Promise<[undefined, T] | [Error]>{
    return promise.then(
        (data): [undefined, T] => {
            return [undefined, data];
        }
    ).catch(error => [error]);
}