import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="h-screen p-4 main-menu-bg">
      <div class=" h-full border-4 border-purple-900 flex items-center justify-center">
        <div class="flex flex-col items-center animate-slow-shake">
          <img
            src={new URL("./assets/skull.png", import.meta.url).href}
            class="h-24 mb-4"
          />
          <h1 class="text-7xl text-yellow-400 drop-shadow font-GothicPixels font-extralight mb-4 before:content-['Tenebris'] before:absolute before:text-black before:-z-10 before:left-1 before:top-1">
            Tenebris
          </h1>

          <div class="flex flex-col items-center gap-1">
            <span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['⮞'] after:absolute after:ml-1 hover:after:content-['⮜'] hover:scale-105 transition-all active:text-yellow-600">
              Proelium
            </span>
            <span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['⮞'] after:absolute after:ml-1 hover:after:content-['⮜'] hover:scale-105 transition-all active:text-yellow-600">
              Creatio
            </span>
            <span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['⮞'] after:absolute after:ml-1 hover:after:content-['⮜'] hover:scale-105 transition-all active:text-yellow-600">
              Monstrorum Liber
            </span>
            <span class="text-yellow-500 text-2xl font-GothicPixels  cursor-pointer before:absolute before:-ml-7 hover:before:content-['⮞'] after:absolute after:ml-1 hover:after:content-['⮜'] hover:scale-105 transition-all active:text-yellow-600">
              Tabernam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
