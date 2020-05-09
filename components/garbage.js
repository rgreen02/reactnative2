const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
  {
    id: 0,
    name: "guitar",
    type: INSTRUMENT_TYPE_STRING,
  },
  {
    id: 1,
    name: "xylophone",
    type: INSTRUMENT_TYPE_PERCUSSION,
  },
  {
    id: 2,
    name: "zither",
    type: INSTRUMENT_TYPE_STRING,
  },
  {
    id: 3,
    name: "bagpipes",
    type: INSTRUMENT_TYPE_WIND,
  },
];

const sortItems = (objArr) => {
  const newArray = [...objArr];
  return newArray.sort((a, b) => {
    return a.name.toUpperCase() < b.name.toUpperCase()
      ? -1
      : a.name.toUpperCase() > b.name.toUpperCase()
      ? 1
      : 0;
  });
};
//console.log("Start: " + newArray);
console.log(sortItems(instruments));
console.log(instruments);

////////////////////////
const animals = ["dog", "cat", "bird", "alligator"];

console.log(animals.filter((animal) => animal.length() < 4));

//Reservation Modal
<Modal
  animationType={"slide"}
  transparent={false}
  visible={this.state.showModal}
  onRequestClose={() => this.toggleModal()}
>
  <Alert.alert></Alert.alert>
  <View style={styles.modal}>
    <Text style={styles.modalTitle}>Search Campsite Reservations</Text>
    <Text style={styles.modalTitle}>
      Number of Campers: {this.state.campers}
    </Text>
    <Text style={styles.modalTitle}>
      Hike-In?: {this.state.hikeIn ? "Yes" : "No"}
    </Text>
    <Text style={styles.modalTitle}>Date: {this.state.date}</Text>
    <Button
      onPress={() => {
        this.toggleModal();
        this.resetForm();
      }}
      color="#5637DD"
      title="Close"
    />
  </View>
</Modal>;
