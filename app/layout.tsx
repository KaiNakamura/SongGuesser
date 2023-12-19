import SessionProvider from "@/components/SessionProvider/SessionProvider";
import { theme } from "@/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Song Guesser",
  description: "A song guessing game",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <SessionProvider session={session}>{children}</SessionProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
