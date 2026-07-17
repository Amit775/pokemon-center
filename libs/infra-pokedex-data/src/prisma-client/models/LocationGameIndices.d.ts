import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model LocationGameIndices
 * @@TypeGraphQL.type(name: "LocationGameIndex")
 */
export type LocationGameIndicesModel = runtime.Types.Result.DefaultSelection<Prisma.$LocationGameIndicesPayload>;
export type AggregateLocationGameIndices = {
    _count: LocationGameIndicesCountAggregateOutputType | null;
    _avg: LocationGameIndicesAvgAggregateOutputType | null;
    _sum: LocationGameIndicesSumAggregateOutputType | null;
    _min: LocationGameIndicesMinAggregateOutputType | null;
    _max: LocationGameIndicesMaxAggregateOutputType | null;
};
export type LocationGameIndicesAvgAggregateOutputType = {
    location_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type LocationGameIndicesSumAggregateOutputType = {
    location_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type LocationGameIndicesMinAggregateOutputType = {
    location_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type LocationGameIndicesMaxAggregateOutputType = {
    location_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type LocationGameIndicesCountAggregateOutputType = {
    location_id: number;
    generation_id: number;
    game_index: number;
    _all: number;
};
export type LocationGameIndicesAvgAggregateInputType = {
    location_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type LocationGameIndicesSumAggregateInputType = {
    location_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type LocationGameIndicesMinAggregateInputType = {
    location_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type LocationGameIndicesMaxAggregateInputType = {
    location_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type LocationGameIndicesCountAggregateInputType = {
    location_id?: true;
    generation_id?: true;
    game_index?: true;
    _all?: true;
};
export type LocationGameIndicesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LocationGameIndices to aggregate.
     */
    where?: Prisma.LocationGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationGameIndices to fetch.
     */
    orderBy?: Prisma.LocationGameIndicesOrderByWithRelationInput | Prisma.LocationGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LocationGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LocationGameIndices
    **/
    _count?: true | LocationGameIndicesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LocationGameIndicesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LocationGameIndicesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LocationGameIndicesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LocationGameIndicesMaxAggregateInputType;
};
export type GetLocationGameIndicesAggregateType<T extends LocationGameIndicesAggregateArgs> = {
    [P in keyof T & keyof AggregateLocationGameIndices]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocationGameIndices[P]> : Prisma.GetScalarType<T[P], AggregateLocationGameIndices[P]>;
};
export type LocationGameIndicesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationGameIndicesWhereInput;
    orderBy?: Prisma.LocationGameIndicesOrderByWithAggregationInput | Prisma.LocationGameIndicesOrderByWithAggregationInput[];
    by: Prisma.LocationGameIndicesScalarFieldEnum[] | Prisma.LocationGameIndicesScalarFieldEnum;
    having?: Prisma.LocationGameIndicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocationGameIndicesCountAggregateInputType | true;
    _avg?: LocationGameIndicesAvgAggregateInputType;
    _sum?: LocationGameIndicesSumAggregateInputType;
    _min?: LocationGameIndicesMinAggregateInputType;
    _max?: LocationGameIndicesMaxAggregateInputType;
};
export type LocationGameIndicesGroupByOutputType = {
    location_id: number;
    generation_id: number;
    game_index: number;
    _count: LocationGameIndicesCountAggregateOutputType | null;
    _avg: LocationGameIndicesAvgAggregateOutputType | null;
    _sum: LocationGameIndicesSumAggregateOutputType | null;
    _min: LocationGameIndicesMinAggregateOutputType | null;
    _max: LocationGameIndicesMaxAggregateOutputType | null;
};
export type GetLocationGameIndicesGroupByPayload<T extends LocationGameIndicesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocationGameIndicesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocationGameIndicesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocationGameIndicesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocationGameIndicesGroupByOutputType[P]>;
}>>;
export type LocationGameIndicesWhereInput = {
    AND?: Prisma.LocationGameIndicesWhereInput | Prisma.LocationGameIndicesWhereInput[];
    OR?: Prisma.LocationGameIndicesWhereInput[];
    NOT?: Prisma.LocationGameIndicesWhereInput | Prisma.LocationGameIndicesWhereInput[];
    location_id?: Prisma.IntFilter<"LocationGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"LocationGameIndices"> | number;
    game_index?: Prisma.IntFilter<"LocationGameIndices"> | number;
    location?: Prisma.XOR<Prisma.LocationsScalarRelationFilter, Prisma.LocationsWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
};
export type LocationGameIndicesOrderByWithRelationInput = {
    location_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    location?: Prisma.LocationsOrderByWithRelationInput;
    generation?: Prisma.GenerationsOrderByWithRelationInput;
};
export type LocationGameIndicesWhereUniqueInput = Prisma.AtLeast<{
    location_id_generation_id?: Prisma.LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput;
    AND?: Prisma.LocationGameIndicesWhereInput | Prisma.LocationGameIndicesWhereInput[];
    OR?: Prisma.LocationGameIndicesWhereInput[];
    NOT?: Prisma.LocationGameIndicesWhereInput | Prisma.LocationGameIndicesWhereInput[];
    location_id?: Prisma.IntFilter<"LocationGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"LocationGameIndices"> | number;
    game_index?: Prisma.IntFilter<"LocationGameIndices"> | number;
    location?: Prisma.XOR<Prisma.LocationsScalarRelationFilter, Prisma.LocationsWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
}, "location_id_generation_id">;
export type LocationGameIndicesOrderByWithAggregationInput = {
    location_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    _count?: Prisma.LocationGameIndicesCountOrderByAggregateInput;
    _avg?: Prisma.LocationGameIndicesAvgOrderByAggregateInput;
    _max?: Prisma.LocationGameIndicesMaxOrderByAggregateInput;
    _min?: Prisma.LocationGameIndicesMinOrderByAggregateInput;
    _sum?: Prisma.LocationGameIndicesSumOrderByAggregateInput;
};
export type LocationGameIndicesScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocationGameIndicesScalarWhereWithAggregatesInput | Prisma.LocationGameIndicesScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocationGameIndicesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocationGameIndicesScalarWhereWithAggregatesInput | Prisma.LocationGameIndicesScalarWhereWithAggregatesInput[];
    location_id?: Prisma.IntWithAggregatesFilter<"LocationGameIndices"> | number;
    generation_id?: Prisma.IntWithAggregatesFilter<"LocationGameIndices"> | number;
    game_index?: Prisma.IntWithAggregatesFilter<"LocationGameIndices"> | number;
};
export type LocationGameIndicesCreateInput = {
    game_index: number;
    location: Prisma.LocationsCreateNestedOneWithoutGameIndicesInput;
    generation: Prisma.GenerationsCreateNestedOneWithoutLocationGameIndicesInput;
};
export type LocationGameIndicesUncheckedCreateInput = {
    location_id: number;
    generation_id: number;
    game_index: number;
};
export type LocationGameIndicesUpdateInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.LocationsUpdateOneRequiredWithoutGameIndicesNestedInput;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput;
};
export type LocationGameIndicesUncheckedUpdateInput = {
    location_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationGameIndicesCreateManyInput = {
    location_id: number;
    generation_id: number;
    game_index: number;
};
export type LocationGameIndicesUpdateManyMutationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationGameIndicesUncheckedUpdateManyInput = {
    location_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationGameIndicesListRelationFilter = {
    every?: Prisma.LocationGameIndicesWhereInput;
    some?: Prisma.LocationGameIndicesWhereInput;
    none?: Prisma.LocationGameIndicesWhereInput;
};
export type LocationGameIndicesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput = {
    location_id: number;
    generation_id: number;
};
export type LocationGameIndicesCountOrderByAggregateInput = {
    location_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type LocationGameIndicesAvgOrderByAggregateInput = {
    location_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type LocationGameIndicesMaxOrderByAggregateInput = {
    location_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type LocationGameIndicesMinOrderByAggregateInput = {
    location_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type LocationGameIndicesSumOrderByAggregateInput = {
    location_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type LocationGameIndicesCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.LocationGameIndicesCreateWithoutGenerationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyGenerationInputEnvelope;
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
};
export type LocationGameIndicesUncheckedCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.LocationGameIndicesCreateWithoutGenerationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyGenerationInputEnvelope;
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
};
export type LocationGameIndicesUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.LocationGameIndicesCreateWithoutGenerationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput | Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyGenerationInputEnvelope;
    set?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    delete?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    update?: Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput | Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput | Prisma.LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.LocationGameIndicesScalarWhereInput | Prisma.LocationGameIndicesScalarWhereInput[];
};
export type LocationGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.LocationGameIndicesCreateWithoutGenerationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput | Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyGenerationInputEnvelope;
    set?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    delete?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    update?: Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput | Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput | Prisma.LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.LocationGameIndicesScalarWhereInput | Prisma.LocationGameIndicesScalarWhereInput[];
};
export type LocationGameIndicesCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput> | Prisma.LocationGameIndicesCreateWithoutLocationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyLocationInputEnvelope;
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
};
export type LocationGameIndicesUncheckedCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput> | Prisma.LocationGameIndicesCreateWithoutLocationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyLocationInputEnvelope;
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
};
export type LocationGameIndicesUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput> | Prisma.LocationGameIndicesCreateWithoutLocationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput | Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyLocationInputEnvelope;
    set?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    delete?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    update?: Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput | Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.LocationGameIndicesUpdateManyWithWhereWithoutLocationInput | Prisma.LocationGameIndicesUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.LocationGameIndicesScalarWhereInput | Prisma.LocationGameIndicesScalarWhereInput[];
};
export type LocationGameIndicesUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput> | Prisma.LocationGameIndicesCreateWithoutLocationInput[] | Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput | Prisma.LocationGameIndicesCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput | Prisma.LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.LocationGameIndicesCreateManyLocationInputEnvelope;
    set?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    delete?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    connect?: Prisma.LocationGameIndicesWhereUniqueInput | Prisma.LocationGameIndicesWhereUniqueInput[];
    update?: Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput | Prisma.LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.LocationGameIndicesUpdateManyWithWhereWithoutLocationInput | Prisma.LocationGameIndicesUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.LocationGameIndicesScalarWhereInput | Prisma.LocationGameIndicesScalarWhereInput[];
};
export type LocationGameIndicesCreateWithoutGenerationInput = {
    game_index: number;
    location: Prisma.LocationsCreateNestedOneWithoutGameIndicesInput;
};
export type LocationGameIndicesUncheckedCreateWithoutGenerationInput = {
    location_id: number;
    game_index: number;
};
export type LocationGameIndicesCreateOrConnectWithoutGenerationInput = {
    where: Prisma.LocationGameIndicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput>;
};
export type LocationGameIndicesCreateManyGenerationInputEnvelope = {
    data: Prisma.LocationGameIndicesCreateManyGenerationInput | Prisma.LocationGameIndicesCreateManyGenerationInput[];
    skipDuplicates?: boolean;
};
export type LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.LocationGameIndicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationGameIndicesUpdateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedUpdateWithoutGenerationInput>;
    create: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutGenerationInput>;
};
export type LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.LocationGameIndicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationGameIndicesUpdateWithoutGenerationInput, Prisma.LocationGameIndicesUncheckedUpdateWithoutGenerationInput>;
};
export type LocationGameIndicesUpdateManyWithWhereWithoutGenerationInput = {
    where: Prisma.LocationGameIndicesScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationGameIndicesUpdateManyMutationInput, Prisma.LocationGameIndicesUncheckedUpdateManyWithoutGenerationInput>;
};
export type LocationGameIndicesScalarWhereInput = {
    AND?: Prisma.LocationGameIndicesScalarWhereInput | Prisma.LocationGameIndicesScalarWhereInput[];
    OR?: Prisma.LocationGameIndicesScalarWhereInput[];
    NOT?: Prisma.LocationGameIndicesScalarWhereInput | Prisma.LocationGameIndicesScalarWhereInput[];
    location_id?: Prisma.IntFilter<"LocationGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"LocationGameIndices"> | number;
    game_index?: Prisma.IntFilter<"LocationGameIndices"> | number;
};
export type LocationGameIndicesCreateWithoutLocationInput = {
    game_index: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutLocationGameIndicesInput;
};
export type LocationGameIndicesUncheckedCreateWithoutLocationInput = {
    generation_id: number;
    game_index: number;
};
export type LocationGameIndicesCreateOrConnectWithoutLocationInput = {
    where: Prisma.LocationGameIndicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput>;
};
export type LocationGameIndicesCreateManyLocationInputEnvelope = {
    data: Prisma.LocationGameIndicesCreateManyLocationInput | Prisma.LocationGameIndicesCreateManyLocationInput[];
    skipDuplicates?: boolean;
};
export type LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput = {
    where: Prisma.LocationGameIndicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationGameIndicesUpdateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedUpdateWithoutLocationInput>;
    create: Prisma.XOR<Prisma.LocationGameIndicesCreateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedCreateWithoutLocationInput>;
};
export type LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput = {
    where: Prisma.LocationGameIndicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationGameIndicesUpdateWithoutLocationInput, Prisma.LocationGameIndicesUncheckedUpdateWithoutLocationInput>;
};
export type LocationGameIndicesUpdateManyWithWhereWithoutLocationInput = {
    where: Prisma.LocationGameIndicesScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationGameIndicesUpdateManyMutationInput, Prisma.LocationGameIndicesUncheckedUpdateManyWithoutLocationInput>;
};
export type LocationGameIndicesCreateManyGenerationInput = {
    location_id: number;
    game_index: number;
};
export type LocationGameIndicesUpdateWithoutGenerationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.LocationsUpdateOneRequiredWithoutGameIndicesNestedInput;
};
export type LocationGameIndicesUncheckedUpdateWithoutGenerationInput = {
    location_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationGameIndicesUncheckedUpdateManyWithoutGenerationInput = {
    location_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationGameIndicesCreateManyLocationInput = {
    generation_id: number;
    game_index: number;
};
export type LocationGameIndicesUpdateWithoutLocationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput;
};
export type LocationGameIndicesUncheckedUpdateWithoutLocationInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationGameIndicesUncheckedUpdateManyWithoutLocationInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationGameIndicesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    location_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    location?: boolean | Prisma.LocationsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationGameIndices"]>;
export type LocationGameIndicesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    location_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    location?: boolean | Prisma.LocationsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationGameIndices"]>;
export type LocationGameIndicesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    location_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    location?: boolean | Prisma.LocationsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationGameIndices"]>;
export type LocationGameIndicesSelectScalar = {
    location_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
};
export type LocationGameIndicesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"location_id" | "generation_id" | "game_index", ExtArgs["result"]["locationGameIndices"]>;
export type LocationGameIndicesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    location?: boolean | Prisma.LocationsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type LocationGameIndicesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    location?: boolean | Prisma.LocationsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type LocationGameIndicesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    location?: boolean | Prisma.LocationsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type $LocationGameIndicesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LocationGameIndices";
    objects: {
        location: Prisma.$LocationsPayload<ExtArgs>;
        generation: Prisma.$GenerationsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        location_id: number;
        generation_id: number;
        game_index: number;
    }, ExtArgs["result"]["locationGameIndices"]>;
    composites: {};
};
export type LocationGameIndicesGetPayload<S extends boolean | null | undefined | LocationGameIndicesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload, S>;
export type LocationGameIndicesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocationGameIndicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocationGameIndicesCountAggregateInputType | true;
};
export interface LocationGameIndicesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LocationGameIndices'];
        meta: {
            name: 'LocationGameIndices';
        };
    };
    /**
     * Find zero or one LocationGameIndices that matches the filter.
     * @param {LocationGameIndicesFindUniqueArgs} args - Arguments to find a LocationGameIndices
     * @example
     * // Get one LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationGameIndicesFindUniqueArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LocationGameIndices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationGameIndicesFindUniqueOrThrowArgs} args - Arguments to find a LocationGameIndices
     * @example
     * // Get one LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationGameIndicesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LocationGameIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGameIndicesFindFirstArgs} args - Arguments to find a LocationGameIndices
     * @example
     * // Get one LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationGameIndicesFindFirstArgs>(args?: Prisma.SelectSubset<T, LocationGameIndicesFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LocationGameIndices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGameIndicesFindFirstOrThrowArgs} args - Arguments to find a LocationGameIndices
     * @example
     * // Get one LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationGameIndicesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocationGameIndicesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LocationGameIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGameIndicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.findMany()
     *
     * // Get first 10 LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.findMany({ take: 10 })
     *
     * // Only select the `location_id`
     * const locationGameIndicesWithLocation_idOnly = await prisma.locationGameIndices.findMany({ select: { location_id: true } })
     *
     */
    findMany<T extends LocationGameIndicesFindManyArgs>(args?: Prisma.SelectSubset<T, LocationGameIndicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LocationGameIndices.
     * @param {LocationGameIndicesCreateArgs} args - Arguments to create a LocationGameIndices.
     * @example
     * // Create one LocationGameIndices
     * const LocationGameIndices = await prisma.locationGameIndices.create({
     *   data: {
     *     // ... data to create a LocationGameIndices
     *   }
     * })
     *
     */
    create<T extends LocationGameIndicesCreateArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesCreateArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LocationGameIndices.
     * @param {LocationGameIndicesCreateManyArgs} args - Arguments to create many LocationGameIndices.
     * @example
     * // Create many LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LocationGameIndicesCreateManyArgs>(args?: Prisma.SelectSubset<T, LocationGameIndicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LocationGameIndices and returns the data saved in the database.
     * @param {LocationGameIndicesCreateManyAndReturnArgs} args - Arguments to create many LocationGameIndices.
     * @example
     * // Create many LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LocationGameIndices and only return the `location_id`
     * const locationGameIndicesWithLocation_idOnly = await prisma.locationGameIndices.createManyAndReturn({
     *   select: { location_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LocationGameIndicesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocationGameIndicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LocationGameIndices.
     * @param {LocationGameIndicesDeleteArgs} args - Arguments to delete one LocationGameIndices.
     * @example
     * // Delete one LocationGameIndices
     * const LocationGameIndices = await prisma.locationGameIndices.delete({
     *   where: {
     *     // ... filter to delete one LocationGameIndices
     *   }
     * })
     *
     */
    delete<T extends LocationGameIndicesDeleteArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesDeleteArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LocationGameIndices.
     * @param {LocationGameIndicesUpdateArgs} args - Arguments to update one LocationGameIndices.
     * @example
     * // Update one LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LocationGameIndicesUpdateArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesUpdateArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LocationGameIndices.
     * @param {LocationGameIndicesDeleteManyArgs} args - Arguments to filter LocationGameIndices to delete.
     * @example
     * // Delete a few LocationGameIndices
     * const { count } = await prisma.locationGameIndices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LocationGameIndicesDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocationGameIndicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LocationGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGameIndicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LocationGameIndicesUpdateManyArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LocationGameIndices and returns the data updated in the database.
     * @param {LocationGameIndicesUpdateManyAndReturnArgs} args - Arguments to update many LocationGameIndices.
     * @example
     * // Update many LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LocationGameIndices and only return the `location_id`
     * const locationGameIndicesWithLocation_idOnly = await prisma.locationGameIndices.updateManyAndReturn({
     *   select: { location_id: true },
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
    updateManyAndReturn<T extends LocationGameIndicesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LocationGameIndices.
     * @param {LocationGameIndicesUpsertArgs} args - Arguments to update or create a LocationGameIndices.
     * @example
     * // Update or create a LocationGameIndices
     * const locationGameIndices = await prisma.locationGameIndices.upsert({
     *   create: {
     *     // ... data to create a LocationGameIndices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationGameIndices we want to update
     *   }
     * })
     */
    upsert<T extends LocationGameIndicesUpsertArgs>(args: Prisma.SelectSubset<T, LocationGameIndicesUpsertArgs<ExtArgs>>): Prisma.Prisma__LocationGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$LocationGameIndicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LocationGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGameIndicesCountArgs} args - Arguments to filter LocationGameIndices to count.
     * @example
     * // Count the number of LocationGameIndices
     * const count = await prisma.locationGameIndices.count({
     *   where: {
     *     // ... the filter for the LocationGameIndices we want to count
     *   }
     * })
    **/
    count<T extends LocationGameIndicesCountArgs>(args?: Prisma.Subset<T, LocationGameIndicesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocationGameIndicesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LocationGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGameIndicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationGameIndicesAggregateArgs>(args: Prisma.Subset<T, LocationGameIndicesAggregateArgs>): Prisma.PrismaPromise<GetLocationGameIndicesAggregateType<T>>;
    /**
     * Group by LocationGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGameIndicesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LocationGameIndicesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocationGameIndicesGroupByArgs['orderBy'];
    } : {
        orderBy?: LocationGameIndicesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocationGameIndicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGameIndicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LocationGameIndices model
     */
    readonly fields: LocationGameIndicesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LocationGameIndices.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LocationGameIndicesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    location<T extends Prisma.LocationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LocationsDefaultArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    generation<T extends Prisma.GenerationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GenerationsDefaultArgs<ExtArgs>>): Prisma.Prisma__GenerationsClient<runtime.Types.Result.GetResult<Prisma.$GenerationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LocationGameIndices model
 */
export interface LocationGameIndicesFieldRefs {
    readonly location_id: Prisma.FieldRef<"LocationGameIndices", 'Int'>;
    readonly generation_id: Prisma.FieldRef<"LocationGameIndices", 'Int'>;
    readonly game_index: Prisma.FieldRef<"LocationGameIndices", 'Int'>;
}
/**
 * LocationGameIndices findUnique
 */
export type LocationGameIndicesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LocationGameIndices to fetch.
     */
    where: Prisma.LocationGameIndicesWhereUniqueInput;
};
/**
 * LocationGameIndices findUniqueOrThrow
 */
export type LocationGameIndicesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LocationGameIndices to fetch.
     */
    where: Prisma.LocationGameIndicesWhereUniqueInput;
};
/**
 * LocationGameIndices findFirst
 */
export type LocationGameIndicesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LocationGameIndices to fetch.
     */
    where?: Prisma.LocationGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationGameIndices to fetch.
     */
    orderBy?: Prisma.LocationGameIndicesOrderByWithRelationInput | Prisma.LocationGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LocationGameIndices.
     */
    cursor?: Prisma.LocationGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocationGameIndices.
     */
    distinct?: Prisma.LocationGameIndicesScalarFieldEnum | Prisma.LocationGameIndicesScalarFieldEnum[];
};
/**
 * LocationGameIndices findFirstOrThrow
 */
export type LocationGameIndicesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LocationGameIndices to fetch.
     */
    where?: Prisma.LocationGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationGameIndices to fetch.
     */
    orderBy?: Prisma.LocationGameIndicesOrderByWithRelationInput | Prisma.LocationGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LocationGameIndices.
     */
    cursor?: Prisma.LocationGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocationGameIndices.
     */
    distinct?: Prisma.LocationGameIndicesScalarFieldEnum | Prisma.LocationGameIndicesScalarFieldEnum[];
};
/**
 * LocationGameIndices findMany
 */
export type LocationGameIndicesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LocationGameIndices to fetch.
     */
    where?: Prisma.LocationGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationGameIndices to fetch.
     */
    orderBy?: Prisma.LocationGameIndicesOrderByWithRelationInput | Prisma.LocationGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LocationGameIndices.
     */
    cursor?: Prisma.LocationGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocationGameIndices.
     */
    distinct?: Prisma.LocationGameIndicesScalarFieldEnum | Prisma.LocationGameIndicesScalarFieldEnum[];
};
/**
 * LocationGameIndices create
 */
export type LocationGameIndicesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LocationGameIndices.
     */
    data: Prisma.XOR<Prisma.LocationGameIndicesCreateInput, Prisma.LocationGameIndicesUncheckedCreateInput>;
};
/**
 * LocationGameIndices createMany
 */
export type LocationGameIndicesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationGameIndices.
     */
    data: Prisma.LocationGameIndicesCreateManyInput | Prisma.LocationGameIndicesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LocationGameIndices createManyAndReturn
 */
export type LocationGameIndicesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationGameIndices
     */
    select?: Prisma.LocationGameIndicesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationGameIndices
     */
    omit?: Prisma.LocationGameIndicesOmit<ExtArgs> | null;
    /**
     * The data used to create many LocationGameIndices.
     */
    data: Prisma.LocationGameIndicesCreateManyInput | Prisma.LocationGameIndicesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationGameIndicesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LocationGameIndices update
 */
export type LocationGameIndicesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LocationGameIndices.
     */
    data: Prisma.XOR<Prisma.LocationGameIndicesUpdateInput, Prisma.LocationGameIndicesUncheckedUpdateInput>;
    /**
     * Choose, which LocationGameIndices to update.
     */
    where: Prisma.LocationGameIndicesWhereUniqueInput;
};
/**
 * LocationGameIndices updateMany
 */
export type LocationGameIndicesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationGameIndices.
     */
    data: Prisma.XOR<Prisma.LocationGameIndicesUpdateManyMutationInput, Prisma.LocationGameIndicesUncheckedUpdateManyInput>;
    /**
     * Filter which LocationGameIndices to update
     */
    where?: Prisma.LocationGameIndicesWhereInput;
    /**
     * Limit how many LocationGameIndices to update.
     */
    limit?: number;
};
/**
 * LocationGameIndices updateManyAndReturn
 */
export type LocationGameIndicesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationGameIndices
     */
    select?: Prisma.LocationGameIndicesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationGameIndices
     */
    omit?: Prisma.LocationGameIndicesOmit<ExtArgs> | null;
    /**
     * The data used to update LocationGameIndices.
     */
    data: Prisma.XOR<Prisma.LocationGameIndicesUpdateManyMutationInput, Prisma.LocationGameIndicesUncheckedUpdateManyInput>;
    /**
     * Filter which LocationGameIndices to update
     */
    where?: Prisma.LocationGameIndicesWhereInput;
    /**
     * Limit how many LocationGameIndices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationGameIndicesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LocationGameIndices upsert
 */
export type LocationGameIndicesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LocationGameIndices to update in case it exists.
     */
    where: Prisma.LocationGameIndicesWhereUniqueInput;
    /**
     * In case the LocationGameIndices found by the `where` argument doesn't exist, create a new LocationGameIndices with this data.
     */
    create: Prisma.XOR<Prisma.LocationGameIndicesCreateInput, Prisma.LocationGameIndicesUncheckedCreateInput>;
    /**
     * In case the LocationGameIndices was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LocationGameIndicesUpdateInput, Prisma.LocationGameIndicesUncheckedUpdateInput>;
};
/**
 * LocationGameIndices delete
 */
export type LocationGameIndicesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LocationGameIndices to delete.
     */
    where: Prisma.LocationGameIndicesWhereUniqueInput;
};
/**
 * LocationGameIndices deleteMany
 */
export type LocationGameIndicesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LocationGameIndices to delete
     */
    where?: Prisma.LocationGameIndicesWhereInput;
    /**
     * Limit how many LocationGameIndices to delete.
     */
    limit?: number;
};
/**
 * LocationGameIndices without action
 */
export type LocationGameIndicesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
