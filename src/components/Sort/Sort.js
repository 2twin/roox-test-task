import styles from './Sort.module.scss'

export const Sort = () => {
  return (
    <div className={styles.sort}>
      <p>Сортировка</p>
      <button>По городу</button>
      <button>По компании</button>
    </div>
  )
}