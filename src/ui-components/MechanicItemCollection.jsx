/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { User } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import MechanicItem from "./MechanicItem";
import { Collection } from "@aws-amplify/ui-react";
export default function MechanicItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "type", operator: "eq", operand: "Mechanic" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: User,
    criteria: itemsFilter,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "MechanicItemCollection")}
      {...rest}
    >
      {(item, index) => (
        <MechanicItem
          image={item.picture}
          name={item.name}
          height="auto"
          width="auto"
          margin="0 10px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MechanicItem>
      )}
    </Collection>
  );
}
