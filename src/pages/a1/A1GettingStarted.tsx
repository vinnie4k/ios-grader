import { Box, Stack, Typography } from "@mui/material";
import a1_1 from "../../assets/a1_1.png";

export default function A1GettingStarted() {
  return (
    <Stack spacing="20px">
      <Typography variant="h2" component="h2">
        Getting Started
      </Typography>

      <Stack direction="row" spacing="32px">
        <Stack spacing="8px">
          <Typography variant="body1" component="p">
            1. Open the Xcode project and switch to the test navigator on the
            left.
          </Typography>

          <Typography variant="body1" component="p">
            2. Run the test suite by clicking on the play button next to{" "}
            <Typography color="ruby.main" component="span">
              A1Tests
            </Typography>
            . You can ignore the Simulator if it opens in the background.
          </Typography>
        </Stack>

        <Box component="img" alt="Test Navigator" src={a1_1} width="196px" />
      </Stack>
    </Stack>
  );
}
