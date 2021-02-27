import React from "react";
import { FlatList, SafeAreaView, ScrollView } from "react-native";

import { Chart, ChartTypes } from "../Chart";

import styles from "./styles";
import { ResourceCardProps, Resource } from "./ResourceCard";

const Item = ({ amount, id, alerts }: Resource) => (
  <Chart
    type={ChartTypes.doughnut}
    title={id}
    data={{ doughnut: [alerts, amount] }}
    labels={["Сигнал", "Ресурс"]}
    width={80}
    height={80}
  />
);

export function ResourceCardView(props: ResourceCardProps): JSX.Element {
  const renderItem = (item: Resource) => {
    return <Item title={item.id} amount={item.amount} alerts={item.alerts} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={props.resources}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
