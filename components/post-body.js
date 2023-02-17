import styles from 'styles/post-body.module.css'

export default function PostBody({ children}) {
  return (
    <div classNeme={styles.stack}>
       {children}
    </div>
  )
}
