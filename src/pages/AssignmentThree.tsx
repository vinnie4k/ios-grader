import { Link, Stack, Typography } from "@mui/material";

import A3Final from "./a3/A3Final";
import A3FinalGrader from "./a3/A3FinalGrader";
// import A3Midpoint from "./a3/A3Midpoint";
// import A3MidpointGrader from "./a3/A3MidpointGrader";
import Heading from "../components/Heading";
import Submission from "../components/Submission";
import Upload from "../components/Upload";

export default function AssignmentThree() {
  return (
    <Stack spacing="48px">
      <Heading name="💬 A3: ChatDev" />
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
            href="https://www.figma.com/file/kzgaF8pBYQLgjyWDyIzKSh/A3%3A-ChatDev?type=design&node-id=1%3A1199&mode=design&t=zlffVA9qym1I7G7a-1"
            color="blue.main"
          >
            Figma
          </Link>{" "}
          for a brief overview of the assignment requirements.
        </Typography>

        <Typography variant="body2" component="p">
          Unlike A2, there is no partial credit for the UI features. It will be
          all or nothing. However, there will be partial credit for
          functionality.
        </Typography>

        <Typography variant="body1" component="p">
          Points given for the feedback survey is up to the instuctors'
          discretion. Please reach out to the instructors if there are any
          questions.
        </Typography>

        <Typography variant="body1" component="p">
          The student is also graded for having helper function calls in their{" "}
          <Typography color="ruby.main" component="span">
            viewDidLoad
          </Typography>{" "}
          method. Please check to make sure that they did this.
        </Typography>

        <Typography variant="body1" component="p">
          For extra credit, the feature must be FULLY COMPLETE. The student’s
          submission TXT file should let you know if they attempted extra
          credit.
        </Typography>
      </Stack>

      {/* Temporarily Commented Out
      <A3Midpoint />
      <A3MidpointGrader /> */}

      <A3Final />
      <A3FinalGrader />
    </Stack>
  );
}
