import {createStore, useStore as baseUseStore, createLogger} from 'vuex'
// import createPersistedState from 'vuex-persistedstate';
import {App, InjectionKey} from "vue";
import {store as asyncRoute, AsyncRouteStore, State as AsyncRouteState} from '@/store/modules/async-route';
import {store as user, UserStore, State as UserState} from '@/store/modules/user';
import {store as lockscreen, LockscreenStore, State as LockscreenState} from '@/store/modules/lockscreen';
import {store as tabsView, TabsViewStore, State as TabsViewState} from '@/store/modules/tabs-view';
import {LockscreenMutationType} from "@/store/modules/lockscreen/mutations";

// export const key: InjectionKey<Store<RootState>> = Symbol()

export type RootState = {
    asyncRoute: AsyncRouteState;
    user: UserState;
    lockscreen: LockscreenState;
    tabsView: TabsViewState;
};

export type Store =
    AsyncRouteStore<Pick<RootState, 'asyncRoute'>>
    & UserStore<Pick<RootState, 'user'>>
    & LockscreenStore<Pick<RootState, 'lockscreen'>>
    & TabsViewStore<Pick<RootState, 'tabsView'>>

// 在开发环境中开启logger
const debug = import.meta.env.DEV;

const plugins = debug ? [createLogger({
    filter(mutation, stateBefore, stateAfter) {
        // 若 mutation 需要被记录，就让它返回 true 即可
        // 顺便，`mutation` 是个 { type, payload } 对象
        return mutation.type !== LockscreenMutationType.SetLockTime
    }
})] : [];
// 可以根据自己需要添加其他插件，例如：vuex持久化插件
// plugins.push(createPersistedState({ storage: window.sessionStorage }));

const store = createStore<RootState>({
    plugins,
    modules: {
        asyncRoute,
        user,
        lockscreen,
        tabsView
    }
})

// 定义你自己的“useStore”组合函数
export function useStore(): Store {
    // return baseUseStore(key)
    return store as Store
}

export function setupStore(app: App) {
    app.use(store)
    console.log(store, 'vuex')
}

export default store
