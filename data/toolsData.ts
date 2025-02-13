interface Tool {
  title: string
  category: string
  description: string
  imgSrc?: string
  href?: string
}

const toolsData: Tool[] = [
  {
    title: 'Notion',
    category: 'iOS',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://www.notion.so',
  },
  {
    title: 'Slack',
    category: 'macOS',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://slack.com',
  },
  {
    title: 'GitHub',
    category: 'macOS',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://github.com',
  },
  {
    title: 'Trello',
    category: 'Web',
    description: `Automatically track your sleep from your Apple Watch.`,
    imgSrc: 'https://www.notion.so/images/favicon.ico',
    href: 'https://trello.com',
  },
]

export default toolsData
