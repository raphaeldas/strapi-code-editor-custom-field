// @ts-ignore
import { Code } from '@strapi/icons'

import pluginPkg from '../../package.json'
import pluginId from './pluginId'
import Initializer from './components/Initializer'
import languageSelection from './utils/languageSelection'
import themeSelection from './utils/themeSelection'
import minimapSelection from './utils/minimapSelection'

const name = pluginPkg.strapi.name

export default {
  register(app: any) {
    app.customFields.register({
      name: 'code-editor-json',
      pluginId,
      type: 'json',
      intlLabel: {
        id: 'code-editor-json.label',
        defaultMessage: 'Code editor JSON',
      },
      intlDescription: {
        id: 'code-editor-json.description',
        defaultMessage: 'Field for JSON editing',
      },
      icon: Code,
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/CodeEditor/CodeEditor'),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'code-editor-text.sectionBase.title',
              defaultMessage: 'Basic options',
            },
            items: [
              themeSelection,
              minimapSelection
            ]
          }
        ],
        advanced: [
          {
            intlLabel: {
              id: 'code-editor-text.sectionAdvanced.defaultValue',
              defaultMessage: 'Default value',
            },
            name: 'options.defaultValue',
            type: 'textarea',
            value: '',
          },
        ],
      },
    })
    app.customFields.register({
      name: 'code-editor-text',
      pluginId,
      type: 'text',
      intlLabel: {
        id: 'code-editor-text.label',
        defaultMessage: 'Code editor JavaScript and other languages',
      },
      intlDescription: {
        id: 'code-editor-text.description',
        defaultMessage: 'Field for JavaScript and other languages',
      },
      icon: Code,
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/CodeEditor/CodeEditor'),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'code-editor-text.sectionBase.title',
              defaultMessage: 'Basic options',
            },
            items: [
              languageSelection,
              themeSelection,
              minimapSelection,
            ],
          },
        ],
        advanced: [
          {
            intlLabel: {
              id: 'code-editor-text.sectionAdvanced.defaultValue',
              defaultMessage: 'Default value',
            },
            name: 'options.defaultValue',
            type: 'textarea',
            value: '',
          },
        ],
      },
    })

    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    }

    app.registerPlugin(plugin)
  },

  bootstrap() {},
  async registerTrads() {
    return Promise.resolve([])
  },
}
