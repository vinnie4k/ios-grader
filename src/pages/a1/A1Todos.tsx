import { Stack } from "@mui/material";
import A1TodoRow from "./A1TodoRow";

export default function A1Todos(todoProp: TodoProp) {
  return (
    <Stack direction="row" spacing="64px">
      <Stack spacing="20px" width="400px">
        <A1TodoRow
          title="1. introduce"
          max={2}
          id="a1-1"
          value={todoProp.todo1}
          setValue={todoProp.setTodo1}
          isInvalid={Number(todoProp.todo1) > 2}
        />
        <A1TodoRow
          title="2. getStudentInfo"
          max={1}
          id="a1-2"
          value={todoProp.todo2}
          setValue={todoProp.setTodo2}
          isInvalid={Number(todoProp.todo2) > 1}
        />
        <A1TodoRow
          title="3. countEvens"
          max={4}
          id="a1-3"
          value={todoProp.todo3}
          setValue={todoProp.setTodo3}
          isInvalid={Number(todoProp.todo3) > 4}
        />
        <A1TodoRow
          title="4. capitalizeStrings"
          max={4}
          id="a1-4"
          value={todoProp.todo4}
          setValue={todoProp.setTodo4}
          isInvalid={Number(todoProp.todo4) > 4}
        />
        <A1TodoRow
          title="5. repeatString"
          max={4}
          id="a1-5"
          value={todoProp.todo5}
          setValue={todoProp.setTodo5}
          isInvalid={Number(todoProp.todo5) > 4}
        />
      </Stack>

      <Stack spacing="20px" width="400px">
        <A1TodoRow
          title="6. countWords"
          max={6}
          id="a1-6"
          value={todoProp.todo6}
          setValue={todoProp.setTodo6}
          isInvalid={Number(todoProp.todo6) > 6}
        />
        <A1TodoRow
          title="7. containsNum"
          max={4}
          id="a1-7"
          value={todoProp.todo7}
          setValue={todoProp.setTodo7}
          isInvalid={Number(todoProp.todo7) > 4}
        />
        <A1TodoRow
          title="8. uppercaseLead"
          max={6}
          id="a1-8"
          value={todoProp.todo8}
          setValue={todoProp.setTodo8}
          isInvalid={Number(todoProp.todo8) > 6}
        />
        <A1TodoRow
          title="9. filterImposter"
          max={6}
          id="a1-9"
          value={todoProp.todo9}
          setValue={todoProp.setTodo9}
          isInvalid={Number(todoProp.todo9) > 6}
        />
      </Stack>
    </Stack>
  );
}

interface TodoProp {
  todo1: string;
  todo2: string;
  todo3: string;
  todo4: string;
  todo5: string;
  todo6: string;
  todo7: string;
  todo8: string;
  todo9: string;
  setTodo1: React.Dispatch<React.SetStateAction<string>>;
  setTodo2: React.Dispatch<React.SetStateAction<string>>;
  setTodo3: React.Dispatch<React.SetStateAction<string>>;
  setTodo4: React.Dispatch<React.SetStateAction<string>>;
  setTodo5: React.Dispatch<React.SetStateAction<string>>;
  setTodo6: React.Dispatch<React.SetStateAction<string>>;
  setTodo7: React.Dispatch<React.SetStateAction<string>>;
  setTodo8: React.Dispatch<React.SetStateAction<string>>;
  setTodo9: React.Dispatch<React.SetStateAction<string>>;
}
