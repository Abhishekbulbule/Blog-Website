import React from 'react'

const Comments = ({comments}) => {
    
    if(comments===undefined || comments.length === 0 ){
        return <div className='p-5 border-t border-black'>No Comments!!</div>;
    }
  return (
    <div className='p-5 '>
        <h1 className='text-center, text-2xl font-extrabold sticky'>Comments</h1>
        <div className='h-40 overflow-auto'>
            {comments.map((e,i)=>(
                <div className='my-4 border-b border-gray-900' key={i}>
                    <h4 className=' my-2 text-left font-bold '>PostedBy - {e.postedBy}</h4>
                    <p>{e.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Comments;