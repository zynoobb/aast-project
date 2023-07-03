import { IArtistObj } from "../types/generated/types";
import styled from "@emotion/styled";
const mq = `@media (max-width : 576px)`;
const tq = `@media (min-width: 577px) and (max-width: 1024px)`;

export default function StatisticsTable({ data }: { data: IArtistObj[] }) {
  const tableHeader = ["이름", "짧은 소개", "참여자", "비율"];

  return (
    <>
      <Table>
        <thead>
          <TableRow>
            {tableHeader.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data?.map((el) => (
            <TableRow key={el.name}>
              <TableName>{el.name}</TableName>
              <TableDefined>{el.defined}</TableDefined>
              <TableAmount>{el.amount}</TableAmount>
              <TablePer>{el.per}</TablePer>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  ${mq} {
    font-size: 14px;
  }
`;

const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px dashed gray;
  ${mq} {
    height: 40px;
  }
  ${tq} {
    height: 40px;
  }
`;

const TableHead = styled.th`
  width: 12%;
  text-align: left;
  font-weight: bold;
  background-color: #3a3a3a;
  color: white;
  padding: 0 5px 0 5px;
  ${mq} {
    text-align: center;
  }
  ${tq} {
    text-align: center;
  }
`;

const TableName = styled.td`
  width: 5%;
  text-align: left;
  padding: 0 5px 0 5px;
  ${mq} {
    width: 20%;
    text-align: center;
  }
  ${tq} {
    width: 20%;
    text-align: center;
  }
`;

const TableDefined = styled.td`
  width: 65%;
  text-align: left;
  ${mq} {
    width: 55%;
  }
`;

const TableAmount = styled.td`
  width: 5%;
  text-align: right;
  padding: 0 55px 0 0;
  ${mq} {
    padding: 0 25px 0 0;
  }
  ${tq} {
    padding: 0 20px 0 0;
  }
`;

const TablePer = styled.td`
  width: 15%;
  text-align: left;
  padding: 0 5px 0 5px;
  ${mq} {
    text-align: right;
    padding-right: 20px;
  }
  ${tq} {
    text-align: right;
    padding-right: 10px;
  }
`;
