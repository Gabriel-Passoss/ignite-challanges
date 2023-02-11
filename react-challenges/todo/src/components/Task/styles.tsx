import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 4rem;
  width: 50%;
  height: 20%;
`

export const TaskStatusContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`

const BaseSpan = styled.span`
  font-size: 0.9rem;
  font-weight: 700;

  margin-right: 0.5rem;
`

export const CreatedTasksSpan = styled(BaseSpan)`
  color: ${props => props.theme['blue']};
`

export const DoneTasksSpan = styled(BaseSpan)`
  color: ${props => props.theme['purple']};
`

export const Counter = styled.div`
  width: 1.3rem;
  justify-content: center;
  border-radius: 999px;
  background: ${props => props.theme['gray-400']};


  span {
    font-weight: 700;
    font-size: 0.8rem;
    color: ${props => props.theme['gray-200']};
  }
`