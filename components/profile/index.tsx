import { useState } from "react";
import {
   useSession,
   CombinedDataProvider,
   Image,
   LogoutButton,
   Text,
   Value,
} from "@inrupt/solid-ui-react";

import {
   Button,
   Card,
   CardActionArea,
   CardContent,
   Typography,
   Grid,
} from "@material-ui/core";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AppBar from "@material-ui/core/AppBar";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import EditIcon from "@material-ui/icons/Edit";
import ContactTable from "../contactTable";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      maxWidth: "100%",
      position: "relative",
      marginTop: "1.5rem",
   },
   content: {
      flex: "1 0 auto",
   },
   controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(2),
   },
   editIcon: {
      height: 38,
      width: 38,
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      borderRadius: "8px",
      width: "100%",
      backgroundColor: "#E5E7E9",
   },
   card: {
      maxWidth: 480,
      marginBottom: 16,
      bottom: theme.spacing(1),
      right: theme.spacing(1),
      backgroundClip: "#F8F9F9",
   },
   logoItem: {
      height: "4.3rem",
      padding: "3px",
   },
   logout: {
      top: "3.5rem !important",
      // border: "1px #75758836 solid",
      marginLeft: "75rem",
   },
   title: {
      fontSize: 14,
   },
}));

export default function LoginForm(): React.ReactElement {
   const classes = useStyles();
   const theme = useTheme();
   const { session } = useSession();
   const { webId } = session.info;
   const [editing, setEditing] = useState(false);

   return (
      <div>
         <AppBar
            position="static"
            elevation={3}
            style={{ backgroundColor: "white", width: "150%" }}
         >
            <Toolbar>
               <img
                  className={classes.logoItem}
                  src="/opp-logo.png"
                  alt="opp-logo"
               />
               <div style={{ flexGrow: 1 }}></div>
               <LogoutButton>
                  <Button variant="outlined">Log&nbsp;out</Button>
               </LogoutButton>
            </Toolbar>
         </AppBar>

         <div className={classes.root}>
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
               <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={3}
               >
                  <Grid item>
                     <Typography style={{ color: "#666a6f" }} variant="h4">
                        Healthcare Provider
                     </Typography>
                  </Grid>
                  <Grid item style={{ width: "50%" }}>
                     <Card>
                        <CardContent>
                           <table>
                              <tr>
                                 <td>
                                    <CardActionArea
                                       style={{
                                          display: "flex",
                                          height: 150,
                                          width: 150,
                                          overflow: "hidden",
                                       }}
                                    >
                                       <Image
                                          property={VCARD.hasPhoto.iri.value}
                                          width={150}
                                       />
                                    </CardActionArea>
                                 </td>
                                 <td style={{ width: "80rem" }}>
                                    <Typography
                                       gutterBottom
                                       variant="h5"
                                       component="h2"
                                    >
                                       <b>
                                          <Text
                                             property={FOAF.name.iri.value}
                                             edit={editing}
                                             autosave
                                          />
                                       </b>
                                    </Typography>
                                    <Typography
                                       gutterBottom
                                       variant="subtitle1"
                                       component="h3"
                                    >
                                       <BusinessCenterIcon color="primary" />
                                       <Text
                                          property={
                                             VCARD.organization_name.iri.value
                                          }
                                          edit={editing}
                                          autosave
                                       />
                                    </Typography>
                                    <Typography
                                       gutterBottom
                                       variant="subtitle1"
                                       component="h5"
                                    >
                                       {"Born: "}
                                       <Value
                                          property={VCARD.bday.iri.value}
                                          dataType="datetime"
                                          edit={editing}
                                          autosave
                                       />
                                    </Typography>
                                 </td>
                                 <td
                                    style={{
                                       width: "10rem",
                                       marginLeft: "90rem",
                                    }}
                                 >
                                    <EditIcon
                                       onClick={() => setEditing(!editing)}
                                       color="primary"
                                       fontSize="large"
                                       style={{ alignContent: "right" }}
                                    ></EditIcon>
                                 </td>
                              </tr>
                           </table>
                        </CardContent>
                     </Card>
                  </Grid>
                  <Grid item style={{ width: "50%" }}>
                     <Card title="Email Addresses">
                        <CardContent>
                           <Typography
                              gutterBottom
                              className={classes.title}
                              color="textSecondary"
                           >
                              Email Addresses
                           </Typography>

                           <ContactTable
                              property={VCARD.hasEmail.value}
                              edit={editing}
                           />
                        </CardContent>
                     </Card>
                  </Grid>
                  <Grid item style={{ width: "50%" }}>
                     <Card>
                        <CardContent>
                           <Typography
                              gutterBottom
                              className={classes.title}
                              color="textSecondary"
                           >
                              Phone Numbers
                           </Typography>
                           <ContactTable
                              property={VCARD.hasTelephone.value}
                              edit={editing}
                           />
                        </CardContent>
                     </Card>
                  </Grid>
               </Grid>
            </CombinedDataProvider>
         </div>
      </div>
   );
}
