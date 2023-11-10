import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useState } from "react";

import A1GettingStarted from "./a1/A1GettingStarted";
import A1HandleSubmit from "./a1/A1HandleSubmit";
import A1Other from "./a1/A1Other";
import A1Todos from "./a1/A1Todos";
import Comments from "../components/Comments";
import Heading from "../components/Heading";
import NameInput from "../components/NameInput";
import Submission from "../components/Submission";
import Upload from "../components/Upload";

import a1_2 from "../assets/a1_2.png";

export default function AssignmentOne() {
  return (
    <Stack spacing="48px">
      <Heading name="🍼 A1: Swift Basics" />
      <Submission />
      <A1GettingStarted />
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
  const [todo1, setTodo1] = useState("");
  const [todo2, setTodo2] = useState("");
  const [todo3, setTodo3] = useState("");
  const [todo4, setTodo4] = useState("");
  const [todo5, setTodo5] = useState("");
  const [todo6, setTodo6] = useState("");
  const [todo7, setTodo7] = useState("");
  const [todo8, setTodo8] = useState("");
  const [todo9, setTodo9] = useState("");
  const [survey, setSurvey] = useState(false);
  const [crash, setCrash] = useState(false);
  const [comments, setComments] = useState("");

  return (
    <Box
      padding="64px"
      sx={{
        backgroundColor: "offWhite1.main",
        borderRadius: "24px",
      }}
    >
      <Stack spacing="48px">
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
        <A1Todos
          todo1={todo1}
          todo2={todo2}
          todo3={todo3}
          todo4={todo4}
          todo5={todo5}
          todo6={todo6}
          todo7={todo7}
          todo8={todo8}
          todo9={todo9}
          setTodo1={setTodo1}
          setTodo2={setTodo2}
          setTodo3={setTodo3}
          setTodo4={setTodo4}
          setTodo5={setTodo5}
          setTodo6={setTodo6}
          setTodo7={setTodo7}
          setTodo8={setTodo8}
          setTodo9={setTodo9}
        />

        <Stack direction="row">
          <A1Other
            survey={survey}
            crash={crash}
            setSurvey={setSurvey}
            setCrash={setCrash}
          />
          <Comments comments={comments} setComments={setComments} />
        </Stack>

        <Button
          variant="contained"
          color="blue"
          size="large"
          onClick={() => {
            A1HandleSubmit(
              graderName,
              graderNetID,
              studentName,
              studentNetID,
              todo1,
              todo2,
              todo3,
              todo4,
              todo5,
              todo6,
              todo7,
              todo8,
              todo9,
              survey,
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
        Instructors should have already handled slip day usages so you can
        proceed even if the submission is late. If you are confused or unsure
        about the grading, please reach out to me.
      </Typography>

      <Typography variant="body1" component="p">
        Input the number of NON{" "}
        <Typography color="ruby.main" component="span">
          RED
        </Typography>{" "}
        lines (passed test cases) for each function. If there is a{" "}
        <Typography color="green.main" component="span">
          GREEN
        </Typography>{" "}
        checkmark, input the max value. For example, I would input 1/4 for this
        function:
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          component="img"
          alt="Test Suite Example"
          src={a1_2}
          width="800px"
        />
      </Box>

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
    </Stack>
  );
}
