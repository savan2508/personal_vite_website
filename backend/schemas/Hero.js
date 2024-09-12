export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'titles',
      title: 'Titles',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'cellPhone',
      title: 'Cell Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'factsDescription',
      title: 'Facts Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'skillsDescription',
      title: 'Skills Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
