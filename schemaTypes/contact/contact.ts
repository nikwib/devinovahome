import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {Rule} from 'sanity'

export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'contact', newItemPosition: 'before'}),
    {
      name: 'label',
      type: 'string',
      title: 'Company Name',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-mail',
    },
    {
      name: 'address',
      type: 'array',
      title: 'Address',
      of: [
        {
          type: 'address',
        },
      ],
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'socialMedia',
      type: 'array',
      title: 'Social Medias',
      of: [
        {
          type: 'socialMedias',
        },
      ],
    },
  ],
}
