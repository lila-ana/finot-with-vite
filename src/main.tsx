import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntdConfigProvider from "./providers/antdProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>
        <AntdConfigProvider>
          <App />
        </AntdConfigProvider>
      </AntdRegistry>
    </QueryClientProvider>
  </StrictMode>
);
