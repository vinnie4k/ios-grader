import { Link, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing="64px">
      <Typography variant="h1" component="h1">
        Intro to iOS Assignment Grader
      </Typography>
      <Stack spacing="32px">
        <Link href="/ios-grader/#/a1">
          <Typography variant="h3" component="h3">
            A1: Swift Basics
          </Typography>
        </Link>
        <Link href="/ios-grader/#/a2">
          <Typography variant="h3" component="h3">
            A2: Profile
          </Typography>
        </Link>
        <Link href="/ios-grader/#/a3">
          <Typography variant="h3" component="h3">
            A3: ChatDev
          </Typography>
        </Link>
        <Link href="/ios-grader/#/a4">
          <Typography variant="h3" component="h3">
            A4: ChefOS
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
