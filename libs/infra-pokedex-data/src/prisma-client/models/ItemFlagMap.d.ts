import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ItemFlagMap
 * @@TypeGraphQL.type(name: "ItemFlagMap")
 */
export type ItemFlagMapModel = runtime.Types.Result.DefaultSelection<Prisma.$ItemFlagMapPayload>;
export type AggregateItemFlagMap = {
    _count: ItemFlagMapCountAggregateOutputType | null;
    _avg: ItemFlagMapAvgAggregateOutputType | null;
    _sum: ItemFlagMapSumAggregateOutputType | null;
    _min: ItemFlagMapMinAggregateOutputType | null;
    _max: ItemFlagMapMaxAggregateOutputType | null;
};
export type ItemFlagMapAvgAggregateOutputType = {
    item_id: number | null;
    item_flag_id: number | null;
};
export type ItemFlagMapSumAggregateOutputType = {
    item_id: number | null;
    item_flag_id: number | null;
};
export type ItemFlagMapMinAggregateOutputType = {
    item_id: number | null;
    item_flag_id: number | null;
};
export type ItemFlagMapMaxAggregateOutputType = {
    item_id: number | null;
    item_flag_id: number | null;
};
export type ItemFlagMapCountAggregateOutputType = {
    item_id: number;
    item_flag_id: number;
    _all: number;
};
export type ItemFlagMapAvgAggregateInputType = {
    item_id?: true;
    item_flag_id?: true;
};
export type ItemFlagMapSumAggregateInputType = {
    item_id?: true;
    item_flag_id?: true;
};
export type ItemFlagMapMinAggregateInputType = {
    item_id?: true;
    item_flag_id?: true;
};
export type ItemFlagMapMaxAggregateInputType = {
    item_id?: true;
    item_flag_id?: true;
};
export type ItemFlagMapCountAggregateInputType = {
    item_id?: true;
    item_flag_id?: true;
    _all?: true;
};
export type ItemFlagMapAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ItemFlagMap to aggregate.
     */
    where?: Prisma.ItemFlagMapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemFlagMaps to fetch.
     */
    orderBy?: Prisma.ItemFlagMapOrderByWithRelationInput | Prisma.ItemFlagMapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ItemFlagMapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemFlagMaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemFlagMaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ItemFlagMaps
    **/
    _count?: true | ItemFlagMapCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ItemFlagMapAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ItemFlagMapSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ItemFlagMapMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ItemFlagMapMaxAggregateInputType;
};
export type GetItemFlagMapAggregateType<T extends ItemFlagMapAggregateArgs> = {
    [P in keyof T & keyof AggregateItemFlagMap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItemFlagMap[P]> : Prisma.GetScalarType<T[P], AggregateItemFlagMap[P]>;
};
export type ItemFlagMapGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemFlagMapWhereInput;
    orderBy?: Prisma.ItemFlagMapOrderByWithAggregationInput | Prisma.ItemFlagMapOrderByWithAggregationInput[];
    by: Prisma.ItemFlagMapScalarFieldEnum[] | Prisma.ItemFlagMapScalarFieldEnum;
    having?: Prisma.ItemFlagMapScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemFlagMapCountAggregateInputType | true;
    _avg?: ItemFlagMapAvgAggregateInputType;
    _sum?: ItemFlagMapSumAggregateInputType;
    _min?: ItemFlagMapMinAggregateInputType;
    _max?: ItemFlagMapMaxAggregateInputType;
};
export type ItemFlagMapGroupByOutputType = {
    item_id: number;
    item_flag_id: number;
    _count: ItemFlagMapCountAggregateOutputType | null;
    _avg: ItemFlagMapAvgAggregateOutputType | null;
    _sum: ItemFlagMapSumAggregateOutputType | null;
    _min: ItemFlagMapMinAggregateOutputType | null;
    _max: ItemFlagMapMaxAggregateOutputType | null;
};
export type GetItemFlagMapGroupByPayload<T extends ItemFlagMapGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemFlagMapGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemFlagMapGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemFlagMapGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemFlagMapGroupByOutputType[P]>;
}>>;
export type ItemFlagMapWhereInput = {
    AND?: Prisma.ItemFlagMapWhereInput | Prisma.ItemFlagMapWhereInput[];
    OR?: Prisma.ItemFlagMapWhereInput[];
    NOT?: Prisma.ItemFlagMapWhereInput | Prisma.ItemFlagMapWhereInput[];
    item_id?: Prisma.IntFilter<"ItemFlagMap"> | number;
    item_flag_id?: Prisma.IntFilter<"ItemFlagMap"> | number;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
    flag?: Prisma.XOR<Prisma.ItemFlagsScalarRelationFilter, Prisma.ItemFlagsWhereInput>;
};
export type ItemFlagMapOrderByWithRelationInput = {
    item_id?: Prisma.SortOrder;
    item_flag_id?: Prisma.SortOrder;
    item?: Prisma.ItemsOrderByWithRelationInput;
    flag?: Prisma.ItemFlagsOrderByWithRelationInput;
};
export type ItemFlagMapWhereUniqueInput = Prisma.AtLeast<{
    item_id?: number;
    AND?: Prisma.ItemFlagMapWhereInput | Prisma.ItemFlagMapWhereInput[];
    OR?: Prisma.ItemFlagMapWhereInput[];
    NOT?: Prisma.ItemFlagMapWhereInput | Prisma.ItemFlagMapWhereInput[];
    item_flag_id?: Prisma.IntFilter<"ItemFlagMap"> | number;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
    flag?: Prisma.XOR<Prisma.ItemFlagsScalarRelationFilter, Prisma.ItemFlagsWhereInput>;
}, "item_id">;
export type ItemFlagMapOrderByWithAggregationInput = {
    item_id?: Prisma.SortOrder;
    item_flag_id?: Prisma.SortOrder;
    _count?: Prisma.ItemFlagMapCountOrderByAggregateInput;
    _avg?: Prisma.ItemFlagMapAvgOrderByAggregateInput;
    _max?: Prisma.ItemFlagMapMaxOrderByAggregateInput;
    _min?: Prisma.ItemFlagMapMinOrderByAggregateInput;
    _sum?: Prisma.ItemFlagMapSumOrderByAggregateInput;
};
export type ItemFlagMapScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItemFlagMapScalarWhereWithAggregatesInput | Prisma.ItemFlagMapScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItemFlagMapScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItemFlagMapScalarWhereWithAggregatesInput | Prisma.ItemFlagMapScalarWhereWithAggregatesInput[];
    item_id?: Prisma.IntWithAggregatesFilter<"ItemFlagMap"> | number;
    item_flag_id?: Prisma.IntWithAggregatesFilter<"ItemFlagMap"> | number;
};
export type ItemFlagMapCreateInput = {
    item: Prisma.ItemsCreateNestedOneWithoutFlagMapInput;
    flag: Prisma.ItemFlagsCreateNestedOneWithoutFlagMapInput;
};
export type ItemFlagMapUncheckedCreateInput = {
    item_id: number;
    item_flag_id: number;
};
export type ItemFlagMapUpdateInput = {
    item?: Prisma.ItemsUpdateOneRequiredWithoutFlagMapNestedInput;
    flag?: Prisma.ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput;
};
export type ItemFlagMapUncheckedUpdateInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_flag_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemFlagMapCreateManyInput = {
    item_id: number;
    item_flag_id: number;
};
export type ItemFlagMapUpdateManyMutationInput = {};
export type ItemFlagMapUncheckedUpdateManyInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_flag_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemFlagMapListRelationFilter = {
    every?: Prisma.ItemFlagMapWhereInput;
    some?: Prisma.ItemFlagMapWhereInput;
    none?: Prisma.ItemFlagMapWhereInput;
};
export type ItemFlagMapOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ItemFlagMapCountOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    item_flag_id?: Prisma.SortOrder;
};
export type ItemFlagMapAvgOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    item_flag_id?: Prisma.SortOrder;
};
export type ItemFlagMapMaxOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    item_flag_id?: Prisma.SortOrder;
};
export type ItemFlagMapMinOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    item_flag_id?: Prisma.SortOrder;
};
export type ItemFlagMapSumOrderByAggregateInput = {
    item_id?: Prisma.SortOrder;
    item_flag_id?: Prisma.SortOrder;
};
export type ItemFlagMapCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutItemInput, Prisma.ItemFlagMapUncheckedCreateWithoutItemInput> | Prisma.ItemFlagMapCreateWithoutItemInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutItemInput | Prisma.ItemFlagMapCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.ItemFlagMapCreateManyItemInputEnvelope;
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
};
export type ItemFlagMapUncheckedCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutItemInput, Prisma.ItemFlagMapUncheckedCreateWithoutItemInput> | Prisma.ItemFlagMapCreateWithoutItemInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutItemInput | Prisma.ItemFlagMapCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.ItemFlagMapCreateManyItemInputEnvelope;
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
};
export type ItemFlagMapUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutItemInput, Prisma.ItemFlagMapUncheckedCreateWithoutItemInput> | Prisma.ItemFlagMapCreateWithoutItemInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutItemInput | Prisma.ItemFlagMapCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutItemInput | Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.ItemFlagMapCreateManyItemInputEnvelope;
    set?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    disconnect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    delete?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    update?: Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutItemInput | Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.ItemFlagMapUpdateManyWithWhereWithoutItemInput | Prisma.ItemFlagMapUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.ItemFlagMapScalarWhereInput | Prisma.ItemFlagMapScalarWhereInput[];
};
export type ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutItemInput, Prisma.ItemFlagMapUncheckedCreateWithoutItemInput> | Prisma.ItemFlagMapCreateWithoutItemInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutItemInput | Prisma.ItemFlagMapCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutItemInput | Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.ItemFlagMapCreateManyItemInputEnvelope;
    set?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    disconnect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    delete?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    update?: Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutItemInput | Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.ItemFlagMapUpdateManyWithWhereWithoutItemInput | Prisma.ItemFlagMapUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.ItemFlagMapScalarWhereInput | Prisma.ItemFlagMapScalarWhereInput[];
};
export type ItemFlagMapCreateNestedManyWithoutFlagInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutFlagInput, Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput> | Prisma.ItemFlagMapCreateWithoutFlagInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput | Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput[];
    createMany?: Prisma.ItemFlagMapCreateManyFlagInputEnvelope;
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
};
export type ItemFlagMapUncheckedCreateNestedManyWithoutFlagInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutFlagInput, Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput> | Prisma.ItemFlagMapCreateWithoutFlagInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput | Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput[];
    createMany?: Prisma.ItemFlagMapCreateManyFlagInputEnvelope;
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
};
export type ItemFlagMapUpdateManyWithoutFlagNestedInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutFlagInput, Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput> | Prisma.ItemFlagMapCreateWithoutFlagInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput | Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput[];
    upsert?: Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput | Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput[];
    createMany?: Prisma.ItemFlagMapCreateManyFlagInputEnvelope;
    set?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    disconnect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    delete?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    update?: Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput | Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput[];
    updateMany?: Prisma.ItemFlagMapUpdateManyWithWhereWithoutFlagInput | Prisma.ItemFlagMapUpdateManyWithWhereWithoutFlagInput[];
    deleteMany?: Prisma.ItemFlagMapScalarWhereInput | Prisma.ItemFlagMapScalarWhereInput[];
};
export type ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput = {
    create?: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutFlagInput, Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput> | Prisma.ItemFlagMapCreateWithoutFlagInput[] | Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput | Prisma.ItemFlagMapCreateOrConnectWithoutFlagInput[];
    upsert?: Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput | Prisma.ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput[];
    createMany?: Prisma.ItemFlagMapCreateManyFlagInputEnvelope;
    set?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    disconnect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    delete?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    connect?: Prisma.ItemFlagMapWhereUniqueInput | Prisma.ItemFlagMapWhereUniqueInput[];
    update?: Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput | Prisma.ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput[];
    updateMany?: Prisma.ItemFlagMapUpdateManyWithWhereWithoutFlagInput | Prisma.ItemFlagMapUpdateManyWithWhereWithoutFlagInput[];
    deleteMany?: Prisma.ItemFlagMapScalarWhereInput | Prisma.ItemFlagMapScalarWhereInput[];
};
export type ItemFlagMapCreateWithoutItemInput = {
    flag: Prisma.ItemFlagsCreateNestedOneWithoutFlagMapInput;
};
export type ItemFlagMapUncheckedCreateWithoutItemInput = {
    item_flag_id: number;
};
export type ItemFlagMapCreateOrConnectWithoutItemInput = {
    where: Prisma.ItemFlagMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutItemInput, Prisma.ItemFlagMapUncheckedCreateWithoutItemInput>;
};
export type ItemFlagMapCreateManyItemInputEnvelope = {
    data: Prisma.ItemFlagMapCreateManyItemInput | Prisma.ItemFlagMapCreateManyItemInput[];
    skipDuplicates?: boolean;
};
export type ItemFlagMapUpsertWithWhereUniqueWithoutItemInput = {
    where: Prisma.ItemFlagMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemFlagMapUpdateWithoutItemInput, Prisma.ItemFlagMapUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutItemInput, Prisma.ItemFlagMapUncheckedCreateWithoutItemInput>;
};
export type ItemFlagMapUpdateWithWhereUniqueWithoutItemInput = {
    where: Prisma.ItemFlagMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemFlagMapUpdateWithoutItemInput, Prisma.ItemFlagMapUncheckedUpdateWithoutItemInput>;
};
export type ItemFlagMapUpdateManyWithWhereWithoutItemInput = {
    where: Prisma.ItemFlagMapScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemFlagMapUpdateManyMutationInput, Prisma.ItemFlagMapUncheckedUpdateManyWithoutItemInput>;
};
export type ItemFlagMapScalarWhereInput = {
    AND?: Prisma.ItemFlagMapScalarWhereInput | Prisma.ItemFlagMapScalarWhereInput[];
    OR?: Prisma.ItemFlagMapScalarWhereInput[];
    NOT?: Prisma.ItemFlagMapScalarWhereInput | Prisma.ItemFlagMapScalarWhereInput[];
    item_id?: Prisma.IntFilter<"ItemFlagMap"> | number;
    item_flag_id?: Prisma.IntFilter<"ItemFlagMap"> | number;
};
export type ItemFlagMapCreateWithoutFlagInput = {
    item: Prisma.ItemsCreateNestedOneWithoutFlagMapInput;
};
export type ItemFlagMapUncheckedCreateWithoutFlagInput = {
    item_id: number;
};
export type ItemFlagMapCreateOrConnectWithoutFlagInput = {
    where: Prisma.ItemFlagMapWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutFlagInput, Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput>;
};
export type ItemFlagMapCreateManyFlagInputEnvelope = {
    data: Prisma.ItemFlagMapCreateManyFlagInput | Prisma.ItemFlagMapCreateManyFlagInput[];
    skipDuplicates?: boolean;
};
export type ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput = {
    where: Prisma.ItemFlagMapWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemFlagMapUpdateWithoutFlagInput, Prisma.ItemFlagMapUncheckedUpdateWithoutFlagInput>;
    create: Prisma.XOR<Prisma.ItemFlagMapCreateWithoutFlagInput, Prisma.ItemFlagMapUncheckedCreateWithoutFlagInput>;
};
export type ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput = {
    where: Prisma.ItemFlagMapWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemFlagMapUpdateWithoutFlagInput, Prisma.ItemFlagMapUncheckedUpdateWithoutFlagInput>;
};
export type ItemFlagMapUpdateManyWithWhereWithoutFlagInput = {
    where: Prisma.ItemFlagMapScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemFlagMapUpdateManyMutationInput, Prisma.ItemFlagMapUncheckedUpdateManyWithoutFlagInput>;
};
export type ItemFlagMapCreateManyItemInput = {
    item_flag_id: number;
};
export type ItemFlagMapUpdateWithoutItemInput = {
    flag?: Prisma.ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput;
};
export type ItemFlagMapUncheckedUpdateWithoutItemInput = {
    item_flag_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemFlagMapUncheckedUpdateManyWithoutItemInput = {
    item_flag_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemFlagMapCreateManyFlagInput = {
    item_id: number;
};
export type ItemFlagMapUpdateWithoutFlagInput = {
    item?: Prisma.ItemsUpdateOneRequiredWithoutFlagMapNestedInput;
};
export type ItemFlagMapUncheckedUpdateWithoutFlagInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemFlagMapUncheckedUpdateManyWithoutFlagInput = {
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ItemFlagMapSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    item_id?: boolean;
    item_flag_id?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.ItemFlagsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemFlagMap"]>;
export type ItemFlagMapSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    item_id?: boolean;
    item_flag_id?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.ItemFlagsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemFlagMap"]>;
export type ItemFlagMapSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    item_id?: boolean;
    item_flag_id?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.ItemFlagsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itemFlagMap"]>;
export type ItemFlagMapSelectScalar = {
    item_id?: boolean;
    item_flag_id?: boolean;
};
export type ItemFlagMapOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"item_id" | "item_flag_id", ExtArgs["result"]["itemFlagMap"]>;
export type ItemFlagMapInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.ItemFlagsDefaultArgs<ExtArgs>;
};
export type ItemFlagMapIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.ItemFlagsDefaultArgs<ExtArgs>;
};
export type ItemFlagMapIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.ItemFlagsDefaultArgs<ExtArgs>;
};
export type $ItemFlagMapPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ItemFlagMap";
    objects: {
        item: Prisma.$ItemsPayload<ExtArgs>;
        flag: Prisma.$ItemFlagsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        item_id: number;
        item_flag_id: number;
    }, ExtArgs["result"]["itemFlagMap"]>;
    composites: {};
};
export type ItemFlagMapGetPayload<S extends boolean | null | undefined | ItemFlagMapDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload, S>;
export type ItemFlagMapCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItemFlagMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemFlagMapCountAggregateInputType | true;
};
export interface ItemFlagMapDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ItemFlagMap'];
        meta: {
            name: 'ItemFlagMap';
        };
    };
    /**
     * Find zero or one ItemFlagMap that matches the filter.
     * @param {ItemFlagMapFindUniqueArgs} args - Arguments to find a ItemFlagMap
     * @example
     * // Get one ItemFlagMap
     * const itemFlagMap = await prisma.itemFlagMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFlagMapFindUniqueArgs>(args: Prisma.SelectSubset<T, ItemFlagMapFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ItemFlagMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFlagMapFindUniqueOrThrowArgs} args - Arguments to find a ItemFlagMap
     * @example
     * // Get one ItemFlagMap
     * const itemFlagMap = await prisma.itemFlagMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFlagMapFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItemFlagMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ItemFlagMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFlagMapFindFirstArgs} args - Arguments to find a ItemFlagMap
     * @example
     * // Get one ItemFlagMap
     * const itemFlagMap = await prisma.itemFlagMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFlagMapFindFirstArgs>(args?: Prisma.SelectSubset<T, ItemFlagMapFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ItemFlagMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFlagMapFindFirstOrThrowArgs} args - Arguments to find a ItemFlagMap
     * @example
     * // Get one ItemFlagMap
     * const itemFlagMap = await prisma.itemFlagMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFlagMapFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItemFlagMapFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ItemFlagMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFlagMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemFlagMaps
     * const itemFlagMaps = await prisma.itemFlagMap.findMany()
     *
     * // Get first 10 ItemFlagMaps
     * const itemFlagMaps = await prisma.itemFlagMap.findMany({ take: 10 })
     *
     * // Only select the `item_id`
     * const itemFlagMapWithItem_idOnly = await prisma.itemFlagMap.findMany({ select: { item_id: true } })
     *
     */
    findMany<T extends ItemFlagMapFindManyArgs>(args?: Prisma.SelectSubset<T, ItemFlagMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ItemFlagMap.
     * @param {ItemFlagMapCreateArgs} args - Arguments to create a ItemFlagMap.
     * @example
     * // Create one ItemFlagMap
     * const ItemFlagMap = await prisma.itemFlagMap.create({
     *   data: {
     *     // ... data to create a ItemFlagMap
     *   }
     * })
     *
     */
    create<T extends ItemFlagMapCreateArgs>(args: Prisma.SelectSubset<T, ItemFlagMapCreateArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ItemFlagMaps.
     * @param {ItemFlagMapCreateManyArgs} args - Arguments to create many ItemFlagMaps.
     * @example
     * // Create many ItemFlagMaps
     * const itemFlagMap = await prisma.itemFlagMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ItemFlagMapCreateManyArgs>(args?: Prisma.SelectSubset<T, ItemFlagMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ItemFlagMaps and returns the data saved in the database.
     * @param {ItemFlagMapCreateManyAndReturnArgs} args - Arguments to create many ItemFlagMaps.
     * @example
     * // Create many ItemFlagMaps
     * const itemFlagMap = await prisma.itemFlagMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ItemFlagMaps and only return the `item_id`
     * const itemFlagMapWithItem_idOnly = await prisma.itemFlagMap.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ItemFlagMapCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItemFlagMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ItemFlagMap.
     * @param {ItemFlagMapDeleteArgs} args - Arguments to delete one ItemFlagMap.
     * @example
     * // Delete one ItemFlagMap
     * const ItemFlagMap = await prisma.itemFlagMap.delete({
     *   where: {
     *     // ... filter to delete one ItemFlagMap
     *   }
     * })
     *
     */
    delete<T extends ItemFlagMapDeleteArgs>(args: Prisma.SelectSubset<T, ItemFlagMapDeleteArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ItemFlagMap.
     * @param {ItemFlagMapUpdateArgs} args - Arguments to update one ItemFlagMap.
     * @example
     * // Update one ItemFlagMap
     * const itemFlagMap = await prisma.itemFlagMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ItemFlagMapUpdateArgs>(args: Prisma.SelectSubset<T, ItemFlagMapUpdateArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ItemFlagMaps.
     * @param {ItemFlagMapDeleteManyArgs} args - Arguments to filter ItemFlagMaps to delete.
     * @example
     * // Delete a few ItemFlagMaps
     * const { count } = await prisma.itemFlagMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ItemFlagMapDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItemFlagMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ItemFlagMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFlagMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemFlagMaps
     * const itemFlagMap = await prisma.itemFlagMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ItemFlagMapUpdateManyArgs>(args: Prisma.SelectSubset<T, ItemFlagMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ItemFlagMaps and returns the data updated in the database.
     * @param {ItemFlagMapUpdateManyAndReturnArgs} args - Arguments to update many ItemFlagMaps.
     * @example
     * // Update many ItemFlagMaps
     * const itemFlagMap = await prisma.itemFlagMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ItemFlagMaps and only return the `item_id`
     * const itemFlagMapWithItem_idOnly = await prisma.itemFlagMap.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemFlagMapUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItemFlagMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ItemFlagMap.
     * @param {ItemFlagMapUpsertArgs} args - Arguments to update or create a ItemFlagMap.
     * @example
     * // Update or create a ItemFlagMap
     * const itemFlagMap = await prisma.itemFlagMap.upsert({
     *   create: {
     *     // ... data to create a ItemFlagMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemFlagMap we want to update
     *   }
     * })
     */
    upsert<T extends ItemFlagMapUpsertArgs>(args: Prisma.SelectSubset<T, ItemFlagMapUpsertArgs<ExtArgs>>): Prisma.Prisma__ItemFlagMapClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ItemFlagMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFlagMapCountArgs} args - Arguments to filter ItemFlagMaps to count.
     * @example
     * // Count the number of ItemFlagMaps
     * const count = await prisma.itemFlagMap.count({
     *   where: {
     *     // ... the filter for the ItemFlagMaps we want to count
     *   }
     * })
    **/
    count<T extends ItemFlagMapCountArgs>(args?: Prisma.Subset<T, ItemFlagMapCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemFlagMapCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ItemFlagMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFlagMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemFlagMapAggregateArgs>(args: Prisma.Subset<T, ItemFlagMapAggregateArgs>): Prisma.PrismaPromise<GetItemFlagMapAggregateType<T>>;
    /**
     * Group by ItemFlagMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFlagMapGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ItemFlagMapGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItemFlagMapGroupByArgs['orderBy'];
    } : {
        orderBy?: ItemFlagMapGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItemFlagMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemFlagMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ItemFlagMap model
     */
    readonly fields: ItemFlagMapFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ItemFlagMap.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ItemFlagMapClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    item<T extends Prisma.ItemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemsDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemsClient<runtime.Types.Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    flag<T extends Prisma.ItemFlagsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemFlagsDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemFlagsClient<runtime.Types.Result.GetResult<Prisma.$ItemFlagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ItemFlagMap model
 */
export interface ItemFlagMapFieldRefs {
    readonly item_id: Prisma.FieldRef<"ItemFlagMap", 'Int'>;
    readonly item_flag_id: Prisma.FieldRef<"ItemFlagMap", 'Int'>;
}
/**
 * ItemFlagMap findUnique
 */
export type ItemFlagMapFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * Filter, which ItemFlagMap to fetch.
     */
    where: Prisma.ItemFlagMapWhereUniqueInput;
};
/**
 * ItemFlagMap findUniqueOrThrow
 */
export type ItemFlagMapFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * Filter, which ItemFlagMap to fetch.
     */
    where: Prisma.ItemFlagMapWhereUniqueInput;
};
/**
 * ItemFlagMap findFirst
 */
export type ItemFlagMapFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * Filter, which ItemFlagMap to fetch.
     */
    where?: Prisma.ItemFlagMapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemFlagMaps to fetch.
     */
    orderBy?: Prisma.ItemFlagMapOrderByWithRelationInput | Prisma.ItemFlagMapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ItemFlagMaps.
     */
    cursor?: Prisma.ItemFlagMapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemFlagMaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemFlagMaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ItemFlagMaps.
     */
    distinct?: Prisma.ItemFlagMapScalarFieldEnum | Prisma.ItemFlagMapScalarFieldEnum[];
};
/**
 * ItemFlagMap findFirstOrThrow
 */
export type ItemFlagMapFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * Filter, which ItemFlagMap to fetch.
     */
    where?: Prisma.ItemFlagMapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemFlagMaps to fetch.
     */
    orderBy?: Prisma.ItemFlagMapOrderByWithRelationInput | Prisma.ItemFlagMapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ItemFlagMaps.
     */
    cursor?: Prisma.ItemFlagMapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemFlagMaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemFlagMaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ItemFlagMaps.
     */
    distinct?: Prisma.ItemFlagMapScalarFieldEnum | Prisma.ItemFlagMapScalarFieldEnum[];
};
/**
 * ItemFlagMap findMany
 */
export type ItemFlagMapFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * Filter, which ItemFlagMaps to fetch.
     */
    where?: Prisma.ItemFlagMapWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ItemFlagMaps to fetch.
     */
    orderBy?: Prisma.ItemFlagMapOrderByWithRelationInput | Prisma.ItemFlagMapOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ItemFlagMaps.
     */
    cursor?: Prisma.ItemFlagMapWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ItemFlagMaps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ItemFlagMaps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ItemFlagMaps.
     */
    distinct?: Prisma.ItemFlagMapScalarFieldEnum | Prisma.ItemFlagMapScalarFieldEnum[];
};
/**
 * ItemFlagMap create
 */
export type ItemFlagMapCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * The data needed to create a ItemFlagMap.
     */
    data: Prisma.XOR<Prisma.ItemFlagMapCreateInput, Prisma.ItemFlagMapUncheckedCreateInput>;
};
/**
 * ItemFlagMap createMany
 */
export type ItemFlagMapCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemFlagMaps.
     */
    data: Prisma.ItemFlagMapCreateManyInput | Prisma.ItemFlagMapCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ItemFlagMap createManyAndReturn
 */
export type ItemFlagMapCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * The data used to create many ItemFlagMaps.
     */
    data: Prisma.ItemFlagMapCreateManyInput | Prisma.ItemFlagMapCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ItemFlagMap update
 */
export type ItemFlagMapUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * The data needed to update a ItemFlagMap.
     */
    data: Prisma.XOR<Prisma.ItemFlagMapUpdateInput, Prisma.ItemFlagMapUncheckedUpdateInput>;
    /**
     * Choose, which ItemFlagMap to update.
     */
    where: Prisma.ItemFlagMapWhereUniqueInput;
};
/**
 * ItemFlagMap updateMany
 */
export type ItemFlagMapUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemFlagMaps.
     */
    data: Prisma.XOR<Prisma.ItemFlagMapUpdateManyMutationInput, Prisma.ItemFlagMapUncheckedUpdateManyInput>;
    /**
     * Filter which ItemFlagMaps to update
     */
    where?: Prisma.ItemFlagMapWhereInput;
    /**
     * Limit how many ItemFlagMaps to update.
     */
    limit?: number;
};
/**
 * ItemFlagMap updateManyAndReturn
 */
export type ItemFlagMapUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * The data used to update ItemFlagMaps.
     */
    data: Prisma.XOR<Prisma.ItemFlagMapUpdateManyMutationInput, Prisma.ItemFlagMapUncheckedUpdateManyInput>;
    /**
     * Filter which ItemFlagMaps to update
     */
    where?: Prisma.ItemFlagMapWhereInput;
    /**
     * Limit how many ItemFlagMaps to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ItemFlagMap upsert
 */
export type ItemFlagMapUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * The filter to search for the ItemFlagMap to update in case it exists.
     */
    where: Prisma.ItemFlagMapWhereUniqueInput;
    /**
     * In case the ItemFlagMap found by the `where` argument doesn't exist, create a new ItemFlagMap with this data.
     */
    create: Prisma.XOR<Prisma.ItemFlagMapCreateInput, Prisma.ItemFlagMapUncheckedCreateInput>;
    /**
     * In case the ItemFlagMap was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ItemFlagMapUpdateInput, Prisma.ItemFlagMapUncheckedUpdateInput>;
};
/**
 * ItemFlagMap delete
 */
export type ItemFlagMapDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
    /**
     * Filter which ItemFlagMap to delete.
     */
    where: Prisma.ItemFlagMapWhereUniqueInput;
};
/**
 * ItemFlagMap deleteMany
 */
export type ItemFlagMapDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ItemFlagMaps to delete
     */
    where?: Prisma.ItemFlagMapWhereInput;
    /**
     * Limit how many ItemFlagMaps to delete.
     */
    limit?: number;
};
/**
 * ItemFlagMap without action
 */
export type ItemFlagMapDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFlagMap
     */
    select?: Prisma.ItemFlagMapSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ItemFlagMap
     */
    omit?: Prisma.ItemFlagMapOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemFlagMapInclude<ExtArgs> | null;
};
