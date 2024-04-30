"use client";

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const MyProfile = () => {
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    const fetchSearchParams = async () => {
      const params = await useSearchParams();
      setSearchParams(params);
    };

    fetchSearchParams();
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
};