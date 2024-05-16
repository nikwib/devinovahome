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
                {title: 'Facebook', value: 'FaFacebook'},
                {title: 'Instagram', value: 'FaInstagram'},
                {title: 'X', value: 'FaXTwitter'},
                {title: 'Youtube', value: 'FaYoutube'},
                {title: 'Pintrest', value: 'FaPinterest'},
                {title: 'TikTok', value: 'FaTiktok'},
                {title: 'SnapChat', value: 'FaSnapchat'},
                {title: 'Github', value: 'FaGithub'},
                
            ]
        }
      },
      {
        name: 'url',
        type: 'string',
        title: 'Url',
      },
      {
        name: 'icon',
        type: 'string',
        title: 'icon',
      }
    ],
  }
  