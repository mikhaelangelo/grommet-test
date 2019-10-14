import React, { Component } from "react";
import {
  Box,
  Button,
  Collapsible,
  Drop,
  Grid,
  Grommet,
  Heading,
  Image,
  Layer,
  ResponsiveContext
} from "grommet";
import { Article, FormClose, Notification } from "grommet-icons";
import NavbarTop from "./Components/NavbarTop";

const theme = {
  global: {
    colors: {
      brand: "hsl(245, 17%, 28.8%)",
      background: {
        dark: true,
        opacity: true,
        backgroundColor: "light-1",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./path_1486.svg)"
      }
    },
    font: {
      family: "Josefin Sans",
      size: "16px",
      height: "20px"
    }
  },
  anchor: {
    color: "light-1"
  }
};

const Navbar = React.forwardRef((props, ref) => (
  <NavbarTop ref={ref} handler={props.handler}></NavbarTop>
));

class App extends Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
  }

  state = {
    showSidebar: false
  };

  changeState() {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  }
  render() {
    const { showSidebar } = this.state;
    const ref = React.createRef();
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <Grid
                columns={["minmax(0, 1fr)", "medium"]}
                rows={["small", "minmax(0, 1fr)"]}
                gap="small"
                fill="true"
                areas={[
                  { name: "nav", start: [1, 0], end: [1, 0] },
                  { name: "main", start: [0, 1], end: [1, 1] },
                  { name: "header", start: [0, 0], end: [0, 0] }
                ]}
              >
                <Box gridArea="header" justify="end">
                  <Heading
                    level="3"
                    alignSelf="start"
                    margin="xsmall"
                    responsive="true"
                    textAlign="end"
                  >
                    Bem-vindo ao setor de
                  </Heading>
                  <Heading
                    level="1"
                    alignSelf="start"
                    margin="xsmall"
                    responsive="true"
                    textAlign="end"
                  >
                    Soluções Web e Mobile
                  </Heading>
                </Box>

                <Navbar ref={ref} handler={this.changeState}></Navbar>

                <Drop target={ref.current}></Drop>
                <Box
                  gridArea="main"
                  direction="row"
                  flex
                  overflow={{ horizontal: "hidden" }}
                >
                  <Box flex align="center" justify="center">
                    <Grid
                      columns={["medium", "minmax(0, 1fr)"]}
                      rows={["minmax(0, 1fr)"]}
                      gap="small"
                      fill="true"
                      areas={[
                        { name: "bodyImage", start: [1, 0], end: [1, 0] },
                        { name: "body", start: [0, 0], end: [0, 0] }
                      ]}
                    >
                      <Box gridArea="bodyImage" width="100%" height="100%">
                        <Image src="./setor_ti.svg" fit="contain" />
                      </Box>
                    </Grid>
                  </Box>
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
                      <Box
                        fill
                        background="dark-1"
                        align="center"
                        justify="center"
                      >
                        sidebar
                      </Box>
                    </Layer>
                  )}
                </Box>
              </Grid>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
