export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string', // Overall title for the skills document
    },
    {
      name: 'skillsSections',
      title: 'Skills Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string', // e.g., "Frontend Development"
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{type: 'block'}], // Rich text for bullet points or explanation
            },
          ],
        },
      ],
    },
    {
      name: 'skillsIcons',
      title: 'Skills Icons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'bgColor',
              title: 'BgColor',
              type: 'string',
            },
            {
              name: `icon_url`,
              title: `Icon URL`,
              type: `url`,
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
