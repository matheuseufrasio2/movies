import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
`;
export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  gap: 3rem;

  .inputFilter {
    color: var(--gray-500);
    width: 100%;
    border: 0;
    background: #fff;
    border: 2px solid #fff;
    height: 52px;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
    appearance: none;

    &:focus {
      border: 2px solid var(--blue);
    }
  }
  .genreFilter {
    color: var(--gray-500);
    width: 100%;
    border: 0;
    background: #fff;
    border: 2px solid #fff;
    height: 52px;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;
    appearance: none;

    &:focus {
      border: 2px solid var(--blue);
    }
  }
`;

export const TableContainer = styled.div`
  height: 65vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  .loading-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    max-height: 50vh;
    overflow-y: auto;

    thead tr th {
      position: sticky;
      top: 0;
      background-color: var(--blue-light);
    }
    tr {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(1.2);
      }
    }

    th {
      color: var(--text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--gray-500);
      color: var(--text);
      max-width: 350px;

      &:first-child {
        color: var(--title);
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

    }



  }
`;
