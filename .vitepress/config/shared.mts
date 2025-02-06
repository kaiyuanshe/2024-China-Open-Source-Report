import { defineConfig } from 'vitepress';

const deploymentEnvironment = process.env.VITE_DEPLOYMENT_ENVIRONMENT;

export const shared = defineConfig({
  lastUpdated: true,

  base: deploymentEnvironment === 'gitee' ? '/2024-china-open-source-report/' : deploymentEnvironment === 'vercel' ? '' : '/2024-China-Open-Source-Report/',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/image/China-Open-Source-Report.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/2024-China-Open-Source-Report/image/China-Open-Source-Report.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-7CSQ2KPB1F' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7CSQ2KPB1F');`
    ]
  ],

  themeConfig: {
    logo: '/image/China-Open-Source-Report.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaiyuanshe/2024-China-Open-Source-Report' },
      {
        icon: {
          svg:
            `<?xml version="1.0" encoding="UTF-8"?><svg id="_图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 248.7 143.1"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#251714;}</style><linearGradient id="linear-gradient" x1="135.9" y1="69.1" x2="112" y2="14.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0080ff"/><stop offset="1" stop-color="#00ebff"/></linearGradient></defs><path class="cls-1" d="m162.4,23.2c3,5.9,4.7,12.5,4.7,19.6s-.1,4-.4,6c-9.3-5.5-19.3-9-29.6-10.6l-6.2-14.9h31.5Zm-45.1,14.2c2.3-.2,4.7-.3,7-.3,2.4,0,4.7.1,7,.3l-3.9-12.3c-.5-1.4-1.8-2.1-3.1-2.1-1.3,0-2.6.7-3.1,2.1l-3.9,12.3h0Zm-31-14.2h31.5l-6.2,14.9c-10.3,1.6-20.3,5.2-29.6,10.6-.3-2-.4-4-.4-6,0-7,1.7-13.7,4.7-19.6h0Zm77.9,35.2c-7.5-7.9-16.2-13.2-25.3-16l12,28.9c1.1,2.6,2.5,2.9,4.2,1.2,3.9-4,7-8.8,9.1-14.1h0Zm-79.7,0c2.1,5.3,5.2,10.1,9.1,14.1,1.7,1.7,3.1,1.4,4.2-1.2l12-28.9c-9.1,2.8-17.8,8.1-25.3,16h0Zm60.6,21.8l-12.6-39.3c-2.7-.5-5.4-.7-8.2-.7-2.7,0-5.5.3-8.2.7l-12.6,39.3c6.2,3.4,13.2,5.4,20.8,5.4s14.6-1.9,20.8-5.4h0ZM124.3,0c13.7,0,25.8,6.4,33.7,16.4-10.9,2.6-22.2,3.9-33.7,3.9s-22.7-1.3-33.7-3.9C98.5,6.4,110.7,0,124.3,0Z"/><path class="cls-2" d="m27.6,102.9h5.2l-1.1-3.5h3.3l1.1,3.5h4.2v2.2h-7.2v2.7h6v14.3c0,.9-.7,1.6-1.6,1.6h-4.3v-2.2h2.6v-11.5h-2.8v1.5c0,4-.6,9.2-2.9,12.2h-3c2.2-4.1,2.6-8,2.6-11.9v-6.8h-2.2v-2.2h0Zm-26.7-3.1h22.8v2.2h-3.6v8.5h4.4v2.2h-4.4v11.1h-3.3v-11.1h-8.4c-.2,3.7-1.3,7.9-4.3,11.1H.4c3.1-3.2,4.5-7.2,4.7-11.1H0v-2.2h5.1v-8.5H.9v-2.2h0Zm16,2.2h-8.4v8.5h8.4v-8.5h0Zm213.8,0c-.8,2.8-2.1,5.2-3.8,7.2h-3.1c1.8-2.6,3.3-5.4,4.1-9.4h16.8c.8,4,2.3,6.7,4.1,9.4h-3.1c-1.8-2-3.1-4.4-3.8-7.2h-11.1Zm-.2,19.6h11.8l-1.6-4.3h3.4l2.4,6.5h-20.5l3.7-9.1h-3.9v-2.2h20.9v2.2h-13.4l-2.8,6.9h0Zm-1.5-14.6v2.2h14.5v-2.2h-14.5Zm-26.3-5c-.8,2.8-2.1,5.2-3.8,7.2h-3.1c1.8-2.6,3.3-5.4,4.1-9.4h16.8c.8,4,2.3,6.7,4.1,9.4h-3.1c-1.8-2-3.1-4.4-3.8-7.2h-11.1Zm14.9,14.6h-3.4l-1.7,5h-2.6v-6.9h8.8v-2.2h-8.8v-3.3h5.6v-2.2h-14.5v2.2h5.6v3.3h-8.8v2.2h8.8v6.9h-2.6l-1.7-5h-3.4l1.7,5h-4.6v2.2h24.5v-2.2h-4.6l1.7-5h0Zm-48.7-15.6h2.5v-1.6h3.3v1.6h11.2v-1.6h3.3v1.6h2.5v2.2h-2.5v9.3h3.4v2.2h-3.4c.6,1.8,1.4,3.4,2.8,5.3h-3.1c-1.4-1.4-2.4-3.4-3-5.3h-3.9v2h4v2.2h-4v2.6h10.6v2.2h-24.5v-2.2h10.6v-2.6h-4v-2.2h4v-2h-3.9c-.6,2-1.6,3.9-3,5.3h-3.1c1.4-1.9,2.3-3.5,2.8-5.3h-3.4v-2.2h3.4v-9.3h-2.5v-2.2h0Zm5.8,7.7h10.2v2.2h-10.2v1.7h11.2v-9.3h-11.2v1.7h10.2v2.2h-10.2v1.7h0Zm-28.1-8.8h18.6v2.2h-6.3l-.6,2.5h5.8v8.6c0,.9-.7,1.6-1.6,1.6h-3.2v7.4c0,.9-.7,1.6-1.6,1.6h-2.9v-2.2h1.3v-6.9h-4.8v-10.2h3.6l.6-2.5h-5.6v9.8c0,4-.5,8.9-2.3,12h-3c1.8-4,2-7.9,2-11.7v-12.3h0Zm-6.6,5.3l1.4,3.7h3.3l-1.4-3.7h-3.3Zm0-5.3l1.4,3.7h3.3l-1.4-3.7h-3.3Zm4.6,10.7h-3.3c0,5.4-.6,8.8-2.2,13.3h3.2c1.5-3.4,2.3-8,2.3-13.3h0Zm15.7,6c.1,2.6.7,5.4,2.1,7.3h3c-1.4-2.5-1.8-4.6-1.9-7.3h-3.2Zm-5.5,0h-3.2c-.1,2.7-.5,4.8-1.9,7.3h3c1.4-1.9,2-4.7,2.1-7.3h0Zm-.3-8h5.3v2.2h-5.3v1.8h6.3v-5.9h-6.3v1.8h0Zm-41.7-8.7h22.8v2.2h-3.6v8.5h4.4v2.2h-4.4v11.1h-3.3v-11.1h-8.4c-.2,3.7-1.3,7.9-4.3,11.1h-3.7c3.1-3.2,4.5-7.2,4.7-11.1h-5.1v-2.2h5.1v-8.5h-4.3v-2.2h0Zm16,2.2h-8.4v8.5h8.4v-8.5h0Zm-43.9-2.2h22.8v2.2l-8.8,6.8v1.7h9.6v2.2h-9.6v9.4c0,.9-.7,1.6-1.6,1.6h-8.1v-2.2h6.4v-8.9h-11.6v-2.2h11.6v-3.1l6.9-5.4h-17.7v-2.2h0Zm-27.2,0h23.3v2.2h-8.2l-.7,2.5h7.9v8.6c0,.9-.7,1.6-1.6,1.6h-5.3v7.4c0,.9-.7,1.6-1.6,1.6h-4v-2.2h2.3v-6.9h-6.9v-10.2h5.7l.7-2.5h-8.4v9.8c0,4-.5,8.9-2.3,12h-3c1.8-4,2-7.9,2-11.7v-12.3h0Zm17.8,16.6c.2,2.6.8,5.5,2.3,7.3h3.2c-1.5-2.5-2-4.6-2.2-7.3h-3.3Zm-8.5,0h-3.3c-.2,2.7-.7,4.8-2.2,7.3h3.2c1.5-1.9,2.1-4.7,2.3-7.3h0Zm-.8-8h9.2v2.2h-9.2v1.8h10.5v-5.9h-10.5v1.8h0Zm-17,15.3h4.3c-2.1-2-3.8-4-5-6,2.1-3.6,3.2-7.6,3.4-12.7h1.3v-2.2h-7.7c.2-1.2.3-2.4.3-3.5h-3.4c-.1,4-.6,6.8-2.3,10.7h2.1c.5,2.6,1.3,5.3,2.7,7.7-1.4,2.3-3.1,4.2-5,6h3.9c1.1-1,2-2.1,2.8-3.2.8,1.1,1.7,2.1,2.7,3.2h0Zm-4.6-17c.2-.5.3-1.1.4-1.6h3.5c-.3,3.5-.9,6.5-2,9.1-1-2.3-1.6-4.8-1.9-7.5h0ZM6,143.1c-1.2,0-2.2-.2-3.1-.7-.9-.5-1.6-1.1-2.1-2-.5-.9-.8-1.8-.8-2.9s.3-2.1.8-2.9c.5-.9,1.2-1.5,2.1-2,.9-.5,2-.7,3.1-.7s2.2.2,3.1.7,1.6,1.1,2.1,2c.5.9.8,1.8.8,2.9s-.3,2.1-.8,2.9c-.5.9-1.2,1.5-2.1,2-.9.5-2,.7-3.1.7h0Zm0-1.7c.7,0,1.3-.2,1.9-.5.5-.3,1-.8,1.3-1.4.3-.6.4-1.3.4-2.1s-.1-1.5-.4-2.1c-.3-.6-.7-1.1-1.3-1.4-.5-.3-1.2-.5-1.9-.5s-1.3.2-1.8.5c-.5.3-1,.8-1.3,1.4-.3.6-.4,1.3-.4,2.1s.1,1.5.4,2.1c.3.6.7,1.1,1.3,1.4.5.3,1.2.5,1.8.5h0Zm18.5-5.9c0,.7-.2,1.3-.5,1.9-.4.5-.9,1-1.5,1.3-.7.3-1.4.4-2.3.4h-2.3v3.8h-2.5v-10.9h4.8c.9,0,1.6.1,2.3.4.7.3,1.2.7,1.5,1.3.4.5.5,1.2.5,1.9h0Zm-2.5,0c0-.6-.2-1.1-.6-1.4-.4-.3-1-.5-1.8-.5h-1.8v3.9h1.8c.8,0,1.4-.2,1.8-.5.4-.3.6-.8.6-1.4h0Zm8.1-1.8v2.6h5.3v1.7h-5.3v3.1h5.6v1.7h-8.1v-10.9h8.1v1.7h-5.6Zm19.9-1.7v10.9h-2.3l-6.2-7.6v7.6h-2.3v-10.9h2.6l5.8,7.2v-7.2h2.2Zm11,8.1h-4.7l-1,2.8h-2.5l4.4-10.9h3.1l4.4,10.9h-2.7l-1-2.8h0Zm-.6-1.7l-1.7-4.7-1.7,4.7h3.4Zm15.4-4.7h-3.5v9.2h-2.5v-9.2h-3.5v-1.7h9.5v1.7h0Zm8.3,9.4c-1.2,0-2.2-.2-3.1-.7-.9-.5-1.6-1.1-2.1-2-.5-.9-.8-1.8-.8-2.9s.3-2.1.8-2.9c.5-.9,1.2-1.5,2.1-2,.9-.5,2-.7,3.1-.7s2.2.2,3.1.7c.9.5,1.6,1.1,2.1,2,.5.9.8,1.8.8,2.9s-.3,2.1-.8,2.9c-.5.9-1.2,1.5-2.1,2-.9.5-2,.7-3.1.7h0Zm0-1.7c.7,0,1.3-.2,1.8-.5.5-.3,1-.8,1.3-1.4.3-.6.4-1.3.4-2.1s-.1-1.5-.4-2.1c-.3-.6-.7-1.1-1.3-1.4-.5-.3-1.2-.5-1.8-.5s-1.3.2-1.8.5-1,.8-1.3,1.4c-.3.6-.4,1.3-.4,2.1s.1,1.5.4,2.1c.3.6.7,1.1,1.3,1.4.5.3,1.1.5,1.8.5h0Zm23.1,1.5h-2.5v-8.1l-3.2,8.1h-2.7l-3.2-8.1v8.1h-2.3v-10.9h3.5l3.3,8.6,3.3-8.6h3.6v10.9h0Zm15.6-9.2v2.7h5.1v1.7h-5.1v4.7h-2.5v-10.9h8v1.7h-5.5Zm14.4,9.4c-1.2,0-2.2-.2-3.1-.7-.9-.5-1.6-1.1-2.1-2-.5-.9-.8-1.8-.8-2.9s.3-2.1.8-2.9c.5-.9,1.2-1.5,2.1-2,.9-.5,2-.7,3.1-.7s2.2.2,3.1.7c.9.5,1.6,1.1,2.1,2,.5.9.8,1.8.8,2.9s-.3,2.1-.8,2.9c-.5.9-1.2,1.5-2.1,2-.9.5-2,.7-3.1.7h0Zm0-1.7c.7,0,1.3-.2,1.8-.5.5-.3,1-.8,1.3-1.4.3-.6.4-1.3.4-2.1s-.1-1.5-.4-2.1c-.3-.6-.7-1.1-1.3-1.4s-1.2-.5-1.8-.5-1.3.2-1.8.5c-.5.3-1,.8-1.3,1.4-.3.6-.4,1.3-.4,2.1s.1,1.5.4,2.1c.3.6.7,1.1,1.3,1.4.5.3,1.2.5,1.8.5h0Zm14.6,1.7c-1.1,0-2-.2-2.8-.5-.8-.3-1.4-.8-1.9-1.4-.4-.6-.7-1.4-.7-2.2v-7h2.3v6.8c0,.9.3,1.5.8,1.9.5.4,1.2.7,2.2.7s1.7-.2,2.2-.7c.5-.4.7-1.1.7-1.9v-6.8h2.5v7c0,.8-.2,1.6-.7,2.2-.4.6-1.1,1.1-1.9,1.4-.8.3-1.7.5-2.8.5h0Zm19.7-11.1v10.9h-2.3l-6.2-7.6v7.6h-2.3v-10.9h2.6l5.8,7.2v-7.2h2.2Zm14.6,5.5c0,1.1-.2,2.1-.7,2.9-.5.8-1.2,1.5-2,1.9-.9.4-1.9.7-3.1.7h-5.1v-10.9h5.1c1.2,0,2.2.2,3.1.7.9.5,1.6,1.1,2,1.9.5.8.7,1.8.7,2.9h0Zm-2.5,0c0-1.1-.3-2-1-2.7-.7-.7-1.6-1-2.8-1h-2.1v7.5h2.1c1.2,0,2.2-.3,2.8-1,.7-.7,1-1.6,1-2.7h0Zm12.8,2.7h-4.7l-1,2.8h-2.5l4.4-10.9h3.1l4.4,10.9h-2.7l-1-2.8h0Zm-.6-1.7l-1.7-4.7-1.7,4.7h3.4Zm15.4-4.7h-3.5v9.2h-2.5v-9.2h-3.5v-1.7h9.5v1.7h0Zm5.7-1.7v10.9h-2.5v-10.9h2.5Zm9.5,11.1c-1.2,0-2.2-.2-3.1-.7-.9-.5-1.6-1.1-2.1-2-.5-.9-.8-1.8-.8-2.9s.3-2.1.8-2.9c.5-.9,1.2-1.5,2.1-2,.9-.5,2-.7,3.1-.7s2.2.2,3.1.7c.9.5,1.6,1.1,2.1,2,.5.9.8,1.8.8,2.9s-.3,2.1-.8,2.9c-.5.9-1.2,1.5-2.1,2-.9.5-2,.7-3.1.7h0Zm0-1.7c.7,0,1.3-.2,1.8-.5.5-.3,1-.8,1.3-1.4.3-.6.4-1.3.4-2.1s-.1-1.5-.4-2.1c-.3-.6-.7-1.1-1.3-1.4-.5-.3-1.2-.5-1.8-.5s-1.3.2-1.8.5c-.5.3-1,.8-1.3,1.4-.3.6-.4,1.3-.4,2.1s.2,1.5.4,2.1c.3.6.7,1.1,1.3,1.4.5.3,1.2.5,1.8.5h0Zm20.1-9.4v10.9h-2.3l-6.2-7.6v7.6h-2.3v-10.9h2.6l5.8,7.2v-7.2h2.2Z"/></svg>`
        }, link: 'https://atomgit.com/kaiyuanshe/2024-China-Open-Source-Report'
      },
      // {
      //   icon: {
      //     svg:
      //       `<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c71d23" r="16"/><path d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z" fill="#fff"/></g></svg>`
      //   },
      //   link: 'https://gitee.com/kaiyuanshe/2024-China-Open-Source-Report'
      // }
    ],

    search: {
      provider: 'local'
    },

    externalLinkIcon: true,
  }
})
