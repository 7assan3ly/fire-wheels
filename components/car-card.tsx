'use client'
import { useState } from "react"
import { carProps } from "@/interfaces"
import { calculateCarRent, getCarImg } from "@/utils"
import Image from "next/image"
import { CarDetails, CustomBtn } from "."

interface carCardProps {
    car: carProps
}


const CarCard = ({car}: carCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car
    
    const carRent = calculateCarRent(city_mpg, year)

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div
        key={make+model+year}
        className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] p-6 bg-[var(--softBg)] rounded-lg shadow-md flex flex-col gap-4"
    >
        {/* CAR MAKE AND MODEL */}
        <p className="font-bold capitalize">
            {make} {model}
        </p>

        {/* CAR RENT PER DAY */}
        <div className="flex">
            <p className="text-[var(--softTextColor)] text-sm self-start">$</p>
            <p className="text-3xl font-bold">{carRent}</p>
            <p className="text-[var(--softTextColor)] text-sm self-end">/day</p>
        </div>

        {/* CAR IAMGE */}
        <div className="w-full mx-4 h-40 relative">
            <Image
                src={getCarImg(car)}
                fill
                alt={make + model + 'Image'}
                className="object-contain"
            />
        </div>

        {/* ANOTHER CAR INFORMATION */}
        <div className="flex items-center justify-between">
            {/* AUTO OR MANUAL */}
            <div className="flex flex-col items-center gap-2">
                <Image
                    src='/steering-wheel.svg'
                    width={20}
                    height={20}
                    alt='steering wheel'
                />
                <p className="text-[var(--softTextColor)] font-light text-sm">
                    {transmission === 'a' ? 'Automatic' : 'Manual'}
                </p>
            </div>

            {/* FWD */}
            <div className="flex flex-col items-center gap-2">
                <Image
                    src='/tire.svg'
                    width={20}
                    height={20}
                    alt='tire'
                />
                <p className="text-[var(--softTextColor)] font-light text-sm">
                    {drive.toUpperCase()}
                </p>
            </div>

            {/* MPG */}
            <div className="flex flex-col items-center gap-2">
                <Image
                    src='/gas.svg'
                    width={20}
                    height={20}
                    alt='gas'
                />
                <p className="text-[var(--softTextColor)] font-light text-sm">
                    {city_mpg} MPG
                </p>
            </div>
        </div>

        {/* CAR DETAILS MODAL BUTTON */}
        <CustomBtn
            title='Show Details'
            type='button'
            handleClick= {() => setIsOpen(true)}
            customStyles = 'w-auto'
        />

        {/* CALL CARD DETAILS MODAL IF ISOPEN STATE IS TRUE */}
        {isOpen && (
            <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
        )}
    </div>
  )
}

export default CarCard