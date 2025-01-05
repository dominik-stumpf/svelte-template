import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  presets: [
    presetUno(),
    presetIcons(),
    presetWind(),
    presetWebFonts({ provider: "fontshare", fonts: { sans: "Satoshi", mono: "Azeret Mono" } }),
    //presetWebFonts({
    //  provider: 'google', // default provider
    //  fonts: {
    //    // these will extend the default theme
    //    sans: 'Roboto',
    //    mono: ['Fira Code', 'Fira Mono:400,700'],
    //    // custom ones
    //    lobster: 'Lobster',
    //    lato: [
    //      {
    //        name: 'Lato',
    //        weights: ['400', '700'],
    //        italic: true,
    //      },
    //      {
    //        name: 'sans-serif',
    //        provider: 'none',
    //      },
    //    ],
    //  },
    //}),
    presetTypography()
  ]
})
