import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryBar,
  VictoryTheme,
} from 'victory-native';

export default function Chart() {
  const [data, setData] = useState([]);
  return (
    <View style={styles.container}>
      <VictoryChart
        polar
        theme={VictoryTheme.material}
        animate={{ duration: 1000, easing: 'bounce' }}>
        {data.map((d, i) => {
          return (
            <VictoryPolarAxis
              dependentAxis
              key={i}
              label={d}
              labelPlacement="perpendicular"
              style={{ tickLabels: { fill: 'none' } }}
              axisValue={d}
            />
          );
        })}
        <VictoryBar
          style={{ data: { fill: 'tomato', width: 25 } }}
          data={
            [
              // { x: 'cat', y: 10 },
              // { x: 'dog', y: 25 },
              // { x: 'bird', y: 40 },
              // { x: 'frog', y: 50 },
              // { x: 'fish', y: 50 },
            ]
          }
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  chart: {
    height: '95%',
    width: '95%',
    backgroundColor: 'yellow',
  },
});
