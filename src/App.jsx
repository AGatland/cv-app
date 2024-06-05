import classes from './App.module.css'
import '@mantine/core/styles.css';
import { AppShell, MantineProvider, createTheme } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import assetBg from './assets/bg.jpg'
import Cvpage from './cvpage';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme} >
      <AppShell header={classes.header}>
        <AppShell.Header style={{border: "0", backgroundImage: `url(${assetBg})`}} >
          <Header/>
        </AppShell.Header>
        <AppShell.Main style={{backgroundImage: `url(${assetBg})`}}>
          <Routes>
            <Route path='/' element={<Cvpage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export { App }
