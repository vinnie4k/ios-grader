import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import AssignmentOne from "./pages/AssignmentOne";
import AssignmentTwo from "./pages/AssignmentTwo";
import AssignmentThree from "./pages/AssignmentThree";
import AssignmentFour from "./pages/AssignmentFour";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box marginY="150px">
          <Routes>
            <Route path="/ios-grader/a1" element={<AssignmentOne />} />
            <Route path="/ios-grader/a2" element={<AssignmentTwo />} />
            <Route path="/ios-grader/a3" element={<AssignmentThree />} />
            <Route path="/ios-grader/a4" element={<AssignmentFour />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default App;
