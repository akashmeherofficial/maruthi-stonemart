import React from 'react'
import './Reviews.css'

const Reviews = ({comments,updateComments}) => {
  return (
    <div className='reviewsbox'>
    {comments.map((itm) => {
        return (
          <div className='reviews'>

            {
              <span className='comments'>{itm.comment}</span>
              
              }

          </div>
        );
      })}
    </div>
  )
}

export default Reviews