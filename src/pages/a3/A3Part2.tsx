import { Stack, Typography } from "@mui/material";
import YesNoPartial from "../../components/YesNoPartial";

export default function A3Part2(prop: Part2Prop) {
  return (
    <Stack spacing="24px">
      <Stack direction="row" spacing="auto">
        <Stack spacing="4px">
          <Typography variant="h4" component="h4">
            Part II: Creating the UICollectionView
          </Typography>
          <Typography variant="subtitle2" component="p">
            You will need to read the student’s code:
          </Typography>
          <Typography variant="subtitle2" component="p">
            - numberOfSections, numberOfItemsInSection, cellForItemAt
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
          name="CollectionView has 2 sections"
          hasPartial={false}
          selected={prop.part2_1}
          setSelected={prop.setPart2_1}
        />
        <YesNoPartial
          name="Dynamic number of items/cells (size of array)"
          hasPartial={false}
          selected={prop.part2_2}
          setSelected={prop.setPart2_2}
        />
        <YesNoPartial
          name="Each cell is unique and represents a different post"
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
