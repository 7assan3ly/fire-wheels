'use client'
import { useRouter } from 'next/navigation'
import { showMoreProps } from '@/interfaces'
import { updateSearchParams } from '@/utils'
import { CustomBtn } from '.'

const ShowMore = ({pageNumber, isNext}: showMoreProps) => {
    const router = useRouter()
    const handleShowMore = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams('limit', `${newLimit}`)
        router.push(newPathname, {scroll: false})
    }
    
  return (
    <div className='w-full flex justify-center'>
        {!isNext && (
            <CustomBtn
                title='Show More'
                handleClick= {handleShowMore}
            />
            )}
    </div>
  )
}

export default ShowMore