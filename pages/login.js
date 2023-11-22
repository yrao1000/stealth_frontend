import { useEffect } from "react";
import { useRouter } from "next/router";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";

function Login() {
  const router = useRouter();
  const { ref } = router.query;
  const { authStatus } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (authStatus && authStatus === "authenticated") {
      router.push(ref ? `${ref}` : "/dashboard");
    }
  });

  return <></>;
}

export default withAuthenticator(Login);
