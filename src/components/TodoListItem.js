import React from 'react';
import styled from 'styled-components';
import { states as taskStates } from '../express/models/task';

const Title = styled.p`
  font-family: Times New Roman;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colours.yellow};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;

  margin: 1px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 16px;

  background-color: ${({ theme }) => theme.colours.indigo};
  border-radius: 4px;
  box-shadow: 1px 2px 6px ${({ theme }) => theme.colours.indigo};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colours.green};
  color: ${({ theme }) => theme.colours.indigo};
  padding-top: 2px;
  padding-bottom: 2px;
  font-weight: 580;
  border: none;
  cursor: pointer;

  &:hover {

  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  ${Button}:not(:last-child) {
    margin-right: 16px;
  }
`;


const TodoListItem = ({
  className,
  listItem: { id, title, state },
  onCompleted,
  onArchived,
  onInProgress
}) => {
  const renderButtons = () => {
    switch (state) {
      case taskStates.TASK_IN_PROGRESS: {
        return (
          <>
            <Button onClick={onCompleted}>Complete</Button>
            <Button onClick={onArchived}>Archive</Button>
          </>
        );
      }
      case taskStates.TASK_ARCHIVED: {
        return (
          <>
            <Button onClick={onCompleted}>Complete</Button>
            <Button onClick={onInProgress}>ReInstate</Button>
          </>
        );
      }
      case taskStates.TASK_COMPLETE: {
        return (
          <>
            <Button onClick={onInProgress}>Continue</Button>
            <Button onClick={onArchived}>Archive</Button>
          </>
        );
      }
      default:
        return <React.Fragment />;
    };
  };
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <ButtonContainer>
        {renderButtons()}
      </ButtonContainer>
    </Container>
  );
};

export default TodoListItem;
