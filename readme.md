# Weather ap

## Requirements

- node version 12+
- yarn or npm
- react-native-cli
- cocoaPods for iOS build
- android sdk for android build

## Commands

- `yarn && cd ios && pod install && cd ..`
- `yarn start`
- On another terminal use `yarn ios` or `yarn android`
- Create a .env file on root following the .env.example

## Structure

- Components (atomic design based)
- Constants (separated by entities)
- Screens (screens of app and routes)
- Services (alot of functions separated by your use, example -> locale)
- Styles (static styles props(example -> colors))
- Constants (constants of app separated by entity or screen)
- Interface (general interfaces separated by entity)
