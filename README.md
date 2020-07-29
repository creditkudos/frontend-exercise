# Credit Kudos frontend exercise

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), meaning that, after installing `yarn` (if necessary), you can just run `yarn` in the project directory to install the required packages, and then `yarn start` to launch a local development environment.

Out of the box, you have access to the following tools:

- `react` 16.13.1
- `react-redux` 7.2.1
- `styled-components` 5.1.1 (for if your styling preference is `styled-components`)
- `node-sass` 4.14.1 (for if your styling preference is SASS, regular CSS is also able to be used)

It's worth mentioning that this project is just a base starting point to get you going quickly, please do add whatever additional packages you wish to use and modify this project how you will.

## Design system

This project contains a stripped-down version of Credit Kudos' `Pando` design system, including spacing, colour, breakpoint and typography tokens (for usage inside your styling logic), and an `Icon` component. These tokens are importable via `lib/theme.js` either on a per-token basis (i.e. `import { ColorViolet50 } from "./lib/theme`), or all at once via a wildcard object (`import theme from "./lib/theme"`). A full record of available tokens is available in `lib/tokens.js`. Alternatively, they are accessible as SASS variables in `lib/tokens.scss`.

For a contextual view of these tokens expressed visually, please refer to the (currently under-development) [Pando online guide](https://pando.creditkudos.com/).

## Icon component

The Icon component (`lib/Icon.jsx`) takes one property, `name`, which corresponds to the filename of the SVG asset to reference. These SVG assets are contained in `lib/Icon/icons/expenditure` (for category-themed icons) and `lib/Icon/icons/interface` (for UX-oriented icons).

Example Icon usage:

```
<Icon name="tick" />
```

## Mock data

To assist you in building your example project, mock data is also provided via `lib/data.js`, importable as an array of objects to mirror a basic API response for category-organised transactions. A static array of data is available as a default export from `lib/data.js`, but an alternate version where values are randomly generated per invokation is also available via the exported `randomData` object.

## Development starting point

The project is visually structured to very loosely resemble Atlas, Credit Kudos' flagship underwriting platform, to provide a little bit of visual context when developing the feature associated with this exercise. It's recommended that the `AppBody` component is used as the starting point for your work. `index.scss` currently handles global CSS styling, and individual components are styled using `styled-components`, though feel free to modify this.
