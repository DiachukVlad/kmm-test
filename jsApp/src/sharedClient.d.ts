type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace com.diachuk.vladar {
    class User {
        constructor(name: string, surname: string);
        get name(): string;
        get surname(): string;
        component1(): string;
        component2(): string;
        copy(name?: string, surname?: string): com.diachuk.vladar.User;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export function testKtor(): void;