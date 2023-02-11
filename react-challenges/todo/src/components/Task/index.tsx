import { Counter, CreatedTasksSpan, DoneTasksSpan, TaskContainer, TaskStatusContainer } from "./styles";
import { ClipboardText } from 'phosphor-react'

export function Task() {
  return (
    <TaskContainer>
      <TaskStatusContainer>
        <div>
          <CreatedTasksSpan>Tarefas criadas</CreatedTasksSpan>
          <Counter>
            <span>0</span>
          </Counter>
        </div>
        <div>
          <DoneTasksSpan>Concluídas</DoneTasksSpan>
          <Counter><span>0</span></Counter>
        </div>
      </TaskStatusContainer>
    </TaskContainer>
  )
}