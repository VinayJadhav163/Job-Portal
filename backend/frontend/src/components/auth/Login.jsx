import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios' // Adjust the import path as necessary
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading,user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true // changed
            });
            if (res.data.success) {
                
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[user])
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form
                onSubmit={submitHandler}
                className="w-full max-w-md md:w-1/2 border border-gray-200 rounded-md p-6 md:p-8 my-10 mx-4 md:mx-auto"
                >
                <h1 className="font-bold text-2xl md:text-3xl mb-6 text-center md:text-left">
                    Login
                </h1>

                <div className="my-3">
                    <Label>Email</Label>
                    <Input
                    type="email"
                    value={input.email}
                    name="email"
                    onChange={changeEventHandler}
                    placeholder="Enter Your Email"
                    className="mt-1"
                    />
                </div>

                <div className="my-3">
                    <Label>Password</Label>
                    <Input
                    type="password"
                    value={input.password}
                    name="password"
                    onChange={changeEventHandler}
                    placeholder="Enter Your Password"
                    className="mt-1"
                    />
                </div>

                <div className="my-5">
                    <RadioGroup className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Input
                        type="radio"
                        name="role"
                        value="student"
                        checked={input.role === 'student'}
                        onChange={changeEventHandler}
                        className="cursor-pointer"
                        id="r1"
                        />
                        <Label htmlFor="r1">Student</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                        type="radio"
                        name="role"
                        value="recruiter"
                        checked={input.role === 'recruiter'}
                        onChange={changeEventHandler}
                        className="cursor-pointer"
                        id="r2"
                        />
                        <Label htmlFor="r2">Recruiter</Label>
                    </div>
                    </RadioGroup>
                </div>

                {loading ? (
                    <Button className="w-full my-4 flex justify-center items-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please wait
                    </Button>
                ) : (
                    <Button type="submit" className="w-full my-4">
                    Login
                    </Button>
                )}

                <p className="text-center text-sm mt-4">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                    Signup
                    </Link>
                </p>
                </form>

            </div>
        </div>
    )
}

export default Login