import React from 'react';
import {titles} from '../../../constants/strings';
import {DescriptionItems} from '../components/descriptionItems';

export const DescriptionItemsList = () => {
  return (
    <>
      <DescriptionItems text={titles.CULTURE_INFO_ONE} />
      <DescriptionItems text={titles.CULTURE_INFO_TWO} />
      <DescriptionItems text={titles.CULTURE_INFO_THREE} />
      <DescriptionItems text={titles.CULTURE_INFO_FOUR} />
      <DescriptionItems text={titles.CULTURE_INFO_FIVE} />
      <DescriptionItems text={titles.CULTURE_INFO_SIX} />
    </>
  );
};
