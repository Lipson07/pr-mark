import React from 'react'
import korz from "../../../Styles/Korzina.module.scss"
import { sumka } from '../../../Assets/Main'
const Korzina = () => {
  return (
    <div className={korz.korzina}>   <div className={korz.content}>
            <img src={sumka} />
            <h1>В корзине пока ничего нет</h1>
            <div>
            <p>Загляните на главную,</p>
         
             
              <p>там много товаров которые могут вам приглянуться</p>
          
              </div>
          </div></div>

  )
}

export default Korzina