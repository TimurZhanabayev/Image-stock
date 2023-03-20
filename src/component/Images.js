import { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {
    const {response, isLoading, searchImage, } = useContext(ImageContext);

    return (
        <>
            <h1 className="text-center mt-6 underline text-2xl">Результат: {searchImage || 'Kazakhstan'}</h1>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 my-6 max-w-max mx-auto px-4'>
                {isLoading ? <Skeleton item={10}/> : response.map((data,key) => <Image key={key} data={data}/>)}
            </div>
        </>
    )
}

export default Images