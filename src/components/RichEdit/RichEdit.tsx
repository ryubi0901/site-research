import clsx from 'clsx'

import styles from './RichEdit.module.css'

type Props = {
  body: string
  className?: string
}

const RichEdit = ({ body, className }: Props) => {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: microCMSからのHTMLをそのまま表示するため
  return <div className={clsx(styles.RichEdit, className)} dangerouslySetInnerHTML={{ __html: body }} />
}

export default RichEdit
