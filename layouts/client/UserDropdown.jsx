import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const UserDropdown = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const handleSignout = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/login",
    });
    push(data.url);
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded="full"
        variant="link"
        cursor="pointer"
        minW={0}
        flexDirection="row"
        rightIcon={<ChevronDownIcon />}
      >
        <Avatar
          size="sm"
          src={
            session?.user?.image ??
            "https://avatars.dicebear.com/api/male/username.svg"
          }
        />
      </MenuButton>

      <MenuList
        bg={useColorModeValue("white", "teal.900")}
        alignItems="center"
        zIndex={999}
      >
        <br />
        <Center>
          <Avatar
            size="2xl"
            src={
              session?.user?.image ??
              "https://avatars.dicebear.com/api/male/username.svg"
            }
          />
        </Center>
        <br />
        <Center>
          <p>{session?.user?.email ?? session?.user?.name}</p>
        </Center>
        <br />
        <MenuDivider />
        <Link href="/dashboard">
          <MenuItem>Dashboard</MenuItem>
        </Link>
        <Link href="/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem
          onClick={() => {
            handleSignout();
          }}
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserDropdown;
