import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "../components/Meta";

const theme = {
  darkGreen: "#1b6e43",
  paleGreen: "#95f188",
  black: "#393939",
  grey: "#3A3A3A",
  darkGrey: "#333234",
  orange: "#a86914",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1200px",
  outerWidth: "100%",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.outerWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

class Page extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
        <GlobalStyle />
      </>
    );
  }
}

Page.propTypes = {
  children: PropTypes.shape({})
};

export default Page;
