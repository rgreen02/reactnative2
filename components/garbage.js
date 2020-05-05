import { Avatar } from "react-native-elements";
import * as React from "react";
import { View } from "react-native";

class About extends Component {
  render() {
    return (
      <View>
        // Standard Avatar
        <Avatar
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
        // Avatar with Title
        <Avatar rounded title="MD" />
        // Avatar with Icon
        <Avatar rounded icon={{ name: "home" }} />
        // Standard Avatar with accessory
        <Avatar
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          }}
          showAccessory
        />
      </View>
    );
  }
}
