import { type Writable } from "svelte/store";
import type { Matches, QueryAny } from "../components/MediaQuery.types";
export declare type Destroy = () => void;
declare type ConvertQueryAny<T extends QueryAny> = T extends string ? boolean : T;
export interface MediaStore<T = Matches> {
    subscribe: Writable<T | undefined>['subscribe'];
    destroy: Destroy;
}
export declare function mediaStore<T extends QueryAny>(query: T): MediaStore<ConvertQueryAny<T>>;
export {};
