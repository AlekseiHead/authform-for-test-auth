import "./App.css";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function App() {
  return (
    <div className="App flex justify-center">
      <form className="flex max-w-md flex-col gap-4 w-1/4 mt-32">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@mail.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" required />
					<Label htmlFor="agree" className="flex">
						<p>
							I agree with the<a href="/#" className="ml-0 flex items-center text-sm font-medium hover:underline md:ml-1 md:inline-flex">Terms</a>
						</p>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
}

export default App;
