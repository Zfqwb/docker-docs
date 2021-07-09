/* globals Docute */

new Docute({
  title: 'docker docs',
  target: '#docute',
  sourcePath: './docs/',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: '初识 Docker ',
          link: '/1'
        },
        {
          title: 'Docker 命令',
          link: '/2'
        },
        {
          title: 'Docker 容器数据卷',
          link: '/3'
        },
        {
          title: 'Dockerfile',
          link: '/4'
        },
        {
          title: 'Docker 应用部署',
          link: '/5'
        },
        {
          title: 'Docker 服务编排',
          link: '/6'
        },
        {
          title: 'Docker 私有仓库',
          link: '/7'
        },
        {
          title: 'test',
          link: 'https://cdn.jsdelivr.net/gh/Zfqwb/MySQL-RM@1.0/docs/README.md'
        }
      ]
    }
  ],
  layout: 'narrow'
});
