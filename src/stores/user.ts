import { computed, reactive } from "vue";
import * as Request from '@/shared/requests';

const state = reactive ({
    name : '',
    username : '',
    errors : ''
});

const getters = reactive ({
    isLoggedIn : computed(() => state.username !== '')
});

const actions = {
    async getUser() {
        const user = await Request.getUser()

        if (user == null) return

        state.name = user.name
        state.username = user.username
    },
    async login(username:string, passeword: string) {
        const user = await Request.login(username, passeword)
        if(user == null) {
            state.errors = 'Could not find user'
            return false
        }

        state.name = user.name
        state.username = user.username
        state.errors = ''

        return true
    },
    async logout() {
        state.name = ''
        state.username = ''
    }
    
};

export default {state, getters, ...actions};