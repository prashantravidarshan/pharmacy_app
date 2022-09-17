import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const SocialSignIn = () => {
  return (
    <Wrap spacing={4}>
      <WrapItem>
        <Button
          p="4"
          bg="#ea4335"
          color="white"
          title="google"
          onClick={() => signIn("google")}
        >
          <FaGoogle size="16" />
        </Button>
      </WrapItem>
    </Wrap>
  );
};

export default SocialSignIn;
