import { CustomBtnProps } from '@/interfaces'
import React from 'react'

const customBtn = ({title, type, handleClick, customStyles} : CustomBtnProps) => {
  return (
    <button
        className={`px-4 py-2 text-md lg:text-lg border-lg bg-red-950 text-white rounded-lg transition hover:bg-red-900 ${customStyles}`}
        type={type || 'button'}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default customBtn