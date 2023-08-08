import { Checkbox, Stack, Typography } from "@mui/material";

export default function A4Other(prop: OtherProp) {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" spacing="8px">
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
          checked={prop.survey}
          onChange={(event) => {
            prop.setSurvey(event.target.checked);
          }}
        />
        <Typography variant="h5" component="h5">
          +1 : Feedback Survey
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing="8px" width="400px">
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
          checked={prop.crash}
          onChange={(event) => {
            prop.setCrash(event.target.checked);
          }}
        />
        <Typography variant="h5" component="h5">
          -1 : App Crashed
        </Typography>
      </Stack>
    </Stack>
  );
}

interface OtherProp {
  survey: boolean;
  crash: boolean;
  setSurvey: React.Dispatch<React.SetStateAction<boolean>>;
  setCrash: React.Dispatch<React.SetStateAction<boolean>>;
}
