export declare enum Types {
    string = "string",
    array = "array",
    object = "object"
}
export interface ObjectType<T> {
    [index: string]: T;
}
export declare type Query = string;
export declare type QueryArray = QueryAny[];
export declare type QueryObject = ObjectType<QueryAny>;
export declare type QueryAny = Query | QueryArray | QueryObject;
export declare type Matches<T = boolean> = T;
export declare type MatchesArray<T = MatchesAny[]> = T;
export declare type MatchesObject<T = ObjectType<MatchesAny>> = T;
export declare type MatchesAny = Matches | MatchesArray | MatchesObject;
export declare type MatchesType<T> = T extends Query ? Matches : T extends QueryObject ? MatchesObject : QueryArray;
