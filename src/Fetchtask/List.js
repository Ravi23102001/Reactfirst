import React from "react";
import Td from "./Td";

function List({ data }) {
  //   console.log(data[0], "data");
  // console.log(Object.entries(data[0]))
  return (
    // <ol>
    //     {data.map((data)=><li key={data.id}>{JSON.stringify(data)}</li>)}

    // </ol>

    <>
    <div className="table-responsive">
      <table className="table table-striped table-dark table-hover">
        <tbody>
          {data.map((data) => {
            return (
              <tr key={data.id}>
                {Object.entries(data).map(([key, value]) => {   //array destructure
                  //   console.log(key);
                  return <Td key={key} value={value} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>

  );
}

export default List;
