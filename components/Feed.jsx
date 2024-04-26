"use client";

import { useState,useEffect } from 'react'; 

import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />

      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState(''); 
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults,setSearchResults]  = useState([]);
  const [posts, setPosts] = useState([]);
  

  const handleSearchChange = (e) =>{
   e.preventDefault(searchTimeout);
    setSearchText(e.target.value);
    
   
    clearTimeout(searchTimeout);
    setSearchTimeout( 
    setTimeout(() => {
      setSearchText(e.target.value);
      const searchedResults = filterPrompts (e.target.value);
      setSearchResults(searchedResults);
      } ,500)
    );

  };

  useEffect(() => {
    const fetchPosts = async () =>{
      const response = await fetch('/api/prompt'); 
      const data = await response.json(); 

      setPosts(data);


    }
  
    fetchPosts();
  }, [])
  
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");// 'i' flag for case-insensitive search
    return posts.filter(
      (p) =>
      regex.test(p.creator.username) || 
      regex.test(p.tag) ||
      regex.test(p.prompt)

    )

  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchedResults = filterPrompts(tagName);
    setSearchResults(searchedResults);
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        
        />
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick={handleTagClick}
      />

    </section>
  )
}

export default Feed