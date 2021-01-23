import { Grid, Typography, Box } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";

export default function TimeLine(): React.ReactElement {
   return (
      <>
         <Box mt={5}>
            <Grid
               container
               direction="column"
               justify="center"
               alignItems="center"
               spacing={2}
            >
               <Grid item>
                  <Typography style={{ color: "#666a6f" }} variant="h4">
                     Your TimeLine
                  </Typography>
                  <Typography
                     style={{ color: "#676e77d6" }}
                     variant="subtitle2"
                  >
                     This is what happened to your data
                  </Typography>
               </Grid>
               <Grid item style={{ width: "45%" }}>
                  <Timeline align="alternate">
                     <TimelineItem>
                        <TimelineOppositeContent>
                           <Typography variant="body2" color="textSecondary">
                              Today at 9:30 am
                           </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot color="primary" variant="outlined">
                              <LaptopMacIcon />
                           </TimelineDot>
                           <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                           <Paper elevation={3} style={{ padding: "6px 16px" }}>
                              <Typography variant="h6">Read by OPP</Typography>
                              <Typography style={{ color: "#676e77" }}>
                                 Read profile info from your pod
                              </Typography>
                           </Paper>
                        </TimelineContent>
                     </TimelineItem>

                     <TimelineItem>
                        <TimelineOppositeContent>
                           <Typography variant="body2" color="textSecondary">
                              Jan 20<sup>th</sup> at 02:20 pm
                           </Typography>
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                           <TimelineDot color="primary" variant="outlined">
                              <img
                                 style={{
                                    height: "20px",
                                    width: "20px",
                                    padding: "3px",
                                 }}
                                 src="/uhc_u.png"
                              />
                           </TimelineDot>
                           <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                           <Paper elevation={3} style={{ padding: "6px 16px" }}>
                              <Typography variant="h6">Read by UHG</Typography>
                              <Typography style={{ color: "#676e77" }}>
                                 Read events from your pod
                              </Typography>
                           </Paper>
                        </TimelineContent>
                     </TimelineItem>

                     <TimelineItem>
                        <TimelineOppositeContent>
                           <Typography variant="body2" color="textSecondary">
                              Jan 19<sup>th</sup> at 10:30 am
                           </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                           <TimelineDot color="primary" variant="outlined">
                              <img
                                 style={{
                                    height: "20px",
                                    width: "20px",
                                    padding: "3px",
                                 }}
                                 src="/Aetna.png"
                              />
                           </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                           <Paper elevation={3} style={{ padding: "6px 16px" }}>
                              <Typography variant="h6">
                                 Read by Aetna
                              </Typography>
                              <Typography style={{ color: "#676e77" }}>
                                 Read profile info from your pod
                              </Typography>
                           </Paper>
                        </TimelineContent>
                     </TimelineItem>
                  </Timeline>
               </Grid>
            </Grid>
         </Box>
      </>
   );
}
