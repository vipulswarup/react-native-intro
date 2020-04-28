import React, { useState } from "react";
import { View, Text, Image, ScrollView, Button, TextInput } from "react-native";

const logo = {
  uri: "https://eisenvault.com/wp-content/uploads/2015/02/ev-sitelogo.png",
  width: 164,
  height: 64,
};

function CatApp(props) {
  const [isHungry, setIsHungry] = useState(true);
  const [timesPetted, setTimesPetted] = useState(0);

  return (
    <ScrollView>
      <View>
        <Text>
          My Name is {props.name} and I am {isHungry ? "hungry" : "full"}! I
          have been petted {timesPetted} times.
        </Text>
        <Image
          source="https://i.pinimg.com/236x/be/44/ec/be44ecf53810df9bd401194443d55f76--cat-breeds-dr-evil.jpg"
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <Button
        onPress={() => {
          setTimesPetted(timesPetted + 1);
        }}
        title="Pet Me"
      />
    </ScrollView>
  );
}

export default CatApp;
