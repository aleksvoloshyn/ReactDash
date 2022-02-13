import { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import Header from '../../components/Board/Header/Header'
import Loader from '../../utils/Loader'
import item from '../../utils/output_file.jsx'

import 'react-toastify/dist/ReactToastify.css'
import { Form, InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './Products.module.scss'
console.log(item)
const Products = () => {
  return (
    <div className={s.products}>
      <Header title="Products" />
      <ul className={s.products__list}>
        {item.item.map((item) => {
          return (
            <li key={item.id} className={s.products__list__item}>
              <img
                src={item.image_link}
                alt={item.title}
                width="260px"
                className={s.products__list__img}
              />
              <p className={s.products__list_descr}>Название: </p>
              {item.title}
              <p className={s.products__list_descr}>Описание:</p>{' '}
              {item.description}
              <p className={s.products__list_descr}>Размер:</p> {item.size}
              <p className={s.products__list_descr}>Бренд: </p>
              {item.brand}
              <p className={s.products__list_descr}>Цвет: </p>
              {item.color}
              <p className={s.products__list_descr}>Цена: </p>
              {item.price}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products
