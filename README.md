# `useAnimatedProps` Is Not Testable

This demo shows that it is not possible to test animations that use the
`useAnimatedProps` hook. 

1. [AnimatedLine](https://github.com/soulfresh/reanimated-test-animated-props/blob/main/components/AnimatedLine.tsx)
   This component uses `react-native-svg` and `react-native-reanimated` to
    animate the `strokeOffset` prop of an SVG Path element.
2. [AnimatedLine-test](https://github.com/soulfresh/reanimated-test-animated-props/blob/main/components/__tests__/AnimatedLine-test.tsx)
   This test demonstrates that the `strokeOffset` prop is never updated
   even though the `useAnimatedProps` hook is receiving updated values
   when the Jest timers run.

## Run the tests

1. Install dependencies

   ```bash
   yarn install
   ```

2. Run the tests

   ```bash
    yarn test
   ```

## View the demo

You can see that the SVG Path is indeed animating by running the demo.
Run the command below and then look for the animating red line on the
index page.

   ```bash
    yarn web
   ```

## FYI

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

