export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'description', type: 'array', of: [{type: 'block'}]},
        {name: 'location', type: 'string', title: 'Location'},
        {name: 'phone', type: 'string', title: 'Phone'},
        {name: 'email', type: 'string', title: 'Email'},
      ],
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Degree Title'},
            {name: 'institution', type: 'string', title: 'Institution'},
            {name: 'location', type: 'string', title: 'Location'},
            {name: 'date', type: 'string', title: 'Date'},
          ],
        },
      ],
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Job Title'},
            {name: 'location', type: 'string', title: 'Location'},
            {name: 'company', type: 'string', title: 'Company'},
            {name: 'date', type: 'string', title: 'Date'},
            {name: 'details', type: 'array', of: [{type: 'block'}]},
          ],
        },
      ],
    },
  ],
}
