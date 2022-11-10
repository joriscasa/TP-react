import { useEffect, useState } from "react";

export default function ListContainer({
  initialItems = [],
  availableActions = {
    add: true,
    remove: true,
    edit: true,
  },
  ListItem,
  AddForm,
  keyProp = "id",
}) {
  const [items, setItems] = useState(initialItems);
  const listeners = {};
  if (availableActions.add) {
    listeners.add = function (newItem) {
      setItems([...items, newItem]);
    };
  }
  if (availableActions.remove) {
    listeners.remove = function () {
      setItems(items.filter((item) => item[keyProp] !== this[keyProp]));
    };
  }

  if (availableActions.edit) {
    listeners.edit = function (editedItem) {
      setItems(
        items.map((item) => {
          if (item[keyProp] === editedItem[keyProp]) {
            return editedItem;
          }
          return item;
        })
      );
    };
  }
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  return (
    <>
      {availableActions.add && <AddForm onSubmit={listeners.add} />}
      {items.map(
        (item) =>
          console.log(item, item[keyProp]) || (
            <ListItem
              key={item[keyProp]}
              item={item}
              onEdit={listeners.edit?.bind(item)}
              onRemove={listeners.remove?.bind(item)}
            />
          )
      )}
    </>
  );
}
