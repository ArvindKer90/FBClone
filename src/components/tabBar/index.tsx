import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import VectorIcon from '../../utils/vectorIcons';
import Color from '../../utils/color';
import styles from './styles';

type MyTabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

const MyTabBar: React.FC<MyTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const name =
          route.name === 'Home' && isFocused
            ? 'home'
            : route.name === 'Home' && !isFocused
            ? 'home-outline'
            : route.name === 'Friends' && isFocused
            ? 'people'
            : route.name === 'Friends' && !isFocused
            ? 'people-outline'
            : route.name === 'Notifications' && isFocused
            ? 'notifications'
            : route.name === 'Notifications' && !isFocused
            ? 'notifications-outline'
            : route.name === 'Profile' && isFocused
            ? 'user'
            : route.name === 'Profile' && !isFocused
            ? 'user-o'
            : route.name === 'Settings' && isFocused
            ? 'settings'
            : 'settings-outline';
        const iconType = route.name === 'Profile' ? 'FontAwesome' : 'Ionicons';
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            <View
              style={[
                styles.spaceView,
                {
                  backgroundColor: isFocused
                    ? Color.ultramarineBlue
                    : Color.white,
                },
              ]}
            />
            <VectorIcon
              name={name}
              size={route.name === 'Profile' && !isFocused ? 17 : 20}
              color={isFocused ? Color.ultramarineBlue : Color.dimGray}
              type={iconType}
              isDisabled={true}
              onPress={() => {}}
            />
            <Text
              style={[
                styles.txt,
                {
                  color: isFocused ? Color.ultramarineBlue : Color.dimGray,
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default MyTabBar;
