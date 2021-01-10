import {atom} from 'recoil';

const task = {
  id: '1',
  title: 'Take a coffee',
  state: 'TASK_DEFAULT',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

const initTask = [
  {...task, id: '1', title: 'Task 1'},
  {...task, id: '2', title: 'Task 2'},
  {...task, id: '3', title: 'Task 3'},
  {...task, id: '4', title: 'Task 4'},
  {...task, id: '5', title: 'Task 5'},
  {...task, id: '6', title: 'Task 6'},
];

export const tasksState = atom({
  key: 'tasksState', // unique ID (with respect to other atoms/selectors)
  default: initTask, // default value (aka initial value)
});
