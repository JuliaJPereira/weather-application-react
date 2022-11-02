import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
  font-family: "Lato", sans-serif;
`;

export const Box = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #01beeb;
  width: 400px;
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 50px;
      box-shadow: 10px 10px 8px #1f1e1e;

  h1 {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
