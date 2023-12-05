"use client";
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {mode, toggle} = useContext(ThemeContext)
  return (
    <div 
      className='w-10 h-5 rounded-[50px] cursor-pointer flex items-center justify-between relative' 
      onClick={toggle}
      style={
        mode === 'dark' ? { backgroundColor: '#fff' } : { backgroundColor: '#0f172a'}
      }
    >
      <Image src='/moon.png' alt='Theme Toggle' width={14} height={14} />
      <div 
        className='w-4 h-4 rounded-full absolute transition'
        style={
          mode === 'dark' ? { left: 1, backgroundColor: '#0f172a' } : {right: 1, backgroundColor: '#fff'}
        }
      />
      <Image src='/sun.png' alt='Theme Toggle' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle