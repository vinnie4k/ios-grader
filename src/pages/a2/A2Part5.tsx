import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A2Part5(prop: Part5Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part V: Delegation
          </Typography>
          <Typography variant="subtitle2" component="p">
            ALL text fields must be able to update.
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

      <YesNoPartial
        name="Clicking on “Save” updates main profile?"
        hasPartial={false}
        selected={prop.part5_1}
        setSelected={prop.setPart5_1}
      />
    </Stack>
  );
}

interface Part5Prop {
  part5_1: string;
  setPart5_1: React.Dispatch<React.SetStateAction<string>>;
}
