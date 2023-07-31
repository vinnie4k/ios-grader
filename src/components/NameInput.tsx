import { Stack, TextField, Typography } from "@mui/material";

export default function NameInput(props: NameInputProps) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="64px">
        <Stack spacing="8px" width="400px">
          <Typography variant="h5" component="h5">
            Grader Name
          </Typography>
          <TextField
            id="grader-name"
            placeholder="Vin Bui"
            variant="outlined"
            fullWidth={true}
            size="small"
            value={props.graderName}
            onChange={(event) => {
              props.setGraderName(event.target.value);
            }}
          />
        </Stack>

        <Stack spacing="8px" width="400px">
          <Typography variant="h5" component="h5">
            Grader NetID
          </Typography>
          <TextField
            id="grader-netid"
            placeholder="vdb23"
            variant="outlined"
            fullWidth={true}
            size="small"
            value={props.graderNetID}
            onChange={(event) => {
              props.setGraderNetID(event.target.value);
            }}
          />
        </Stack>
      </Stack>

      <Stack direction="row" spacing="64px">
        <Stack spacing="8px" width="400px">
          <Typography variant="h5" component="h5">
            Student Name
          </Typography>
          <TextField
            id="student-name"
            placeholder="John Doe"
            variant="outlined"
            fullWidth={true}
            size="small"
            value={props.studentName}
            onChange={(event) => {
              props.setStudentName(event.target.value);
            }}
          />
        </Stack>

        <Stack spacing="8px" width="400px">
          <Typography variant="h5" component="h5">
            Student NetID
          </Typography>
          <TextField
            id="student-netid"
            placeholder="jd123"
            variant="outlined"
            fullWidth={true}
            size="small"
            value={props.studentNetID}
            onChange={(event) => {
              props.setStudentNetID(event.target.value);
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

interface NameInputProps {
  graderName: string;
  graderNetID: string;
  studentName: string;
  studentNetID: string;
  setGraderName: React.Dispatch<React.SetStateAction<string>>;
  setGraderNetID: React.Dispatch<React.SetStateAction<string>>;
  setStudentName: React.Dispatch<React.SetStateAction<string>>;
  setStudentNetID: React.Dispatch<React.SetStateAction<string>>;
}
