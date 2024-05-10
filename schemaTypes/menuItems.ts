export default {
  name: 'menuItems',
  type: 'document',
  title: 'Menu Items',
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
    {
      name: 'subMenu',
      type: 'object',
      title: 'Submenu',
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
}
