## 安装依赖推荐使用 yarn

```
yarn install # 等价于 lerna bootstrap --npm-client yarn --use-workspaces
```

### 给根项目安装依赖（一般是公用的开发工具）

```
// yarn 使用 workspace 模式安装 npm 包时必须加 -W 参数
$ yarn add -W -D ......
```

### 给 package 安装外部 npm 包

```
// mrp-ui 是取 packages/mrp-ui/package.json 的 name 字段
yarn workspace mrp-ui add chalk -D
```

### 给 package 安装内部 npm 包

```
// 一定要指定正确的版本号，不然会到npm包查找
yarn workspace mrp-app add mrp-ui@1.0.0 // 版本为改包的版本
```

## 发布推荐使用 learn
