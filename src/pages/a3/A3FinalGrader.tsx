import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

import A3Extra from "./A3Extra";
import A3HandleSubmitFinal from "./A3HandleSubmitFinal";
import A3Other from "./A3Other";
import A3Part1 from "./A3Part1";
import A3Part2 from "./A3Part2";
import A3Part3 from "./A3Part3";
import A3Part4 from "./A3Part4";
import A3Part5 from "./A3Part5";
import Comments from "../../components/Comments";
import NameInput from "../../components/NameInput";

export default function A3FinalGrader() {
  const [graderName, setGraderName] = useState("");
  const [graderNetID, setGraderNetID] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentNetID, setStudentNetID] = useState("");
  const [part1_1, setPart1_1] = useState("");
  const [part1_2, setPart1_2] = useState("");
  const [part2_1, setPart2_1] = useState("");
  const [part2_2, setPart2_2] = useState("");
  const [part2_3, setPart2_3] = useState("");
  const [part3_1, setPart3_1] = useState("");
  const [part3_2, setPart3_2] = useState("");
  const [part4_1, setPart4_1] = useState("");
  const [part5_1, setPart5_1] = useState("");
  const [part5_2, setPart5_2] = useState("");
  const [extra_1, setExtra_1] = useState("");
  const [extra_2, setExtra_2] = useState("");
  const [extra_3, setExtra_3] = useState("");
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

        <A3Part1
          part1_1={part1_1}
          part1_2={part1_2}
          setPart1_1={setPart1_1}
          setPart1_2={setPart1_2}
        />

        <A3Part2
          part2_1={part2_1}
          part2_2={part2_2}
          part2_3={part2_3}
          setPart2_1={setPart2_1}
          setPart2_2={setPart2_2}
          setPart2_3={setPart2_3}
        />

        <Typography variant="h3" component="h3">
          To test for the sections below, you can create a post and
          refresh/restart the app.
        </Typography>

        <A3Part3
          part3_1={part3_1}
          part3_2={part3_2}
          setPart3_1={setPart3_1}
          setPart3_2={setPart3_2}
        />

        <A3Part4 part4_1={part4_1} setPart4_1={setPart4_1} />

        <A3Part5
          part5_1={part5_1}
          part5_2={part5_2}
          setPart5_1={setPart5_1}
          setPart5_2={setPart5_2}
        />

        <A3Extra
          extra_1={extra_1}
          extra_2={extra_2}
          extra_3={extra_3}
          setExtra_1={setExtra_1}
          setExtra_2={setExtra_2}
          setExtra_3={setExtra_3}
        />

        <Stack spacing="24px">
          <Typography variant="h4" component="h4">
            Other
          </Typography>
          <Stack direction="row">
            <A3Other
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
            A3HandleSubmitFinal(
              graderName,
              graderNetID,
              studentName,
              studentNetID,
              part1_1,
              part1_2,
              part2_1,
              part2_2,
              part2_3,
              part3_1,
              part3_2,
              part4_1,
              part5_1,
              part5_2,
              extra_1,
              extra_2,
              extra_3,
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
