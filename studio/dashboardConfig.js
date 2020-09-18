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
                  buildHookId: '5f64f52d13ac83107ae36550',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bg47da5i',
                  apiId: '767488f2-b20b-4f08-905b-f372601e81c1'
                },
                {
                  buildHookId: '5f64f52e9974e70e46dd4c3b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9ecq71hj',
                  apiId: 'a7f2b872-8868-4d60-8513-f0d98550129a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edgarnansen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9ecq71hj.netlify.app', category: 'apps'}
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
