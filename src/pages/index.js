import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/Buttons'
const Home = () => {
  const navigate = useNavigate()
  const onClickPath = (path) => {
    navigate(path)
  }
  return (
        <div className='flex flex-col justify-between items-center gap-y-4'>
          <h2 className='text-lg font-semibold'>Admin Page</h2>
          <Button onClick={() => { onClickPath('/admin/manufacturer/create') }} class="w-2/4" text="Create a Manufacturer" />
          <Button class="w-2/4" onClick={() => { onClickPath('/admin/manufacturer') }} text="See all Manufacturer" />
          <Button class="w-2/4" onClick={() => { onClickPath('/admin/verify') }} text="Verify a Product" />
          <Button class="w-2/4" onClick={() => { onClickPath('/user/products') } } text="See all Products" />
        </div>
  )
}

export default Home
