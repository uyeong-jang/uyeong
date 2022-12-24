import { BlogPostReq } from '@app/services/blog/blogPostApi';
import React, { ChangeEvent } from 'react';
import { StyledWriteMDEditer } from './WriteMDEditerStyle';

interface Props {
  blogPostInfo: BlogPostReq;
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const WriteMDEditerPresenter = ({ blogPostInfo, onChangeTextarea }: Props) => {
  return (
    <StyledWriteMDEditer>
      {/* <div>toolbar</div> */}
      {/* 아이콘 나열하기 */}
      {/* 바로 누르거나 , 드래그하고 누르면
      양쪽으로 추가되기, 
      한번더 누르면 다시 돌아오기, 
      안누른거 누르면 또 양쪽으로 추가되기,
      누른거 한번더 누르면 눌러져있던거 골라서 빼내기,  */}
      <textarea value={blogPostInfo.content} onChange={onChangeTextarea} placeholder="Write your story" />
    </StyledWriteMDEditer>
  );
};

export default WriteMDEditerPresenter;
