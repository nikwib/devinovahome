import {Rule} from 'sanity'

export default {
  name: 'address',
  type: 'object',
  title: 'Address',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      initialValue: 'standard',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Standard', value: 'standard'},
        ],
      },
    },
    {
      name: 'street',
      type: 'string',
      title: 'Street',
      validation: (rule: Rule) => rule.required().min(1).warning('must be more than one character'),
    },
    {
      name: 'zipCode',
      type: 'string',
      title: 'Zip Code',
      validation: (rule: Rule) => rule.required().min(1).warning('must be more than one character'),
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: (rule: Rule) => rule.required().min(1).warning('must be more than one character'),
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      validation: (rule: Rule) => rule.min(1).warning('must be more than one character'),
    },
  ],
}
