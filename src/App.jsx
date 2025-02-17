import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Person from "./pages/person/Person";
import Body from "./pages/body/Body";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import PersonDetail from "./pages/person/PersonDetail";
import PersonList from "./pages/person/PersonList";
import React, { useState } from "react";
import Search from "./components/search/Search";
import BodyList from "./pages/body/BodyList";
import BodyDetail from "./pages/body/BodyDetail";
import AnimalList from "./pages/animal/AnimalList";
import AnimalDetail from "./pages/animal/AnimalDetail";
import Animal from "./pages/animal/Animal";
import Plant from "./pages/plant/Plant";
import PlantList from "./pages/plant/PlantList";
import PlantDetail from "./pages/plant/PlantDetail";
import NatureList from "./pages/nature/NatureList";
import NatureDetail from "./pages/nature/NatureDetail";
import Nature from "./pages/nature/Nature";
import Food from "./pages/food/Food";
import FoodList from "./pages/food/FoodList";
import FoodDetail from "./pages/food/FoodDetail";
import Action from "./pages/action/Action";
import ActionList from "./pages/action/ActionList";
import ActionDetail from "./pages/action/ActionDetail";
import Etc from "./pages/etcs/Etc";
import EtcList from "./pages/etcs/EtcList";
import EtcDetail from "./pages/etcs/EtcDetail";
import { Helmet } from "react-helmet-async";
import Tarot from "./components/tarot/Tarot";

function App() {
  return (
    <>
      <Helmet>
        <title>무료꿈해몽풀이 - 조은드림</title>
        <meta name="title" content="무료꿈해몽풀이 조은드림" />
        <meta
          name="description"
          content="무료꿈해몽풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="꿈해몽, 무료꿈해몽, 꿈해몽사이트, 연애하는꿈해몽, 꿈해몽풀이, 사랑하는꿈해몽, 꿈해몽집, 돈해몽, 무료타로카드, 타로카드사이트, 무료꿈해몽풀이"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="무료꿈해몽풀이 조은드림" />
        <meta
          property="og:description"
          content="꿈해몽, 무료꿈해몽, 꿈해몽사이트, 연애하는꿈해몽, 꿈해몽풀이, 사랑하는꿈해몽, 꿈해몽집, 돈해몽, 무료타로카드, 타로카드사이트, 무료꿈해몽풀이"
        />
        <meta property="og:image" content="/img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="무료꿈해몽풀이 조은드림" />
        <meta
          name="twitter:description"
          content="꿈해몽, 무료꿈해몽, 꿈해몽사이트, 연애하는꿈해몽, 꿈해몽풀이, 사랑하는꿈해몽, 꿈해몽집, 돈해몽, 무료타로카드, 타로카드사이트, 무료꿈해몽풀이"
        />
        <meta name="twitter:image" content="/img/ogimg.png" />
        <link rel="canonical" href="https://joeundream.com" />
      </Helmet>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/person" element={<Person />} />
          <Route path="/body" element={<Body />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/food" element={<Food />} />
          <Route path="/action" element={<Action />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/tarot" element={<Tarot />} />

          <Route path="/catep" element={<PersonList />} />
          <Route path="/catep/person" element={<PersonDetail />} />
          <Route path="/catep2" element={<PlantList />} />
          <Route path="/catep2/plant" element={<PlantDetail />} />
          <Route path="/cateb" element={<BodyList />} />
          <Route path="/cateb/body" element={<BodyDetail />} />
          <Route path="/catea" element={<AnimalList />} />
          <Route path="/catea/animal" element={<AnimalDetail />} />
          <Route path="/caten" element={<NatureList />} />
          <Route path="/caten/nature" element={<NatureDetail />} />
          <Route path="/catef" element={<FoodList />} />
          <Route path="/catef/food" element={<FoodDetail />} />
          <Route path="/catea2" element={<ActionList />} />
          <Route path="/catea2/action" element={<ActionDetail />} />
          <Route path="/catee" element={<EtcList />} />
          <Route path="/catee/etc" element={<EtcDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
