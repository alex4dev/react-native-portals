import { NativeModules, requireNativeComponent } from "react-native";

const { Portals } = NativeModules;

const PortalDestinationView = requireNativeComponent("RCTPortalDestination");
const PortalOriginView = requireNativeComponent("RCTPortalOrigin");

export { PortalDestinationView, PortalOriginView };

export default Portals;
