import React, { Component } from "react";
import { Box, Anchor, Button } from "grommet";
import { Article } from "grommet-icons";

const AppBar = props => (
  <Box
    tag="header"
    gridArea="nav"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "small", right: "small", vertical: "medium" }}
    margin={{ right: "medium" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

class NavbarTop extends Component {
  render() {
    return (
      <AppBar>
        <Button icon={<Article />} onClick={() => this.props.handler()} />
        <Anchor href="#" primary label="Quem somos" />
        <Anchor href="#" primary label="Projetos" />
        <Anchor href="#" primary label="A Comet" />
      </AppBar>
    );
  }
}

export default NavbarTop;
