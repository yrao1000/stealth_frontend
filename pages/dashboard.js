import { useEffect } from "react";
import { useRouter } from "next/router";
import { withSSRContext } from "aws-amplify";
import { useAuthenticator, Heading, View } from "@aws-amplify/ui-react";
//import { StealthApiStack } from "../../cdk_backend/outputs.json";

export async function getServerSideProps({ req }) {
  const { Auth } = withSSRContext({ req });

  let user;

  try {
    user = await Auth.currentAuthenticatedUser();
  } catch (err) {}

  if (!user) {
    console.log("User not found");
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
  console.log("Since user found, opening up this page");
  return { props: {} };
}
export default function Settings() {
  const { user, authStatus } = useAuthenticator((context) => [context.route]);
  const router = useRouter();
  if (user) {
    //const metricsUrl = StealthApiStack.metricsApiEndpoint9794D2A9 + "metrics";
    const metricsUrl = process.env.API_ENDPOINT + "metrics";
    console.log(metricsUrl);
    const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
    const getData = async () => {
      const getMetricsResult = await fetch(metricsUrl, {
        method: "GET",
        headers: {
          Authorization: jwtToken,
        },
      });
      const getMetricsResultJson = await getMetricsResult.json();
      console.log(getMetricsResultJson);
    };
    getData();
  }

  useEffect(() => {
    if (
      authStatus &&
      authStatus !== "authenticated" &&
      authStatus !== "configuring"
    ) {
      router.push("/login");
    }
  }, [authStatus]);

  return <>HI</>;
}
