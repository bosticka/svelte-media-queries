<script context='module'>export const createMediaStore = mediaStore;
</script>

<script>import { getType } from "../utils/getType";
import { mediaStore } from "../utils/mediaStore";
import { onDestroy, onMount } from "svelte";
import { Types } from "./MediaQuery.types";
export let query = '';
export let matches = false;
export let matchesArray = [];
export let matchesObject = {};
//@ts-expect-error
let store;
const updateMatches = (...watches) => {
    if (query) {
        matchesArray = Array.isArray($store) ? $store : [];
        matchesObject = getType($store) === Types.object ? $store : {};
        matches = $store ?? (getType(query) === Types.array ? [] :
            getType(query) === Types.object ? {} : false);
    }
    else {
        matches = false;
        matchesArray = [];
    }
};
const start = () => {
    store = createMediaStore(query);
    updateMatches();
};
const destroy = () => {
    updateMatches();
    store?.destroy;
};
const update = (...watchers) => {
    destroy();
    query && start();
};
onMount(() => {
    start();
});
onDestroy(() => {
    destroy();
});
$: update(query);
$: updateMatches($store);
</script>
<slot {matches} {matchesArray}/>
