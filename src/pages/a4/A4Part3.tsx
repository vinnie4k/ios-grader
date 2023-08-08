import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A4Part3(prop: Part3Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part III: Filtering
          </Typography>
          <Typography variant="subtitle2" component="p">
            Stacking filters is extra credit.
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
          name="Filters can scroll horizontally"
          hasPartial={false}
          selected={prop.part3_1}
          setSelected={prop.setPart3_1}
        />
        <YesNoPartial
          name="Selected filters are highlighted"
          hasPartial={false}
          selected={prop.part3_2}
          setSelected={prop.setPart3_2}
        />
        <YesNoPartial
          name="Tapping on each filter filters by difficulty"
          hasPartial={false}
          selected={prop.part3_3}
          setSelected={prop.setPart3_3}
        />
      </Stack>
    </Stack>
  );
}

interface Part3Prop {
  part3_1: string;
  part3_2: string;
  part3_3: string;
  setPart3_1: React.Dispatch<React.SetStateAction<string>>;
  setPart3_2: React.Dispatch<React.SetStateAction<string>>;
  setPart3_3: React.Dispatch<React.SetStateAction<string>>;
}
