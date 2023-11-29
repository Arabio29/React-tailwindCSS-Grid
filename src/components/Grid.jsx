import React from "react";

const user = {
  name: "Eliasib Cantor",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export const Grid = () => {
  return (
    <>
      <div>
        <div className="container mx-auto sectionGrid h-[100v]">
          <div className="grid grid-cols-7 gap-4 ">
            <div className="card row-span-6 col-span-5">
              <div className="yo"></div>
              <div className="yo">
                <img
                  className="avatar"
                  src={user.imageUrl}
                  alt={"Foto de " + user.name}
                  style={{
                    width: user.imageSize,
                    height: user.imageSize,
                  }}
                />
              </div>
            </div>
            <div className="card col-span-2">2</div>
            <div className="card col-span-2 row-span-2">3</div>
            <div className="card col-span-3">4</div>
            <div className="card row-span-2 col-span-2">5</div>
            <div className="card">6</div>
            <div className="card">7</div>
            <div className="card">8</div>
            <div className="card ">9</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
