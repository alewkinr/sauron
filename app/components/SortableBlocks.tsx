import React from "react";
import Animated, {
    Value,
    add,
    cond,
    eq,
    block,
    set,
    useCode,
    multiply,
    divide,
    and,
    round,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
    moving,
    panGestureHandler,
    withSpringTransition,
} from "react-native-redash/src/v1";

import Block, { BLOCK_SIZE, BlockProps } from "./Block";

export const withOffset = ({
                               offset,
                               value,
                               state: gestureState,
                           }: {
    offset: Animated.Adaptable<number>;
    value: Animated.Value<number>;
    state: Animated.Value<State>;
}) => {
    const safeOffset = new Value(0);
    return cond(
        eq(gestureState, State.ACTIVE),
        add(safeOffset, value),
        set(safeOffset, offset)
    );
};

interface SortableCardProps extends BlockProps {
    index: number;
    offsets: { x: Animated.Value<number>; y: Animated.Value<number> }[];
}

export default ({ block, offsets, index }: SortableCardProps) => {
    const { gestureHandler, state, translation, velocity } = panGestureHandler();
    const currentOffset = offsets[index];
    const x = withOffset({
        value: translation.x,
        offset: currentOffset.x,
        state,
    });
    const y = withOffset({
        value: translation.y,
        offset: currentOffset.y,
        state,
    });
    const zIndex = cond(eq(state, State.ACTIVE), 200, cond(moving(y), 100, 1));
    const offsetX = multiply(round(divide(x, BLOCK_SIZE)), BLOCK_SIZE);
    const offsetY = multiply(round(divide(y, BLOCK_SIZE)), BLOCK_SIZE);
    const translateX = withSpringTransition(x, {}, velocity.x);
    const translateY = withSpringTransition(y, {}, velocity.y);
    useCode(
        () =>
            (
                offsets.map((offset) =>
                    cond(
                        and(
                            eq(offsetX, offset.x),
                            eq(offsetY, offset.y),
                            eq(state, State.ACTIVE)
                        ),
                        [
                            set(offset.x, currentOffset.x),
                            set(offset.y, currentOffset.y),
                            set(currentOffset.x, offsetX),
                            set(currentOffset.y, offsetY),
                        ]
                    )
                )
            ),
        [currentOffset.x, currentOffset.y, offsetX, offsetY, offsets, state]
    );
    return (
        <PanGestureHandler {...gestureHandler}>
            <Animated.View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: TAB_SIZE,
                    height: TAB_SIZE,
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [{ translateX }, { translateY }],
                    zIndex,
                }}
            >
                <Tab {...{ tab }} />
            </Animated.View>
        </PanGestureHandler>
    );
};