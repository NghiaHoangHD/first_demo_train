import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: spacing-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  color: #333;

  div {
    flex: 1 ;
  }

  .contentProject {
    display: flex;
  }

  img {
    max-width: 100px;
    object-fit: cover;
    margin-left: 30px;
    height: 120px;

  }

  .information,
  .button {
    display: flex;
    justify-content: space-between;
  }

  .informationProduct {
    flex: 1;
  }
`
