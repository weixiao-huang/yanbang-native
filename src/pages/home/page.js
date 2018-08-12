import React from 'react';

import {
  MainContainer,
  HeaderView,
  SearchInput,
  ContentView,
  CategoryHeaderView,
  CategoryView,
  HeaderLeftText,
  MoreText,
  MoreTouch,
  CategoryContentView,
  CategoryItemView,
  CategoryItemText,
} from './style';

import {
  professors,
  majors,
  colleges,
} from './data';

export default class App extends React.Component {
  render() {
    const list = [
      {
        category: '教授',
        more: '更多老师',
        data: professors,
      },
      {
        category: '专业',
        more: '更多专业',
        data: majors,
      },
      {
        category: '学校',
        more: '更多学校',
        data: colleges,
      },
    ];
    return (
      <MainContainer>
        <HeaderView>
          <SearchInput
            placeholder="输入你想查找的教授/专业/学校"
          />
        </HeaderView>
        <ContentView>
          {list.map(item => (
            <CategoryView
              key={item.category}
            >
              <CategoryHeaderView>
                <HeaderLeftText>
                  {item.category}
                </HeaderLeftText>
                <MoreTouch>
                  <MoreText>{item.more}</MoreText>
                </MoreTouch>
              </CategoryHeaderView>
              <CategoryContentView>
                {item.data.map(({ name }) => (
                  <CategoryItemView
                    key={name}
                  >
                    <CategoryItemText>{name}</CategoryItemText>
                  </CategoryItemView>
                ))}
              </CategoryContentView>
            </CategoryView>
          ))}
        </ContentView>
      </MainContainer>
    );
  }
}
