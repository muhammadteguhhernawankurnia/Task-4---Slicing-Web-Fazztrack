// import Introduction from "./components/Introduction";
// import Profile from "./components/Profile";
import NavigationBar from "./components/NavigationBar";
import NavigationBar2 from "./components/NavigationBar2";
import "./style/landingPage.css";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <NavigationBar2 />
        <MainContent />
        {/* <Profile />
        <Introduction name="teguh" />
        <Introduction name="ariel tatum" /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
