import React, { useEffect, useState } from "react";

import ab from "../Assets/Images/logoimg.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);

  const [users, setusers] = useState([ ]);
  const loadUsers = async ()=> { 
    // console.log('before');
    const response = await fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => { 
        
    console.log(data);
  })
    const jsonresponse = await response.json(); 
    setusers(jsonresponse); 

  }

  return (
    <>
    <nav
      className={`absolute top-0 w-full transition duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="bg-[#6e686b] ">
        <div className="container mx-auto flex items-center ">
          <a href="/" className="flex items-center">
            <img src={ab} alt="Logo" className="w-20 h-13 mr-2" />
            <span className="text-white text-4xl ">A.CORP</span>
          </a>
          <div className="ml-[100px] items-center">
            <button
              onClick={loadUsers}
              href="/"
              className="bg-red-600  text-white hover:text-black text-2xl ml-5 py-1 px-4 rounded-full hover:bg-red-700 transition duration-300"
            >
              Get Users
            </button>
          </div>
        </div>
      </nav>
    </nav>

    <div className='text-black inline-block ml-[500px] mt-[250px] font-bold  text-3xl '>
        <h2 className=''>
          Users:</h2>
        <ul>
          {users.map(({ id, login }) => (
             <li key={id}>Name: {login}</li>
          )
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;