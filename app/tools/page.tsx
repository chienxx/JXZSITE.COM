import { genPageMetadata } from 'app/seo'
import LabelSwitcher from './client'

export const metadata = genPageMetadata({ title: 'Tools' })

export default function ToolsPage() {
  return <LabelSwitcher />
}
