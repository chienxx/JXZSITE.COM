interface Tool {
  title: string
  category: string
  description: string
  imgSrc?: string
  href?: string
  label?: string
}

const toolsData: Tool[] = [
  //ios
  {
    title: 'AutoSleep',
    category: 'iOS',
    label: 'SLEEP',
    description: 'Automatically track your sleep from your Apple Watch.',
    imgSrc: '/static/images/tools/ios/AutoSleep.png',
    href: 'https://autosleepapp.tantsissa.com/',
  },
  {
    title: 'Loon',
    category: 'iOS',
    label: 'NETWORK-PROXY',
    description: 'Powerful Network Toolbox for iOS & tvOS.',
    imgSrc: '/static/images/tools/ios/Loon.png',
    href: 'https://nsloon.app/',
  },
  {
    title: 'Spotify',
    category: 'iOS',
    label: 'STREAMING-MEDIA',
    description: 'Digital music service that gives you access to millions of songs.',
    imgSrc: '/static/images/tools/ios/Spotify.png',
    href: 'https://open.spotify.com/',
  },
  {
    title: 'To Do',
    category: 'iOS',
    label: 'TD-DO-REMINDER',
    description: 'To Do Keeps You Focused from Work to Play.',
    imgSrc: '/static/images/tools/ios/To Do.png',
    href: 'https://to-do.office.com/',
  },
  {
    title: 'Discord',
    category: 'iOS',
    label: 'SLEEP',
    description: '.',
    imgSrc: '/static/images/tools/ios/Discord.png',
    href: 'https://discord.com/',
  },
  {
    title: 'Authenticator',
    category: 'iOS',
    label: 'SLEEP',
    description: '',
    imgSrc: '/static/images/tools/ios/Authenticator.png',
    href: 'https://apps.apple.com/us/app/google-authenticator/id388497605',
  },
  {
    title: '趣动WillGo',
    category: 'iOS',
    label: 'SLEEP',
    description: '',
    imgSrc: '/static/images/tools/ios/趣动WillGo.png',
    href: 'https://www.qudonghealth.com/',
  },
  {
    title: 'zFrontier',
    category: 'iOS',
    label: 'SLEEP',
    description: '',
    imgSrc: '/static/images/tools/ios/zFrontier.png',
    href: 'https://www.zfrontier.com/',
  },

  //macos
  {
    title: 'Enpass',
    category: 'macOS',
    label: 'PASSWORD-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Enpass.png',
    href: 'https://www.enpass.io/',
  },
  {
    title: 'Snipaste',
    category: 'macOS',
    label: 'SCREENSHOT',
    description: '',
    imgSrc: '/static/images/tools/macos/Snipaste.png',
    href: 'https://www.snipaste.com/',
  },
  {
    title: 'Cursor',
    category: 'macOS',
    label: 'AI-CODE-EDITOR',
    description: '',
    imgSrc: '/static/images/tools/macos/Cursor.png',
    href: 'https://www.cursor.com/',
  },
  {
    title: 'TablePlus',
    category: 'macOS',
    label: 'DATABASE-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/TablePlus.png',
    href: 'https://tableplus.com/',
  },
  {
    title: 'Ghostty',
    category: 'macOS',
    label: 'TERMINAL-EMULATOR',
    description: '',
    imgSrc: '/static/images/tools/macos/Ghostty.png',
    href: 'https://ghostty.org/',
  },
  {
    title: 'Loop',
    category: 'macOS',
    label: 'WINDOW-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Loop.png',
    href: 'https://github.com/MrKai77/Loop',
  },
  {
    title: 'Flacbox',
    category: 'macOS',
    label: 'WINDOW-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Flacbox.png',
    href: 'https://www.everappz.com/flacbox',
  },
  {
    title: 'Stats',
    category: 'macOS',
    label: 'WINDOW-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Stats.png',
    href: 'https://github.com/exelban/stats',
  },
  {
    title: 'Telegram',
    category: 'macOS',
    label: 'WINDOW-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Telegram.png',
    href: 'https://telegram.org/',
  },
  {
    title: 'Termius',
    category: 'macOS',
    label: 'WINDOW-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Termius.png',
    href: 'https://termius.com/',
  },
  {
    title: 'Reqable',
    category: 'macOS',
    label: 'WINDOW-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Reqable.png',
    href: 'https://reqable.com/',
  },
  {
    title: 'Bob',
    category: 'macOS',
    label: 'WINDOW-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/macos/Bob.png',
    href: 'https://bobtranslate.com/',
  },

  //web
  {
    title: 'GitHub',
    category: 'Web',
    label: 'CODE-HOSTING',
    description: '',
    imgSrc: '/static/images/tools/web/Github.png',
    href: 'https://github.com/',
  },
  {
    title: 'Trzsz',
    category: 'Web',
    label: 'FILE-TRANSFER',
    description: '',
    imgSrc: '/static/images/tools/web/Trzsz.png',
    href: 'https://trzsz.github.io/',
  },
  {
    title: 'V2EX',
    category: 'Web',
    label: 'MAC-CHARGE-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/web/V2EX.png',
    href: 'https://www.v2ex.com/',
  },
  {
    title: 'NodeSeek',
    category: 'Web',
    label: 'MAC-CHARGE-MANAGEMENT',
    description: '',
    imgSrc: '/static/images/tools/web/NodeSeek.png',
    href: 'https://www.nodeseek.com/',
  },

]

export default toolsData
