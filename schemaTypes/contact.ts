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
      title: 'Name of Company',
      validation: (rule: Rule) => rule.required().min(1),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone number',
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-mail',
    },
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        {
          name: 'street',
          type: 'string',
          title: 'Street',
          validation: (rule: Rule) => rule.min(1).warning('must be more than one character'),
        },
        {
          name: 'zipCode',
          type: 'string',
          title: 'Zip Code',
          validation: (rule: Rule) => rule.min(1).warning('must be more than one character'),
        },
        {
          name: 'city',
          type: 'string',
          title: 'City',
          validation: (rule: Rule) => rule.min(1).warning('must be more than one character'),
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
