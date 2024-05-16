import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
export default defineConfig({
  name: 'default',
  title: 'DevinovaHome',

  projectId: '426kwv4m',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items(
            schemaTypes
              .filter((type) => type.type === 'document')
              .map((type) => orderableDocumentListDeskItem({type: type.name, S, context})),
          )
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
