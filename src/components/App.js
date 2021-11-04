import { h, Fragment } from 'preact';
import styled, { createGlobalStyle } from 'styled-components';

const theme = {
  backgroundColor: "#eee",
};

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background: ${props => props.theme.backgroundColor};
  }
`;

const Layout = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  padding: 0.5rem;
`;

const App = () => 
  <Layout>
    <Fragment>
      <GlobalStyle theme={theme} />
    </Fragment>
    <Header>
      Hello, Parcel + Preact + Styled Components
    </Header>
  </Layout>
;

export default App;
