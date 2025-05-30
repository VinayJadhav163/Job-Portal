import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'  // Or any toast notification lib you prefer

const SAVE_JOB_API_END_POINT = import.meta.env.VITE_BACKEND_URL + '/api/v1/savedjob/save/';

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    const saveForLaterHandler = async () => {
        try {
            const response = await axios.post(
                `${SAVE_JOB_API_END_POINT}${job._id}`,
                {},
                { withCredentials: true }
            );
            if (response.data.success) {
                toast.success('Job saved for later!');
            } else {
                toast.error(response.data.message || 'Failed to save job');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error saving job');
        }
    };

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto'>
            <div className='flex items-center justify-between text-xs sm:text-sm'>
                <p className='text-gray-500'>
                    {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="outline" className="rounded-full" size="icon" aria-label="Bookmark Job">
                    <Bookmark />
                </Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-1 sm:p-2" variant="outline" size="icon" aria-label="Company Logo">
                    <Avatar className='w-10 h-10 sm:w-12 sm:h-12'>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-base sm:text-lg'>{job?.company?.name}</h1>
                    <p className='text-xs sm:text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg sm:text-xl my-2'>{job?.title}</h1>
                <p className='text-sm sm:text-base text-gray-600 line-clamp-3'>{job?.description}</p>
            </div>

            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-3 mt-4'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline" className="w-full sm:w-auto">
                    Details
                </Button>
                <Button
                    onClick={saveForLaterHandler}
                    className="w-full sm:w-auto bg-[#7209b7] hover:bg-[#5f32ad] transition-colors"
                >
                    Save For Later
                </Button>
            </div>
        </div>
    )
}

export default Job
