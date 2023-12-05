'use client'
import { carProps } from '@/interfaces';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import { getCarImg } from '@/utils';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: carProps
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {

  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <div className='flex flex-col gap-2'>
                        {/* UPPER SECTION */}
                        <div className='bg-[url(/pattern.png)] rounded-lg w-full h-28 bg-cover bg-no-repeat bg-center'>
                            <button
                                className='rounded-full p-1 absolute top-1 right-1 bg-slate-50 shadow-md font-bold'
                                onClick={closeModal}    
                            >
                                <Image
                                    src='/close.svg'
                                    width={20}
                                    height={20}
                                    alt=''
                                />
                            </button>

                            <div className='w-full h-full flex items-center justify-center'>
                                <Image
                                    src={getCarImg(car)}
                                    alt='Car Image'
                                    height={0}
                                    width={150}
                                    className='h-4/5'
                                />
                            </div>
                        </div>

                        {/* IMAGE GALLERY */}
                        <div className='px-4 mt-2 flex items-center justify-between'>
                            <Image
                                src={getCarImg(car, '13')}
                                alt='Car Image'
                                width={90}
                                height={96}
                            />
                            <Image
                                src={getCarImg(car, '29')}
                                alt='Car Image'
                                width={90}
                                height={96}
                            />
                            <Image
                                src={getCarImg(car, '33')}
                                alt='Car Image'
                                width={90}
                                height={96}
                            />
                        </div>

                        {/* CAR INFORMATION */}
                        <div className='px-6 pb-2 flex flex-col gap-2'>
                            <h2 className='capitalize text-lg font-bold'>{car.make} {car.model}</h2>

                            {Object.entries(car).map( ([key,value]) => (
                                <div key={key} className='flex items-center justify-between text-sm md:text-md'>
                                <p className='text-[#626262] font-light capitalize'>
                                    {key.split('_').join(' ')}
                                </p>
                                <p className='font-bold capitalize'>
                                    {value}
                                </p>
                            </div>
                            ))}
                        </div>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  )
}

export default CarDetails