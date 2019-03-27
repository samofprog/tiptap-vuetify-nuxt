import { Strike as StrikeOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class Strike extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, StrikeOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'strike',
        tooltip: 'Strike',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_strikethrough'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-strikethrough fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-strikethrough')
        }
      }
    ]
  }
}