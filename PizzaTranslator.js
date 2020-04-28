import React, { useState } from "react";
import { View, Text, Image, ScrollView, Button, TextInput } from "react-native";

async function translateToSpanish(sourceText, setterFunc) {
  try {
    console.log("Called with" + sourceText);
    const API_KEY = "AIzaSyDXg4bUZyCQrRsL2W0zpB-svcNsUFVyhoU";
    var url = `https://translation.googleapis.com/language/translate/v2?target=es&key=${API_KEY}&q=${sourceText}`;
    encodeURI(sourceText);

    let result = await fetch(url);

    let responseJson = await result.json();

    //var parsedResult = responseJson;

    var translatedText = responseJson.data.translations[0].translatedText;
    console.log("result of query is" + translatedText);

    setterFunc(translatedText);
  } catch (error) {
    console.log(error);
  }
}

function PizzaTranslator(props) {
  const [text, setText] = useState("Hello World Again");
  const [translatedText, setTranslatedText] = useState("Not translated yet");
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate"
        onChangeText={(text) => translateToSpanish(text, setTranslatedText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{translatedText}</Text>
    </View>
  );
}

export default PizzaTranslator;
