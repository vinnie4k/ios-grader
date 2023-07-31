import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A2Extra(prop: ExtraProp) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Extra Credit
          </Typography>
          <Typography variant="subtitle2" component="p">
            All features must be FULLY COMPLETE.
          </Typography>
        </Stack>

        <Stack direction="row" spacing="48px" alignItems="end">
          <Typography variant="h5" component="h5" paddingX="8px">
            Yes
          </Typography>
          <Typography variant="h5" component="h5" paddingX="12px">
            No
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing="12px">
        <YesNoPartial
          name="+1 : Custom Back Button"
          hasPartial={false}
          selected={prop.extra_1}
          setSelected={prop.setExtra_1}
        />
        <YesNoPartial
          name="+1 : Edit Profile Picture"
          hasPartial={false}
          selected={prop.extra_2}
          setSelected={prop.setExtra_2}
        />
      </Stack>
    </Stack>
  );
}

interface ExtraProp {
  extra_1: string;
  extra_2: string;
  setExtra_1: React.Dispatch<React.SetStateAction<string>>;
  setExtra_2: React.Dispatch<React.SetStateAction<string>>;
}
