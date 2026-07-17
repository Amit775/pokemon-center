import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Locations
 * @@TypeGraphQL.type(name: "Location")
 */
export type LocationsModel = runtime.Types.Result.DefaultSelection<Prisma.$LocationsPayload>;
export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null;
    _avg: LocationsAvgAggregateOutputType | null;
    _sum: LocationsSumAggregateOutputType | null;
    _min: LocationsMinAggregateOutputType | null;
    _max: LocationsMaxAggregateOutputType | null;
};
export type LocationsAvgAggregateOutputType = {
    id: number | null;
    region_id: number | null;
};
export type LocationsSumAggregateOutputType = {
    id: number | null;
    region_id: number | null;
};
export type LocationsMinAggregateOutputType = {
    id: number | null;
    region_id: number | null;
    identifier: string | null;
};
export type LocationsMaxAggregateOutputType = {
    id: number | null;
    region_id: number | null;
    identifier: string | null;
};
export type LocationsCountAggregateOutputType = {
    id: number;
    region_id: number;
    identifier: number;
    _all: number;
};
export type LocationsAvgAggregateInputType = {
    id?: true;
    region_id?: true;
};
export type LocationsSumAggregateInputType = {
    id?: true;
    region_id?: true;
};
export type LocationsMinAggregateInputType = {
    id?: true;
    region_id?: true;
    identifier?: true;
};
export type LocationsMaxAggregateInputType = {
    id?: true;
    region_id?: true;
    identifier?: true;
};
export type LocationsCountAggregateInputType = {
    id?: true;
    region_id?: true;
    identifier?: true;
    _all?: true;
};
export type LocationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to aggregate.
     */
    where?: Prisma.LocationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?: Prisma.LocationsOrderByWithRelationInput | Prisma.LocationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LocationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Locations
    **/
    _count?: true | LocationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType;
};
export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
    [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocations[P]> : Prisma.GetScalarType<T[P], AggregateLocations[P]>;
};
export type LocationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationsWhereInput;
    orderBy?: Prisma.LocationsOrderByWithAggregationInput | Prisma.LocationsOrderByWithAggregationInput[];
    by: Prisma.LocationsScalarFieldEnum[] | Prisma.LocationsScalarFieldEnum;
    having?: Prisma.LocationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocationsCountAggregateInputType | true;
    _avg?: LocationsAvgAggregateInputType;
    _sum?: LocationsSumAggregateInputType;
    _min?: LocationsMinAggregateInputType;
    _max?: LocationsMaxAggregateInputType;
};
export type LocationsGroupByOutputType = {
    id: number;
    region_id: number | null;
    identifier: string;
    _count: LocationsCountAggregateOutputType | null;
    _avg: LocationsAvgAggregateOutputType | null;
    _sum: LocationsSumAggregateOutputType | null;
    _min: LocationsMinAggregateOutputType | null;
    _max: LocationsMaxAggregateOutputType | null;
};
export type GetLocationsGroupByPayload<T extends LocationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocationsGroupByOutputType[P]>;
}>>;
export type LocationsWhereInput = {
    AND?: Prisma.LocationsWhereInput | Prisma.LocationsWhereInput[];
    OR?: Prisma.LocationsWhereInput[];
    NOT?: Prisma.LocationsWhereInput | Prisma.LocationsWhereInput[];
    id?: Prisma.IntFilter<"Locations"> | number;
    region_id?: Prisma.IntNullableFilter<"Locations"> | number | null;
    identifier?: Prisma.StringFilter<"Locations"> | string;
    region?: Prisma.XOR<Prisma.RegionsNullableScalarRelationFilter, Prisma.RegionsWhereInput> | null;
    areas?: Prisma.LocationAreasListRelationFilter;
    gameIndices?: Prisma.LocationGameIndicesListRelationFilter;
    evolution?: Prisma.PokemonEvolutionListRelationFilter;
};
export type LocationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    region?: Prisma.RegionsOrderByWithRelationInput;
    areas?: Prisma.LocationAreasOrderByRelationAggregateInput;
    gameIndices?: Prisma.LocationGameIndicesOrderByRelationAggregateInput;
    evolution?: Prisma.PokemonEvolutionOrderByRelationAggregateInput;
};
export type LocationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LocationsWhereInput | Prisma.LocationsWhereInput[];
    OR?: Prisma.LocationsWhereInput[];
    NOT?: Prisma.LocationsWhereInput | Prisma.LocationsWhereInput[];
    region_id?: Prisma.IntNullableFilter<"Locations"> | number | null;
    identifier?: Prisma.StringFilter<"Locations"> | string;
    region?: Prisma.XOR<Prisma.RegionsNullableScalarRelationFilter, Prisma.RegionsWhereInput> | null;
    areas?: Prisma.LocationAreasListRelationFilter;
    gameIndices?: Prisma.LocationGameIndicesListRelationFilter;
    evolution?: Prisma.PokemonEvolutionListRelationFilter;
}, "id">;
export type LocationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    _count?: Prisma.LocationsCountOrderByAggregateInput;
    _avg?: Prisma.LocationsAvgOrderByAggregateInput;
    _max?: Prisma.LocationsMaxOrderByAggregateInput;
    _min?: Prisma.LocationsMinOrderByAggregateInput;
    _sum?: Prisma.LocationsSumOrderByAggregateInput;
};
export type LocationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocationsScalarWhereWithAggregatesInput | Prisma.LocationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocationsScalarWhereWithAggregatesInput | Prisma.LocationsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Locations"> | number;
    region_id?: Prisma.IntNullableWithAggregatesFilter<"Locations"> | number | null;
    identifier?: Prisma.StringWithAggregatesFilter<"Locations"> | string;
};
export type LocationsCreateInput = {
    id: number;
    identifier: string;
    region?: Prisma.RegionsCreateNestedOneWithoutLocationsInput;
    areas?: Prisma.LocationAreasCreateNestedManyWithoutLocationInput;
    gameIndices?: Prisma.LocationGameIndicesCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionCreateNestedManyWithoutLocationInput;
};
export type LocationsUncheckedCreateInput = {
    id: number;
    region_id?: number | null;
    identifier: string;
    areas?: Prisma.LocationAreasUncheckedCreateNestedManyWithoutLocationInput;
    gameIndices?: Prisma.LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationsUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.RegionsUpdateOneWithoutLocationsNestedInput;
    areas?: Prisma.LocationAreasUpdateManyWithoutLocationNestedInput;
    gameIndices?: Prisma.LocationGameIndicesUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUpdateManyWithoutLocationNestedInput;
};
export type LocationsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    region_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    areas?: Prisma.LocationAreasUncheckedUpdateManyWithoutLocationNestedInput;
    gameIndices?: Prisma.LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationsCreateManyInput = {
    id: number;
    region_id?: number | null;
    identifier: string;
};
export type LocationsUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LocationsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    region_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LocationsListRelationFilter = {
    every?: Prisma.LocationsWhereInput;
    some?: Prisma.LocationsWhereInput;
    none?: Prisma.LocationsWhereInput;
};
export type LocationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LocationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type LocationsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
};
export type LocationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type LocationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type LocationsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
};
export type LocationsScalarRelationFilter = {
    is?: Prisma.LocationsWhereInput;
    isNot?: Prisma.LocationsWhereInput;
};
export type LocationsNullableScalarRelationFilter = {
    is?: Prisma.LocationsWhereInput | null;
    isNot?: Prisma.LocationsWhereInput | null;
};
export type LocationsCreateNestedManyWithoutRegionInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutRegionInput, Prisma.LocationsUncheckedCreateWithoutRegionInput> | Prisma.LocationsCreateWithoutRegionInput[] | Prisma.LocationsUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutRegionInput | Prisma.LocationsCreateOrConnectWithoutRegionInput[];
    createMany?: Prisma.LocationsCreateManyRegionInputEnvelope;
    connect?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
};
export type LocationsUncheckedCreateNestedManyWithoutRegionInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutRegionInput, Prisma.LocationsUncheckedCreateWithoutRegionInput> | Prisma.LocationsCreateWithoutRegionInput[] | Prisma.LocationsUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutRegionInput | Prisma.LocationsCreateOrConnectWithoutRegionInput[];
    createMany?: Prisma.LocationsCreateManyRegionInputEnvelope;
    connect?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
};
export type LocationsUpdateManyWithoutRegionNestedInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutRegionInput, Prisma.LocationsUncheckedCreateWithoutRegionInput> | Prisma.LocationsCreateWithoutRegionInput[] | Prisma.LocationsUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutRegionInput | Prisma.LocationsCreateOrConnectWithoutRegionInput[];
    upsert?: Prisma.LocationsUpsertWithWhereUniqueWithoutRegionInput | Prisma.LocationsUpsertWithWhereUniqueWithoutRegionInput[];
    createMany?: Prisma.LocationsCreateManyRegionInputEnvelope;
    set?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    disconnect?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    delete?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    connect?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    update?: Prisma.LocationsUpdateWithWhereUniqueWithoutRegionInput | Prisma.LocationsUpdateWithWhereUniqueWithoutRegionInput[];
    updateMany?: Prisma.LocationsUpdateManyWithWhereWithoutRegionInput | Prisma.LocationsUpdateManyWithWhereWithoutRegionInput[];
    deleteMany?: Prisma.LocationsScalarWhereInput | Prisma.LocationsScalarWhereInput[];
};
export type LocationsUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutRegionInput, Prisma.LocationsUncheckedCreateWithoutRegionInput> | Prisma.LocationsCreateWithoutRegionInput[] | Prisma.LocationsUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutRegionInput | Prisma.LocationsCreateOrConnectWithoutRegionInput[];
    upsert?: Prisma.LocationsUpsertWithWhereUniqueWithoutRegionInput | Prisma.LocationsUpsertWithWhereUniqueWithoutRegionInput[];
    createMany?: Prisma.LocationsCreateManyRegionInputEnvelope;
    set?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    disconnect?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    delete?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    connect?: Prisma.LocationsWhereUniqueInput | Prisma.LocationsWhereUniqueInput[];
    update?: Prisma.LocationsUpdateWithWhereUniqueWithoutRegionInput | Prisma.LocationsUpdateWithWhereUniqueWithoutRegionInput[];
    updateMany?: Prisma.LocationsUpdateManyWithWhereWithoutRegionInput | Prisma.LocationsUpdateManyWithWhereWithoutRegionInput[];
    deleteMany?: Prisma.LocationsScalarWhereInput | Prisma.LocationsScalarWhereInput[];
};
export type LocationsCreateNestedOneWithoutAreasInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutAreasInput, Prisma.LocationsUncheckedCreateWithoutAreasInput>;
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutAreasInput;
    connect?: Prisma.LocationsWhereUniqueInput;
};
export type LocationsUpdateOneRequiredWithoutAreasNestedInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutAreasInput, Prisma.LocationsUncheckedCreateWithoutAreasInput>;
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutAreasInput;
    upsert?: Prisma.LocationsUpsertWithoutAreasInput;
    connect?: Prisma.LocationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocationsUpdateToOneWithWhereWithoutAreasInput, Prisma.LocationsUpdateWithoutAreasInput>, Prisma.LocationsUncheckedUpdateWithoutAreasInput>;
};
export type LocationsCreateNestedOneWithoutEvolutionInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutEvolutionInput, Prisma.LocationsUncheckedCreateWithoutEvolutionInput>;
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutEvolutionInput;
    connect?: Prisma.LocationsWhereUniqueInput;
};
export type LocationsUpdateOneWithoutEvolutionNestedInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutEvolutionInput, Prisma.LocationsUncheckedCreateWithoutEvolutionInput>;
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutEvolutionInput;
    upsert?: Prisma.LocationsUpsertWithoutEvolutionInput;
    disconnect?: Prisma.LocationsWhereInput | boolean;
    delete?: Prisma.LocationsWhereInput | boolean;
    connect?: Prisma.LocationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocationsUpdateToOneWithWhereWithoutEvolutionInput, Prisma.LocationsUpdateWithoutEvolutionInput>, Prisma.LocationsUncheckedUpdateWithoutEvolutionInput>;
};
export type LocationsCreateNestedOneWithoutGameIndicesInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutGameIndicesInput, Prisma.LocationsUncheckedCreateWithoutGameIndicesInput>;
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutGameIndicesInput;
    connect?: Prisma.LocationsWhereUniqueInput;
};
export type LocationsUpdateOneRequiredWithoutGameIndicesNestedInput = {
    create?: Prisma.XOR<Prisma.LocationsCreateWithoutGameIndicesInput, Prisma.LocationsUncheckedCreateWithoutGameIndicesInput>;
    connectOrCreate?: Prisma.LocationsCreateOrConnectWithoutGameIndicesInput;
    upsert?: Prisma.LocationsUpsertWithoutGameIndicesInput;
    connect?: Prisma.LocationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocationsUpdateToOneWithWhereWithoutGameIndicesInput, Prisma.LocationsUpdateWithoutGameIndicesInput>, Prisma.LocationsUncheckedUpdateWithoutGameIndicesInput>;
};
export type LocationsCreateWithoutRegionInput = {
    id: number;
    identifier: string;
    areas?: Prisma.LocationAreasCreateNestedManyWithoutLocationInput;
    gameIndices?: Prisma.LocationGameIndicesCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionCreateNestedManyWithoutLocationInput;
};
export type LocationsUncheckedCreateWithoutRegionInput = {
    id: number;
    identifier: string;
    areas?: Prisma.LocationAreasUncheckedCreateNestedManyWithoutLocationInput;
    gameIndices?: Prisma.LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationsCreateOrConnectWithoutRegionInput = {
    where: Prisma.LocationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutRegionInput, Prisma.LocationsUncheckedCreateWithoutRegionInput>;
};
export type LocationsCreateManyRegionInputEnvelope = {
    data: Prisma.LocationsCreateManyRegionInput | Prisma.LocationsCreateManyRegionInput[];
    skipDuplicates?: boolean;
};
export type LocationsUpsertWithWhereUniqueWithoutRegionInput = {
    where: Prisma.LocationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationsUpdateWithoutRegionInput, Prisma.LocationsUncheckedUpdateWithoutRegionInput>;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutRegionInput, Prisma.LocationsUncheckedCreateWithoutRegionInput>;
};
export type LocationsUpdateWithWhereUniqueWithoutRegionInput = {
    where: Prisma.LocationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationsUpdateWithoutRegionInput, Prisma.LocationsUncheckedUpdateWithoutRegionInput>;
};
export type LocationsUpdateManyWithWhereWithoutRegionInput = {
    where: Prisma.LocationsScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationsUpdateManyMutationInput, Prisma.LocationsUncheckedUpdateManyWithoutRegionInput>;
};
export type LocationsScalarWhereInput = {
    AND?: Prisma.LocationsScalarWhereInput | Prisma.LocationsScalarWhereInput[];
    OR?: Prisma.LocationsScalarWhereInput[];
    NOT?: Prisma.LocationsScalarWhereInput | Prisma.LocationsScalarWhereInput[];
    id?: Prisma.IntFilter<"Locations"> | number;
    region_id?: Prisma.IntNullableFilter<"Locations"> | number | null;
    identifier?: Prisma.StringFilter<"Locations"> | string;
};
export type LocationsCreateWithoutAreasInput = {
    id: number;
    identifier: string;
    region?: Prisma.RegionsCreateNestedOneWithoutLocationsInput;
    gameIndices?: Prisma.LocationGameIndicesCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionCreateNestedManyWithoutLocationInput;
};
export type LocationsUncheckedCreateWithoutAreasInput = {
    id: number;
    region_id?: number | null;
    identifier: string;
    gameIndices?: Prisma.LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationsCreateOrConnectWithoutAreasInput = {
    where: Prisma.LocationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutAreasInput, Prisma.LocationsUncheckedCreateWithoutAreasInput>;
};
export type LocationsUpsertWithoutAreasInput = {
    update: Prisma.XOR<Prisma.LocationsUpdateWithoutAreasInput, Prisma.LocationsUncheckedUpdateWithoutAreasInput>;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutAreasInput, Prisma.LocationsUncheckedCreateWithoutAreasInput>;
    where?: Prisma.LocationsWhereInput;
};
export type LocationsUpdateToOneWithWhereWithoutAreasInput = {
    where?: Prisma.LocationsWhereInput;
    data: Prisma.XOR<Prisma.LocationsUpdateWithoutAreasInput, Prisma.LocationsUncheckedUpdateWithoutAreasInput>;
};
export type LocationsUpdateWithoutAreasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.RegionsUpdateOneWithoutLocationsNestedInput;
    gameIndices?: Prisma.LocationGameIndicesUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUpdateManyWithoutLocationNestedInput;
};
export type LocationsUncheckedUpdateWithoutAreasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    region_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    gameIndices?: Prisma.LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationsCreateWithoutEvolutionInput = {
    id: number;
    identifier: string;
    region?: Prisma.RegionsCreateNestedOneWithoutLocationsInput;
    areas?: Prisma.LocationAreasCreateNestedManyWithoutLocationInput;
    gameIndices?: Prisma.LocationGameIndicesCreateNestedManyWithoutLocationInput;
};
export type LocationsUncheckedCreateWithoutEvolutionInput = {
    id: number;
    region_id?: number | null;
    identifier: string;
    areas?: Prisma.LocationAreasUncheckedCreateNestedManyWithoutLocationInput;
    gameIndices?: Prisma.LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationsCreateOrConnectWithoutEvolutionInput = {
    where: Prisma.LocationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutEvolutionInput, Prisma.LocationsUncheckedCreateWithoutEvolutionInput>;
};
export type LocationsUpsertWithoutEvolutionInput = {
    update: Prisma.XOR<Prisma.LocationsUpdateWithoutEvolutionInput, Prisma.LocationsUncheckedUpdateWithoutEvolutionInput>;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutEvolutionInput, Prisma.LocationsUncheckedCreateWithoutEvolutionInput>;
    where?: Prisma.LocationsWhereInput;
};
export type LocationsUpdateToOneWithWhereWithoutEvolutionInput = {
    where?: Prisma.LocationsWhereInput;
    data: Prisma.XOR<Prisma.LocationsUpdateWithoutEvolutionInput, Prisma.LocationsUncheckedUpdateWithoutEvolutionInput>;
};
export type LocationsUpdateWithoutEvolutionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.RegionsUpdateOneWithoutLocationsNestedInput;
    areas?: Prisma.LocationAreasUpdateManyWithoutLocationNestedInput;
    gameIndices?: Prisma.LocationGameIndicesUpdateManyWithoutLocationNestedInput;
};
export type LocationsUncheckedUpdateWithoutEvolutionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    region_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    areas?: Prisma.LocationAreasUncheckedUpdateManyWithoutLocationNestedInput;
    gameIndices?: Prisma.LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationsCreateWithoutGameIndicesInput = {
    id: number;
    identifier: string;
    region?: Prisma.RegionsCreateNestedOneWithoutLocationsInput;
    areas?: Prisma.LocationAreasCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionCreateNestedManyWithoutLocationInput;
};
export type LocationsUncheckedCreateWithoutGameIndicesInput = {
    id: number;
    region_id?: number | null;
    identifier: string;
    areas?: Prisma.LocationAreasUncheckedCreateNestedManyWithoutLocationInput;
    evolution?: Prisma.PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationsCreateOrConnectWithoutGameIndicesInput = {
    where: Prisma.LocationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutGameIndicesInput, Prisma.LocationsUncheckedCreateWithoutGameIndicesInput>;
};
export type LocationsUpsertWithoutGameIndicesInput = {
    update: Prisma.XOR<Prisma.LocationsUpdateWithoutGameIndicesInput, Prisma.LocationsUncheckedUpdateWithoutGameIndicesInput>;
    create: Prisma.XOR<Prisma.LocationsCreateWithoutGameIndicesInput, Prisma.LocationsUncheckedCreateWithoutGameIndicesInput>;
    where?: Prisma.LocationsWhereInput;
};
export type LocationsUpdateToOneWithWhereWithoutGameIndicesInput = {
    where?: Prisma.LocationsWhereInput;
    data: Prisma.XOR<Prisma.LocationsUpdateWithoutGameIndicesInput, Prisma.LocationsUncheckedUpdateWithoutGameIndicesInput>;
};
export type LocationsUpdateWithoutGameIndicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.RegionsUpdateOneWithoutLocationsNestedInput;
    areas?: Prisma.LocationAreasUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUpdateManyWithoutLocationNestedInput;
};
export type LocationsUncheckedUpdateWithoutGameIndicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    region_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    areas?: Prisma.LocationAreasUncheckedUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationsCreateManyRegionInput = {
    id: number;
    identifier: string;
};
export type LocationsUpdateWithoutRegionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    areas?: Prisma.LocationAreasUpdateManyWithoutLocationNestedInput;
    gameIndices?: Prisma.LocationGameIndicesUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUpdateManyWithoutLocationNestedInput;
};
export type LocationsUncheckedUpdateWithoutRegionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    areas?: Prisma.LocationAreasUncheckedUpdateManyWithoutLocationNestedInput;
    gameIndices?: Prisma.LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput;
    evolution?: Prisma.PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationsUncheckedUpdateManyWithoutRegionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type LocationsCountOutputType
 */
export type LocationsCountOutputType = {
    areas: number;
    gameIndices: number;
    evolution: number;
};
export type LocationsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    areas?: boolean | LocationsCountOutputTypeCountAreasArgs;
    gameIndices?: boolean | LocationsCountOutputTypeCountGameIndicesArgs;
    evolution?: boolean | LocationsCountOutputTypeCountEvolutionArgs;
};
/**
 * LocationsCountOutputType without action
 */
export type LocationsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationsCountOutputType
     */
    select?: Prisma.LocationsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LocationsCountOutputType without action
 */
export type LocationsCountOutputTypeCountAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationAreasWhereInput;
};
/**
 * LocationsCountOutputType without action
 */
export type LocationsCountOutputTypeCountGameIndicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationGameIndicesWhereInput;
};
/**
 * LocationsCountOutputType without action
 */
export type LocationsCountOutputTypeCountEvolutionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonEvolutionWhereInput;
};
export type LocationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    region_id?: boolean;
    identifier?: boolean;
    region?: boolean | Prisma.Locations$regionArgs<ExtArgs>;
    areas?: boolean | Prisma.Locations$areasArgs<ExtArgs>;
    gameIndices?: boolean | Prisma.Locations$gameIndicesArgs<ExtArgs>;
    evolution?: boolean | Prisma.Locations$evolutionArgs<ExtArgs>;
    _count?: boolean | Prisma.LocationsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locations"]>;
export type LocationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    region_id?: boolean;
    identifier?: boolean;
    region?: boolean | Prisma.Locations$regionArgs<ExtArgs>;
}, ExtArgs["result"]["locations"]>;
export type LocationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    region_id?: boolean;
    identifier?: boolean;
    region?: boolean | Prisma.Locations$regionArgs<ExtArgs>;
}, ExtArgs["result"]["locations"]>;
export type LocationsSelectScalar = {
    id?: boolean;
    region_id?: boolean;
    identifier?: boolean;
};
export type LocationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "region_id" | "identifier", ExtArgs["result"]["locations"]>;
export type LocationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    region?: boolean | Prisma.Locations$regionArgs<ExtArgs>;
    areas?: boolean | Prisma.Locations$areasArgs<ExtArgs>;
    gameIndices?: boolean | Prisma.Locations$gameIndicesArgs<ExtArgs>;
    evolution?: boolean | Prisma.Locations$evolutionArgs<ExtArgs>;
    _count?: boolean | Prisma.LocationsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LocationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    region?: boolean | Prisma.Locations$regionArgs<ExtArgs>;
};
export type LocationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    region?: boolean | Prisma.Locations$regionArgs<ExtArgs>;
};
export type $LocationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Locations";
    objects: {
        region: Prisma.$RegionsPayload<ExtArgs> | null;
        areas: Prisma.$LocationAreasPayload<ExtArgs>[];
        gameIndices: Prisma.$LocationGameIndicesPayload<ExtArgs>[];
        evolution: Prisma.$PokemonEvolutionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        region_id: number | null;
        identifier: string;
    }, ExtArgs["result"]["locations"]>;
    composites: {};
};
export type LocationsGetPayload<S extends boolean | null | undefined | LocationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocationsPayload, S>;
export type LocationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocationsCountAggregateInputType | true;
};
export interface LocationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Locations'];
        meta: {
            name: 'Locations';
        };
    };
    /**
     * Find zero or one Locations that matches the filter.
     * @param {LocationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationsFindUniqueArgs>(args: Prisma.SelectSubset<T, LocationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationsFindFirstArgs>(args?: Prisma.SelectSubset<T, LocationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     *
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LocationsFindManyArgs>(args?: Prisma.SelectSubset<T, LocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Locations.
     * @param {LocationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     *
     */
    create<T extends LocationsCreateArgs>(args: Prisma.SelectSubset<T, LocationsCreateArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Locations.
     * @param {LocationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LocationsCreateManyArgs>(args?: Prisma.SelectSubset<T, LocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationsCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LocationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Locations.
     * @param {LocationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     *
     */
    delete<T extends LocationsDeleteArgs>(args: Prisma.SelectSubset<T, LocationsDeleteArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Locations.
     * @param {LocationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LocationsUpdateArgs>(args: Prisma.SelectSubset<T, LocationsUpdateArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Locations.
     * @param {LocationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LocationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LocationsUpdateManyArgs>(args: Prisma.SelectSubset<T, LocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationsUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LocationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Locations.
     * @param {LocationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends LocationsUpsertArgs>(args: Prisma.SelectSubset<T, LocationsUpsertArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationsCountArgs>(args?: Prisma.Subset<T, LocationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocationsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Prisma.Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>;
    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends LocationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocationsGroupByArgs['orderBy'];
    } : {
        orderBy?: LocationsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Locations model
     */
    readonly fields: LocationsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Locations.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LocationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    region<T extends Prisma.Locations$regionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Locations$regionArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    areas<T extends Prisma.Locations$areasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Locations$areasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationAreasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gameIndices<T extends Prisma.Locations$gameIndicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Locations$gameIndicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evolution<T extends Prisma.Locations$evolutionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Locations$evolutionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Locations model
 */
export interface LocationsFieldRefs {
    readonly id: Prisma.FieldRef<"Locations", 'Int'>;
    readonly region_id: Prisma.FieldRef<"Locations", 'Int'>;
    readonly identifier: Prisma.FieldRef<"Locations", 'String'>;
}
/**
 * Locations findUnique
 */
export type LocationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * Filter, which Locations to fetch.
     */
    where: Prisma.LocationsWhereUniqueInput;
};
/**
 * Locations findUniqueOrThrow
 */
export type LocationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * Filter, which Locations to fetch.
     */
    where: Prisma.LocationsWhereUniqueInput;
};
/**
 * Locations findFirst
 */
export type LocationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * Filter, which Locations to fetch.
     */
    where?: Prisma.LocationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?: Prisma.LocationsOrderByWithRelationInput | Prisma.LocationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locations.
     */
    cursor?: Prisma.LocationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locations.
     */
    distinct?: Prisma.LocationsScalarFieldEnum | Prisma.LocationsScalarFieldEnum[];
};
/**
 * Locations findFirstOrThrow
 */
export type LocationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * Filter, which Locations to fetch.
     */
    where?: Prisma.LocationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?: Prisma.LocationsOrderByWithRelationInput | Prisma.LocationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locations.
     */
    cursor?: Prisma.LocationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locations.
     */
    distinct?: Prisma.LocationsScalarFieldEnum | Prisma.LocationsScalarFieldEnum[];
};
/**
 * Locations findMany
 */
export type LocationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * Filter, which Locations to fetch.
     */
    where?: Prisma.LocationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?: Prisma.LocationsOrderByWithRelationInput | Prisma.LocationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Locations.
     */
    cursor?: Prisma.LocationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locations.
     */
    distinct?: Prisma.LocationsScalarFieldEnum | Prisma.LocationsScalarFieldEnum[];
};
/**
 * Locations create
 */
export type LocationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Locations.
     */
    data: Prisma.XOR<Prisma.LocationsCreateInput, Prisma.LocationsUncheckedCreateInput>;
};
/**
 * Locations createMany
 */
export type LocationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: Prisma.LocationsCreateManyInput | Prisma.LocationsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Locations createManyAndReturn
 */
export type LocationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * The data used to create many Locations.
     */
    data: Prisma.LocationsCreateManyInput | Prisma.LocationsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Locations update
 */
export type LocationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Locations.
     */
    data: Prisma.XOR<Prisma.LocationsUpdateInput, Prisma.LocationsUncheckedUpdateInput>;
    /**
     * Choose, which Locations to update.
     */
    where: Prisma.LocationsWhereUniqueInput;
};
/**
 * Locations updateMany
 */
export type LocationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: Prisma.XOR<Prisma.LocationsUpdateManyMutationInput, Prisma.LocationsUncheckedUpdateManyInput>;
    /**
     * Filter which Locations to update
     */
    where?: Prisma.LocationsWhereInput;
    /**
     * Limit how many Locations to update.
     */
    limit?: number;
};
/**
 * Locations updateManyAndReturn
 */
export type LocationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * The data used to update Locations.
     */
    data: Prisma.XOR<Prisma.LocationsUpdateManyMutationInput, Prisma.LocationsUncheckedUpdateManyInput>;
    /**
     * Filter which Locations to update
     */
    where?: Prisma.LocationsWhereInput;
    /**
     * Limit how many Locations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Locations upsert
 */
export type LocationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Locations to update in case it exists.
     */
    where: Prisma.LocationsWhereUniqueInput;
    /**
     * In case the Locations found by the `where` argument doesn't exist, create a new Locations with this data.
     */
    create: Prisma.XOR<Prisma.LocationsCreateInput, Prisma.LocationsUncheckedCreateInput>;
    /**
     * In case the Locations was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LocationsUpdateInput, Prisma.LocationsUncheckedUpdateInput>;
};
/**
 * Locations delete
 */
export type LocationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    /**
     * Filter which Locations to delete.
     */
    where: Prisma.LocationsWhereUniqueInput;
};
/**
 * Locations deleteMany
 */
export type LocationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: Prisma.LocationsWhereInput;
    /**
     * Limit how many Locations to delete.
     */
    limit?: number;
};
/**
 * Locations.region
 */
export type Locations$regionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    where?: Prisma.RegionsWhereInput;
};
/**
 * Locations.areas
 */
export type Locations$areasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreas
     */
    select?: Prisma.LocationAreasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreas
     */
    omit?: Prisma.LocationAreasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreasInclude<ExtArgs> | null;
    where?: Prisma.LocationAreasWhereInput;
    orderBy?: Prisma.LocationAreasOrderByWithRelationInput | Prisma.LocationAreasOrderByWithRelationInput[];
    cursor?: Prisma.LocationAreasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationAreasScalarFieldEnum | Prisma.LocationAreasScalarFieldEnum[];
};
/**
 * Locations.gameIndices
 */
export type Locations$gameIndicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationGameIndices
     */
    select?: Prisma.LocationGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationGameIndices
     */
    omit?: Prisma.LocationGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationGameIndicesInclude<ExtArgs> | null;
    where?: Prisma.LocationGameIndicesWhereInput;
    orderBy?: Prisma.LocationGameIndicesOrderByWithRelationInput | Prisma.LocationGameIndicesOrderByWithRelationInput[];
    cursor?: Prisma.LocationGameIndicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationGameIndicesScalarFieldEnum | Prisma.LocationGameIndicesScalarFieldEnum[];
};
/**
 * Locations.evolution
 */
export type Locations$evolutionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    where?: Prisma.PokemonEvolutionWhereInput;
    orderBy?: Prisma.PokemonEvolutionOrderByWithRelationInput | Prisma.PokemonEvolutionOrderByWithRelationInput[];
    cursor?: Prisma.PokemonEvolutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonEvolutionScalarFieldEnum | Prisma.PokemonEvolutionScalarFieldEnum[];
};
/**
 * Locations without action
 */
export type LocationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
};
