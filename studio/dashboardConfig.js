export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6113567dc57f50653f1a5aa7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-0-studio',
                  apiId: 'a5e5db90-1957-4528-87a3-513b516b5b9b'
                },
                {
                  buildHookId: '6113567da44cff72ac33a10e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-0',
                  apiId: 'ecd00f09-b076-4e88-a939-0052ec905622'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gayathiri00/sanity-kitchen-sink0',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-0.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
