import React,{ useEffect, useState }  from 'react'
import axios from 'axios'


const Post = () => {
    
    const [post, setpost] = useState([])
    
    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                setpost(response.data)
                console.log(response.data)
            })
            .catch(err =>{
                console.log(err.message)
            })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <h1>Posts Component Page</h1>
            {
                post.map(pst => {
                    return (
                        <div key={pst.id}>
                            <button>Post {pst.id} </button>
                            <h3>{pst.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post
