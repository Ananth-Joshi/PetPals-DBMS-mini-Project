'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type userType={
    email:string,
    CID:string
}
const UserProfile= () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [user,setUser]=useState<userType>({email:'',CID:''})
    const router=useRouter()
    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const logOut=async()=>{
        try{
            await fetch('/api/auth/logout',{method:'POST'})
            router.refresh()
            router.push('/')
            
        }catch(e){
            console.error('Error logging out')
        }
    }

    const getUser=async()=>{
        try{
            const data=await fetch('/api/authverify')
            const js=await data.json()
            console.log(js)
            setUser({email:js.user.email,CID:js.user.CID})
        }catch(e){
            console.error('Not verified:'+e)
        }
    }

    useEffect(()=>{
        getUser();
    },[])
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                >
                    <img
                        src="/assets/ProfilePic.jpeg" // Replace with the actual profile picture URL
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                </button>
            </div>

            {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-2">
                        <div className="px-4 py-2 text-sm text-gray-700">
                            <p>CID: {user.CID}</p>
                            <p>Email: {user.email}</p>
                        </div>
                        <div className="border-t border-gray-200"></div>
                        <button
                            onClick={logOut}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;