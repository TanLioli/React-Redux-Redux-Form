import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtD0JDcEDz3dSFU2UTg8WJOnbBiIQv5P4Wg&usqp=CAU' />
        { props.message }
          <div>
        <span>Like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;