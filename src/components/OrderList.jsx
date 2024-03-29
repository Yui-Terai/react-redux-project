import React from "react";

const OrderList = props => {
  const style = {
    textAlign: "left",
    marginLeft: 20
  };

  if (props.selectedTable === null) return null;

  return (
    <div style={style}>
      {props.items.map((items, i) => {
        return (
          <div>
            <button onClick={() => props.onDelete(props.selectedTable, i)}>
              x
            </button>
            &nbsp; {items.name} ] | ${items.price}
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
