import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A2Part4(prop: Part4Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Typography variant="h4" component="h4">
          Part IV: Pop the Edit Profile Page
        </Typography>

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
          name="Has a save button?"
          hasPartial={false}
          selected={prop.part4_1}
          setSelected={prop.setPart4_1}
        />
        <YesNoPartial
          name="Can you pop the current VC?"
          hasPartial={false}
          selected={prop.part4_2}
          setSelected={prop.setPart4_2}
        />
      </Stack>
    </Stack>
  );
}

interface Part4Prop {
  part4_1: string;
  part4_2: string;
  setPart4_1: React.Dispatch<React.SetStateAction<string>>;
  setPart4_2: React.Dispatch<React.SetStateAction<string>>;
}
