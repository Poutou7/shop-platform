import React from 'react'

const TD = ({ txt }) => {
  return (
    <tr>
      <td className='text'>{txt}</td>
      <td>
        <i className="fa-solid fa-circle-xmark xmark"></i>
      </td>
      <td>
        <i className="fa-solid fa-circle-xmark xmark"></i>
      </td>
      <td>
        <i className="fa-solid fa-circle-check check"></i>
      </td>
    </tr>
  )
}

export default TD
