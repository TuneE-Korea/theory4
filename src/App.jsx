import FooterContent from "./organisms/FooterContent";
import MainContent from "./organisms/MainContent";
import AsideFooter from "./organisms/AsideFooter";
function App() {
  return (
    <>
      <header>
        <div>헤더 테스트</div>
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <AsideFooter source={"/image/footer.jpg"} />
        <FooterContent />
      </footer>
    </>
  );
}

export default App;
