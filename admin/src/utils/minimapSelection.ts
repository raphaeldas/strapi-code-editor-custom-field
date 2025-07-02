export default {
    intlLabel: {
      id: 'code-editor-text.sectionBase.minimap',
      defaultMessage: 'Minimap',
    },
    name: 'options.minimap',
    type: 'select',
    defaultValue: 'off',
    options: [
      {
        key: 'off',
        value: 'off',
        metadatas: {
          intlLabel: { id: 'code-editor-text.sectionBase.minimap.off', defaultMessage: 'Off' },
        },
      },
      {
        key: 'on',
        value: 'on',
        metadatas: {
          intlLabel: { id: 'code-editor-text.sectionBase.minimap.on', defaultMessage: 'On' },
        },
      },
      {
        key: 'autoHide',
        value: 'autoHide',
        metadatas: {
          intlLabel: { id: 'code-editor-text.sectionBase.minimap.autoHide', defaultMessage: 'Auto Hide' },
        },
      },
    ],
  }