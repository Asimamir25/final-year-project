import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import BookingIcon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Entypo";

export const bookIcon = <Icon1 name="location-pin" size={16} color="black" />;

const EarnMoney = (props) => {
  const [selectedValue, setSelectedValue] = useState("All Task");
  const [count, setCount] = useState(1);
  const [chats, setChats] = useState([
    {
      key: 0,
      image: require("../img/im.jpg"),
      name: "Need cake with extra cream ",
      messae: "Bahria Town Lahore ",
      batch: 5,
      time: " Rs:1,200",
      icon: bookIcon,
      Comm: count,
      Commennt: "  Comment ",
      Offer: " offer",
      Postedby: "Asim Amir",
      Date: "28-oct-2020",
    },
    {
      key: 1,
      image: require("../img/as.jpg"),
      name: "Need Biryani",
      messae: "Faisalabad 123",
      batch: 10,
      time: " Rs:1,200",
      icon: bookIcon,
      Comm: count,
      Commennt: "  Comment ",
      Offer: " offer",
      Postedby: "Asim Amir",
      Date: "28-oct-2020",
    },
    {
      key: 2,
      image: require("../img/ab.jpg"),
      name: " I Need Fruit Cake ",
      messae: "Lahore",
      batch: "open",
      time: " Rs:1,200",
      icon: bookIcon,
      Comm: count,
      Commennt: "  Comment ",
      Offer: " offer",
      Postedby: "Ali ",
      Date: "28-oct-2020",
    },
    {
      key: 3,
      image: require("../img/as.jpg"),
      name: " I want Makhan Cake",
      messae: "Islamabad",
      batch: 22,
      time: "Rs:100",
      icon: bookIcon,
      Comm: count,
      Commennt: "  Comment ",
      Offer: " offer",
      Postedby: "Aslam ",
      Date: "28-oct-2020",
    },
    {
      key: 4,
      image: require("../img/as.jpg"),
      name: "Cake with Extra cream",
      messae: "Faialabad",
      batch: 22,
      time: "Rs:1200",
      icon: bookIcon,
      Comm: count,
      Commennt: "  Comment ",
      Offer: " offer",
      Postedby: "Raja G",
      Date: "28-oct-2020",
    },
    {
      key: 5,
      image: require("../img/as.jpg"),
      name: "Pizza cake",
      messae: "Lahore.",
      batch: 22,
      time: " Rs:1,200",
      icon: bookIcon,
      Comm: count,
      Commennt: "  Comment ",
      Offer: " offer",
      Postedby: "Amber",
      Date: "28-oct-2020",
    },
    {
      key: 6,
      image: require("../img/as.jpg"),
      name: "I need pizza pastry",
      messae: "Lahore",
      batch: 22,
      time: " Rs:1,200",
      icon: bookIcon,
      Commennt: "  Comment ",
      Comm: count,
      Offer: " offer",
      Postedby: "Asim Amir",
      Date: "28-oct-2020",
    },
    {
      key: 7,
      image: require("../img/as.jpg"),
      name: "Burger",
      messae: "Lahore",
      batch: 22,
      time: " Rs:1,200",
      icon: bookIcon,
      Commennt: "  Comment ",
      Offer: " offer",
      Comm: count,
    },
    {
      key: 8,
      image: require("../img/as.jpg"),
      name: "Burger",
      messae: "Loern impsum , Dummy text here ...",
      batch: 22,
      icon: bookIcon,
      time: " Rs:1,200",
      Commennt: "  Comment",
      Offer: "offer",
      Comm: count,
    },
    {
      key: 9,
      image: require("../img/as.jpg"),
      name: "Nabeel Amir",
      messae: "Loern impsum , Dummy text here ...",
      batch: 22,
      time: " Rs:1,200",
      icon: bookIcon,
      Commennt: "  Comment",
      Offer: "offer",
      Comm: count,
    },
    {
      key: 10,
      image: require("../img/as.jpg"),
      name: "Nabeel Amir",
      messae: "Loern impsum , Dummy text here ...",
      batch: 22,
      time: "12:10",
      Commennt: "  Comment",
      Offer: "offer",
      Comm: count,
    },
    {
      key: 11,
      image: require("../img/as.jpg"),
      name: "Nabeel Amir",
      messae: "Loern impsum , Dummy text here ...",
      batch: 22,
      time: "12:10",
    },
    {
      key: 12,
      image: require("../img/as.jpg"),
      name: "Nabeel Amir",
      messae: "Loern impsum , Dummy text here ...",
      batch: 22,
      time: "12:10",
    },
    {
      key: 13,
      image: require("../img/as.jpg"),
      name: "Nabeel Amir",
      messae: "Loern impsum , Dummy text here ...",
      batch: 22,
      time: "12:10",
    },
  ]);

  const renderChats = ({ item }) => (
    <>
      <View style={styles.chatSection}>
        <View style={styles.chatLeftSection}>
          <Image style={styles.image} source={item.image} />
        </View>
        <TouchableOpacity
          style={styles.chatMiddleSection}
          onPress={() => {
            props.navigation.navigate(
              "New",

              {
                name: item.name,
                time: item.time,
                image: item.image,
                Postedby: item.Postedby,
                messae: item.messae,
                Date: item.Date,
              }

              // (props.chatinfo = { name: item.name })
            );
          }}
        >
          <Text style={styles.name}> {item.name}</Text>
          <Text style={styles.messagePart}>
            {item.icon} {item.messae}
          </Text>
          <Text style={styles.messagePart}>
            {item.Comm}
            {item.Commennt}
            {item.Comm}
            {item.Offer}
          </Text>
        </TouchableOpacity>
        <View>
          <Button title="Open" />
          <Text style={styles.time}> {item.time}</Text>
        </View>
        {/* 
        <View style={styles.chatRightSection}>
          <Text style={styles.time}> {item.time}</Text>
        </View> */}
      </View>
    </>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.11, backgroundColor: "#F4EEEE", marginTop: 60 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 30, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="All Task" value="All Task" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ marginLeft: 60, marginTop: 10 }}>
              <Icon name="search" size={25} color="black" />
            </Text>
            <Text style={{ marginLeft: 50, marginTop: 10 }}>
              <Icon1 name="location-pin" size={25} color="black" />
            </Text>
            <Text style={{ marginLeft: 40, marginTop: 10 }}>
              <Icon1 name="sound-mix" size={25} color="black" />
            </Text>
          </View>
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text>Task Near Lahore </Text>
        </View>
      </View>
      <View style={styles.chatsContainer}>
        <FlatList
          data={chats}
          renderItem={renderChats}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

export default EarnMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  chatsContainer: { flex: 0.9 },
  chatSection: {
    padding: 12,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 2,
  },
  chatLeftSection: { flex: 0.3 },
  chatRightSection: {
    flex: 0.9,
  },
  chatMiddleSection: {
    paddingHorizontal: 10,
    flex: 1,
  },
  name: {
    fontSize: 20,

    marginBottom: 5,
  },
  messagePart: {
    opacity: 0.5,
    marginTop: 1,
  },
  // batchContainer: {
  //   alignItems: "center",
  //   paddingVertical: 5,
  //   backgroundColor: "#28B463",
  //   marginBottom: 5,
  //   height: 30,
  //   width: 100,
  //   right: 60,
  // },
  // batch: {
  //   fontWeight: "bold",
  //   color: "white",
  // },
  time: {
    color: "red",
    width: 120,

    fontSize: 20,
    marginTop: 7,
  },

  h1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#5DADE2",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  center: {
    alignItems: "center",
  },
  separator: (setting) => ({
    borderBottomColor: setting.themeColor,
    borderBottomWidth: 2,
    width: 200,
  }),
});
