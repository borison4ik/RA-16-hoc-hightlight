import React from 'react';

import { Video } from '../Video';
import { Article } from '../Article';

import { withWrapperHOC } from '../../HOC/withWrapperHOC';

const WrapperedVideo = withWrapperHOC(Video);
const WrapperedArticle = withWrapperHOC(Article);

export const List = (props) => {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <WrapperedVideo {...item} />;

      case 'article':
        return <WrapperedArticle {...item} />;

      default:
        return null;
    }
  });
};
