import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const SinglePost = ({ match }) => {
    const [singlePost, setsinglePost] = useState({
        id :"",
        title: ""
    })

    useEffect(() => {
        Axios.get(`http://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then(response => {
                setsinglePost({
                    id: response.data.id,
                    title: response.data.title
                })
                console.log(match.params.id)
            })
            .catch(err=>{
                console.log(err.message)
            })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <h1>Single Post ID: {singlePost.id}</h1>
            <h2>Post title {singlePost.title}</h2>
        </div>
    )
}

export default SinglePost
