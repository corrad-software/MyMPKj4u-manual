import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MyMPKj4u",
  description: "Manual Pengguna MyMPKj4u",
  lang: 'ms-MY',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: 'https://mympkj4u.mpkj.gov.my/layout/images/mpkj4u.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    siteTitle: "MyMPKj4u",
    logo: "https://mympkj4u.mpkj.gov.my/layout/images/mpkj4u.png",
    
    // Navigation bar configuration
    nav: [
      { text: "Utama", link: "/" },
      { 
        text: "Manual Pengguna", 
        items: [
          {
            text: "Pengenalan",
            items: [
              { text: "Tentang MyMPKj4u", link: "/" },
              { text: "Panduan Permulaan", link: "/panduan-permulaan" },
            ]
          },
          {
            text: "Akaun Pengguna",
            items: [
              { text: "Pendaftaran Pengguna", link: "/pendaftaran-pengguna" },
              { text: "Pendaftaran Syarikat", link: "/pendaftaran-syarikat" },
              { text: "Log Masuk", link: "/log-masuk" },
              { text: "Tetapan Kata Laluan", link: "/tetapan-kata-laluan" },
            ]
          },
          {
            text: "Pengurusan Cukai",
            items: [
              { text: "Cukai Taksiran", link: "/cukai-taksiran" },
              { text: "Pembayaran Cukai", link: "/pembayaran-cukai" },
              { text: "Resit Cukai", link: "/resit-cukai" },
            ]
          },
          {
            text: "Laporan",
            items: [
              { text: "Penyata Akaun", link: "/laporan-penyata-akaun" },
              { text: "Cukai Taksiran", link: "/laporan-cukai-taksiran" },
            ]
          }
        ]
      },
      { text: "Hubungi Kami", link: "/hubungi-kami" },
    ],

    // Sidebar configuration
    sidebar: [
      {
        text: "Pengenalan",
        items: [
          { text: "Tentang MyMPKj4u", link: "/" },
          { text: "Panduan Permulaan", link: "/panduan-permulaan" },
        ]
      },
      {
        text: "Akaun Pengguna",
        collapsed: false,
        items: [
          { text: "Pendaftaran Pengguna", link: "/pendaftaran-pengguna" },
          { text: "Pendaftaran Syarikat", link: "/pendaftaran-syarikat" },
          { text: "Log Masuk", link: "/log-masuk" },
          { text: "Tetapan Kata Laluan", link: "/tetapan-kata-laluan" },
        ],
      },
      {
        text: "Pengurusan Cukai",
        collapsed: false,
        items: [
          { text: "Cukai Taksiran", link: "/cukai-taksiran" },
          { text: "Pembayaran Cukai", link: "/pembayaran-cukai" },
          { text: "Resit Cukai", link: "/resit-cukai" },
        ],
      },
      {
        text: "Laporan",
        collapsed: false,
        items: [
          { text: "Penyata Akaun", link: "/laporan-penyata-akaun" },
          { text: "Cukai Taksiran", link: "/laporan-cukai-taksiran" },
        ],
      },
      {
        text: "Bantuan",
        collapsed: false,
        items: [
          { text: "Hubungi Kami", link: "/hubungi-kami" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com/mpkajang' },
      { icon: 'twitter', link: 'https://twitter.com/mpkajang' },
    ],

    footer: {
      message: "Sistem MyMPKj4u",
      copyright: "© 2024 Majlis Perbandaran Kajang. Hak Cipta Terpelihara.",
    },

    // Additional UI text configurations
    lightModeSwitchTitle: "Mod Terang",
    darkModeSwitchTitle: "Mod Gelap",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Kembali ke Atas",
    
    lastUpdated: {
      text: "Dikemas kini pada",
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: 'Halaman Sebelumnya',
      next: 'Halaman Seterusnya'
    },

    outline: {
      level: [2, 3],
      label: 'Dalam Halaman Ini'
    },

    notFound: {
      title: "Halaman Tidak Ditemukan",
      quote: "Maaf, halaman yang anda cari tidak dapat ditemui.",
      linkLabel: "Kembali ke halaman utama",
      linkText: "Utama",
      code: "404",
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Cari',
            buttonAriaLabel: 'Cari'
          },
          modal: {
            noResultsText: 'Tiada hasil carian untuk',
            resetButtonTitle: 'Reset carian',
            footer: {
              selectText: 'untuk pilih',
              navigateText: 'untuk navigasi',
              closeText: 'untuk tutup'
            }
          }
        }
      }
    }
  },
});
