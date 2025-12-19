import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { GridBackground } from "@/components/grid-background";
import { LoadingScreen } from "@/components/loading-screen";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import Features from "@/pages/features";
import Commands from "@/pages/commands";
import Developers from "@/pages/developers";
import Premium from "@/pages/premium";
import Dashboard from "@/pages/dashboard";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/commands" component={Commands} />
      <Route path="/developers" component={Developers} />
      <Route path="/premium" component={Premium} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <LoadingScreen />
          <GridBackground />
          <div className="min-h-screen flex flex-col relative z-10">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
