const { fs, path } = require('@vuepress/shared-utils')
const { createApp } = require('@vuepress/core')
const ContainerPlugin = require('..')

describe('containers', () => {
  let app

  beforeAll(async () => {
    app = createApp({
      plugins: [
        [ContainerPlugin, {
          type: 'hint',
          defaultTitle: '💡 HINT',
          localeTitle: {
            jp: 'ヒント',
          },
        }],
        [ContainerPlugin, {
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
    const content = fs.readFileSync(filepath, 'utf8')
    test(name, () => {
      const relPath = filepath.includes('locale-jp') ? 'jp/readme.md' : 'readme.md'
      const { html } = app.markdown.render(content, { relPath })
      expect(html).toMatchSnapshot()
    })
  })
})
