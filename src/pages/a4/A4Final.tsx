import { Stack, Typography } from "@mui/material";

export default function A4Final() {
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
        . If the student attempted the features in Parts IV/V but is not
        functioning, select{" "}
        <Typography variant="body2" component="span">
          Partial
        </Typography>
        . If you are unsure or confused about the grading, please reach out to
        me.
      </Typography>
    </Stack>
  );
}
