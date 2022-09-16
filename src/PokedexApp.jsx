import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const PokedexApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
