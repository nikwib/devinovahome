import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'menuItems',
  type: 'document',
  title: 'Menu Items',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'menuItems', newItemPosition: 'before'}),

    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'subMenu',
      type: 'object',
      title: 'Submenu',
      fields: [
        {
          name: 'subMenuItem',
          type: 'array',
          title: 'Submenu Item',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                },
                {
                  name: 'link',
                  type: 'string',
                  title: 'Link',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
