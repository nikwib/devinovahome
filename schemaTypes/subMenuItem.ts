export default {
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
}
