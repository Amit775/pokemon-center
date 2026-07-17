import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ItemGameIndices
 * @@TypeGraphQL.type(name: "ItemGameIndex")
 */
export type ItemGameIndicesModel = runtime.Types.Result.DefaultSelection<Prisma.$ItemGameIndicesPayload>;
export type AggregateItemGameIndices = {
    _count: ItemGameIndicesCountAggregateOutputType | null;
    _avg: ItemGameIndicesAvgAggregateOutputType | null;
    _sum: ItemGameIndicesSumAggregateOutputType | null;
    _min: ItemGameIndicesMinAggregateOutputType | null;
    _max: ItemGameIndicesMaxAggregateOutputType | null;
};
export type ItemGameIndicesAvgAggregateOutputType = {
    item_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type ItemGameIndicesSumAggregateOutputType = {
    item_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type ItemGameIndicesMinAggregateOutputType = {
    item_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type ItemGameIndicesMaxAggregateOutputType = {
    item_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type ItemGameIndicesCountAggregateOutputType = {
    item_id: number;
    generation_id: number;
    game_index: number;
    _all: number;
};
export type ItemGameIndicesAvgAggregateInputType = {
    item_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type ItemGameIndicesSumAggregateInputType = {
    item_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type ItemGameIndicesMinAggregateInputType = {
    item_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type ItemGameIndicesMaxAggregateInputType = {
    item_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type ItemGameIndicesCountAggregateInputType = {
    item_id?: true;
    generation_id?: true;
    game_index?: true;
    _all?: true;
};
export type ItemGameIndicesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ItemGameIndices to aggregate.
     */
    where?: Prisma.ItemGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemGameIndices to fetch.
     */
    orderBy?: Prisma.ItemGameIndicesOrderByWithRelationInput | Prisma.ItemGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ItemGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ItemGameIndices
    **/
    _count?: true | ItemGameIndicesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ItemGameIndicesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ItemGameIndicesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ItemGameIndicesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ItemGameIndicesMaxAggregateInputType;
};
export type GetItemGameIndicesAggregateType<T extends ItemGameIndicesAggregateArgs> = {
    [P in keyof T & keyof AggregateItemGameIndices]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItemGameIndices[P]> : Prisma.GetScalarType<T[P], AggregateItemGameIndices[P]>;
};
export type ItemGameIndicesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemGameIndicesWhereInput;
    orderBy?: Prisma.ItemGameIndicesOrderByWithAggregationInput | Prisma.ItemGameIndicesOrderByWithAggregationInput[];
    by: Prisma.ItemGameIndicesScalarFieldEnum[] | Prisma.ItemGameIndicesScalarFieldEnum;
    having?: Prisma.ItemGameIndicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemGameIndicesCountAggregateInputType | true;
    _avg?: ItemGameIndicesAvgAggregateInputType;
    _sum?: ItemGameIndicesSumAggregateInputType;
    _min?: ItemGameIndicesMinAggregateInputType;
    _max?: ItemGameIndicesMaxAggregateInputType;
};
export type ItemGameIndicesGroupByOutputType = {
    item_id: number;
    generation_id: number;
    game_index: number;
    _count: ItemGameIndicesCountAggregateOutputType | null;
    _avg: ItemGameIndicesAvgAggregateOutputType | null;
    _sum: ItemGameIndicesSumAggregateOutputType | null;
    _min: ItemGameIndicesMinAggregateOutputType | null;
    _max: ItemGameIndicesMaxAggregateOutputType | null;
};
export type GetItemGameIndicesGroupByPayload<T extends ItemGameIndicesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemGameIndicesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemGameIndicesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemGameIndicesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemGameIndicesGroupByOutputType[P]>;
}>>;
export type ItemGameIndicesWhereInput = {
    AND?: Prisma.ItemGameIndicesWhereInput | Prisma.ItemGameIndicesWhereInput[];
    OR?: Prisma.ItemGameIndicesWhereInput[];
    NOT?: Prisma.ItemGameIndicesWhereInput | Prisma.ItemGameIndicesWhereInput[];
    item_id?: Prisma.IntFilter<"ItemGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"ItemGameIndices"> | number;
    game_index?: Prisma.IntFilter<"ItemGameIndices"> | number;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
};
export type ItemGameIndicesOrderByWithRelationInput = {
    item_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    item?: Prisma.ItemsOrderByWithRelationInput;
    generation?: Prisma.GenerationsOrderByWithRelationInput;
};
export type ItemGameIndicesWhereUniqueInput = Prisma.AtLeast<{
    item_id_generation_id?: Prisma.ItemGameIndicesItem_idGeneration_idCompoundUniqueInput;
    AND?: Prisma.ItemGameIndicesWhereInput | Prisma.ItemGameIndicesWhereInput[];
    OR?: Prisma.ItemGameIndicesWhereInput[];
    NOT?: Prisma.ItemGameIndicesWhereInput | Prisma.ItemGameIndicesWhereInput[];
    item_id?: Prisma.IntFilter<"ItemGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"ItemGameIndices"> | number;
    game_index?: Prisma.IntFilter<"ItemGameIndices"> | number;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
}, "item_id_generation_id">;
export type ItemGameIndicesOrderByWithAggregationInput = {
    item_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    _count?: Prisma.ItemGameIndicesCountOrderByAggregateInput;
    _avg?: Prisma.ItemGameIndicesAvgOrderByAggregateInput;
    _max?: Prisma.ItemGameIndicesMaxOrderByAggregateInput;
    _min?: Prisma.ItemGameIndicesMinOrderByAggregateInput;
    _sum?: Prisma.ItemGameIndicesSumOrderByAggregateInput;
};
export type ItemGameIndicesScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItemGameIndicesScalarWhereWithAggregatesInput | Prisma.ItemGameIndicesScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItemGameIndicesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItemGameIndicesScalarWhereWithAggregatesInput | Prisma.ItemGameIndicesScalarWhereWithAggregatesInput[];
    item_id?: Prisma.IntWithAggregatesFilter<"ItemGameIndices"> | number;
    generation_id?: Prisma.IntWithAggregatesFilter<"ItemGameIndices"> | number;
    game_index?: Prisma.IntWithAggregatesFilter<"ItemGameIndices"> | number;
};
export type ItemGameIndicesCreateInput = {
    game_index: number;
    item: Prisma.ItemsCreateNestedOneWithoutGameIndicesInput;
    generation: Prisma.GenerationsCreateNestedOneWithoutItemGameIndicesInput;
};
export type ItemGameIndicesUncheckedCreateInput = {
    item_id: number;
    generation_id: number;
    game_index: number;
};
export type ItemGameIndicesUpdateInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemsUpdateOneRequiredWithoutGameIndicesNestedInput;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput;
};
export type ItemGameIndicesUncheckedUpdateInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemGameIndicesCreateManyInput = {
    item_id: number;
    generation_id: number;
    game_index: number;
};
export type ItemGameIndicesUpdateManyMutationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemGameIndicesUncheckedUpdateManyInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemGameIndicesListRelationFilter = {
    every?: Prisma.ItemGameIndicesWhereInput;
    some?: Prisma.ItemGameIndicesWhereInput;
    none?: Prisma.ItemGameIndicesWhereInput;
};
export type ItemGameIndicesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ItemGameIndicesItem_idGeneration_idCompoundUniqueInput = {
    item_id: number;
    generation_id: number;
};
export type ItemGameIndicesCountOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type ItemGameIndicesAvgOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type ItemGameIndicesMaxOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type ItemGameIndicesMinOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type ItemGameIndicesSumOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type ItemGameIndicesCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutItemInput, Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput> | Prisma.ItemGameIndicesCreateWithoutItemInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput | Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyItemInputEnvelope;
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
};
export type ItemGameIndicesUncheckedCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutItemInput, Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput> | Prisma.ItemGameIndicesCreateWithoutItemInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput | Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyItemInputEnvelope;
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
};
export type ItemGameIndicesUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutItemInput, Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput> | Prisma.ItemGameIndicesCreateWithoutItemInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput | Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput | Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyItemInputEnvelope;
    set?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    delete?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    update?: Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput | Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.ItemGameIndicesUpdateManyWithWhereWithoutItemInput | Prisma.ItemGameIndicesUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.ItemGameIndicesScalarWhereInput | Prisma.ItemGameIndicesScalarWhereInput[];
};
export type ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutItemInput, Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput> | Prisma.ItemGameIndicesCreateWithoutItemInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput | Prisma.ItemGameIndicesCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput | Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyItemInputEnvelope;
    set?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    delete?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    update?: Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput | Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.ItemGameIndicesUpdateManyWithWhereWithoutItemInput | Prisma.ItemGameIndicesUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.ItemGameIndicesScalarWhereInput | Prisma.ItemGameIndicesScalarWhereInput[];
};
export type ItemGameIndicesCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.ItemGameIndicesCreateWithoutGenerationInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyGenerationInputEnvelope;
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
};
export type ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.ItemGameIndicesCreateWithoutGenerationInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyGenerationInputEnvelope;
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
};
export type ItemGameIndicesUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.ItemGameIndicesCreateWithoutGenerationInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput | Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyGenerationInputEnvelope;
    set?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    delete?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    update?: Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput | Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput | Prisma.ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.ItemGameIndicesScalarWhereInput | Prisma.ItemGameIndicesScalarWhereInput[];
};
export type ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.ItemGameIndicesCreateWithoutGenerationInput[] | Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.ItemGameIndicesCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput | Prisma.ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.ItemGameIndicesCreateManyGenerationInputEnvelope;
    set?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    delete?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    connect?: Prisma.ItemGameIndicesWhereUniqueInput | Prisma.ItemGameIndicesWhereUniqueInput[];
    update?: Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput | Prisma.ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput | Prisma.ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.ItemGameIndicesScalarWhereInput | Prisma.ItemGameIndicesScalarWhereInput[];
};
export type ItemGameIndicesCreateWithoutItemInput = {
    game_index: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutItemGameIndicesInput;
};
export type ItemGameIndicesUncheckedCreateWithoutItemInput = {
    generation_id: number;
    game_index: number;
};
export type ItemGameIndicesCreateOrConnectWithoutItemInput = {
    where: Prisma.ItemGameIndicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutItemInput, Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput>;
};
export type ItemGameIndicesCreateManyItemInputEnvelope = {
    data: Prisma.ItemGameIndicesCreateManyItemInput | Prisma.ItemGameIndicesCreateManyItemInput[];
    skipDuplicates?: boolean;
};
export type ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput = {
    where: Prisma.ItemGameIndicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemGameIndicesUpdateWithoutItemInput, Prisma.ItemGameIndicesUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutItemInput, Prisma.ItemGameIndicesUncheckedCreateWithoutItemInput>;
};
export type ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput = {
    where: Prisma.ItemGameIndicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemGameIndicesUpdateWithoutItemInput, Prisma.ItemGameIndicesUncheckedUpdateWithoutItemInput>;
};
export type ItemGameIndicesUpdateManyWithWhereWithoutItemInput = {
    where: Prisma.ItemGameIndicesScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemGameIndicesUpdateManyMutationInput, Prisma.ItemGameIndicesUncheckedUpdateManyWithoutItemInput>;
};
export type ItemGameIndicesScalarWhereInput = {
    AND?: Prisma.ItemGameIndicesScalarWhereInput | Prisma.ItemGameIndicesScalarWhereInput[];
    OR?: Prisma.ItemGameIndicesScalarWhereInput[];
    NOT?: Prisma.ItemGameIndicesScalarWhereInput | Prisma.ItemGameIndicesScalarWhereInput[];
    item_id?: Prisma.IntFilter<"ItemGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"ItemGameIndices"> | number;
    game_index?: Prisma.IntFilter<"ItemGameIndices"> | number;
};
export type ItemGameIndicesCreateWithoutGenerationInput = {
    game_index: number;
    item: Prisma.ItemsCreateNestedOneWithoutGameIndicesInput;
};
export type ItemGameIndicesUncheckedCreateWithoutGenerationInput = {
    item_id: number;
    game_index: number;
};
export type ItemGameIndicesCreateOrConnectWithoutGenerationInput = {
    where: Prisma.ItemGameIndicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput>;
};
export type ItemGameIndicesCreateManyGenerationInputEnvelope = {
    data: Prisma.ItemGameIndicesCreateManyGenerationInput | Prisma.ItemGameIndicesCreateManyGenerationInput[];
    skipDuplicates?: boolean;
};
export type ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.ItemGameIndicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemGameIndicesUpdateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedUpdateWithoutGenerationInput>;
    create: Prisma.XOR<Prisma.ItemGameIndicesCreateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedCreateWithoutGenerationInput>;
};
export type ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.ItemGameIndicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemGameIndicesUpdateWithoutGenerationInput, Prisma.ItemGameIndicesUncheckedUpdateWithoutGenerationInput>;
};
export type ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput = {
    where: Prisma.ItemGameIndicesScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemGameIndicesUpdateManyMutationInput, Prisma.ItemGameIndicesUncheckedUpdateManyWithoutGenerationInput>;
};
export type ItemGameIndicesCreateManyItemInput = {
    generation_id: number;
    game_index: number;
};
export type ItemGameIndicesUpdateWithoutItemInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput;
};
export type ItemGameIndicesUncheckedUpdateWithoutItemInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemGameIndicesUncheckedUpdateManyWithoutItemInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemGameIndicesCreateManyGenerationInput = {
    item_id: number;
    game_index: number;
};
export type ItemGameIndicesUpdateWithoutGenerationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemsUpdateOneRequiredWithoutGameIndicesNestedInput;
};
export type ItemGameIndicesUncheckedUpdateWithoutGenerationInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemGameIndicesUncheckedUpdateManyWithoutGenerationInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemGameIndicesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    item_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemGameIndices"]>;
export type ItemGameIndicesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    item_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemGameIndices"]>;
export type ItemGameIndicesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    item_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemGameIndices"]>;
export type ItemGameIndicesSelectScalar = {
    item_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
};
export type ItemGameIndicesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"item_id" | "generation_id" | "game_index", ExtArgs["result"]["itemGameIndices"]>;
export type ItemGameIndicesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type ItemGameIndicesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type ItemGameIndicesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type $ItemGameIndicesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ItemGameIndices";
    objects: {
        item: Prisma.$ItemsPayload<ExtArgs>;
        generation: Prisma.$GenerationsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        item_id: number;
        generation_id: number;
        game_index: number;
    }, ExtArgs["result"]["itemGameIndices"]>;
    composites: {};
};
export type ItemGameIndicesGetPayload<S extends boolean | null | undefined | ItemGameIndicesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload, S>;
export type ItemGameIndicesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItemGameIndicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemGameIndicesCountAggregateInputType | true;
};
export interface ItemGameIndicesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ItemGameIndices'];
        meta: {
            name: 'ItemGameIndices';
        };
    };
    /**
     * Find zero or one ItemGameIndices that matches the filter.
     * @param {ItemGameIndicesFindUniqueArgs} args - Arguments to find a ItemGameIndices
     * @example
     * // Get one ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemGameIndicesFindUniqueArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ItemGameIndices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemGameIndicesFindUniqueOrThrowArgs} args - Arguments to find a ItemGameIndices
     * @example
     * // Get one ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemGameIndicesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ItemGameIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGameIndicesFindFirstArgs} args - Arguments to find a ItemGameIndices
     * @example
     * // Get one ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemGameIndicesFindFirstArgs>(args?: Prisma.SelectSubset<T, ItemGameIndicesFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ItemGameIndices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGameIndicesFindFirstOrThrowArgs} args - Arguments to find a ItemGameIndices
     * @example
     * // Get one ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemGameIndicesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItemGameIndicesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ItemGameIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGameIndicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.findMany()
     *
     * // Get first 10 ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.findMany({ take: 10 })
     *
     * // Only select the `item_id`
     * const itemGameIndicesWithItem_idOnly = await prisma.itemGameIndices.findMany({ select: { item_id: true } })
     *
     */
    findMany<T extends ItemGameIndicesFindManyArgs>(args?: Prisma.SelectSubset<T, ItemGameIndicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ItemGameIndices.
     * @param {ItemGameIndicesCreateArgs} args - Arguments to create a ItemGameIndices.
     * @example
     * // Create one ItemGameIndices
     * const ItemGameIndices = await prisma.itemGameIndices.create({
     *   data: {
     *     // ... data to create a ItemGameIndices
     *   }
     * })
     *
     */
    create<T extends ItemGameIndicesCreateArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesCreateArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ItemGameIndices.
     * @param {ItemGameIndicesCreateManyArgs} args - Arguments to create many ItemGameIndices.
     * @example
     * // Create many ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ItemGameIndicesCreateManyArgs>(args?: Prisma.SelectSubset<T, ItemGameIndicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ItemGameIndices and returns the data saved in the database.
     * @param {ItemGameIndicesCreateManyAndReturnArgs} args - Arguments to create many ItemGameIndices.
     * @example
     * // Create many ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ItemGameIndices and only return the `item_id`
     * const itemGameIndicesWithItem_idOnly = await prisma.itemGameIndices.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ItemGameIndicesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItemGameIndicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ItemGameIndices.
     * @param {ItemGameIndicesDeleteArgs} args - Arguments to delete one ItemGameIndices.
     * @example
     * // Delete one ItemGameIndices
     * const ItemGameIndices = await prisma.itemGameIndices.delete({
     *   where: {
     *     // ... filter to delete one ItemGameIndices
     *   }
     * })
     *
     */
    delete<T extends ItemGameIndicesDeleteArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesDeleteArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ItemGameIndices.
     * @param {ItemGameIndicesUpdateArgs} args - Arguments to update one ItemGameIndices.
     * @example
     * // Update one ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ItemGameIndicesUpdateArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesUpdateArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ItemGameIndices.
     * @param {ItemGameIndicesDeleteManyArgs} args - Arguments to filter ItemGameIndices to delete.
     * @example
     * // Delete a few ItemGameIndices
     * const { count } = await prisma.itemGameIndices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ItemGameIndicesDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItemGameIndicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ItemGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGameIndicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ItemGameIndicesUpdateManyArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ItemGameIndices and returns the data updated in the database.
     * @param {ItemGameIndicesUpdateManyAndReturnArgs} args - Arguments to update many ItemGameIndices.
     * @example
     * // Update many ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ItemGameIndices and only return the `item_id`
     * const itemGameIndicesWithItem_idOnly = await prisma.itemGameIndices.updateManyAndReturn({
     *   select: { item_id: true },
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
    updateManyAndReturn<T extends ItemGameIndicesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ItemGameIndices.
     * @param {ItemGameIndicesUpsertArgs} args - Arguments to update or create a ItemGameIndices.
     * @example
     * // Update or create a ItemGameIndices
     * const itemGameIndices = await prisma.itemGameIndices.upsert({
     *   create: {
     *     // ... data to create a ItemGameIndices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemGameIndices we want to update
     *   }
     * })
     */
    upsert<T extends ItemGameIndicesUpsertArgs>(args: Prisma.SelectSubset<T, ItemGameIndicesUpsertArgs<ExtArgs>>): Prisma.Prisma__ItemGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$ItemGameIndicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ItemGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGameIndicesCountArgs} args - Arguments to filter ItemGameIndices to count.
     * @example
     * // Count the number of ItemGameIndices
     * const count = await prisma.itemGameIndices.count({
     *   where: {
     *     // ... the filter for the ItemGameIndices we want to count
     *   }
     * })
    **/
    count<T extends ItemGameIndicesCountArgs>(args?: Prisma.Subset<T, ItemGameIndicesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemGameIndicesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ItemGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGameIndicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemGameIndicesAggregateArgs>(args: Prisma.Subset<T, ItemGameIndicesAggregateArgs>): Prisma.PrismaPromise<GetItemGameIndicesAggregateType<T>>;
    /**
     * Group by ItemGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGameIndicesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ItemGameIndicesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItemGameIndicesGroupByArgs['orderBy'];
    } : {
        orderBy?: ItemGameIndicesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItemGameIndicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGameIndicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ItemGameIndices model
     */
    readonly fields: ItemGameIndicesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ItemGameIndices.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ItemGameIndicesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    item<T extends Prisma.ItemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemsDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemsClient<runtime.Types.Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ItemGameIndices model
 */
export interface ItemGameIndicesFieldRefs {
    readonly item_id: Prisma.FieldRef<"ItemGameIndices", 'Int'>;
    readonly generation_id: Prisma.FieldRef<"ItemGameIndices", 'Int'>;
    readonly game_index: Prisma.FieldRef<"ItemGameIndices", 'Int'>;
}
/**
 * ItemGameIndices findUnique
 */
export type ItemGameIndicesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which ItemGameIndices to fetch.
     */
    where: Prisma.ItemGameIndicesWhereUniqueInput;
};
/**
 * ItemGameIndices findUniqueOrThrow
 */
export type ItemGameIndicesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which ItemGameIndices to fetch.
     */
    where: Prisma.ItemGameIndicesWhereUniqueInput;
};
/**
 * ItemGameIndices findFirst
 */
export type ItemGameIndicesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which ItemGameIndices to fetch.
     */
    where?: Prisma.ItemGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemGameIndices to fetch.
     */
    orderBy?: Prisma.ItemGameIndicesOrderByWithRelationInput | Prisma.ItemGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ItemGameIndices.
     */
    cursor?: Prisma.ItemGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ItemGameIndices.
     */
    distinct?: Prisma.ItemGameIndicesScalarFieldEnum | Prisma.ItemGameIndicesScalarFieldEnum[];
};
/**
 * ItemGameIndices findFirstOrThrow
 */
export type ItemGameIndicesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which ItemGameIndices to fetch.
     */
    where?: Prisma.ItemGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemGameIndices to fetch.
     */
    orderBy?: Prisma.ItemGameIndicesOrderByWithRelationInput | Prisma.ItemGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ItemGameIndices.
     */
    cursor?: Prisma.ItemGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ItemGameIndices.
     */
    distinct?: Prisma.ItemGameIndicesScalarFieldEnum | Prisma.ItemGameIndicesScalarFieldEnum[];
};
/**
 * ItemGameIndices findMany
 */
export type ItemGameIndicesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which ItemGameIndices to fetch.
     */
    where?: Prisma.ItemGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemGameIndices to fetch.
     */
    orderBy?: Prisma.ItemGameIndicesOrderByWithRelationInput | Prisma.ItemGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ItemGameIndices.
     */
    cursor?: Prisma.ItemGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ItemGameIndices.
     */
    distinct?: Prisma.ItemGameIndicesScalarFieldEnum | Prisma.ItemGameIndicesScalarFieldEnum[];
};
/**
 * ItemGameIndices create
 */
export type ItemGameIndicesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * The data needed to create a ItemGameIndices.
     */
    data: Prisma.XOR<Prisma.ItemGameIndicesCreateInput, Prisma.ItemGameIndicesUncheckedCreateInput>;
};
/**
 * ItemGameIndices createMany
 */
export type ItemGameIndicesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemGameIndices.
     */
    data: Prisma.ItemGameIndicesCreateManyInput | Prisma.ItemGameIndicesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ItemGameIndices createManyAndReturn
 */
export type ItemGameIndicesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * The data used to create many ItemGameIndices.
     */
    data: Prisma.ItemGameIndicesCreateManyInput | Prisma.ItemGameIndicesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ItemGameIndices update
 */
export type ItemGameIndicesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * The data needed to update a ItemGameIndices.
     */
    data: Prisma.XOR<Prisma.ItemGameIndicesUpdateInput, Prisma.ItemGameIndicesUncheckedUpdateInput>;
    /**
     * Choose, which ItemGameIndices to update.
     */
    where: Prisma.ItemGameIndicesWhereUniqueInput;
};
/**
 * ItemGameIndices updateMany
 */
export type ItemGameIndicesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemGameIndices.
     */
    data: Prisma.XOR<Prisma.ItemGameIndicesUpdateManyMutationInput, Prisma.ItemGameIndicesUncheckedUpdateManyInput>;
    /**
     * Filter which ItemGameIndices to update
     */
    where?: Prisma.ItemGameIndicesWhereInput;
    /**
     * Limit how many ItemGameIndices to update.
     */
    limit?: number;
};
/**
 * ItemGameIndices updateManyAndReturn
 */
export type ItemGameIndicesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * The data used to update ItemGameIndices.
     */
    data: Prisma.XOR<Prisma.ItemGameIndicesUpdateManyMutationInput, Prisma.ItemGameIndicesUncheckedUpdateManyInput>;
    /**
     * Filter which ItemGameIndices to update
     */
    where?: Prisma.ItemGameIndicesWhereInput;
    /**
     * Limit how many ItemGameIndices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ItemGameIndices upsert
 */
export type ItemGameIndicesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * The filter to search for the ItemGameIndices to update in case it exists.
     */
    where: Prisma.ItemGameIndicesWhereUniqueInput;
    /**
     * In case the ItemGameIndices found by the `where` argument doesn't exist, create a new ItemGameIndices with this data.
     */
    create: Prisma.XOR<Prisma.ItemGameIndicesCreateInput, Prisma.ItemGameIndicesUncheckedCreateInput>;
    /**
     * In case the ItemGameIndices was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ItemGameIndicesUpdateInput, Prisma.ItemGameIndicesUncheckedUpdateInput>;
};
/**
 * ItemGameIndices delete
 */
export type ItemGameIndicesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter which ItemGameIndices to delete.
     */
    where: Prisma.ItemGameIndicesWhereUniqueInput;
};
/**
 * ItemGameIndices deleteMany
 */
export type ItemGameIndicesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ItemGameIndices to delete
     */
    where?: Prisma.ItemGameIndicesWhereInput;
    /**
     * Limit how many ItemGameIndices to delete.
     */
    limit?: number;
};
/**
 * ItemGameIndices without action
 */
export type ItemGameIndicesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemGameIndices
     */
    select?: Prisma.ItemGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemGameIndices
     */
    omit?: Prisma.ItemGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemGameIndicesInclude<ExtArgs> | null;
};
