interface App {
  title: string
  category: string
  description: string
  imgSrc?: string
  href?: string
}

const appsData: App[] = [
  {
    title: 'Notion',
    category: 'tech',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://www.notion.so',
  },
  {
    title: 'Slack',
    category: 'tech',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://slack.com',
  },
  {
    title: 'GitHub',
    category: 'tech',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://github.com',
  },
  {
    title: 'Trello',
    category: 'life',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://trello.com',
  },
]

export default appsData
