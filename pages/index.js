import Characters from "../components/Characters";

const Home = props => (
  <div>
    <Characters
      page={parseFloat(props.query.page) || 1}
      name={props.query.name || ""}
    />
  </div>
);

export default Home;
