# @wei_design/web-tool

[![WeDesign version badge](https://img.shields.io/npm/v/@wei_design/web-tool.svg?style=flat-square)](https://www.npmjs.org/package/@wei_design/web-tool)

## 使用

### cdn

#### unpkg

- 资源浏览

https://unpkg.com/browse/@wei_design/web-tool/

- cdn加载

```
<script src="//unpkg.com/@wei_design/web-tool"></script>
```

#### jsdelivr

- 资源浏览

https://cdn.jsdelivr.net/npm/@wei_design/web-tool/

- cdn加载
 
```
<script src="//cdn.jsdelivr.net/npm/@wei_design/web-tool"></script>
```

## 私有npm部署

https://blog.csdn.net/weixin_38384296/article/details/116403848

npm config set registry=https://forguo.cn/npm/

.npmrc配置

```
registry=https://forguo.cn/npm/
```

### 引入

```js
import { isArray } from '@wei_design/web-tool';
isArray([1, 2, 3]);
```

## 发布

npm publish 命令执行，默认是进行私有发布
scoped的包私有发布时需要收费

- 公共发布

``` bash
npm publish --access public
```
