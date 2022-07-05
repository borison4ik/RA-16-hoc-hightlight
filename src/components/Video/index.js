import React from 'react';

export const Video = (props) => {
  return (
    <div className='item item-video'>
      <iframe src={props.url} frameborder='0' allow='autoplay; encrypted-media' allowfullscreen title='video' />
      <p className='views'>Просмотров: {props.views}</p>
    </div>
  );
};
