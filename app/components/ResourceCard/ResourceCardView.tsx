import React from "react";

import { Chart, ChartTypes } from "../Chart";

import styles from "./styles";
import { ResourceCardProps } from "./ResourceCard";

export function ResourceCardView(props: ResourceCardProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {props.resources.map((r) => {
          <View
            <Chart
            type={ChartTypes.doughnut}
            data={[r.alerts, r.amount]}
            labels={["Сигнал", "Ресурс"]}
            width={80}
            height={80}
          />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
