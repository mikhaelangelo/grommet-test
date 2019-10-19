import React, { Component } from "react";
import {
  Box,
  Button,
  Collapsible,
  Grid,
  Grommet,
  Image,
  Layer,
  ResponsiveContext
} from "grommet";
import { FormClose } from "grommet-icons";
import NavbarTop from "./Components/NavbarTop";
import HeaderHomePage from "./Components/HeaderHomePage";

const theme = {
  global: {
    colors: {
      brand: "hsl(245, 17%, 28.8%)",
      background: {
        dark: true,
        opacity: true,
        backgroundColor: "light-1",
        background: "#f8f8f8 url(./path_1486.svg) no-repeat right",
        backgroundSize: "contain"
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
                rows={["auto", "minmax(0, 1fr)"]}
                gap="small"
                fill
                areas={[
                  { name: "nav", start: [1, 0], end: [1, 0] },
                  { name: "main", start: [0, 1], end: [1, 1] },
                  { name: "header", start: [0, 0], end: [0, 0] }
                ]}
              >
                <Box gridArea="header" justify="end">
                  <HeaderHomePage></HeaderHomePage>
                </Box>

                <Navbar ref={ref} handler={this.changeState}></Navbar>
                <Box gridArea="main" direction="row" flex overflow="visible">
                  <Box flex align="center" justify="center">
                    <Grid
                      columns={["medium", "minmax(0, 1fr)"]}
                      rows={["minmax(0, 1fr)"]}
                      gap="small"
                      fill
                      alignContent="center"
                      areas={[
                        { name: "bodyImage", start: [1, 0], end: [1, 0] },
                        { name: "body", start: [0, 0], end: [0, 0] }
                      ]}
                    >
                      <Box gridArea="bodyImage" width="100%" height="100%">
                        <Image src="./setor_ti.svg" fit="contain" />
                      </Box>
                      <Box
                        gridArea="body"
                        width="100%"
                        height="100%"
                        justify="center"
                        margin={{ left: "small" }}
                      >
                        <p>
                          Mussum Ipsum, cacilds vidis litro abertis. A ordem dos
                          tratores não altera o pão duris. Suco de cevadiss, é
                          um leite divinis, qui tem lupuliz, matis, aguis e
                          fermentis. Si u mundo tá muito paradis? Toma um mé que
                          o mundo vai girarzis! Interagi no mé, cursus quis,
                          vehicula ac nisi. Tá deprimidis, eu conheço uma
                          cachacis que pode alegrar sua vidis. Si num tem leite
                          então bota uma pinga aí cumpadi! Leite de capivaris,
                          leite de mula manquis sem cabeça. Sapien in monti
                          palavris qui num significa nadis i pareci latim. Todo
                          mundo vê os porris que eu tomo, mas ninguém vê os
                          tombis que eu levo! Copo furadis é disculpa de
                          bebadis, arcu quam euismod magna. Mais vale um bebadis
                          conhecidiss, que um alcoolatra anonimis. Em pé sem
                          cair, deitado sem dormir, sentado sem cochilar e
                          fazendo pose.
                        </p>
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
