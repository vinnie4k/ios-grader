import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A3Part1(prop: Part1Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part I: Creating the UICollectionViewCell
          </Typography>
          <Typography variant="subtitle2" component="p">
            We only care about the UI for this part.
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
          name="Header (name, date, image)"
          hasPartial={false}
          selected={prop.part1_1}
          setSelected={prop.setPart1_1}
        />
        <YesNoPartial
          name="Message Body, Like Button, # Likes"
          hasPartial={false}
          selected={prop.part1_2}
          setSelected={prop.setPart1_2}
        />
      </Stack>
    </Stack>
  );
}

interface Part1Prop {
  part1_1: string;
  part1_2: string;
  setPart1_1: React.Dispatch<React.SetStateAction<string>>;
  setPart1_2: React.Dispatch<React.SetStateAction<string>>;
}
