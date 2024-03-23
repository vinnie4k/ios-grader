import { Link, Stack, Typography } from "@mui/material";

import A4Final from "./a4/A4Final";
import A4FinalGrader from "./a4/A4FinalGrader";
// import A4Midpoint from "./a4/A4Midpoint";
// import A4MidpointGrader from "./a4/A4MidpointGrader";
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
          Instructors should have already handled slip day usages so you can
          proceed even if the submission is late. If you are confused or unsure
          about the grading, please reach out to me.
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
          Points given for the feedback survey is up to the instuctors'
          discretion. Please reach out to the instructors if there are any
          questions.
        </Typography>

        <Typography variant="body1" component="p">
          For extra credit, the feature must be FULLY COMPLETE. The student’s
          submission TXT file should let you know if they attempted extra
          credit.
        </Typography>
      </Stack>

      {/* Temporarily Commented Out
      <A4Midpoint />
      <A4MidpointGrader /> */}

      <A4Final />
      <A4FinalGrader />
    </Stack>
  );
}
