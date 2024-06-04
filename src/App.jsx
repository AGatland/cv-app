import classes from './App.module.css'
import '@mantine/core/styles.css';
import { AppShell, MantineProvider, createTheme } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <AppShell header={classes.header}>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Routes>
            <Route path='/' element={<div style={{height: "3000px"}}/>} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export { App }
