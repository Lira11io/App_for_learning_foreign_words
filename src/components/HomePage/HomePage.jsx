import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Table from "../Table/Table";
import vocabulary from "../Data/vocabulary.json";

function HomePage() {
  return (
    <div>
      <Header />
      <Table />
      {vocabulary.map((item, id) => (
        <Card key={id} vocabulary={item} />
      ))}

      <Footer />
    </div>
  );
}
export default HomePage;
