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
        <div className="max-w-6xl mx-auto sectionGrid h-[100v] text-white">
          <div className="grid grid-cols-6 grid-rows-6 gap-4 ">
            <div className="card row-span-3 col-span-4">
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
            <div className="card col-span-2">pais</div>

            <div className="card row-span-3 col-span-2 overflow-hidden">
              <div className="flex justify-center items-center h-full">
                {/* Aquí está tu div con la clase 'bola' */}
                <div className="bola flex items-center justify-center">
                  <div className="relative w-full">
                    <div className="zis w-72 h-72 bg-gradient-to-tr from-violet-600 to pink-500 rounded-full animate-spin" />
                    <div className="w-full h-1 absolute bottom-0 bg-black/1 backdrop-blur-lg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card row-span-5">imagen</div>
            <div className="card row-span-2 col-span-3">skills</div>
            <div className="card col-span-2 row-span-2">6</div>
            <div className="card col-span-2 row-span-2">7</div>
            <div className="card ">8</div>
            <div className="card col-span-">9</div>
            <div className="card row-span-2 col-span-2">git moradito</div>
            <div className="card col-span-3">12</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
