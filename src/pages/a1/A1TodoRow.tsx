import { Stack, TextField, Typography } from "@mui/material";

export default function A1TodoRow(functionProp: FunctionProp) {
  return (
    <Stack direction="row" spacing="auto" alignItems="center">
      <Typography variant="h5" component="h5">
        {functionProp.title}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="auto" width="84px">
        <TextField
          id={functionProp.id}
          placeholder="0"
          variant="outlined"
          inputProps={numberInput}
          value={functionProp.value}
          onChange={(event) => {
            functionProp.setValue(event.target.value);
          }}
          error={functionProp.isInvalid}
        />
        <Typography variant="h5" component="h5">
          / {functionProp.max}
        </Typography>
      </Stack>
    </Stack>
  );
}

const numberInput = {
  style: {
    height: "8px",
    width: "12px",
  },
  maxLength: 1,
  type: "tel",
};

interface FunctionProp {
  title: string;
  max: number;
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isInvalid: boolean;
}
