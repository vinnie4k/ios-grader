import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A2Part1(prop: Part1Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part I: Creating the Profile Page
          </Typography>
          <Typography variant="subtitle2" component="p">
            We only care about the UI for this part.
          </Typography>
        </Stack>

        <Stack direction="row" spacing="48px" alignItems="end">
          <Typography variant="h5" component="h5" paddingRight="16px">
            Yes
          </Typography>
          <Typography variant="h5" component="h5">
            No
          </Typography>
          <Typography variant="h5" component="h5">
            Partial
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing="12px">
        <YesNoPartial
          name="Profile Image"
          hasPartial={true}
          selected={prop.part1_1}
          setSelected={prop.setPart1_1}
        />
        <YesNoPartial
          name="Name and Bio"
          hasPartial={true}
          selected={prop.part1_2}
          setSelected={prop.setPart1_2}
        />
        <YesNoPartial
          name="Hometown, School, Major, Fav App"
          hasPartial={true}
          selected={prop.part1_3}
          setSelected={prop.setPart1_3}
        />
      </Stack>
    </Stack>
  );
}

interface Part1Prop {
  part1_1: string;
  part1_2: string;
  part1_3: string;
  setPart1_1: React.Dispatch<React.SetStateAction<string>>;
  setPart1_2: React.Dispatch<React.SetStateAction<string>>;
  setPart1_3: React.Dispatch<React.SetStateAction<string>>;
}
