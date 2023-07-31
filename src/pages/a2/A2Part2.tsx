import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A2Part2(prop: Part2Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Typography variant="h4" component="h4">
          Part II: Push the Edit Profile Page
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
          name="Has an edit profile button?"
          hasPartial={false}
          selected={prop.part2_1}
          setSelected={prop.setPart2_1}
        />
        <YesNoPartial
          name="Tapping on edit profile pushes a new VC?"
          hasPartial={false}
          selected={prop.part2_2}
          setSelected={prop.setPart2_2}
        />
      </Stack>
    </Stack>
  );
}

interface Part2Prop {
  part2_1: string;
  part2_2: string;
  setPart2_1: React.Dispatch<React.SetStateAction<string>>;
  setPart2_2: React.Dispatch<React.SetStateAction<string>>;
}
