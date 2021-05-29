import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Providers.Twitter({
    //   clientId: "",
    //   clientSecret: "",
    // }),
    // Providers.Email({
    //   server: {
    //     host: "",
    //     port: 3,
    //     auth: {
    //       user: "",
    //       pass: "",
    //     },
    //   },
    //   from: "",
    // }),
  ],
};

// @ts-ignore
export default (req, res) => NextAuth(req, res, options);
