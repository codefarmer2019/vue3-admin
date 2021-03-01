/**
 * 向后端请求用户的菜单，动态生成路由
 */
// import { constantRouterMap } from '@/config/router.config'
import {Store as VuexStore, CommitOptions, Module} from 'vuex';

import {RootState} from '@/store';
import {state} from './state';
import {mutations, Mutations} from './mutations';

import type {State} from './state';

export {State};

export type LockscreenStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
    & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
};

export const store: Module<State, RootState> = {
    state,
    mutations,
};

