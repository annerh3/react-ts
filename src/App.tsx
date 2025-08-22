import { Add } from "@carbon/icons-react";
import { Button } from "@carbon/react";

function App() {
  return (
    <main className="justify-center items-center flex flex-col h-screen ">
      <form action="">
        <Button kind="primary" renderIcon={Add} type="button">
          Example usage
        </Button>
      </form>
    </main>
  );
}
export default App;
