// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import "swiper/swiper-bundle.css";
// import "flatpickr/dist/flatpickr.css";
// import App from "./App.tsx";
// import { AppWrapper } from "./components/common/PageMeta.tsx";
// import { ThemeProvider } from "./context/ThemeContext.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <ThemeProvider>
//       <AppWrapper>
//         <App />

//       </AppWrapper>
//     </ThemeProvider>
//   </StrictMode>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppWrapper>
          <App />
        </AppWrapper>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
