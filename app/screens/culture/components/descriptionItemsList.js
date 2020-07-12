import React from 'react';
import {View} from 'react-native'
import {titles} from '../../../constants/strings';
import {DescriptionItems} from '../components/descriptionItems';

const data = [
  titles.CULTURE_INFO_ONE,
  titles.CULTURE_INFO_TWO,
  titles.CULTURE_INFO_THREE,
  titles.CULTURE_INFO_FOUR,
  titles.CULTURE_INFO_FIVE,
  titles.CULTURE_INFO_SIX,
];
console.log(data.indexOf(data.map((item)=>item)))
export const DescriptionItemsList = () => {
  return (
    <View>
    {
      data.map((item, index)=>{
        return <DescriptionItems key={index} text={item} index={index}/>
      })
    }  
    </View>
  );
};
