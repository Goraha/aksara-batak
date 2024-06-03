const Image = (props) =>{
  const {surat} = props;
  const listItems = surat.map(person =>
    <li key={person}>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

export default Image