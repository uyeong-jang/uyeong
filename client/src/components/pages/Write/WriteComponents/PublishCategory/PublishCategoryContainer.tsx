import { useGetBlogCategoriesQuery } from '@app/services/blog/categoryApi';
import { BlogPostReq } from '@app/services/blog/postApi';
import React, { useCallback, useState } from 'react';
import PublishCategoryPresenter from './PublishCategoryPresenter';

interface Props {
  blogPostInfo: BlogPostReq;
  setBlogPostInfo: (blogPostInfo: BlogPostReq) => void;
}

const PublishCategoryContainer = ({ blogPostInfo, setBlogPostInfo }: Props) => {
  const { data: blogCategoryData } = useGetBlogCategoriesQuery();

  const [isOpenedCategory, setOpenedCategory] = useState(false);
  // const [isClickedCategory, setClickedCategory] = useState(false);

  const onClickChooseCtegory = useCallback(() => {
    setOpenedCategory(true);
  }, []);

  // const onClickCancel = useCallback(() => {
  //   setBlogPostInfo({ ...blogPostInfo, category: '' });
  //   setOpenedCategory(false);
  //   // setClickedCategory(false);
  // }, [blogPostInfo, setBlogPostInfo]);

  const onClickDone = useCallback(() => {
    //있으나 없으나 색을 그대로
    //그럼 setClickedCategory 이거 없어도됨
    // if (isClickedCategory) setOpenedCategory(false);
    setOpenedCategory(false);
  }, []);

  const onClickCategory = useCallback(
    (e) => {
      //똑같은거 한번더 클릭하면 다시 '' 로 대체
      //cancel 버튼 없애기
      const clickedCategory = e.target.getAttribute('value');
      if (blogPostInfo.category === clickedCategory) setBlogPostInfo({ ...blogPostInfo, category: '' });
      else setBlogPostInfo({ ...blogPostInfo, category: clickedCategory });
      // setClickedCategory(true);
    },
    [blogPostInfo, setBlogPostInfo],
  );

  return (
    <PublishCategoryPresenter
      blogCategoryData={blogCategoryData}
      blogPostInfo={blogPostInfo}
      isOpenedCategory={isOpenedCategory}
      // isClickedCategory={isClickedCategory}
      onClickChooseCtegory={onClickChooseCtegory}
      // onClickCancel={onClickCancel}
      onClickDone={onClickDone}
      onClickCategory={onClickCategory}
    />
  );
};

export default PublishCategoryContainer;
