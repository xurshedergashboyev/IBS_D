import React from 'react';

import {
  ArticlePageStyled, 
  Content, 
  AsideRight, 
  AsideLeft
} from './styles';

import ArticleMain from '../../components/ArticleMain';
import MoreArticlesContainer from '../../components/MoreArticlesContainer';
import ClapsAside from '../../components/ClapsContainerAside';

const AriticleItemPage = () => {
  return (
    <ArticlePageStyled>
      <Content>
        <AsideLeft>
          <ClapsAside />
        </AsideLeft>
        <ArticleMain />
        <AsideRight />
      </Content>
      <MoreArticlesContainer />
    </ArticlePageStyled>
  )
}

export default AriticleItemPage;