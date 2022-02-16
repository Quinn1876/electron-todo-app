CREATE TABLE tasks (
  task_id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  state text NOT NULL
);
