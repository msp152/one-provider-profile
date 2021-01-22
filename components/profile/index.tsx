/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";

import BusinessIcon from "@material-ui/icons/Business";

import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import EditIcon from '@material-ui/icons/Edit';
import ContactTable from "../contactTable";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: "wrap", 
    flexGrow: 1, 
    maxWidth: "100%",
    border: `1px solid ${theme.palette.divider}`,
    '& hr': {
      margin: theme.spacing(0, 0.5),
    }
  },
  content: {
    flex: '1 0 auto'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  editIcon: {
    height: 38,
    width: 38
  },
  paper: {
    padding: theme.spacing(1),
    borderRadius: "8px",
    width: "100%"
  },
  card: {
    maxWidth: 480, 
    marginBottom: 16,
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  },
}));

export default function LoginForm(): React.ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const { session } = useSession();
  const { webId } = session.info;
  const [editing, setEditing] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editBasic, setEditBasic] = useState(false);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper} square>
      <Box style={{ marginBottom: 16, textAlign: "right" }}>
        <LogoutButton>
          <Button variant="contained" color="primary">
            Log&nbsp;out
          </Button>
        </LogoutButton>
      </Box>
      <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
        <Card >
        <CardContent>
          <table>
            <tr>
              <td>
              <CardActionArea
            style={{
              display: "flex",
              height: 150,
              width: 150,
              borderRadius: 80,
              overflow:"hidden"
            }}
          >
            <Image property={VCARD.hasPhoto.iri.value} width={150} />
          </CardActionArea>
              </td>
              <td> <Divider orientation="vertical" flexItem /></td>
            <td>
           
            <Typography  gutterBottom variant="h5" component="h2">
             <b><Text property={FOAF.name.iri.value} edit={editing} autosave /></b>&ensp;&ensp;&ensp;&ensp;&ensp;
             <EditIcon  onClick={() => setEditing(!editing)} color="primary" fontSize="large" style={{alignContent:"right"}}></EditIcon>
            </Typography>
            <Typography  gutterBottom variant="subtitle1" component="h3" >
              <BusinessIcon /><Text
                property={VCARD.organization_name.iri.value}
                edit={editing}
                autosave
              />
            </Typography>
            <Typography  gutterBottom variant="subtitle1" component="h5" >
              {"Born: "}
              <Value
                property={VCARD.bday.iri.value}
                dataType="datetime"
                edit={editing}
                autosave
              />
            </Typography>
            </td>
            <td >
            
            </td>
            </tr>
          </table>
          </CardContent>
          </Card>
          <br></br>
          <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              Email Addresses
            </Typography>

            <ContactTable property={VCARD.hasEmail.value} edit={editing} />
          </CardContent>
            </Card>
            <br></br>
            <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              Phone Numbers
            </Typography>
            <ContactTable property={VCARD.hasTelephone.value} edit={editing} />
          </CardContent>
        </Card>
      </CombinedDataProvider>
      </Paper>
    </div>
  );
}
