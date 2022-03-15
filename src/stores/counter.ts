import { computed, reactive } from "vue";

const state = reactive ({
    count : 0
});

const getters = reactive ({
    val : computed (() => state.count * 2)
});

const actions = {
    inc (by: number) {
        state.count += by
    }
};

export default {state, getters, ...actions};