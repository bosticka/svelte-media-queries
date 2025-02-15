import { SvelteComponentTyped } from "svelte";
export declare const createMediaStore: typeof mediaStore;
import { mediaStore } from "../utils/mediaStore";
import { type QueryAny } from "./MediaQuery.types";
declare const __propDef: {
    props: {
        query?: QueryAny | undefined;
        matches?: boolean | import("./MediaQuery.types").QueryArray | import("./MediaQuery.types").ObjectType<any> | undefined;
        matchesArray?: any[] | undefined;
        matchesObject?: import("./MediaQuery.types").ObjectType<any> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            matches: boolean | import("./MediaQuery.types").QueryArray | import("./MediaQuery.types").ObjectType<any>;
            matchesArray: any[];
        };
    };
};
export declare type MediaQueryProps = typeof __propDef.props;
export declare type MediaQueryEvents = typeof __propDef.events;
export declare type MediaQuerySlots = typeof __propDef.slots;
export default class MediaQuery extends SvelteComponentTyped<MediaQueryProps, MediaQueryEvents, MediaQuerySlots> {
}
export {};
