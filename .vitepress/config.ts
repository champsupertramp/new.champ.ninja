import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Champ.Ninja",
  description: "Laravel & WordPress development tutorials and more.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'About', link: '/about-champ-camba' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Tutorials',
        items: [
          { text: 'Ultimate Member', link: '/blogs/ultimate-member/' },
          { text: 'Laravel', link: '/blogs/laravel/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/champsupertramp' }
    ]
  }
})
