import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  .other-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    background-color: var(--blue-light);
    width: fit-content;
    border-radius: 4px;
    padding: 0 1rem;
    transition: all 0.2s ease-in-out;

    margin: 1rem;

    > span {
      margin-left: 0.5rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const MakeCommentContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 6rem;
  border-radius: 4px;
  padding: 0.5rem;
  outline: none;
  width: 100%;
  color: var(--gray-500);

  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border: 2px solid var(--blue);
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  border: 0;
  align-self: flex-end;
  padding: 0.5rem 1rem;
  min-width: 150px;
  border-radius: 4px;
  background: var(--blue);
  color: var(--white);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--blue-light);
  }

  &:disabled {
    background-color: #888;
    color: #333;
    cursor: not-allowed;
  }
`;

export const CommentsContainer = styled.div`
  padding: 0 1rem;
  height: 57vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

export const Comment = styled.div`
  background-color: var(--gray-500);
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  border-radius: 4px;

  & + & {
    margin-top: 1rem;
  }

  >span {
    margin-top: 1rem;
    color: var(--text);
    font-size: 0.75rem;
  }
`;
