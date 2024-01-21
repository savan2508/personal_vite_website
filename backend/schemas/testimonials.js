export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
