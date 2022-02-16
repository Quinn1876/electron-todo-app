import React, { useMemo } from 'react';
import styled from 'styled-components';
import UnstyledTodoListItem from './TodoListItem';

const TodoListItem = styled(UnstyledTodoListItem)`
  margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 264px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colours.green_cyan};
`;

const EmptyText = styled.p`
  color: ${({ theme }) => theme.colours.yellow};
  font: 700 24px Times New Roman;
  justify-self: center;
`;

const TodoList = ({
  className,
  todos = [],
  onArchived,
  onCompleted,
  onInProgress
}) => {
  const todoItems = useMemo(() => todos.map(
    (todo) => <TodoListItem
      key={todo.id}
      listItem={todo}
      onArchived={() => onArchived(todo.id)}
      onCompleted={() => onCompleted(todo.id)}
      onInProgress={() => onInProgress(todo.id)}
    />
  ), [todos, onArchived, onCompleted, onInProgress]);

  return (
    <Container className={className}>
      {
        todoItems.length > 0
          ? todoItems
          : (
            <EmptyText>No Items in List</EmptyText>
          )
      }
    </Container>
  );
};

export default TodoList;
