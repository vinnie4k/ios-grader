import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useState } from "react";

import A2Extra from "./a2/A2Extra";
import A2HandleSubmit from "./a2/A2HandleSubmit";
import A2Other from "./a2/A2Other";
import A2Part1 from "./a2/A2Part1";
import A2Part2 from "./a2/A2Part2";
import A2Part3 from "./a2/A2Part3";
import A2Part4 from "./a2/A2Part4";
import A2Part5 from "./a2/A2Part5";
import Comments from "../components/Comments";
import Heading from "../components/Heading";
import NameInput from "../components/NameInput";
import Submission from "../components/Submission";
import Upload from "../components/Upload";

export default function AssignmentTwo() {
  return (
    <Stack spacing="48px">
      <Heading name="🙎🏻‍♂️ A2: Profile" />
      <Submission />
      <Grading />
      <Grader />
      <Upload />
    </Stack>
  );
}

function Grader() {
  const [graderName, setGraderName] = useState("");
  const [graderNetID, setGraderNetID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentNetID, setStudentNetID] = useState("");
  const [part1_1, setPart1_1] = useState("");
  const [part1_2, setPart1_2] = useState("");
  const [part1_3, setPart1_3] = useState("");
  const [part2_1, setPart2_1] = useState("");
  const [part2_2, setPart2_2] = useState("");
  const [part3_1, setPart3_1] = useState("");
  const [part3_2, setPart3_2] = useState("");
  const [part3_3, setPart3_3] = useState("");
  const [part4_1, setPart4_1] = useState("");
  const [part4_2, setPart4_2] = useState("");
  const [part5_1, setPart5_1] = useState("");
  const [extra_1, setExtra_1] = useState("");
  const [extra_2, setExtra_2] = useState("");
  const [survey, setSurvey] = useState(false);
  const [crash, setCrash] = useState(false);
  const [helpers, setHelpers] = useState(false);
  const [comments, setComments] = useState("");

  return (
    <Box
      padding="64px"
      sx={{
        backgroundColor: "offWhite1.main",
        borderRadius: "24px",
      }}
    >
      <Stack spacing="64px">
        <NameInput
          graderName={graderName}
          graderNetID={graderNetID}
          studentName={studentName}
          studentNetID={studentNetID}
          setGraderName={setGraderName}
          setGraderNetID={setGraderNetID}
          setStudentName={setStudentName}
          setStudentNetID={setStudentNetID}
        />

        <A2Part1
          part1_1={part1_1}
          part1_2={part1_2}
          part1_3={part1_3}
          setPart1_1={setPart1_1}
          setPart1_2={setPart1_2}
          setPart1_3={setPart1_3}
        />

        <A2Part2
          part2_1={part2_1}
          part2_2={part2_2}
          setPart2_1={setPart2_1}
          setPart2_2={setPart2_2}
        />

        <A2Part3
          part3_1={part3_1}
          part3_2={part3_2}
          part3_3={part3_3}
          setPart3_1={setPart3_1}
          setPart3_2={setPart3_2}
          setPart3_3={setPart3_3}
        />

        <A2Part4
          part4_1={part4_1}
          part4_2={part4_2}
          setPart4_1={setPart4_1}
          setPart4_2={setPart4_2}
        />

        <A2Part5 part5_1={part5_1} setPart5_1={setPart5_1} />

        <A2Extra
          extra_1={extra_1}
          extra_2={extra_2}
          setExtra_1={setExtra_1}
          setExtra_2={setExtra_2}
        />

        <Stack spacing="24px">
          <Typography variant="h4" component="h4">
            Other
          </Typography>
          <Stack direction="row">
            <A2Other
              survey={survey}
              crash={crash}
              helpers={helpers}
              setSurvey={setSurvey}
              setCrash={setCrash}
              setHelpers={setHelpers}
            />
            <Comments comments={comments} setComments={setComments} />
          </Stack>
        </Stack>

        <Button
          variant="contained"
          color="blue"
          size="large"
          onClick={() => {
            A2HandleSubmit(
              graderName,
              graderNetID,
              studentName,
              studentNetID,
              part1_1,
              part1_2,
              part1_3,
              part2_1,
              part2_2,
              part3_1,
              part3_2,
              part3_3,
              part4_1,
              part4_2,
              part5_1,
              extra_1,
              extra_2,
              survey,
              helpers,
              crash,
              comments
            );
          }}
        >
          Generate Feedback File
        </Button>
      </Stack>
    </Box>
  );
}

function Grading() {
  return (
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
        If a submission is late, continue grading but let me know so I can check
        for slip day usages.
      </Typography>

      <Typography variant="body1" component="p">
        We only care about the running app. If the student attempted to
        implement something but it is not seen on the app, they do not get any
        credit. If you haven’t already, check out the{" "}
        <Link
          href="https://www.figma.com/file/Ap0BGIGMzSwOZRQ9O6iS01/A2%3A-Profile?type=design&node-id=86%3A2&mode=design&t=jRvNNuMT4MvOSUfB-1"
          color="blue.main"
        >
          Figma
        </Link>{" "}
        for a brief overview of the assignment requirements.
      </Typography>

      <Typography variant="body1" component="p">
        If a student does not implement ALL of the required UI for a section, or
        it looks partially complete, select{" "}
        <Typography color="ruby.main" component="span">
          Partial
        </Typography>
        .
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
        The student is also graded for having helper function calls in their{" "}
        <Typography color="ruby.main" component="span">
          viewDidLoad
        </Typography>{" "}
        method. Please check to make sure that they did this.
      </Typography>

      <Typography variant="body1" component="p">
        For extra credit, the feature must be FULLY COMPLETE. The student’s
        submission TXT file should let you know if they attempted extra credit.
      </Typography>
    </Stack>
  );
}
