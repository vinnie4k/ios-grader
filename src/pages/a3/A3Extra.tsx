import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A3Extra(prop: ExtraProp) {
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
          name="+1 : Unlike a Post"
          hasPartial={false}
          selected={prop.extra_1}
          setSelected={prop.setExtra_1}
        />
        <YesNoPartial
          name="+1 : Sort by Top/New Posts"
          hasPartial={false}
          selected={prop.extra_2}
          setSelected={prop.setExtra_2}
        />
        <YesNoPartial
          name="+1 : Animation when liking a Post"
          hasPartial={false}
          selected={prop.extra_3}
          setSelected={prop.setExtra_3}
        />
      </Stack>
    </Stack>
  );
}

interface ExtraProp {
  extra_1: string;
  extra_2: string;
  extra_3: string;
  setExtra_1: React.Dispatch<React.SetStateAction<string>>;
  setExtra_2: React.Dispatch<React.SetStateAction<string>>;
  setExtra_3: React.Dispatch<React.SetStateAction<string>>;
}
