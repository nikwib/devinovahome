import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'sectionData',
  type: 'document',
  title: 'SectionData',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'sectionData', newItemPosition: 'before'}),

    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Hero', value: 'HeroSection'},
          {title: 'Text Image 1', value: 'TextImage1'},
          {title: 'Text Image 2', value: 'TextImage2'},
        ],
      },
    },
    {
      name: 'head',
      type: 'string',
      title: 'Head',
    },
    {
      name: 'subHeadAbove',
      type: 'string',
      title: 'SubHead Above',
    },
    {
      name: 'subHead',
      type: 'string',
      title: 'SubHead',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'buttonType',
      type: 'string',
      title: 'Button Type',
      options: {
        list: [
          {title: 'Arrow Button', value: 'ArrowBtn'},
          {title: 'Arrow Inside Circle Button', value: 'ArrowInCircleBtn'},
          {title: 'Open New Window Button', value: 'OpenNewWindowBtn'},
        ],
      },
    },
    {
      name: 'buttonIcon',
      type: 'string',
      title: 'Button Icon',
      options: {
        list: [
          {title: 'Arrow', value: 'FaLongArrowAltRight'},
          {title: 'Arrow Inside Circle', value: 'FaArrowAltCircleRight'},
          {title: 'Open', value: 'RxOpenInNewWindow'},
        ],
      },
    },
    {
      name: 'action',
      type: 'string',
      title: 'Action',
    },
  ],
}
