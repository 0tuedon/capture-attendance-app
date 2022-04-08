/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Input from '../components/Input'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { LoginArray } from '../data/data'

const Login = () => {
  const navigate = useNavigate()
  const [pageNumber, setPageNumber] = useState(1)
  const [error, setError] = useState(false)
  const increase = (c) => {
    if (c === 0) {
      setPageNumber(prev => {
        if (prev >= 2) {
          setError(true)
          return prev
        } else {
          setError(false)
          return prev + 1
        }
      })
    } else {
      setPageNumber(prev => {
        if (prev <= 1) {
          setError(true)
          return 1
        } else {
          setError(false)
          return prev - 1
        }
      })
    }
  }
  const [product, setProduct] = useState({})

  const request = {
    productName: product.productName,
    productCategory: product.productCategory,
    productType: product.productType
  }
  const submitProduct = () => {
    console.log(request)
    axios.post('https://nafdac-backend.herokuapp.com/api/manufacturer/product', request)
      .then(res => {
        console.log(res)
        navigate('/user/products')
      })
      .catch(err => {
        console.error(err)
        navigate('/')
      })
  }
  const filteredArrayProduct = LoginArray.slice((pageNumber * 5) - 5, pageNumber * 5)
  console.log(product)
  return (
        <div>
            <div>
                <h1 className=' text-4xl sm:text-6xl font-semibold text-center'>Login</h1>
            </div>
            <section className='w-full mt-4 flex justify-center'>
                <div className='form-control w-full max-w-lg'>
                    <form className='bg-green-700 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                      {filteredArrayProduct.map(product => <Input onChange={() => {}} addUser={setProduct} key={product.key} user={product}/>)}
                      <div className='text-center text-gray-300 text-xl'>
                      </div>
                      <div className=' text-center mt-3'>
                          {pageNumber === 1 && <button onClick={submitProduct} 
                          className='bg-white hover:bg-gray-300 w-full active:bg-gray-700 text-green-700 
                          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                          type="button">Login </button>}
                      </div>
                    </form>
                </div>
            </section>
        </div>
  )
}

export default Login;
