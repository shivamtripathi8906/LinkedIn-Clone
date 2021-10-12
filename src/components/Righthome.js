import styled from "styled-components";
const Righthome = () => {
  return (
    <>
      <Component>
        <Userdetail>
          <h4>LinkedIn News</h4>
        </Userdetail>
        <Community>
          <Newscomp>
            <p> &#x2022; Air India says Tata to government</p>
            <span> &nbsp;&nbsp;3700 reads &#8594;</span>
          </Newscomp>
          <Newscomp>
            <p> &#x2022; Byju's pulls Shah Rukh Khan ads</p>
            <span> &nbsp;&nbsp;470 reads &#8594;</span>
          </Newscomp>
          <Newscomp>
            <p> &#x2022; Reliance to bring 7-Eleven to India</p>
            <span> &nbsp;&nbsp;15274 reads &#8594;</span>
          </Newscomp>
          <Newscomp>
            <p> &#x2022; Power of small talk</p>
            <span> &nbsp;&nbsp;1078 reads &#8594;</span>
          </Newscomp>
          <Newscomp>
            <p> &#x2022; Do more by doing less</p>
            <span> &nbsp;&nbsp;1112 reads &#8594;</span>
          </Newscomp>
        </Community>
      </Component>
    </>
  );
};
const Component = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0.7rem 1.1%;
  border: 1px solid rgb(216, 216, 216);
`;
const Userdetail = styled.div`
  margin-left: 0.5rem;
`;
const Community = styled.div`
  width: 100%;
  margin: 0.2rem 0.2rem;
`;

const Newscomp = styled.div`
  margin-top: 0.7rem;
  & > p {
    font-size: 0.85rem;
    font-weight: 600;
  }
  & > span {
    font-size: 0.7rem;
  }
`;

export default Righthome;
