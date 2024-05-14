import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'subMenu',
  type: 'object',
  title: 'Submenu',
  orderings: [orderRankOrdering],

  fields: [
    orderRankField({type: 'subMenu', newItemPosition: 'before'}),

    {
      name: 'subMenuItem',
      type: 'subMenuItem',
      title: 'Submenu Item',
    },
  ],
}
