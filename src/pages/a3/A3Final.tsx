import { Stack, Typography } from "@mui/material";

export default function A3Final() {
  return (
    <Stack spacing="20px">
      <Typography variant="h3" component="h3">
        Final Submission
      </Typography>

      <Typography variant="body1" component="p">
        We are grading this for{" "}
        <Typography variant="body2" component="span">
          CORRECTNESS
        </Typography>
        .
      </Typography>
    </Stack>
  );
}
