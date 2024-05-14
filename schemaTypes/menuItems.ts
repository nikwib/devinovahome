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
      name: 'subMenuItem',
      type: 'subMenuItem',
      title: 'subMenuItem',
    },
  ],
}
