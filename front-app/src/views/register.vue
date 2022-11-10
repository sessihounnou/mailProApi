<script>
export default {
  name: "registerView",
};
</script>
<template>
  <section>
    <section>
      <div class="h-screen flex">
        <div
          class="hidden sm:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center"
        >
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">Mail pro</h1>
            <p class="text-white mt-1">
              La gestion du temps au service des entreprises
            </p>
            <button
              type="submit"
              class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
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
              S'inscrire
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
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Nom"
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
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
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
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Mot de passe "
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
                      class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder=" Confirmer mot de passe "
                    />
                  </div>
                </div>

                <div class="flex w-full">
                  <button
                    type="submit"
                    class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
                  >
                    <span class="mr-2 uppercase">S'inscrire</span>
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
                >Vous avez un compte ?
                <a
                  href="/login"
                  class="text-xs ml-2 text-blue-500 font-semibold"
                  >Se connecter</a
                ></span
              >
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
