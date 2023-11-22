import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
//import { StealthAuthStack } from "../../cdk_backend/outputs.json";
import ThemeProvider from "@/styles/theme";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import { usePathname } from "next/navigation";

// Setting up AWS Amplify
Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
  ssr: true,
});
console.log(process.env.USER_POOL_ID);
console.log(process.env.USER_POOL_CLIENT_ID);
function App({ Component, pageProps }) {
  const pathName = usePathname();
  const unSecurePaths = ["/", "/login"];
  return (
    <Authenticator.Provider>
      <ThemeProvider>
        {unSecurePaths.includes(pathName) && <Component {...pageProps} />}
        {!unSecurePaths.includes(pathName) && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

export default App;
