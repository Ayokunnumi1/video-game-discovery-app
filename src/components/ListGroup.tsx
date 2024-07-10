import { useState } from "react";

interface Props {
  lists: string[];
  onSelectItem: (list: string) => void
}

const ListGroup = ({lists, onSelectItem}: Props) => {
     const [selectedIndex, setSelectedIndex] = useState(-1) 
  return (
    <>
      {lists.length === 0 ? (
        <p>No content found</p>
      ) : (
        <ul>
          {lists.map((list, index) => (
            <li
              onClick={() => { setSelectedIndex(index); onSelectItem(list); }}
              className={selectedIndex === index ? "active" : ""}
              key={list}
            >
              {list}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
