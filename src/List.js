import "./List.css";
import Comp from './Comp'

// takes list of object from App component, spread each object to in list of html form and returning it
function List({list}) {
  const comp = list.map((object) => <Comp key={object.flight_number} object={object}/>);
  return (
    <section id="datalist">
      <ul className="grid">
          {comp}
      </ul>
    </section>
  );
}

export default List;
