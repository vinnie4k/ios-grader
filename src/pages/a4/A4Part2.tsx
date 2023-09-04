import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A4Part2(prop: Part2Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part II: Detailed Recipe View
          </Typography>
          <Typography variant="subtitle2" component="p">
            Click on the cell to view the recipe’s details.
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
          name="Image"
          hasPartial={false}
          selected={prop.part2_1}
          setSelected={prop.setPart2_1}
        />
        <YesNoPartial
          name="Name and Description"
          hasPartial={false}
          selected={prop.part2_2}
          setSelected={prop.setPart2_2}
        />
        <YesNoPartial
          name="Tapping on each recipe cell pushes its own detailed view"
          hasPartial={false}
          selected={prop.part2_3}
          setSelected={prop.setPart2_3}
        />
      </Stack>
    </Stack>
  );
}

interface Part2Prop {
  part2_1: string;
  part2_2: string;
  part2_3: string;
  setPart2_1: React.Dispatch<React.SetStateAction<string>>;
  setPart2_2: React.Dispatch<React.SetStateAction<string>>;
  setPart2_3: React.Dispatch<React.SetStateAction<string>>;
}
