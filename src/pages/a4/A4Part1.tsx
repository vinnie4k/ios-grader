import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A4Part1(prop: Part1Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part I: Recipe CollectionView
          </Typography>
          <Typography variant="subtitle2" component="p">
            This is the CollectionView containing the recipes.
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
          name="Cell contains Image, Name, Time, and Difficulty"
          hasPartial={false}
          selected={prop.part1_1}
          setSelected={prop.setPart1_1}
        />
        <YesNoPartial
          name="There are 2 columns and a dynamic # of cells"
          hasPartial={false}
          selected={prop.part1_2}
          setSelected={prop.setPart1_2}
        />
        <YesNoPartial
          name="Each cell is unique and represents a different recipe"
          hasPartial={false}
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
