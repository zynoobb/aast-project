import styled from "@emotion/styled";
const mq = `@media (max-width : 576px)`;
const tq = `@media (min-width: 577px) and (max-width: 1024px)`;
const mmq = `@media (max-width : 400px)`;

export const QuestionWrapper = styled.div`
  width: 80%;
  background-color: #bdbdbd;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  color: black;
  padding: 1%;
  border-radius: 10px;

  ${mq} {
    width: 90%;
    height: 100px;
    margin-top: 40px;
  }
  ${tq} {
    width: 95%;
    height: 100px;
    margin-top: 30px;
  }
  ${mmq} {
    width: 95%;
    height: 90px;
    margin-top: 25px;
  }
`;

export const QuestionArea = styled.div`
  width: 100%;
  color: black;
  ${mq} {
    padding: 5px;
    font-size: 0.9em;
  }

  ${mmq} {
    width: 95%;
    height: 40px;
    font-size: 0.8em;
  }
`;

export const SelectArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  ${mq} {
    height: 100px;
    margin-top: 5px;
  }
  ${tq} {
    height: 100px;
    margin-top: 20px;
  }
  ${mmq} {
    height: 40px;
  }
`;

export const SelectWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ButtonArea = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  margin-top: 1%;
  align-items: center;
  ${mq} {
    width: 100%;
    margin-right: 42px;
  }
`;

export const NextButton = styled.button`
  width: 100px;
  height: 40px;
  border: 2px solid #fff;
  background-color: #777;
  color: #fff;
  box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(51, 51, 51, 0.7) 0 80px 0px 2px inset;
  }

  ${mq} {
    width: 80px;
    font-size: 13px;
    margin-top: 5px;
  }
  ${tq} {
    width: 100px;
    font-size: 15px;
    margin-top: 20px;
  }
`;
