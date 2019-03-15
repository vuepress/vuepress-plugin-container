const { fs, path } = require('@vuepress/shared-utils')
const { createApp } = require('@vuepress/core')
const ContainerPlugin = require('..')

describe('containers', () => {
  let app

  beforeAll(async () => {
    app = createApp({
      plugins: [
        [ContainerPlugin, { type: 'tip' }],
      ],
    })
    return app.process()
  })

  const fragmentDir = path.join(__dirname, 'fragments')
  fs.readdirSync(fragmentDir).forEach((name) => {
    const filepath = path.join(fragmentDir, name)
    const content = fs.readFileSync(filepath, 'utf8')
    test(name, () => {
      const { html } = app.markdown.render(content)
      expect(html).toMatchSnapshot()
    })
  })
})
