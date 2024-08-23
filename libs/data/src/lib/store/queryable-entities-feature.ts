import { SignalStoreFeature, signalStoreFeature, withState } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { EmptyFeatureResult } from '@ngrx/signals/src/signal-store-models';

export type QueryState = {
  loading: boolean;
  listOffsetIndex: number;
  queryParams: { offset: number; limit: number };
};

export type NamedQueryState<Collection extends string> = {
  [Key in keyof QueryState as `${Collection}${Capitalize<Key>}`]: QueryState[Key];
};

export type NamedQueryMethods<Collection extends string> = {
  [Key in keyof QueryState as `update${Capitalize<Collection>}${Capitalize<Key>}`]: (value: QueryState[Key]) => void;
};

export type QueryStateKeys<Collection extends string> = {
  [Key in keyof QueryState as `${Key}Key`]: keyof NamedQueryState<Collection> | keyof QueryState;
};

const getQueryStateKeys = <Collection extends string>(config: { collection: Collection }): QueryStateKeys<Collection> => ({
  loadingKey: `${config.collection}Loading`,
  queryParamsKey: `${config.collection}QueryParams`,
  listOffsetIndexKey: `${config.collection}ListOffsetIndex`,
});

const queryState = <Collection extends string>(config: { collection: Collection }): NamedQueryState<Collection> => {
  const { loadingKey, queryParamsKey, listOffsetIndexKey } = getQueryStateKeys(config);

  return {
    [loadingKey]: false,
    [queryParamsKey]: { offset: 0, limit: 100 },
    [listOffsetIndexKey]: 0,
  } as NamedQueryState<Collection>;
};

export const withQueryFeature = <Entity, Collection extends string>(config: {
  entity: Entity;
  collection: Collection;
}): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: NamedQueryState<Collection>;
    methods: Record<string, never>;
    computed: Record<string, never>;
  }
> => signalStoreFeature(withState(queryState(config)));

export const withQueryableEntitiesFeature = <Entity, Collection extends string>(config: { entity: Entity; collection: Collection }) =>
  signalStoreFeature(withEntities(config), withQueryFeature(config));
