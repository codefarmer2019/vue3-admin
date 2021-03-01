import { MutationTree} from 'vuex'
import { State } from './state'
import {RouteRecordRaw} from 'vue-router'

export enum MutationType {
    SetRouters = 'SET_ROUTERS',
}
export type Mutations<S = State> = {
    [MutationType.SetRouters](state: S, routers: RouteRecordRaw[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetRouters]: (state, routers) => {
        state.menus = routers
    },
}
