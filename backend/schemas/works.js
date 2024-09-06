export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Higher numbers indicate more impressive projects',
      validation: (Rule) => Rule.required().min(1).max(1000),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'url',
    },
    {
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
    },
    {
      name: 'imgUrl',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1).error('At least one tag is required'),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
}
