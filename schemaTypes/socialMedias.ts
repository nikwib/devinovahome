export default {
    name: 'socialMedias',
    type: 'object',
    fields: [
      {
        name: 'label',
        type: 'string',
        title: 'Label',
        options: {
            list: [
                {title: 'Facebook', value: 'FB'},
                {title: 'Instagram', value: 'IG'},
                {title: 'X', value: 'X'},
                {title: 'Youtube', value: 'YTB'},
                {title: 'Pintrest', value: 'PIN'},
                {title: 'TikTok', value: 'TT'},
                {title: 'SnapChat', value: 'SNAP'},
                {title: 'Github', value: 'GH'},
                
            ]
        }
      },
      {
        name: 'url',
        type: 'string',
        title: 'Url',
      }
    ],
  }
  