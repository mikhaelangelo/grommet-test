import React, { Component, Fragment } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";

class Sidebar extends Component {
  render() {
    const { size, showSidebar } = this.props;
    return (
      <Fragment>
        {!showSidebar || size !== "small" ? (
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              flex
              width="medium"
              background="dark-1"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Collapsible>
        ) : (
          <Layer>
            <Box
              background="dark-1"
              tag="header"
              justify="end"
              align="center"
              direction="row"
            >
              <Button
                icon={<FormClose />}
                onClick={() => this.setState({ showSidebar: false })}
              />
            </Box>
            <Box fill background="dark-1" align="center" justify="center">
              sidebar
            </Box>
          </Layer>
        )}
      </Fragment>
    );
  }
}

export default Sidebar;
