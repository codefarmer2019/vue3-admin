import { MutationTree} from 'vuex'
import {State} from "./state";
import {IS_LOCKSCREEN} from "@/store/mutation-types";
import {storage} from "@/utils/Storage";

// 长时间不操作默认锁屏时间
const initTime = 60 * 60

export enum LockscreenMutationType {
    SetLock = 'SET_LOCK',
    SetLockTime = 'SET_LOCK_TIME',
}

export type Mutations<S = State> = {
    [LockscreenMutationType.SetLock](state: S, payload: boolean): void;
    [LockscreenMutationType.SetLockTime](state: S, payload: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [LockscreenMutationType.SetLock]: (state, payload) => {
        state.isLock = payload
        storage.set(IS_LOCKSCREEN, state.isLock)
    },
    [LockscreenMutationType.SetLockTime]: (state, payload = initTime) => {
        state.lockTime = payload
    },
}
