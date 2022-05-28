import "./cell-list.css";
import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <div
        style={{
          margin: "50px 0 0 20px",
        }}
      >
        <p style={{ marginBottom: "5px" }}>
          <b>Note:</b> There's a div with id of #root for you to mount something
          like react or vue onto
        </p>
        <p style={{ marginBottom: "5px" }}>
          To display something quickly, you can do: <br />-
          document.querySelector('#root').innerHtml = 'something' <br />-
          show('something')
        </p>
        <p style={{ marginBottom: "5px" }}>
          <b>Codes are cumulative</b>. Meaning code cells defined later will
          have access to the codes written in <b>previous cells</b>
        </p>
      </div>

      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
