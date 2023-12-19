import styled from '@_settings/styled';

export const DIV = {} as any;
export const ASIDE = {} as any;

interface BlogTagProps {
  tagUnderline: string;
  tagName: string;
  isTagClicked: boolean;
}

ASIDE.BlogTags = styled.aside`
  // border: 1px solid black;
  padding: 50px 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: ${({ theme }) => theme.BP.MOBILE};
  max-width: ${({ theme }) => theme.BP.TABLET};

  & > .tags-wrapper {
    // border: 1px solid black;
    display: flex;
    width: 100%;
    // height: 100%;
    padding: 20px 40px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    ::-webkit-scrollbar {
      // border: 1px solid black;
      height: 7px;
    }
    ::-webkit-scrollbar-track {
      // border: 1px solid black;
      margin: 1px 0;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      // border: 1px solid black;
      background: ${({ theme }) => theme.BD_C};
      border-radius: 10px;
    }
  }

  @media screen and (min-width: calc(${({ theme }) => theme.BP.TABLET} + 300px)) {
    min-width: 200px;
    position: static;
    left: 0;
    transform: translateX(0);

    & > .tags-wrapper {
      display: block;
      overflow: hidden;
      white-space: wrap;
    }
  }
`;

DIV.BlogTag = styled.div<BlogTagProps>`
  ${(props) => {
    if (props.tagUnderline === props.tagName) {
      return `
        border-bottom: 2px solid ${props.theme.FONT_C};
      `;
    } else {
      return `
        border-bottom: 2px solid ${props.theme.BG_C};
        &:hover {
          color: rgba(0, 0, 0, 0.5);
        }
      `;
    }
  }};

  cursor: pointer;
  margin: 0 20px 0 0;
  padding: 0 0 3px 0;

  @media screen and (min-width: calc(${({ theme }) => theme.BP.TABLET} + 300px)) {
    margin: 0 0 10px 0;
    padding: 0 0 3px 0;
  }
`;
