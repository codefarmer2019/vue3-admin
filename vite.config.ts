import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const CWD = process.cwd()

// 环境变量
const BASE_ENV_CONFIG = loadEnv('', CWD)
const DEV_ENV_CONFIG = loadEnv('development', CWD)
const PROD_ENV_CONFIG = loadEnv('production', CWD)

export default ({ command, mode }: ConfigEnv): UserConfig => {
    // 环境变量
    const {VITE_BASE_URL,VITE_DROP_CONSOLE} = loadEnv(mode, CWD)

    // const isBuild = command === 'build';

    return {
        base: VITE_BASE_URL,
        esbuild: {
            // target: 'es2015'
        },
        alias: {
            '@': resolve(__dirname, './src'),
        },
        plugins: [
            vue(),
            vueJsx({
                // options are passed on to @vue/babel-plugin-jsx
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {},
                    javascriptEnabled: true
                },
                scss: {
                    additionalData: `@import "src/styles/global.scss";`,
                }
            }
        },
        server: {
            port: 8888,
            proxy: {
                '/api': {
                    target: 'http://29135jo738.zicp.vip',
                    // target: 'http://localhost:7001',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '/api/v1')
                }
            }
        },
        optimizeDeps: {
            include: [
                'moment',
                '@ant-design/icons-vue',
                'lodash',
                'ant-design-vue/es/locale/zh_CN',
                'moment/locale/zh-cn',
                'ant-design-vue/es/locale/en_US',
            ],
            exclude: [
                // 'ant-design-vue'
            ]
        },
        build: {
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    drop_console: VITE_DROP_CONSOLE,
                },
            },
        }
    }
}
