// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxt/content', "@nuxtjs/sanity"],
  tailwindcss: {
    config:{
      theme: {
		
        fontSize: {
          sm: '0.75rem',
          base: '0.875rem',
          xl: '1.25rem',
          '2xl': '2rem',
          '3xl': '2.5rem',
          
        },
        screens: {
          'pc': {'max': '1920px'},
          'laptop': {'max': '1535px'},
          'tablet': {'max': '1279px'},  
          'smalltab': {'max': '1013px'},
          'mobile': {'max': '850px'},
          'sm': {'max': '450px'}
          
        
        },
        fontFamily: {
          'inter-regular': ['Inter-Regular'],
          'inter-black': ['Inter-black'],
          'inter-bold': ['Inter-bold'],
          'inter-extralight': ['Inter-extralight'],
          'inter-light': ['Inter-light'],
          'inter-medium': ['Inter-medium'],
          'inter-semibold': ['Inter-semibold'],
        },
        extend: {
          colors: {
           
            sidebar: '#0D0D0D',
            mainarea: '#070707',
            socials: '#606069',
            bright: '#E6E6ED',
            content: '#8F919C',
            contentgray: '#54555C',
            divider: '#1D1D1D',
            lowbright: '#A6A6B0'
          },
        }
      }
    }
  }

})