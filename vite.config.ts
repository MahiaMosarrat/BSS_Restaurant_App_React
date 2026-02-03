import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || "/BSS_Restaurant_App_React",
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
       
      },
    }),
  ],
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig(({ command }) => {
//   return {

//     base: command === 'serve' ? '/' : '/restaurant_app_bss-v1/',
//     plugins: [
//       react({
//         babel: {
//           plugins: [['babel-plugin-react-compiler']],
//         },
//       }),
//     ],
//   }
// })