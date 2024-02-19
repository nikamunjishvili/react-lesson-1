import Image from "./components/Image/Image";
import Button from "./components/button/Button";
import Section from "./components/section/Section";
import Text from "./components/text/Text";

function App() {
  return (
    <div className="App">
      <Button values="signin" bgColor="red" />
      <Button values="register" bgColor="blue" />
      <Button values="search" bgColor="yellow" />

      <Text name="nika" email="nika@gmail.com" />
      <Section />

      <Image image_url="cat.avif" width="100px" />
      <Image image_url="second.webp" width="150px" />
    </div>
  );
}

export default App;
