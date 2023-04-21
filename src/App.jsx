import { NavBarComponent, FooterComponent } from "./components";
import { ThemeProvider, CartProvider } from "./context";
import { MainLayout } from "./layouts/MainLayout";
import { MainRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>

        <MainLayout>

          <NavBarComponent/>
          
          <MainRoutes/>

          <FooterComponent/>
        
        </MainLayout>

      </CartProvider>
      
    </ThemeProvider>
  );
}

export default App;
