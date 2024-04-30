//To add other user profiles 
"use client";

import { useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation'


import Profile  from '@components/Profile';


const MyProfile = () => {
    const searchParams = useSearchParams()

    const search = searchParams.get('profile')
    console.log(search)
 
    const {data: session} = useSession();
 
    const [myposts,setMyPosts] = useState([]);
 
    useEffect(() => {
        const fetchPosts = async () =>{
          const response = await fetch(`api/users/${session.user.id}/posts`); 
          const data = await response.json(); 
      
          setMyPosts(data);
      
      
        }
      
            if(session?.user.id ) fetchPosts();
         }, []);
        

 return (
    <Profile 
       name="My"
       desc="Welcome to your personalized profile page"
       data={myposts}
       handleEdit={handleEdit}
       handleDelete={handleDelete}

    />
 )  

}