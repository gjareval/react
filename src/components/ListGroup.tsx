import { useState } from "react";

interface Props {
  items: string[];
  encabezado: string;
  onSelectedItem: (ciudad: string) => void;
}

function ListGroup({ items, encabezado, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{encabezado}</h1>
      <ul className="list-group">
        {items.map((ciudad, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={ciudad}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(ciudad);
            }}
          >
            {ciudad}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
