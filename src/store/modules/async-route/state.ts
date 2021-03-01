import {RouteRecordRaw} from 'vue-router'

export type State = {
    menus: RouteRecordRaw[];
};

export const state: State = {
    menus: [],
};
