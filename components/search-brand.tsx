'use client'

import { brandProps } from "@/interfaces"
import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { brands } from "@/constants"
import Image from "next/image"

const SearchBrand = ({brand, setBrand} : brandProps) => {
    const mode = localStorage.getItem("mode")
    const [query, setQuery] = useState('')

    const filteredBrands = 
        query === ''
            ? brands
            : brands.filter( (brand) => 
                brand.toLowerCase().replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
            )

  return (
    <div className="flex-1 max-sm:w-dull flex items-center">
        <Combobox value={brand} onChange={setBrand}>
            <div className="relative w-full">
                <Combobox.Button className='absolute top-[14px]'>
                    <Image
                        src='/car-logo.svg'
                        width={20}
                        height={20}
                        alt='car logo'
                        className="ml-4"
                    />
                </Combobox.Button>

                <Combobox.Input 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder='Volkswagen'
                    displayValue={(brand:string) => brand}
                    className='w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full outline-none cursor-pointer text-s'
                />

                <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className={`absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${mode === 'light' ? 'bg-gray-100' : 'bg-slate-900'}`}>
                        {filteredBrands.length === 0 && query !== '' ? (
                            <div className={`relative cursor-default select-none px-4 py-2 mt-1 rounded-full text-[var(--softTextColor)] ${mode === 'light' ? 'bg-gray-100' : 'bg-slate-900'}`}>
                                Nothing found.
                            </div>
                        ) : (
                            filteredBrands.map((brand) => (
                                <Combobox.Option
                                    key={brand} 
                                    value={brand}
                                    className={ ({active}) => 
                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 rounded-lg
                                        ${active ? 'bg-red-900 text-white' : `${mode === 'light' ? 'bg-gray-100' : 'bg-slate-900'}`}` 
                                    }
                                >
                                    {brand}
                                </Combobox.Option>
                            ))
                        )}
                        
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchBrand