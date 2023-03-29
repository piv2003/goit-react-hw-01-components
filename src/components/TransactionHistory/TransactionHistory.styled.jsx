import styled from '@emotion/styled';

const TransactionTable = styled.table`
  width: 390px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
  background-color: #f5f5f5;
  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.85);

  & thead {
    & tr {
      background-color: rgba(239, 161, 241, 0.89);
      & th {
        padding: 15px;
        font-size: 15px;
        font-weight: 900;
        color: #0e55eecb;
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: #000000;
      }
    }
  }

  & tbody {
    & tr {
      ${
        '' /* if (id =2) {
        background-color: red;
      } */
      }
      & td {
        padding: 5px;
        border: 1px solid rgba(0, 0, 0, 0.95);
        color: darkgreen;
      }
    }
  }
`;

export { TransactionTable };
