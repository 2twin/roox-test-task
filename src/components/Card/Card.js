import styles from './Card.module.scss';

export const Card = ({onClick, id, name, address, company }) => {
  return (
  <div className={styles.card}>
    <div className={styles.userInfo}>
      <p><span>ФИО: </span> {name}</p>
      <p><span>Город: </span> {address.city}</p>
      <p><span>Компания: </span> {company.name}</p>
    </div>
    <div className={styles.about}>
      <p onClick={onClick}>Подробнее</p>
    </div>
  </div>
  )
}