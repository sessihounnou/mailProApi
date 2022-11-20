<script lang="ts">
export default {
  name: "registerView",
};
</script>
<style>
  .aligns {
    text-align: center;
  }
  .colors {
    background-color: #023c5b;
    /*#023c5b*/
    /*#01283d*/
  }
  .read {
    color: #023c5b;
  }
</style>
<template>
  <section>
    <section>
      <div class="h-screen flex">
        <div
          class="hidden sm:flex w-1/2 bg-gradient-to-tr from-[#01283d] to-[#023c5b] i justify-around items-center"
        >
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">Mail pro</h1>
            <p class="text-white mt-3">
              Mailpro is the solution to all your email marketing needs
            </p>
            <p class="text-white mt-1">
              with unlimited features that keep you ahead of the competition.
            </p>
            <p class="text-white mt-1">
              Mailpro will make your life easier as a business owner.
            </p>
            <button
              type="submit"
              class="block w-28 bg-white text-[#023c5b] mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
        </div>
        <div
          class="ml-[15%] flex flex-col items-center justify-center bg-white"
        >
          <div
            class="flex flex-col bg-white sm:shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"
          >
            <div
              class="font-medium self-center text-xl sm:text-3xl text-gray-800"
            >
              Registration
            </div>

            <div class="mt-10">
              <form action="#">
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <div
                      class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                    >
                      <i class="fas fa-user text-blue-500"></i>
                    </div>

                    <input
                      id="email"
                      type="text"
                      name="name"
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#01283d]"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <div
                      class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                    >
                      <i class="fas fa-at text-blue-500"></i>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#01283d]"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <div class="relative">
                    <div
                      class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#01283d]"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <div class="relative">
                    <div
                      class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                    >
                      <span>
                        <i class="fas fa-lock text-blue-500"></i>
                      </span>
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#01283d]"
                      placeholder=" Confirm password "
                    />
                  </div>
                </div>

                <div class="flex w-full">
                  <button
                    type="submit"
                    class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#023c5b] hover:bg-[#01283d] rounded-2xl py-2 w-full transition duration-150 ease-in"
                  >
                    <span class="mr-2 uppercase">Register</span>
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
                </div>
              </form>
            </div>
          </div>
          <div class="flex justify-center items-center mt-6">
            <a
              href="#"
              target="_blank"
              class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
            >
              <span class="ml-2"
                >Already have an account ?
                <a
                  href="/login"
                  class="text-xs ml-2 text-blue-500 font-semibold"
                  >Log in</a
                ></span
              >
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
