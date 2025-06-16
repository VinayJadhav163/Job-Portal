import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4 sm:px-6 lg:px-8 py-10'>
            <div className='flex flex-col gap-5 max-w-4xl mx-auto'>
                <span className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 sm:px-6 py-1 rounded text-sm sm:text-base md:text-lg font-bold">
                    No. 1 Job Hunt Website
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight">
                    Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
                </h1>
                <p className='text-sm sm:text-base text-gray-600'>
                    Find the perfect job, apply with ease, and kickstart your career today.
                </p>
                <div className='flex w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto shadow-lg border border-gray-200 rounded-full overflow-hidden'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='px-4 py-2 outline-none border-none w-full text-sm sm:text-base'
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="bg-[#6A38C2] text-white px-4 py-2 rounded-none rounded-r-full"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
 
            </div>

        </div>
        
    )
}

export default HeroSection
