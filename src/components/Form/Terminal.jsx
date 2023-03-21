import React from "react";

function ConfigFile() {
  return (
    <div className="container py-8 w-full h-full  font-medium text-xl">
      <div className="bg-gray-900 rounded-lg  h-full flex flex-col">
        <section
          className="flex flex-row  w-full h-10    text-base justify-items-center
        border-b-2 border-[#ffffff]"
        >
          <div className="flex items-center  w-52 pl-3  border-r-2 border-[#ffffff]">
            machine@dotshare
          </div>
          <div className="text-white flex items-center  w-52 pl-1">
            <div className="w-5 h-5 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className="p-4 pt-1">
          <div className="text-green-500">
            ~$&nbsp;
            <span className="ml-1">
              <span className="text-white">cat .config/nvim/init.vim</span>
            </span>
          </div>
          <div className="text-green-600">" Enable syntax highlighting</div>
          <div className="text-purple-500">
            syntax <span className="text-white">on</span>
          </div>
          <div className="text-green-600">" Set line numbers</div>
          <div className="text-purple-500">
            set <span className="text-white">number</span>
          </div>
          <div className="text-green-600">" Enable mouse support</div>
          <div className="text-purple-500">
            set <span className="text-white">mouse=a</span>
          </div>
          <div className="text-green-600">" Set tab size to 4 spaces</div>
          <div className="text-purple-500">
            set <span className="text-white">tabstop=4</span>
            <br></br>
            set <span className="text-white">shiftwidth=4</span>
            <br></br>
            set <span className="text-white">expandtab</span>
          </div>
          <div className="text-green-600">" Enable clipboard support</div>
          <div className="text-purple-500">
            set <span className="text-white">clipboard=unnamedplus</span>
          </div>
          <div className="text-green-500 mt-1">
            ~$&nbsp;
            <span className="ml-1">
              <span className="text-white">cat .bashrc</span>
            </span>
          </div>
          <div className="text-yellow-600">
            use_color<span className="text-white">=</span>
            <span className="text-purple-500">true</span>
          </div>
          <div className="text-purple-500">
            alias <span className="text-yellow-600">moby</span>
            <span className="text-white">=</span>
            <span className="text-red-600">'/home/machine/moby/moby.sh'</span>
          </div>
          <div className="text-purple-500">
            alias <span className="text-yellow-600">moby-compose</span>
            <span className="text-white">=</span>
            <span className="text-red-600">
              '/home/machine/moby/moby-compose.sh'
            </span>
          </div>
          <div className="text-green-500 mt-1">
            ~$&nbsp;
            <span className="ml-1">
              <span className="text-white">cat info.txt</span>
            </span>
          </div>
          <div className="text-white">
            Welcome to dotShare! Where you can share your dotfiles with the
            world.
            <br></br>
            Login to your account to start sharing your dotfiles.
            <br></br>
            No account? No problem! You can create one for free.
          </div>
          <div className="text-green-500 mt-1">
            ~$&nbsp;
            <span className="ml-1">
              <span className="text-white">sudo shutdown now</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConfigFile;
