export default {
    intlLabel: {
      id: 'code-editor-text.sectionBase.theme',
      defaultMessage: 'Theme',
    },
    name: 'options.theme',
    type: 'select',
    defaultValue: 'system',
    options: [
      {
        key: 'system',
        value: 'system',
        metadatas: {
          intlLabel: { id: 'code-editor-text.sectionBase.theme.system', defaultMessage: 'System' },
        },
      },
      {
        key: 'light',
        value: 'light',
        metadatas: {
          intlLabel: { id: 'code-editor-text.sectionBase.theme.light', defaultMessage: 'Light' },
        },
      },
      {
        key: 'dark',
        value: 'dark',
        metadatas: {
          intlLabel: { id: 'code-editor-text.sectionBase.theme.dark', defaultMessage: 'Dark' },
        },
      },
    ],
  }