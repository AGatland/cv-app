
import '@mantine/core/styles.css';
import { AppShell, MantineProvider, createTheme } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cvpage from './cvpage';
import Footer from './components/Footer';

const theme = createTheme({
});

function App() {

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme} >
      <AppShell>
        <AppShell.Header style={{border: "0"}} >
          <Header/>
        </AppShell.Header>
        <AppShell.Main>
          <Routes>
            <Route path='/' element={<Cvpage />} />
          </Routes>
        </AppShell.Main>
        <Footer />
      </AppShell>
    </MantineProvider>
  )
}

export { App }
