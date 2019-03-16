---
sidebarDepth: 3
---

# Introduction

`vuepress-plugin-container` is a VuePress plugin that registers markdown containers.

## Usage

### Global Installation

```bash
npm install -g vuepress-plugin-container
# OR
yarn global add vuepress-plugin-container
```

### Local Installation

```bash
npm install vuepress-plugin-container
# OR
yarn add vuepress-plugin-container
```

### Add to `config.js`

```js
module.exports = {
  plugins: [
    // you can use it multiple times
    // so babel-style may be a better choice
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

See detailed configurations [here](./config.md).

## Demonstration

**Input**

```md
::: theorem Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force.

::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
:::
:::
```

**Output**

::: theorem Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force.

::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
:::

