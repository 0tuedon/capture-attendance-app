/* eslint-disable react/prop-types */
import React from 'react'

const Input = (props) => {
  const inputChange = (e) => {
    const { value, name } = e.target
    props?.onChange(value)
    props?.addUser(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const { user } = props
  return (
        <>
            <div className='mb-4' key={user.id}>
                <label htmlFor={user.id}></label>
                <input className='shadow appearance-none border rounded w-full py-2
                      px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                    id={user.id}
                    value={props.value}
                    onChange={inputChange}
                    type={user.type} placeholder={user.placeholder} name={user.name} />
            </div>
        </>
  )
}

export default Input
