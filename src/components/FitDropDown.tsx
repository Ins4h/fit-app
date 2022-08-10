import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';


interface ItemProp {
  id: number;
  label: string;
}

interface FitDropDownProps {
  label: string;
  data: ItemProp[];
  onSelect: (value: string) => void;
}

const FitDropDown: React.FC<FitDropDownProps> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef<TouchableOpacity | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<ItemProp | null>(null);
  const [dropdownTop, setDropdownTop] = useState<number>(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {

    DropdownButton.current.measure((_fx, _fy, _w, _h, _px, py) => {
      setDropdownTop(py);
    });
    setVisible(true);
  };

  const onItemPress = (item: ItemProp): void => {
    setSelected(item);
    onSelect(item.label);
    setVisible(false);
  };

  const renderItem = ({ item }: {item: ItemProp}) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: 64,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    marginHorizontal: 16,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#454545',
    backgroundColor: '#2C2C2C',
  },
  itemText: {
    textAlign: 'center',
  },
});

export default FitDropDown;