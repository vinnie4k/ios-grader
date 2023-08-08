import { Link, Stack, Typography } from "@mui/material";

import A4Final from "./a4/A4Final";
import A4FinalGrader from "./a4/A4FinalGrader";
import A4Midpoint from "./a4/A4Midpoint";
import A4MidpointGrader from "./a4/A4MidpointGrader";
import Heading from "../components/Heading";
import Submission from "../components/Submission";
import Upload from "../components/Upload";

export default function AssignmentFour() {
  return (
    <Stack spacing="48px">
      <Heading name="🧑🏻‍🍳 A4: ChefOS" />
      <Submission />
      <Grading />
      <Upload />
    </Stack>
  );
}

function Grading() {
  return (
    <Stack spacing="32px">
      <Stack spacing="20px">
        <Stack spacing="4px">
          <Typography variant="h2" component="h2">
            Grading
          </Typography>

          <Typography variant="subtitle2" component="p">
            Fill in the text fields to generate a feedback TXT file.
          </Typography>
        </Stack>

        <Typography variant="body2" component="p">
          If a submission is late, continue grading but let me know so I can
          check for slip day usages. If you are confused or unsure about the
          grading, please reach out to me.
        </Typography>

        <Typography variant="body1" component="p">
          We only care about the running app. If the student attempted to
          implement something but it is not seen on the app, they do not get any
          credit. If you haven’t already, check out the{" "}
          <Link
            href="https://www.figma.com/file/rCPlphpMKQZDLFIld6x0Cj/A4%3A-ChefOS?type=design&node-id=0%3A1&mode=design&t=p1KuxUblKI9ihlJO-1"
            color="blue.main"
          >
            Figma
          </Link>{" "}
          for a brief overview of the assignment requirements.
        </Typography>

        <Typography variant="body2" component="p">
          Only features implemented after the midpoint checkpoint will receive
          partial credit.
        </Typography>

        <Typography variant="body1" component="p">
          This{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1sT6ManOm_utQIro1uaX3ahWe4WtoXzPlism8ULNRrzI/edit?usp=sharing"
            color="blue.main"
          >
            spreadsheet
          </Link>{" "}
          contains the responses to the feedback survey. Look for the student’s
          name and NetID. Make sure that the student has a response for the
          correct assignment (under the Assignment column).
        </Typography>

        <Typography variant="body1" component="p">
          For extra credit, the feature must be FULLY COMPLETE. The student’s
          submission TXT file should let you know if they attempted extra
          credit.
        </Typography>
      </Stack>

      <A4Midpoint />
      <A4MidpointGrader />

      <A4Final />
      <A4FinalGrader />
    </Stack>
  );
}
