<script>
export default {
  name: "loginView",
};
</script>
<style>
  .colors {
    background-color: #023c5b;
  }
  .read {
    color: #023c5b;
  }
</style>
<template>
  <section>
    <div class="h-screen flex">
      <div
        class="hidden sm:flex w-1/2 bg-gradient-to-tr from-[#01283d] to-[#023c5b] i justify-around items-center"
      >
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">Mail pro</h1>
          <p class="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            class="block w-28 bg-white text-[#023c5b] mt-4 py-2 rounded-2xl font-bold mb-2 color: #023c5b"
          >
            Read More
          </button>
        </div>
      </div>
      <div
        class="mt-0 sm:mt-4 ml-[2%] sm:ml-[10%] w-[4%] flex sm:items-center bg-white"
      >
        <div
          class="p-4 sm:p-4 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3"
        >
          <p class="font-bold">Sign in</p>

          <input
            class="p-3 border-[1px] border-[#023c5b] rounded-3xl w-72 hover:border-[#023c5b] border-[#012132]"
            placeholder="E-mail"
          />
          <div class="flex flex-col space-y-1">
            <input
              class="p-3 border-[1px] border-[#023c5b] rounded-3xl w-72 hover:border-[#023c5b]"
              placeholder="Password"
            />
            <a href="http://forgot" class="px-24 w-full">
              <p
                class="justify-center text-gradient-to-tr from-blue-800 to-purple-700 text-[10px]"
              >
                forgot password ?
              </p>
            </a>
          </div>
          <div class="flex flex-col space-y-6 w-full">
            <button
              type="submit"
              class="colors flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#023c5b] hover:bg-[#012132] rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">Login</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
            <div
              class="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative"
            >
              <div class="font-bod bg-white px-4 absolute">Or</div>
            </div>
            <button
              class="w-full border-blue-900 hover:border-[#023c5b] hover:border-[2px] border-[1px] rounded-2xl py-2 text-gradient-to-tr from-blue-800 to-purple-700 font-bold transition duration-200"
            >
              Register
            </button>
          </div>
          <div class="flex space-x-1 p-10 text-sm">
            <p class="hover:underline cursor-pointer">français</p>
            <div class="border-r-[1px] border-r-slate-300"></div>
            <p class="font-bold hover:underline cursor-pointer">Anglais</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
