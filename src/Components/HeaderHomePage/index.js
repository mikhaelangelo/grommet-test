import React, { Fragment } from "react";
import { Heading } from "grommet";

class HeaderHomePage extends React.Component {
  render() {
    return (
      <Fragment>
        <Heading
          level="3"
          alignSelf="start"
          margin="xsmall"
          responsive
          textAlign="end"
        >
          Bem-vindo ao setor de
        </Heading>
        <Heading
          level="1"
          alignSelf="start"
          margin="xsmall"
          responsive
          textAlign="end"
        >
          Soluções Web e Mobile
        </Heading>
      </Fragment>
    );
  }
}

export default HeaderHomePage;
