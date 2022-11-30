import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-public-test' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const PublicTest = NativeModules.PublicTest ? NativeModules.PublicTest : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function multiply(a, b) {
  return PublicTest.multiply(a, b);
}
//# sourceMappingURL=index.js.map