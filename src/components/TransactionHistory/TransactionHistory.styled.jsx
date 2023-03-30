import styled from '@emotion/styled';

const TransactionTable = styled.table`
  width: 390px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
  background-color: #f5f5f5;
  box-shadow: 5px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.85);

  th {
    padding: 15px;
    font-size: 15px;
    font-weight: 900;
    color: #0e55eecb;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: #000000;
    box-shadow: 5px -3px 37px -3px rgba(0, 0, 0, 0.75);
    background-color: rgba(243, 167, 214, 0.89);
  }

  td {
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.95);
    color: darkgreen;
    font-weight: 500;
  }

  tr:nth-child(odd) {
    background-color: #f8f4f4d3;
  }

  tr:nth-child(even) {
    background: linear-gradient(270deg, #cfecd0, #a0cea7, #a3a8f5);
  }
`;

export { TransactionTable };
