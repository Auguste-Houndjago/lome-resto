"use client"

import { View } from "@react-three/drei";

import clsx from "clsx";
import { Bounded } from "../Bounded";
import Scene from "./Scene";





const AlternatingText = (): JSX.Element => {


    const slice =[

        { id: 1, name: 'Pomme', color: 'Rouge' },
        { id: 2, name: 'Banane', color: 'Jaune' },
        { id: 3, name: 'Orange', color: 'Orange' },
        { id: 4, name: 'Fraise', color: 'Rouge' },
      ];
    return (
      <Bounded

        className="alternating-text-container relative bg-yellow-300 text-sky-950"
      >
        <div>
          <div className="relative z-[100] grid">
            <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
              <Scene />
            </View>
  
            {slice.map(({id , color},index) => (
              <div
                key={id}
                className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
              >
                <div
                  className={clsx(
                    index % 2 === 0 ? "col-start-1" : "md:col-start-2",
  
                    "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                  )}
                >
                       
                  <h2 className="text-balance text-6xl font-bold">
      

                  <span> ma couleur prismique {color}</span>
                  </h2>
                  <div className="mt-4 text-xl">
                   <h2>mon prismic text</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bounded>
    );
  };
  
  export default AlternatingText;