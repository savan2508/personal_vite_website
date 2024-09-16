export default {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'course_link',
      title: 'Course Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
