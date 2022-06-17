import React from 'react';
import { useState } from 'react';
import bgImg from './assets/Photo.png';

import styles from './Card.module.css'

const Card = () => {
  
  const [style, setStyle] = useState(styles.contentCard)
  const [restangleStyle, setRestangleStyle] = useState(styles.restangle)
  const [nettoStyle, setNettoStyle] = useState(styles.nettoTitle)
  const [saleTitle, setSaleTitle] = useState('Чего сидишь? Порадуй котэ,')
  const [sale, setSale] = useState('купи.')
  
  const clickHandler = () => {
    
    if(style === styles.contentCard) {
    setStyle(styles.contentCardActive)
    setRestangleStyle(styles.restangleActive)
    setNettoStyle(styles.nettoTitleActive)
    setSaleTitle('Печень утки разварная с артишоками.')
    setSale('')
    }

  }
  
  const mouseHandler = () => {
    setStyle(styles.contentCard)
    setRestangleStyle(styles.restangle)
    setNettoStyle(styles.nettoTitle)
    setSaleTitle('Чего сидишь? Порадуй котэ,')
    setSale('купи.')
  }

  return (
    <div className={styles.card}>
      <div onMouseLeave={mouseHandler} onClick={clickHandler} className={style}>
        <span className={restangleStyle}></span>
        <div className={styles.cardContent}>
          <p className={styles.supTitle}>Сказочное заморское яство</p>
          <h2 className={styles.cardTitle}>Нямушка <span>с фуа-гра</span></h2>
          <p className={styles.subTitle}>10 порций <br/> мышь в подарок</p>
        </div>
        <img className={styles.bgImg} src={bgImg} alt="Cat" />
        <div className={nettoStyle}>0,5 <span>кг</span></div>
      </div>
      <p className={styles.cardSubtitle}>{saleTitle} <span onClick={clickHandler}>{sale}</span></p>
    </div>
  )
}

export default Card;