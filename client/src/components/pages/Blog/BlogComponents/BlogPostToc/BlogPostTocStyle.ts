import styled from '@_settings/styled';

interface HeadingListProps {
  headingLevel: number;
  headingId: string;
  activeId: string;
}

export const StyledBlogPostToc = styled.nav`
  border: 1px solid black;
  position: absolute;
  top: 150px;
  right: -300px;
  height: 95%;

  & > ul {
    border: 1px solid black;
    position: sticky;
    top: 100px;
    right: 0;
    width: 200px;
  }
`;

export const StyledList = styled.li<HeadingListProps>`
  border: 1px solid black;
  margin-left: ${(props) => props.headingLevel}em;

  & > a {
    font-size: calc(20px - (${(props) => props.headingLevel} * 2px));

    color: ${(props) => {
      // console.log('111111111', props.headingId, '2222222', props.activeId);
      if (props.headingId === props.activeId) return 'red';
      else return 'black';
    }};
  }
`;
