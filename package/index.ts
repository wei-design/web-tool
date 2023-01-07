/**
 * @Author: forguo
 * @Date: 2023/1/5 20:22
 * @Description: web-tool
 */

let modules: any = {}

// 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：
const packages = import.meta.glob(`../package/*/*.ts`, { eager: true })

// 动态加载路由
for (const modulePath in packages) {
    const currentModule = packages[modulePath] as Object
    modules = {
        ...modules,
        ...currentModule
    }
}

export default modules
// 导出除了default的命名
export * from './typeof'
export * from './cookie'
