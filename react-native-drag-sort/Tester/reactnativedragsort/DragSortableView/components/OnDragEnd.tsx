import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {DragSortableView} from 'react-native-drag-sort';
import {dragSortableViewStyle as styles} from '../../styles';
import {generateDataSource} from '../../libs';

/**
 * 方法：
 * onDragEnd,【拖拽结束】
 */

const defaultData = generateDataSource(20, '标题');

export const API_onDragEnd = () => {
  return (
    <Tester style={{flex: 1}}>
      <TestSuite name="onDragEnd">
        <TestCase
          key={'onDragEnd'}
          itShould={`方法onDragEnd`}
          tags={['C_API']}
          initialState={false}
          arrange={({setState}) => {
            return (
              <View>
                <DragSortableView
                  parentWidth={356}
                  dataSource={defaultData}
                  childrenHeight={90}
                  childrenWidth={88}
                  onDragEnd={() => {
                    Alert.alert('触发onDragEnd', '', [
                      {text: 'OK', onPress: () => setState(true)},
                    ]);
                  }}
                  renderItem={item => {
                    return (
                      <View
                        key={item.id}
                        style={{...styles.childView, height: 84}}>
                        <Text style={styles.childText}>{item.title}</Text>
                      </View>
                    );
                  }}
                />
              </View>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
    </Tester>
  );
};
