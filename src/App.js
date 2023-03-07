import "./App.css";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import { Container } from "@mui/material";
import CategorySection from "./components/CategorySection";
import TrendingSection from "./components/TrendingSection";
import ProductSection from "./components/ProductSection";
import SaleSection from "./components/SaleSection";
import HelpSection from "./components/HelpSection";
import SubscriptionSection from "./components/SubscriptionSection";
import useMediaQuery from "@mui/material/useMediaQuery";
import home from "./images/home.png";
import bannerTwo from "./images/bannerTwo.png";
import bannerthree from "./images/bannerthree.png";

function App() {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:1500px)");
  const matchesSM = useMediaQuery("(min-width:700px)");

  return (
    <div className="App">
      <Navbar />
      <HomeBanner imgUrl={home} />
      <Container
        maxWidth={matchesXL ? "xl" : "lg"}
        sx={{ border: "0px solid red", padding: "0px" }}
      >
        <CategorySection />
        <TrendingSection
          title="Trending T-Shirts"
          totalCard={8}
          halfCard={6}
          mobileCard={6}
        />
        <TrendingSection
          title="Featured Products"
          totalCard={4}
          halfCard={3}
          mobileCard={4}
        />
      </Container>
      <img
        src={bannerTwo}
        alt="brand discount image"
        style={{
          width: "100%",
          objectFit: "contain",
          objectPosition: "top",
          marginTop: "4%",
        }}
      />
      <Container
        maxWidth={matchesXL ? "xl" : "lg"}
        sx={{ border: "0px solid red", padding: "0px" }}
      >
        <TrendingSection
          title="New Products"
          totalCard={4}
          halfCard={3}
          mobileCard={4}
        />
        <TrendingSection
          title="Best Selling Products"
          totalCard={4}
          halfCard={3}
          mobileCard={4}
        />
      </Container>
      <img
        src={bannerthree}
        alt="brand discount image"
        style={{
          width: "100%",
          objectFit: "contain",
          objectPosition: "top",
          marginTop: "4%",
          marginBottom: "4%",
        }}
      />
      <Container
        maxWidth={matchesXL ? "xl" : "lg"}
        sx={{ border: "0px solid red", padding: "0px" }}
      >
        <SaleSection />
      </Container>
      <HelpSection />
      <SubscriptionSection />
    </div>
  );
}

export default App;
