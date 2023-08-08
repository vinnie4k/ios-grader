import { Stack, Typography } from "@mui/material";

export default function A4Midpoint() {
  return (
    <Stack spacing="20px">
      <Typography variant="h3" component="h3">
        Midpoint Submission
      </Typography>

      <Typography variant="body1" component="p">
        Students will receive{" "}
        <Typography variant="body2" component="span">
          FULL CREDIT
        </Typography>{" "}
        if they submit their midpoint submission on time, even if the app
        crashes as long as they show some progress. However, we will still give
        them feedback to make sure they are on track.
      </Typography>
    </Stack>
  );
}
