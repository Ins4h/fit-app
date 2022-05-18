import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { withTheme } from "react-native-paper";
import { View, StyleSheet, FlatList, Text } from "react-native";
import FitInput from "../../components/FitInput";
import FitButton from "../../components/FitButton";
import ExerciseItem from "./components/ExerciseItem";
import FitDateTimePicker from '../../components/FitDateTimePicker';
import FitDropDown from '../../components/FitDropDown';

const EditWorkoutView = ({ theme: { colors: { background } } }) => {
  const navigation = useNavigation()

  const [title, setTitle] = useState()
  const [breaks, setBreaks] = useState()
  const [startTime, setStartTime] = useState()
  const [showDateTimePicker, setShowDateTimePicker] = useState(false)
  const [selectedDay, setSelectedDay] = useState()

  const onStartTimePick = (time) => {
    setShowDateTimePicker(false)
    setStartTime(time)
  }

  const renderItem = ({ item }) => (
    <ExerciseItem
      name={item.name}
      weights={item.weights}
      sets={item.sets}
      reps={item.reps}
      breaks={item.breaks}
    />
  )

  const chooseExercises = () => {
    // TODO
  }

  const addYourExercises = () => {
    // TODO
  }

  return (
    <View style={styles(background).container}>
      <FitInput
        filled={true}
        label="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <View style={{ height: 16 }} />
      <FitDropDown label={'Select day'} data={days} onSelect={(day) => setSelectedDay(day)} />
      <View style={{ height: 16 }} />
      <FitInput
        filled={true}
        label="Break beetween exercises"
        keyboardType='numeric'
        onChangeText={(text) => setBreaks(text.replace(/[^0-9]/g, ''))}
        value={breaks}
        maxLength={3}
      />
      <View style={{ height: 16 }} />
      <FitInput
        filled={true}
        label="Start time"
        onFocus={() => setShowDateTimePicker(true)}
        value={startTime}
        showSoftInputOnFocus={false}
      />
      {showDateTimePicker && <FitDateTimePicker
        type={'time'}
        onPick={(time) => onStartTimePick(time)}
      />}
      <View style={styles().buttonsRow}>
        <FitButton
          style={{ flex: 1, marginRight: 16 }}
          onPress={chooseExercises}
        >
          choose exercises
        </FitButton>
        <FitButton
          style={{ flex: 1 }}
          onPress={addYourExercises}
        >
          add your exercises
        </FitButton>
      </View>
      <View
        style={styles().listDescription}
      >
        <Text style={styles().listDescriptionName}>Name</Text>
        <Text style={styles().listDescriptionItem}>Weights</Text>
        <Text style={styles().listDescriptionItem}>Sets</Text>
        <Text style={styles().listDescriptionItem}>Reps</Text>
        <Text style={styles().listDescriptionItem}>Breaks</Text>
      </View>
      <FlatList
        data={exerciseItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles().exerciseItemList}
      />
    </View>
  )
}

const styles = (background) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    padding: 16,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  listDescription: {
    flexDirection: "row",
    marginTop: 32,
  },
  listDescriptionName: {
    flex: 2,
    textAlign: "center",
  },
  listDescriptionItem: {
    flex: 1,
    textAlign: "center",
  }
})

const exerciseItems = [
  { id: 0, name: 'Benchpress', weights: 40, sets: 4, reps: 12, breaks: 60 },
  { id: 1, name: 'Name', weights: 1, sets: 2, reps: 3, breaks: 4 },
  { id: 2, name: 'Name', weights: 1, sets: 2, reps: 3, breaks: 4 },
  { id: 3, name: 'Name', weights: 1, sets: 2, reps: 3, breaks: 4 },
  { id: 4, name: 'Name', weights: 1, sets: 2, reps: 3, breaks: 4 },
  { id: 5, name: 'Name', weights: 1, sets: 2, reps: 3, breaks: 4 },
  { id: 6, name: 'Name', weights: 1, sets: 2, reps: 3, breaks: 4 },
]

const days = [
  { id: 0, label: 'Monday' },
  { id: 1, label: 'Tuesday' },
  { id: 2, label: 'Wednesday' },
  { id: 3, label: 'Thursday' },
  { id: 4, label: 'Friday' },
  { id: 5, label: 'Saturday' },
  { id: 6, label: 'Sunday' },
]

export default withTheme(EditWorkoutView)
