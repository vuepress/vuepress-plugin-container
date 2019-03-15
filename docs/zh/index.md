---
sidebarDepth: 3
---

# 介绍

`vuepress-plugin-container` 是一个用于注册 markdown 容器的 VuePress 插件。

## 用法

### 全局安装

```bash
npm install -g vuepress-plugin-container
# 或者
yarn global add vuepress-plugin-container
```

### 局部安装

```bash
npm install vuepress-plugin-container
# 或者
yarn add vuepress-plugin-container
```

### 添加到 `config.js`

```js
module.exports = {
  plugins: [
    // 你可以多次使用这个插件
    // 因此我们推荐使用 babel-style
    ['container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }],
  ]
}
```

```stylus
// index.styl
.theorem
  margin 1rem 0
  padding .1rem 1.5rem
  border-radius 0.4rem
  background-color #f0f4f8
  .title
    font-weight bold

.custom-block
  &.right
    color transparentify($textColor, 0.4)
    font-size 0.9rem
    text-align right
```

在[这里](./config.md)可以查看详细的配置。

## 示例

**Input**

```md
::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
From [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::
:::
```

**Output**

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

