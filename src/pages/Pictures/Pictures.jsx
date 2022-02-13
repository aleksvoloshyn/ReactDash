import { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import Header from './../../components/Board/Header/Header'
import Loader from '../../utils/Loader'
import fetchPicturesWithQuery from '../../services/picturesApi'

import 'react-toastify/dist/ReactToastify.css'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import s from './Pictures.module.scss'

const Pictures = () => {
  const [pictures, setPictures] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchRequest, setSearchRequest] = useState('')
  const [page, setPage] = useState()

  const isFirstRun = useRef(true)
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    if (pictures.length === 0) {
      showMessage()
    }
  }, [pictures])

  const showMessage = () => {
    toast.error('По вашему запросу - НИЧЕГО НЕ НАЙДЕНО!')
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (!searchRequest) {
      toast.info('Ввдите данные в строку поиска')
      return
    }

    fetchPicturesWithQuery(searchRequest)
      .then(setPage(1))
      .then((data) => {
        setPictures(data)
      })

      .catch((error) => setError(error))
  }

  const loadMoreHandler = () => {
    setPage((prev) => prev + 1)

    fetchPicturesWithQuery(searchRequest, page)
      .then((data) => {
        setIsLoading(true)
        setPictures([...pictures, ...data])
        setIsLoading(false)
      })

      .catch((error) => setError(error))
  }

  const onChangeInput = (e) => {
    setSearchRequest(' ')
    setSearchRequest(e.target.value)
  }

  return (
    <div className={s.pictures}>
      <Header title={'Find pictures service'} />
      <Form onSubmit={onFormSubmit}>
        {' '}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type your request"
            aria-label="RType your request"
            aria-describedby="basic-addon2"
            onChange={onChangeInput}
            value={searchRequest}
          />
          <Button variant="outline-info" id="button-addon2" type="submit">
            Search
          </Button>
        </InputGroup>
        <ToastContainer />
      </Form>

      <div className={s.pictures}>
        <ul className={s.pictures__list}>
          {pictures.map((pic) => {
            return (
              <li key={uuidv4()} className={s.pictures__list__item}>
                <img
                  src={pic.previewURL}
                  alt={searchRequest}
                  className={s.pictures__list__image}
                />
              </li>
            )
          })}
        </ul>
      </div>
      {isLoading && <Loader />}
      {pictures.length > 0 && (
        <Button variant="danger" onClick={loadMoreHandler}>
          Load more
        </Button>
      )}
    </div>
  )
}

export default Pictures
