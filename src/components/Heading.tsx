import { Stack, Typography } from "@mui/material";

export default function Heading(headingProps: HeadingProps) {
  return (
    <Stack spacing="4px">
      <Typography variant="h1" component="h1">
        {headingProps.name}
      </Typography>
      <Typography variant="subtitle1" component="p">
        Original Author: Vin Bui
      </Typography>
    </Stack>
  );
}

interface HeadingProps {
  name: string;
}
