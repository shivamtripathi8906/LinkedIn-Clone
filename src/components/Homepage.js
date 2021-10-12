import "../login/login.css";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import Lefthome from "./Lefthome";
import styled from "styled-components";
import Midhome from "./Midhome";
import Righthome from "./Righthome";

const Homepage = (props) => {
  return (
    <>
      <HomepageCont>
        <Lefthome />
        <Midhome />
        <Righthome />
      </HomepageCont>
    </>
  );
};
const HomepageCont = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #f5f5f5;
  padding: 6rem 9% 10rem 9%;
  display: grid;
  grid-template-columns: 22% 52% 23%;
  grid-gap: 2%;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    padding: 6rem 4% 6rem 4%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Homepage);
