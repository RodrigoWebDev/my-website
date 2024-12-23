import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import Header from "../../components/Header";

const Home = (props: any) => {
  const isEnglish = window.location.search === "?locale=en_US";
  const profile = isEnglish ? enProfile : ptProfile;

  return (
    <main>
      <Header />
      
      <h2>Sobre</h2>
      <hr />

      <p>{profile.about}</p>
    </main>
  );
};

export default Home;
