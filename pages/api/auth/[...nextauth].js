import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      Credentials({
        credentials: {
          email: { label: "email", type: "text", placeholder: "email" },
          password: {
            label: "password",
            type: "password",
            placeholder: "password",
          },
        },
        authorize: async (credentials) => {
          try {
            if (!credentials || !credentials?.email || !credentials?.password) {
              throw new Error("No user found!");
            }
            return { email: user.email };
          } catch (e) {
            // const errorMessage = e.response.data.message;
            // throw new Error(errorMessage);
            return null;
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID ?? "",
        clientSecret: process.env.GOOGLE_SECRET ?? "",
      }),
    ],
    callbacks: {
      /* eslint-disable no-param-reassign */
      async signIn({ account, profile }) {
        // write you code here
        return true;
      },
      /* eslint-disable no-param-reassign */
    },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
