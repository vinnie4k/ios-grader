import { Radio, Stack, Typography } from "@mui/material";

export default function YesNoPartial(prop: YesNoPartialProp) {
  return (
    <Stack direction="row" spacing="auto" alignItems="center">
      <Typography variant="h5" component="h5">
        {prop.name}
      </Typography>
      <Stack direction="row" spacing="48px">
        <Radio
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
            },
          }}
          checked={prop.selected === "yes"}
          onChange={() => {
            prop.setSelected("yes");
          }}
        />
        <Radio
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 28,
            },
          }}
          checked={prop.selected === "no"}
          onChange={() => {
            prop.setSelected("no");
          }}
        />
        {prop.hasPartial && (
          <Radio
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
            checked={prop.selected === "partial"}
            onChange={() => {
              prop.setSelected("partial");
            }}
          />
        )}
      </Stack>
    </Stack>
  );
}

interface YesNoPartialProp {
  name: string;
  hasPartial: boolean;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
