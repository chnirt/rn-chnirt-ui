import React, {useEffect, useRef} from 'react';
import {Animated, Text, View, Easing, SafeAreaView} from 'react-native';
import {styles} from './styles';

const GlowView = (props) => {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(glowAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.inOut(Easing.quad),
      }),
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: glowAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export const LoadingRow = ({index, length}) => {
  const isLast = index === length - 1;

  return (
    <SafeAreaView key={index}>
      <GlowView>
        <View style={styles.LoadingItem}>
          <View style={styles.GlowCheckbox} />
          <Text style={styles.GlowText} />
        </View>
      </GlowView>
      {!isLast && <View style={styles.Divider} />}
    </SafeAreaView>
  );
};

export default LoadingRow;
