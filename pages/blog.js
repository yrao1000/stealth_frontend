import { useEffect } from "react";
import { useRouter } from "next/router";
import { withSSRContext } from "aws-amplify";
import { useAuthenticator, Heading, View } from "@aws-amplify/ui-react";


export async function getServerSideProps({ req }) {
  const { Auth } = withSSRContext({ req });

  let user;

  try {
    user = await Auth.currentAuthenticatedUser();
  } catch (err) {}

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
  return { props: {} };
}
export default function Settings() {
  const { user, authStatus } = useAuthenticator((context) => [context.route]);
  const router = useRouter();

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
