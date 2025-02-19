import { genPageMetadata } from 'app/seo'
import LabelSwitcher from 'app/tools/client'

export const metadata = genPageMetadata({ title: 'Tools' })

export default function ToolsPage() {
  return <LabelSwitcher />
}
