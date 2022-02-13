// import { useEffect, useState, useRef } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { ToastContainer, toast } from 'react-toastify'
import Header from '../../components/Board/Header/Header'
// import Loader from '../../utils/Loader'
import item from '../../utils/output_file.jsx'

import 'react-toastify/dist/ReactToastify.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './Products.module.scss'
// console.log(item)
const Products = () => {
  return (
    <div className={s.products}>
      <Header title="Products" />
      <ul className={s.products__list}>
        {item.item.map((item) => {
          return (
            <li key={item.id} className={s.products__list__item}>
              <Card
                // style={{ width: '18rem' }}
                className={s.products__list__card}
              >
                <Card.Img
                  variant="top"
                  src={item.image_link}
                  className={s.products__list__img}
                />
                <Card.Body>
                  <Card.Title> {item.title}</Card.Title>
                  <Card.Text>
                    <>
                      Цена: <b>{item.price}</b>
                    </>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem></ListGroupItem>
                  <ListGroupItem>{item.description}</ListGroupItem>
                  <ListGroupItem>
                    <p>Размер:</p> {item.size}
                  </ListGroupItem>
                  <ListGroupItem>
                    <p>Бренд:</p> {item.brand}
                  </ListGroupItem>
                  <ListGroupItem>
                    <p>Цвет:</p> {item.color}
                  </ListGroupItem>
                </ListGroup>
                {/* <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products
