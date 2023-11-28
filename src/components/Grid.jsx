import React from "react";

export const Grid = () => {
  return (
    <>
      <div>
        <div className="container mx-auto sectionGrid">
          <div className="grid grid-cols-4 gap-4 h-[100v] ">
            <div className="card col-span-3">1</div>
            <div className="card col-span-1">2</div>
            <div className="card row-span-2">3</div>
            <div className="card col-span-2">4</div>
            <div className="card col-span-4">5</div>
            <div className="card">6</div>
            <div className="card">7</div>
            <div className="card col-span-2">8</div>
            <div className="card">9</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
