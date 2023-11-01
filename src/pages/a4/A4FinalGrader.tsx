import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

import A4Extra from "./A4Extra";
import A4HandleSubmitFinal from "./A4HandleSubmitFinal";
import A4Other from "./A4Other";
import A4Part1 from "./A4Part1";
import A4Part2 from "./A4Part2";
import A4Part3 from "./A4Part3";
import A4Part4 from "./A4Part4";
import A4Part5 from "./A4Part5";
import Comments from "../../components/Comments";
import NameInput from "../../components/NameInput";

export default function A3FinalGrader() {
  const [graderName, setGraderName] = useState("");
  const [graderNetID, setGraderNetID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentNetID, setStudentNetID] = useState("");
  const [part1_1, setPart1_1] = useState("");
  const [part1_2, setPart1_2] = useState("");
  const [part1_3, setPart1_3] = useState("");
  const [part2_1, setPart2_1] = useState("");
  const [part2_2, setPart2_2] = useState("");
  const [part2_3, setPart2_3] = useState("");
  const [part3_1, setPart3_1] = useState("");
  const [part3_2, setPart3_2] = useState("");
  const [part3_3, setPart3_3] = useState("");
  const [part4_1, setPart4_1] = useState("");
  const [part5_1, setPart5_1] = useState("");
  const [part5_2, setPart5_2] = useState("");
  const [extra_1, setExtra_1] = useState("");
  const [extra_2, setExtra_2] = useState("");
  const [extra_3, setExtra_3] = useState("");
  const [extra_4, setExtra_4] = useState("");
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

        <A4Part1
          part1_1={part1_1}
          part1_2={part1_2}
          part1_3={part1_3}
          setPart1_1={setPart1_1}
          setPart1_2={setPart1_2}
          setPart1_3={setPart1_3}
        />

        <A4Part2
          part2_1={part2_1}
          part2_2={part2_2}
          part2_3={part2_3}
          setPart2_1={setPart2_1}
          setPart2_2={setPart2_2}
          setPart2_3={setPart2_3}
        />

        <A4Part3
          part3_1={part3_1}
          part3_2={part3_2}
          part3_3={part3_3}
          setPart3_1={setPart3_1}
          setPart3_2={setPart3_2}
          setPart3_3={setPart3_3}
        />

        <Typography variant="h3" component="h3">
          If attempted but not functioning, select Partial.
        </Typography>

        <A4Part4 part4_1={part4_1} setPart4_1={setPart4_1} />

        <A4Part5
          part5_1={part5_1}
          part5_2={part5_2}
          setPart5_1={setPart5_1}
          setPart5_2={setPart5_2}
        />

        <A4Extra
          extra_1={extra_1}
          extra_2={extra_2}
          extra_3={extra_3}
          extra_4={extra_4}
          setExtra_1={setExtra_1}
          setExtra_2={setExtra_2}
          setExtra_3={setExtra_3}
          setExtra_4={setExtra_4}
        />

        <Stack spacing="24px">
          <Typography variant="h4" component="h4">
            Other
          </Typography>
          <Stack direction="row">
            <A4Other
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
            A4HandleSubmitFinal(
              graderName,
              graderNetID,
              studentName,
              studentNetID,
              part1_1,
              part1_2,
              part1_3,
              part2_1,
              part2_2,
              part2_3,
              part3_1,
              part3_2,
              part3_3,
              part4_1,
              part5_1,
              part5_2,
              extra_1,
              extra_2,
              extra_3,
              extra_4,
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
