import styled from '@emotion/styled';

const TransactionTable = styled.table`
  width: 390px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background-color: #f5f5f5;
  box-shadow: 5px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.85);

  th {
    padding: 15px;
    font-size: 15px;
    font-weight: 900;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: #000000;
    box-shadow: 5px -3px 37px -3px rgba(0, 0, 0, 0.75);
    background-color: rgba(250, 200, 228, 0.89);
  }

  td:nth-of-type(1) {
    color: #000;
  }

  th:nth-of-type(2),
  td:nth-of-type(2) {
    color: #64024fcb;
  }

  th:nth-of-type(3),
  td:nth-of-type(3) {
    color: #ff04abcb;
  }

  td {
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.95);
    font-weight: 500;
  }

  tr:nth-of-type(odd) {
    background-color: #fff;
  }

  tr:nth-of-type(even) {
    background: linear-gradient(270deg, #e5f3e5, #c5f7c3, #c1c5fa);
  }
`;

export { TransactionTable };
