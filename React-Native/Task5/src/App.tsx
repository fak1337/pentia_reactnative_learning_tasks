import React from 'react';
import Overview from './screens/overview';
import { TaskProvider } from './contexts/tasks.context';

const App = () => {
  return (
    <TaskProvider>
      <Overview />
    </TaskProvider>
  )
}

export default App;
