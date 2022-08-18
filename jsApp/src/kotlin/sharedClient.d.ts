type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace com.diachuk.vladar {
    class User {
        constructor(name: string, surname: string);
        get name(): string;
        get surname(): string;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.diachuk.vladar.User> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.diachuk.vladar.User> */;
        component1(): string;
        component2(): string;
        copy(name?: string, surname?: string): com.diachuk.vladar.User;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static User_init_$Create$(seen1: number, name: Nullable<string>, surname: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.diachuk.vladar.User;
    }
}
export function sendTestGet(): void;
export function sendTestPost(): void;