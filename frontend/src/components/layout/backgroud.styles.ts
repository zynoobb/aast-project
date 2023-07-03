import styled from "@emotion/styled";
const mq = `@media (max-width : 576px)`;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  ${mq} {
    flex-direction: column;
  }
`;

export const SideColumn = styled.div`
  width: 15%;
  height: auto;
  background-color: #3a3a3a;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq} {
    display: none;
    width: 0px;
  }
`;

export const ColumnAddWrapper = styled.div`
  width: 60%;
  /* background-color: black; */
  height: 80%;
`;

export const centerColumn = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq} {
    width: 100%;
  }
`;

export const CenterAddWrapper = styled.div`
  width: 40%;
  height: 100px;
  /* background-color: black; */
  margin-top: 1%;

  ${mq} {
    width: 100%;
    height: 80px;
    margin: 0;
  }
`;
