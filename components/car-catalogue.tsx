import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, CustomFilter, SearchBar, ShowMore } from "."
import { fetchCars } from "@/utils"

const CarCatalogue = async ({searchParams}) => {
    const allCars = await fetchCars({
        brand: searchParams.brand || '',
        model: searchParams.model || '',
        fuel: searchParams.fuel || '',
        year: searchParams.year || 2022,
        limit: searchParams.limit || 10
    })
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <div id='discover' className="mt-12 py-4 sm:px-16 px-6 max-w-[1440px] mx-auto">
        {/* Heading */}
        <div>
            <h1 className="text-4xl font-bold">
                Car Catalogue
            </h1>
            <p className="text-[var(--softTextColor)]">Explore our Cars you might like</p>
        </div>

        {/* FILTERS */}
        <div className="w-full mt-10 flex items-center justify-between flex-wrap gap-4">
            <SearchBar/>

            <div className="flex flex-wrap gap-4">
                <CustomFilter title='fuel' options={fuels}/>
                <CustomFilter title='year' options={yearsOfProduction}/>
            </div>
        </div>

        {/* DISPLAY CAR CARDS */}
        {isDataEmpty ? (
            <div className='mt-16 flex justify-center items-center flex-col gap-4'>
                <h2 className='text-[var(--softTextColor)] text-xl font-bold'>Oops, no results</h2>
                <p>{allCars?.message}</p>
            </div>
        ) : (
            <div className="flex flex-wrap pt-14 w-full gap-4">
                {allCars?.map((car)=>(
                    <CarCard car={car} />
                ))}
                <ShowMore
                    pageNumber= { (searchParams.limit || 10) / 10 }
                    isNext = { (searchParams.limit || 10) > allCars.length }
                />
            </div>
        )}
    </div>
  )
}

export default CarCatalogue