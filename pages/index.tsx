import { useSession } from "@inrupt/solid-ui-react/dist";
import LoginForm from "../components/loginForm";
import Profile from "../components/profile";
import Timeline from "../components/timeline";
import Divider from "@material-ui/core/Divider";
import { Box } from "@material-ui/core";

export default function Home(): React.ReactElement {
   const { session } = useSession();

   if (!session.info.isLoggedIn) {
      return <LoginForm />;
   }

   return (
      <>
         <Profile />
         <Box mt={3}>
            <Divider />
         </Box>

         <Timeline />
      </>
   );
}
