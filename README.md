# astro-v7-heading-attributes-repro

## Steps to reproduce

1. Clone this repository
1. Run `pnpm install`
1. Run `pnpm dev`
1. Visit [`http://localhost:4321/`](http://localhost:4321/) in your browser and notice the second heading ID is not `custom-id` but the default generated ID `heading-with-custom-id`
1. Visit [`http://localhost:4321/`](http://localhost:4321/test/) in your browser and notice the second heading ID is not `custom-id` but the default generated ID `heading-with-custom-id`
1. Open `astro.config.mjs` and uncomment the `hastPlugins: [satteriHeadingIdsPlugin, hastPlugin],` line
1. Notice it does not work either when having a plugin trying to read custom IDs
