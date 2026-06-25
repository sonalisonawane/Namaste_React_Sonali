import React from 'react'
import {useState,useEffect} from 'react';

function About() {
const [user,setUser] = useState(null);
const[text,setText] = useState("sonalisonawane");

useEffect(() => {
  const timer = setTimeout(() => {
    if (text.trim()) {
      fetchGithubUserInfo();
    }
  }, 1000);
return () => clearTimeout(timer);
}, [text]);

const fetchGithubUserInfo = async()=>{
const response = await fetch(`https://api.github.com/users/${text}`);
const data = await response.json();
setUser(data);
}

if (!user) {
  return <h2>Loading...</h2>;
}
const {name,company,location,avatar_url,bio} = user;
  

return (
   <>
   <div className="search">
    <label htmlFor="input">Search Github Users</label>
      <input
        type="text"
        id="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
     
    </div>

    { !user ? (
      <h2>Loading...</h2>
      
    ) :
    (<div className='user-class'>
    <div className="profile-img"><img src={avatar_url} alt="" /></div>
    <div className="profile-info">
    <p>User Details:{bio}</p><br/>
    <p>UserName:{name}</p><br/>
    <p>Company:{company}<br/>       Location:{location}</p>
    </div>
    </div>)
    }
    </>
  )
}

export default About