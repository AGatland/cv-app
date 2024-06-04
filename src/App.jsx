import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {

  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path='/' element={<div />} />
      </Routes>
    </MantineProvider>
  )
}

export default App
