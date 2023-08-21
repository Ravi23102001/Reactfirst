import React from "react";
import data from "./Details";
import Style from "./Style";

function Model() {
  console.log(data);
  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((each) => {
          console.log(each.id);
          return (
            <Style
              key={each.id}
              id={each.id}
              imgurl={each.imgUrl}
              title={each.title}
              para={each.para}
              btn={each.btn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Model;
