/**
 * @jest-environment node
 */

const { fs, path, parseFrontmatter } = require('@vuepress/shared-utils')
const { createApp } = require('@vuepress/core')

describe('containers', () => {
  let app

  beforeAll(async () => {
    app = createApp({
      plugins: [
        [require('..'), {
          type: 'hint',
          defaultTitle: {
            '/': '💡 HINT',
            '/jp/': 'ヒント',
          },
        }],
        [require('..'), {
          type: 'theorem',
          before: info => `<div class="theorem"><p class="title">${info}</p>`,
          after: '</div>',
        }],
      ],
    })
    return app.process()
  })

  const fragmentDir = path.join(__dirname, 'fragments')
  fs.readdirSync(fragmentDir).forEach((name) => {
    const filepath = path.join(fragmentDir, name)
    const rawFile = fs.readFileSync(filepath, 'utf8')
    const { data, content } = parseFrontmatter(rawFile)
    test(name, () => {
      const { html } = app.markdown.render(content, {
        ...(data.ENV || {}),
        frontmatter: data,
      })
      expect(html).toMatchSnapshot()
    })
  })
})
