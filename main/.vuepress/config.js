// .vuepress/config.js
module.exports = {
    title: 'Atrist',
    // 编译输出位置
    dest: './docs',
    base: '/blogVue/',
    // blog主题
    theme: '@vuepress/theme-blog',
    markdown: {
        // 代码显示 行号
        lineNumbers: true,
        // 设置 标题栏的配置
    },
    themeConfig: {
        // 启用平滑滚动
        smoothScroll: true,
        nav: [{
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            }, {
                text: 'Github',
                link: 'https://github.com/Atrist'
            }
        ],
        footer: {
            contact: [{
                type: 'github',
                link: 'https://github.com/Atrist',
            }],
            copyright: [{
                text: 'MIT Licensed | Copyright © 2018-present',
                link: '',
            }],
        },
        globalPagination: {
            prevText: '上一页', // Text for previous links.
            nextText: '下一页', // Text for next links.
            lengthPerPage: '5', // Maximum number of posts per page.
            layout: 'Pagination', // Layout for pagination page
        }


    },

}