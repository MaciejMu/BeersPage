'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  numberOfItmes:number
  beerType:string
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    numberOfItmes,
    beerType
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <div>
      <button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/${beerType}?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        prev page
      </button>

      <div>
        {page} / {Math.ceil(numberOfItmes / Number(per_page))}
      </div>

      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/${beerType}?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        next page
      </button>
      <form>
  <label htmlFor="facts">Facts on page:</label>
  <select id="facts" name="facts" 
  onChange={e=>router.push(`/${beerType}?page=${Number(page)}&per_page=${e.target.value}`)}>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
  </form>
    </div>
  )
}

export default PaginationControls