
'use client'
import { Fragment, useState } from "react"
import { SearchBrand } from "."
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
    const router = useRouter()
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [err, setErr] = useState(false)

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // if(brand.trim() === '' && model.trim() === '') {
      //   // setErr(true)
      //   alert('please select a brand or a model to excute your search process')
      // }

      updateSearchParams(model.toLowerCase(), brand.toLowerCase())
    }

    const updateSearchParams = (model:string, brand:string) => {
      const searchParams = new URLSearchParams(window.location.search)

      if(model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      if(brand) {
        searchParams.set('brand', brand)
      } else {
        searchParams.delete('brand')
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname, {scroll: false})
    }
  return (
    <form 
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex items-center relative">
          <SearchBrand
              brand={brand}
              setBrand={setBrand}
          />
          <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className='flex-1 max-sm:w-full flex items-center relative'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className={`w-full h-[48px] pl-12 p-4 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm`}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />

      <Transition appear show={err} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={()=>setErr(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                ERROR
              </Dialog.Title>

              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent
                  you an email with all of the details of your order.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={()=>setErr(false)}
                >
                  Got it, thanks!
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          </div>
        </div>
      </Dialog>
      </Transition>
    </form>
  )
}

export default SearchBar