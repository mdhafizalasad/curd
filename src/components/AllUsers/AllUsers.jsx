import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    // const users = useLoaderData();
    const {data: AllUsers = [], refetch } = useQuery({
        queryKey:["users"],
        queryFn: async ()=>{
            const res = await fetch("https://2421backend-server.vercel.app/users");
            const data =await res.json();
            return data;
        }
    })


    return (
        <div className="w-[95%] mx-auto">
           <h2 className="text-3xl my-10 text-center">All users {AllUsers.length}</h2> 
        <div className="grid grid-cols-3 gap-5">
            {AllUsers?.map((user)=>(
                < User key={user._id} user={user} refetch={refetch}></User>
                ))}
        </div>
        </div>
    );
};

export default AllUsers;