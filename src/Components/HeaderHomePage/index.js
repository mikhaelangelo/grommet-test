import React, { Fragment } from "react";
import { Box, Heading } from "grommet";

class HeaderHomePage extends React.Component {
  render() {
    return (
      <Fragment>
        <Box
          margin={{
            left: "large",
            top: "large"
          }}
        >
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
        </Box>
      </Fragment>
    );
  }
}

export default HeaderHomePage;
