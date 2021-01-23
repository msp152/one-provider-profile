import { useState, useEffect } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import {
   Container,
   Grid,
   Typography,
   Avatar,
   Button,
   Box,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import LinkIcon from "@material-ui/icons/Link";
import AddBoxIcon from "@material-ui/icons/AddBox";
import styles from "./loginForm.module.css";

export default function LoginForm(): React.ReactElement {
   const [solidIdp, setSolidIdp] = useState("https://solidcommunity.net");
   const [inruptIdp, setInruptIdp] = useState("https://inrupt.net");
   const [currentUrl, setCurrentUrl] = useState("https://localhost:3000");

   useEffect(() => {
      setCurrentUrl(window.location.href);
   }, [setCurrentUrl]);

   return (
      <div style={{ display: "flex", height: "100vh", flex: "1 1 auto" }}>
         <Container maxWidth="md">
            <Grid
               container
               direction="column"
               justify="center"
               alignItems="center"
               spacing={3}
               style={{
                  borderRadius: "1rem",
                  border: "1px solid #676e7726",
                  marginTop: "10rem",
               }}
            >
               <Grid item>
                  <img
                     className={styles.logoItem}
                     src="/opp-logo.png"
                     alt="opp-logo"
                  />
               </Grid>
               <Grid item>
                  <Typography
                     style={{
                        color: "#676e77",
                        fontWeight: 400,
                        fontSize: "1.2rem",
                        textTransform: "uppercase",
                     }}
                     variant="h6"
                  >
                     Connect your pods
                  </Typography>
               </Grid>
               <Grid item style={{ width: "100%" }}>
                  <Grid
                     container
                     direction="row"
                     justify="center"
                     alignItems="center"
                     spacing={3}
                  >
                     <Grid item style={{ width: "43%" }}>
                        <Card>
                           <CardHeader
                              avatar={<Avatar src="/solid-logo.svg"></Avatar>}
                              title="Solid Community"
                              subheader="https://solidcommunity.net"
                           />
                           <CardActions>
                              <Box
                                 display="flex"
                                 flexDirection="column"
                                 justifyContent="center"
                              >
                                 <LoginButton
                                    oidcIssuer={solidIdp}
                                    redirectUrl={currentUrl}
                                 >
                                    <Button
                                       size="large"
                                       className={styles.button}
                                       startIcon={<LinkIcon />}
                                    >
                                       Connect to an existing pod
                                    </Button>
                                 </LoginButton>
                                 <LoginButton
                                    oidcIssuer={solidIdp}
                                    redirectUrl={currentUrl}
                                 >
                                    <Button
                                       size="large"
                                       className={styles.button}
                                       startIcon={<AddBoxIcon />}
                                    >
                                       Create a new pod
                                    </Button>
                                 </LoginButton>
                              </Box>
                           </CardActions>
                        </Card>
                     </Grid>
                     <Grid item style={{ width: "43%" }}>
                        <Card>
                           <CardHeader
                              avatar={<Avatar src="/inrupt.jpeg"></Avatar>}
                              title="Inrupt Community"
                              subheader="https://inrupt.net"
                           />
                           <CardActions>
                              <Box
                                 display="flex"
                                 flexDirection="column"
                                 justifyContent="center"
                              >
                                 <LoginButton
                                    oidcIssuer={inruptIdp}
                                    redirectUrl={currentUrl}
                                 >
                                    <Button
                                       size="large"
                                       style={{ width: "100%" }}
                                       startIcon={<LinkIcon />}
                                    >
                                       Connect to an existing pod
                                    </Button>
                                 </LoginButton>
                                 <LoginButton
                                    oidcIssuer={inruptIdp}
                                    redirectUrl={currentUrl}
                                 >
                                    <Button
                                       size="large"
                                       className={styles.button}
                                       startIcon={<AddBoxIcon />}
                                    >
                                       Create a new pod
                                    </Button>
                                 </LoginButton>
                              </Box>
                           </CardActions>
                        </Card>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      </div>
   );
}
