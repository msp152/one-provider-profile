import { SessionProvider } from "@inrupt/solid-ui-react";

interface IApp {
   Component: React.ComponentType<any>;
   pageProps: any;
}

export default function App(props: IApp): React.ReactElement {
   const { Component, pageProps } = props;

   return (
      <>
         <SessionProvider sessionId="react-sdk-example-project">
            <Component {...pageProps} />
         </SessionProvider>
         <style jsx global>{`
            body {
               background-color: #f4f6f8;
               height: 100vh;
               display: "flex";
               overflow: "hidden";
               width: "100%";
               margin: 0;
            }
         `}</style>
      </>
   );
}
