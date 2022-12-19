import { type ObjectType, type Query, type QueryArray, type QueryObject } from "../components/MediaQuery.types";
export declare type MQLInline = MediaQueryList;
export declare type MQLArray = MQLAny[];
export declare type MQLObject = ObjectType<MQLAny>;
export declare type MQLAny = MQLInline | MQLArray | MQLObject;
export declare class MQL {
    static get(query: Query): MediaQueryList;
    static inline(query: Query): MQLInline;
    static array(queries: QueryArray): MQLArray;
    static object(query: QueryObject): MQLObject;
}
export declare function autoMQL(query: Query): MQLInline;
export declare function autoMQL(query: QueryArray): MQLArray;
