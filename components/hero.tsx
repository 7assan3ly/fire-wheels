'use client'
import Image from "next/image"
import { CustomBtn } from "."

const Hero = () => {

  const exploreCars = () => {
    console.log('explore cars')
  }
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      {/* HERO TEXT CONTAINER */}
      <div className='flex flex-col gap-5 flex-1 p-8'>
        <h1 className='text-5xl md:text-6xl xl:text-[82px] 2xl:text-8xl'>
          Find and rent your car. fast and easy 
        </h1>

        <p className="text-sm md:text-lg font-extralight text-[var(--softTextColor)]">Streamline your car rental experience with our effortless booking process.</p>

        <CustomBtn
          title='Explore Cars'
          type='button'
          handleClick={exploreCars}
          customStyles="w-fit"
        />
      </div>

      {/* HERO IMAGE CONTAINER */}
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src='/hero.png' fill alt='Hero Image' className="object-contain" />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden bg-[url('/hero-bg.png')]" />
      </div>
    </div>
  )
}

export default Hero