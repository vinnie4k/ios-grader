import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

import A4HandleSubmitMidpoint from "./A4HandleSubmitMidpoint";
import A4Part1 from "./A4Part1";
import A4Part2 from "./A4Part2";
import A4Part3 from "./A4Part3";
import Comments from "../../components/Comments";
import NameInput from "../../components/NameInput";

export default function A4MidpointGrader() {
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

        <Comments comments={comments} setComments={setComments} />

        <Button
          variant="contained"
          color="blue"
          size="large"
          onClick={() => {
            A4HandleSubmitMidpoint(
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
