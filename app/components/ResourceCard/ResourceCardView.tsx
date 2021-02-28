import React from "react";
import { FlatList, SafeAreaView, ScrollView } from "react-native";

import { Chart, ChartTypes } from "../Chart";

import styles from "./styles";
import { ResourceCardProps, Resource } from "./ResourceCard";

const Item = ({ amount, id, alerts }: Resource) => (
  <Chart
    type={ChartTypes.doughnut}
    title={id}
    data={{
      doughnut: {
        labels: ["Сигнал", "Ресурс"],
        data: [alerts, amount],
      },
    }}
    config={{ isHiddenLegend: true, strokeWidth: 8 }}
    height={80}
  />
);

export function ResourceCardView(props: ResourceCardProps): JSX.Element {
  const renderItem = ({ item }) => (
    <Item id={item.id} amount={item.amount} alerts={item.alerts} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList horizontal={true}
          data={props.resources}
          renderItem={renderItem}
          keyExtractor={(resource: Resource) => resource.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
