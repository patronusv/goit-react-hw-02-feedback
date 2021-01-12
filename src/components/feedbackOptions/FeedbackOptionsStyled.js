import styled from 'styled-components';
const Wrapper = styled.div`
  .feedback-btn {
    padding: 5px 15px;
    border: 1px solid navy;
    border-radius: 5px;
    background-color: lightblue;
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .feedback-btn:hover,
  .feedback-btn:focus {
    background-color: yellowgreen;
  }
  .feedback-btn:not(:last-child) {
    margin-right: 10px;
  }
`;
export default Wrapper;
