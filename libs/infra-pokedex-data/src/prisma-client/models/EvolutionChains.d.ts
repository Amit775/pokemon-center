import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model EvolutionChains
 * @@TypeGraphQL.type(name: "EvolutionChain")
 */
export type EvolutionChainsModel = runtime.Types.Result.DefaultSelection<Prisma.$EvolutionChainsPayload>;
export type AggregateEvolutionChains = {
    _count: EvolutionChainsCountAggregateOutputType | null;
    _avg: EvolutionChainsAvgAggregateOutputType | null;
    _sum: EvolutionChainsSumAggregateOutputType | null;
    _min: EvolutionChainsMinAggregateOutputType | null;
    _max: EvolutionChainsMaxAggregateOutputType | null;
};
export type EvolutionChainsAvgAggregateOutputType = {
    id: number | null;
    baby_trigger_item_id: number | null;
};
export type EvolutionChainsSumAggregateOutputType = {
    id: number | null;
    baby_trigger_item_id: number | null;
};
export type EvolutionChainsMinAggregateOutputType = {
    id: number | null;
    baby_trigger_item_id: number | null;
};
export type EvolutionChainsMaxAggregateOutputType = {
    id: number | null;
    baby_trigger_item_id: number | null;
};
export type EvolutionChainsCountAggregateOutputType = {
    id: number;
    baby_trigger_item_id: number;
    _all: number;
};
export type EvolutionChainsAvgAggregateInputType = {
    id?: true;
    baby_trigger_item_id?: true;
};
export type EvolutionChainsSumAggregateInputType = {
    id?: true;
    baby_trigger_item_id?: true;
};
export type EvolutionChainsMinAggregateInputType = {
    id?: true;
    baby_trigger_item_id?: true;
};
export type EvolutionChainsMaxAggregateInputType = {
    id?: true;
    baby_trigger_item_id?: true;
};
export type EvolutionChainsCountAggregateInputType = {
    id?: true;
    baby_trigger_item_id?: true;
    _all?: true;
};
export type EvolutionChainsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EvolutionChains to aggregate.
     */
    where?: Prisma.EvolutionChainsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionChains to fetch.
     */
    orderBy?: Prisma.EvolutionChainsOrderByWithRelationInput | Prisma.EvolutionChainsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EvolutionChainsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EvolutionChains
    **/
    _count?: true | EvolutionChainsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EvolutionChainsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EvolutionChainsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EvolutionChainsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EvolutionChainsMaxAggregateInputType;
};
export type GetEvolutionChainsAggregateType<T extends EvolutionChainsAggregateArgs> = {
    [P in keyof T & keyof AggregateEvolutionChains]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvolutionChains[P]> : Prisma.GetScalarType<T[P], AggregateEvolutionChains[P]>;
};
export type EvolutionChainsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvolutionChainsWhereInput;
    orderBy?: Prisma.EvolutionChainsOrderByWithAggregationInput | Prisma.EvolutionChainsOrderByWithAggregationInput[];
    by: Prisma.EvolutionChainsScalarFieldEnum[] | Prisma.EvolutionChainsScalarFieldEnum;
    having?: Prisma.EvolutionChainsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvolutionChainsCountAggregateInputType | true;
    _avg?: EvolutionChainsAvgAggregateInputType;
    _sum?: EvolutionChainsSumAggregateInputType;
    _min?: EvolutionChainsMinAggregateInputType;
    _max?: EvolutionChainsMaxAggregateInputType;
};
export type EvolutionChainsGroupByOutputType = {
    id: number;
    baby_trigger_item_id: number | null;
    _count: EvolutionChainsCountAggregateOutputType | null;
    _avg: EvolutionChainsAvgAggregateOutputType | null;
    _sum: EvolutionChainsSumAggregateOutputType | null;
    _min: EvolutionChainsMinAggregateOutputType | null;
    _max: EvolutionChainsMaxAggregateOutputType | null;
};
export type GetEvolutionChainsGroupByPayload<T extends EvolutionChainsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvolutionChainsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvolutionChainsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvolutionChainsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvolutionChainsGroupByOutputType[P]>;
}>>;
export type EvolutionChainsWhereInput = {
    AND?: Prisma.EvolutionChainsWhereInput | Prisma.EvolutionChainsWhereInput[];
    OR?: Prisma.EvolutionChainsWhereInput[];
    NOT?: Prisma.EvolutionChainsWhereInput | Prisma.EvolutionChainsWhereInput[];
    id?: Prisma.IntFilter<"EvolutionChains"> | number;
    baby_trigger_item_id?: Prisma.IntNullableFilter<"EvolutionChains"> | number | null;
    babyTriggerItem?: Prisma.XOR<Prisma.ItemsNullableScalarRelationFilter, Prisma.ItemsWhereInput> | null;
    species?: Prisma.PokemonSpeciesListRelationFilter;
};
export type EvolutionChainsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    baby_trigger_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    babyTriggerItem?: Prisma.ItemsOrderByWithRelationInput;
    species?: Prisma.PokemonSpeciesOrderByRelationAggregateInput;
};
export type EvolutionChainsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EvolutionChainsWhereInput | Prisma.EvolutionChainsWhereInput[];
    OR?: Prisma.EvolutionChainsWhereInput[];
    NOT?: Prisma.EvolutionChainsWhereInput | Prisma.EvolutionChainsWhereInput[];
    baby_trigger_item_id?: Prisma.IntNullableFilter<"EvolutionChains"> | number | null;
    babyTriggerItem?: Prisma.XOR<Prisma.ItemsNullableScalarRelationFilter, Prisma.ItemsWhereInput> | null;
    species?: Prisma.PokemonSpeciesListRelationFilter;
}, "id">;
export type EvolutionChainsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    baby_trigger_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EvolutionChainsCountOrderByAggregateInput;
    _avg?: Prisma.EvolutionChainsAvgOrderByAggregateInput;
    _max?: Prisma.EvolutionChainsMaxOrderByAggregateInput;
    _min?: Prisma.EvolutionChainsMinOrderByAggregateInput;
    _sum?: Prisma.EvolutionChainsSumOrderByAggregateInput;
};
export type EvolutionChainsScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvolutionChainsScalarWhereWithAggregatesInput | Prisma.EvolutionChainsScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvolutionChainsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvolutionChainsScalarWhereWithAggregatesInput | Prisma.EvolutionChainsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"EvolutionChains"> | number;
    baby_trigger_item_id?: Prisma.IntNullableWithAggregatesFilter<"EvolutionChains"> | number | null;
};
export type EvolutionChainsCreateInput = {
    id: number;
    babyTriggerItem?: Prisma.ItemsCreateNestedOneWithoutBabyTriggerItemsInput;
    species?: Prisma.PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput;
};
export type EvolutionChainsUncheckedCreateInput = {
    id: number;
    baby_trigger_item_id?: number | null;
    species?: Prisma.PokemonSpeciesUncheckedCreateNestedManyWithoutEvolutionChainInput;
};
export type EvolutionChainsUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    babyTriggerItem?: Prisma.ItemsUpdateOneWithoutBabyTriggerItemsNestedInput;
    species?: Prisma.PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput;
};
export type EvolutionChainsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    baby_trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    species?: Prisma.PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput;
};
export type EvolutionChainsCreateManyInput = {
    id: number;
    baby_trigger_item_id?: number | null;
};
export type EvolutionChainsUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EvolutionChainsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    baby_trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type EvolutionChainsScalarRelationFilter = {
    is?: Prisma.EvolutionChainsWhereInput;
    isNot?: Prisma.EvolutionChainsWhereInput;
};
export type EvolutionChainsListRelationFilter = {
    every?: Prisma.EvolutionChainsWhereInput;
    some?: Prisma.EvolutionChainsWhereInput;
    none?: Prisma.EvolutionChainsWhereInput;
};
export type EvolutionChainsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvolutionChainsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    baby_trigger_item_id?: Prisma.SortOrder;
};
export type EvolutionChainsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    baby_trigger_item_id?: Prisma.SortOrder;
};
export type EvolutionChainsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    baby_trigger_item_id?: Prisma.SortOrder;
};
export type EvolutionChainsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    baby_trigger_item_id?: Prisma.SortOrder;
};
export type EvolutionChainsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    baby_trigger_item_id?: Prisma.SortOrder;
};
export type EvolutionChainsCreateNestedOneWithoutSpeciesInput = {
    create?: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutSpeciesInput, Prisma.EvolutionChainsUncheckedCreateWithoutSpeciesInput>;
    connectOrCreate?: Prisma.EvolutionChainsCreateOrConnectWithoutSpeciesInput;
    connect?: Prisma.EvolutionChainsWhereUniqueInput;
};
export type EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutSpeciesInput, Prisma.EvolutionChainsUncheckedCreateWithoutSpeciesInput>;
    connectOrCreate?: Prisma.EvolutionChainsCreateOrConnectWithoutSpeciesInput;
    upsert?: Prisma.EvolutionChainsUpsertWithoutSpeciesInput;
    connect?: Prisma.EvolutionChainsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput, Prisma.EvolutionChainsUpdateWithoutSpeciesInput>, Prisma.EvolutionChainsUncheckedUpdateWithoutSpeciesInput>;
};
export type EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput = {
    create?: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput> | Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput[] | Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput[];
    connectOrCreate?: Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput | Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput[];
    createMany?: Prisma.EvolutionChainsCreateManyBabyTriggerItemInputEnvelope;
    connect?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
};
export type EvolutionChainsUncheckedCreateNestedManyWithoutBabyTriggerItemInput = {
    create?: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput> | Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput[] | Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput[];
    connectOrCreate?: Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput | Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput[];
    createMany?: Prisma.EvolutionChainsCreateManyBabyTriggerItemInputEnvelope;
    connect?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
};
export type EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput = {
    create?: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput> | Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput[] | Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput[];
    connectOrCreate?: Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput | Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput[];
    upsert?: Prisma.EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput | Prisma.EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput[];
    createMany?: Prisma.EvolutionChainsCreateManyBabyTriggerItemInputEnvelope;
    set?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    disconnect?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    delete?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    connect?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    update?: Prisma.EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput | Prisma.EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput[];
    updateMany?: Prisma.EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput | Prisma.EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput[];
    deleteMany?: Prisma.EvolutionChainsScalarWhereInput | Prisma.EvolutionChainsScalarWhereInput[];
};
export type EvolutionChainsUncheckedUpdateManyWithoutBabyTriggerItemNestedInput = {
    create?: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput> | Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput[] | Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput[];
    connectOrCreate?: Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput | Prisma.EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput[];
    upsert?: Prisma.EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput | Prisma.EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput[];
    createMany?: Prisma.EvolutionChainsCreateManyBabyTriggerItemInputEnvelope;
    set?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    disconnect?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    delete?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    connect?: Prisma.EvolutionChainsWhereUniqueInput | Prisma.EvolutionChainsWhereUniqueInput[];
    update?: Prisma.EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput | Prisma.EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput[];
    updateMany?: Prisma.EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput | Prisma.EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput[];
    deleteMany?: Prisma.EvolutionChainsScalarWhereInput | Prisma.EvolutionChainsScalarWhereInput[];
};
export type EvolutionChainsCreateWithoutSpeciesInput = {
    id: number;
    babyTriggerItem?: Prisma.ItemsCreateNestedOneWithoutBabyTriggerItemsInput;
};
export type EvolutionChainsUncheckedCreateWithoutSpeciesInput = {
    id: number;
    baby_trigger_item_id?: number | null;
};
export type EvolutionChainsCreateOrConnectWithoutSpeciesInput = {
    where: Prisma.EvolutionChainsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutSpeciesInput, Prisma.EvolutionChainsUncheckedCreateWithoutSpeciesInput>;
};
export type EvolutionChainsUpsertWithoutSpeciesInput = {
    update: Prisma.XOR<Prisma.EvolutionChainsUpdateWithoutSpeciesInput, Prisma.EvolutionChainsUncheckedUpdateWithoutSpeciesInput>;
    create: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutSpeciesInput, Prisma.EvolutionChainsUncheckedCreateWithoutSpeciesInput>;
    where?: Prisma.EvolutionChainsWhereInput;
};
export type EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput = {
    where?: Prisma.EvolutionChainsWhereInput;
    data: Prisma.XOR<Prisma.EvolutionChainsUpdateWithoutSpeciesInput, Prisma.EvolutionChainsUncheckedUpdateWithoutSpeciesInput>;
};
export type EvolutionChainsUpdateWithoutSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    babyTriggerItem?: Prisma.ItemsUpdateOneWithoutBabyTriggerItemsNestedInput;
};
export type EvolutionChainsUncheckedUpdateWithoutSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    baby_trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type EvolutionChainsCreateWithoutBabyTriggerItemInput = {
    id: number;
    species?: Prisma.PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput;
};
export type EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput = {
    id: number;
    species?: Prisma.PokemonSpeciesUncheckedCreateNestedManyWithoutEvolutionChainInput;
};
export type EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput = {
    where: Prisma.EvolutionChainsWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput>;
};
export type EvolutionChainsCreateManyBabyTriggerItemInputEnvelope = {
    data: Prisma.EvolutionChainsCreateManyBabyTriggerItemInput | Prisma.EvolutionChainsCreateManyBabyTriggerItemInput[];
    skipDuplicates?: boolean;
};
export type EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput = {
    where: Prisma.EvolutionChainsWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvolutionChainsUpdateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedUpdateWithoutBabyTriggerItemInput>;
    create: Prisma.XOR<Prisma.EvolutionChainsCreateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput>;
};
export type EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput = {
    where: Prisma.EvolutionChainsWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvolutionChainsUpdateWithoutBabyTriggerItemInput, Prisma.EvolutionChainsUncheckedUpdateWithoutBabyTriggerItemInput>;
};
export type EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput = {
    where: Prisma.EvolutionChainsScalarWhereInput;
    data: Prisma.XOR<Prisma.EvolutionChainsUpdateManyMutationInput, Prisma.EvolutionChainsUncheckedUpdateManyWithoutBabyTriggerItemInput>;
};
export type EvolutionChainsScalarWhereInput = {
    AND?: Prisma.EvolutionChainsScalarWhereInput | Prisma.EvolutionChainsScalarWhereInput[];
    OR?: Prisma.EvolutionChainsScalarWhereInput[];
    NOT?: Prisma.EvolutionChainsScalarWhereInput | Prisma.EvolutionChainsScalarWhereInput[];
    id?: Prisma.IntFilter<"EvolutionChains"> | number;
    baby_trigger_item_id?: Prisma.IntNullableFilter<"EvolutionChains"> | number | null;
};
export type EvolutionChainsCreateManyBabyTriggerItemInput = {
    id: number;
};
export type EvolutionChainsUpdateWithoutBabyTriggerItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput;
};
export type EvolutionChainsUncheckedUpdateWithoutBabyTriggerItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput;
};
export type EvolutionChainsUncheckedUpdateManyWithoutBabyTriggerItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type EvolutionChainsCountOutputType
 */
export type EvolutionChainsCountOutputType = {
    species: number;
};
export type EvolutionChainsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | EvolutionChainsCountOutputTypeCountSpeciesArgs;
};
/**
 * EvolutionChainsCountOutputType without action
 */
export type EvolutionChainsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChainsCountOutputType
     */
    select?: Prisma.EvolutionChainsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EvolutionChainsCountOutputType without action
 */
export type EvolutionChainsCountOutputTypeCountSpeciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonSpeciesWhereInput;
};
export type EvolutionChainsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    baby_trigger_item_id?: boolean;
    babyTriggerItem?: boolean | Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs>;
    species?: boolean | Prisma.EvolutionChains$speciesArgs<ExtArgs>;
    _count?: boolean | Prisma.EvolutionChainsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evolutionChains"]>;
export type EvolutionChainsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    baby_trigger_item_id?: boolean;
    babyTriggerItem?: boolean | Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs>;
}, ExtArgs["result"]["evolutionChains"]>;
export type EvolutionChainsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    baby_trigger_item_id?: boolean;
    babyTriggerItem?: boolean | Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs>;
}, ExtArgs["result"]["evolutionChains"]>;
export type EvolutionChainsSelectScalar = {
    id?: boolean;
    baby_trigger_item_id?: boolean;
};
export type EvolutionChainsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "baby_trigger_item_id", ExtArgs["result"]["evolutionChains"]>;
export type EvolutionChainsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    babyTriggerItem?: boolean | Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs>;
    species?: boolean | Prisma.EvolutionChains$speciesArgs<ExtArgs>;
    _count?: boolean | Prisma.EvolutionChainsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvolutionChainsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    babyTriggerItem?: boolean | Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs>;
};
export type EvolutionChainsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    babyTriggerItem?: boolean | Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs>;
};
export type $EvolutionChainsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvolutionChains";
    objects: {
        babyTriggerItem: Prisma.$ItemsPayload<ExtArgs> | null;
        species: Prisma.$PokemonSpeciesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        baby_trigger_item_id: number | null;
    }, ExtArgs["result"]["evolutionChains"]>;
    composites: {};
};
export type EvolutionChainsGetPayload<S extends boolean | null | undefined | EvolutionChainsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload, S>;
export type EvolutionChainsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvolutionChainsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvolutionChainsCountAggregateInputType | true;
};
export interface EvolutionChainsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvolutionChains'];
        meta: {
            name: 'EvolutionChains';
        };
    };
    /**
     * Find zero or one EvolutionChains that matches the filter.
     * @param {EvolutionChainsFindUniqueArgs} args - Arguments to find a EvolutionChains
     * @example
     * // Get one EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvolutionChainsFindUniqueArgs>(args: Prisma.SelectSubset<T, EvolutionChainsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EvolutionChains that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvolutionChainsFindUniqueOrThrowArgs} args - Arguments to find a EvolutionChains
     * @example
     * // Get one EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvolutionChainsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvolutionChainsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EvolutionChains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionChainsFindFirstArgs} args - Arguments to find a EvolutionChains
     * @example
     * // Get one EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvolutionChainsFindFirstArgs>(args?: Prisma.SelectSubset<T, EvolutionChainsFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EvolutionChains that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionChainsFindFirstOrThrowArgs} args - Arguments to find a EvolutionChains
     * @example
     * // Get one EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvolutionChainsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvolutionChainsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EvolutionChains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionChainsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.findMany()
     *
     * // Get first 10 EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const evolutionChainsWithIdOnly = await prisma.evolutionChains.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EvolutionChainsFindManyArgs>(args?: Prisma.SelectSubset<T, EvolutionChainsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EvolutionChains.
     * @param {EvolutionChainsCreateArgs} args - Arguments to create a EvolutionChains.
     * @example
     * // Create one EvolutionChains
     * const EvolutionChains = await prisma.evolutionChains.create({
     *   data: {
     *     // ... data to create a EvolutionChains
     *   }
     * })
     *
     */
    create<T extends EvolutionChainsCreateArgs>(args: Prisma.SelectSubset<T, EvolutionChainsCreateArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EvolutionChains.
     * @param {EvolutionChainsCreateManyArgs} args - Arguments to create many EvolutionChains.
     * @example
     * // Create many EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EvolutionChainsCreateManyArgs>(args?: Prisma.SelectSubset<T, EvolutionChainsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EvolutionChains and returns the data saved in the database.
     * @param {EvolutionChainsCreateManyAndReturnArgs} args - Arguments to create many EvolutionChains.
     * @example
     * // Create many EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EvolutionChains and only return the `id`
     * const evolutionChainsWithIdOnly = await prisma.evolutionChains.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EvolutionChainsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvolutionChainsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EvolutionChains.
     * @param {EvolutionChainsDeleteArgs} args - Arguments to delete one EvolutionChains.
     * @example
     * // Delete one EvolutionChains
     * const EvolutionChains = await prisma.evolutionChains.delete({
     *   where: {
     *     // ... filter to delete one EvolutionChains
     *   }
     * })
     *
     */
    delete<T extends EvolutionChainsDeleteArgs>(args: Prisma.SelectSubset<T, EvolutionChainsDeleteArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EvolutionChains.
     * @param {EvolutionChainsUpdateArgs} args - Arguments to update one EvolutionChains.
     * @example
     * // Update one EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EvolutionChainsUpdateArgs>(args: Prisma.SelectSubset<T, EvolutionChainsUpdateArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EvolutionChains.
     * @param {EvolutionChainsDeleteManyArgs} args - Arguments to filter EvolutionChains to delete.
     * @example
     * // Delete a few EvolutionChains
     * const { count } = await prisma.evolutionChains.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EvolutionChainsDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvolutionChainsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EvolutionChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionChainsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EvolutionChainsUpdateManyArgs>(args: Prisma.SelectSubset<T, EvolutionChainsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EvolutionChains and returns the data updated in the database.
     * @param {EvolutionChainsUpdateManyAndReturnArgs} args - Arguments to update many EvolutionChains.
     * @example
     * // Update many EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EvolutionChains and only return the `id`
     * const evolutionChainsWithIdOnly = await prisma.evolutionChains.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvolutionChainsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvolutionChainsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EvolutionChains.
     * @param {EvolutionChainsUpsertArgs} args - Arguments to update or create a EvolutionChains.
     * @example
     * // Update or create a EvolutionChains
     * const evolutionChains = await prisma.evolutionChains.upsert({
     *   create: {
     *     // ... data to create a EvolutionChains
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvolutionChains we want to update
     *   }
     * })
     */
    upsert<T extends EvolutionChainsUpsertArgs>(args: Prisma.SelectSubset<T, EvolutionChainsUpsertArgs<ExtArgs>>): Prisma.Prisma__EvolutionChainsClient<runtime.Types.Result.GetResult<Prisma.$EvolutionChainsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EvolutionChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionChainsCountArgs} args - Arguments to filter EvolutionChains to count.
     * @example
     * // Count the number of EvolutionChains
     * const count = await prisma.evolutionChains.count({
     *   where: {
     *     // ... the filter for the EvolutionChains we want to count
     *   }
     * })
    **/
    count<T extends EvolutionChainsCountArgs>(args?: Prisma.Subset<T, EvolutionChainsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvolutionChainsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EvolutionChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionChainsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvolutionChainsAggregateArgs>(args: Prisma.Subset<T, EvolutionChainsAggregateArgs>): Prisma.PrismaPromise<GetEvolutionChainsAggregateType<T>>;
    /**
     * Group by EvolutionChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionChainsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EvolutionChainsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvolutionChainsGroupByArgs['orderBy'];
    } : {
        orderBy?: EvolutionChainsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvolutionChainsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvolutionChainsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EvolutionChains model
     */
    readonly fields: EvolutionChainsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EvolutionChains.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EvolutionChainsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    babyTriggerItem<T extends Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvolutionChains$babyTriggerItemArgs<ExtArgs>>): Prisma.Prisma__ItemsClient<runtime.Types.Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    species<T extends Prisma.EvolutionChains$speciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvolutionChains$speciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EvolutionChains model
 */
export interface EvolutionChainsFieldRefs {
    readonly id: Prisma.FieldRef<"EvolutionChains", 'Int'>;
    readonly baby_trigger_item_id: Prisma.FieldRef<"EvolutionChains", 'Int'>;
}
/**
 * EvolutionChains findUnique
 */
export type EvolutionChainsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionChains to fetch.
     */
    where: Prisma.EvolutionChainsWhereUniqueInput;
};
/**
 * EvolutionChains findUniqueOrThrow
 */
export type EvolutionChainsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionChains to fetch.
     */
    where: Prisma.EvolutionChainsWhereUniqueInput;
};
/**
 * EvolutionChains findFirst
 */
export type EvolutionChainsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionChains to fetch.
     */
    where?: Prisma.EvolutionChainsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionChains to fetch.
     */
    orderBy?: Prisma.EvolutionChainsOrderByWithRelationInput | Prisma.EvolutionChainsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EvolutionChains.
     */
    cursor?: Prisma.EvolutionChainsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EvolutionChains.
     */
    distinct?: Prisma.EvolutionChainsScalarFieldEnum | Prisma.EvolutionChainsScalarFieldEnum[];
};
/**
 * EvolutionChains findFirstOrThrow
 */
export type EvolutionChainsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionChains to fetch.
     */
    where?: Prisma.EvolutionChainsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionChains to fetch.
     */
    orderBy?: Prisma.EvolutionChainsOrderByWithRelationInput | Prisma.EvolutionChainsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EvolutionChains.
     */
    cursor?: Prisma.EvolutionChainsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EvolutionChains.
     */
    distinct?: Prisma.EvolutionChainsScalarFieldEnum | Prisma.EvolutionChainsScalarFieldEnum[];
};
/**
 * EvolutionChains findMany
 */
export type EvolutionChainsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionChains to fetch.
     */
    where?: Prisma.EvolutionChainsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionChains to fetch.
     */
    orderBy?: Prisma.EvolutionChainsOrderByWithRelationInput | Prisma.EvolutionChainsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EvolutionChains.
     */
    cursor?: Prisma.EvolutionChainsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EvolutionChains.
     */
    distinct?: Prisma.EvolutionChainsScalarFieldEnum | Prisma.EvolutionChainsScalarFieldEnum[];
};
/**
 * EvolutionChains create
 */
export type EvolutionChainsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * The data needed to create a EvolutionChains.
     */
    data: Prisma.XOR<Prisma.EvolutionChainsCreateInput, Prisma.EvolutionChainsUncheckedCreateInput>;
};
/**
 * EvolutionChains createMany
 */
export type EvolutionChainsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvolutionChains.
     */
    data: Prisma.EvolutionChainsCreateManyInput | Prisma.EvolutionChainsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EvolutionChains createManyAndReturn
 */
export type EvolutionChainsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * The data used to create many EvolutionChains.
     */
    data: Prisma.EvolutionChainsCreateManyInput | Prisma.EvolutionChainsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EvolutionChains update
 */
export type EvolutionChainsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * The data needed to update a EvolutionChains.
     */
    data: Prisma.XOR<Prisma.EvolutionChainsUpdateInput, Prisma.EvolutionChainsUncheckedUpdateInput>;
    /**
     * Choose, which EvolutionChains to update.
     */
    where: Prisma.EvolutionChainsWhereUniqueInput;
};
/**
 * EvolutionChains updateMany
 */
export type EvolutionChainsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EvolutionChains.
     */
    data: Prisma.XOR<Prisma.EvolutionChainsUpdateManyMutationInput, Prisma.EvolutionChainsUncheckedUpdateManyInput>;
    /**
     * Filter which EvolutionChains to update
     */
    where?: Prisma.EvolutionChainsWhereInput;
    /**
     * Limit how many EvolutionChains to update.
     */
    limit?: number;
};
/**
 * EvolutionChains updateManyAndReturn
 */
export type EvolutionChainsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * The data used to update EvolutionChains.
     */
    data: Prisma.XOR<Prisma.EvolutionChainsUpdateManyMutationInput, Prisma.EvolutionChainsUncheckedUpdateManyInput>;
    /**
     * Filter which EvolutionChains to update
     */
    where?: Prisma.EvolutionChainsWhereInput;
    /**
     * Limit how many EvolutionChains to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EvolutionChains upsert
 */
export type EvolutionChainsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * The filter to search for the EvolutionChains to update in case it exists.
     */
    where: Prisma.EvolutionChainsWhereUniqueInput;
    /**
     * In case the EvolutionChains found by the `where` argument doesn't exist, create a new EvolutionChains with this data.
     */
    create: Prisma.XOR<Prisma.EvolutionChainsCreateInput, Prisma.EvolutionChainsUncheckedCreateInput>;
    /**
     * In case the EvolutionChains was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EvolutionChainsUpdateInput, Prisma.EvolutionChainsUncheckedUpdateInput>;
};
/**
 * EvolutionChains delete
 */
export type EvolutionChainsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
    /**
     * Filter which EvolutionChains to delete.
     */
    where: Prisma.EvolutionChainsWhereUniqueInput;
};
/**
 * EvolutionChains deleteMany
 */
export type EvolutionChainsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EvolutionChains to delete
     */
    where?: Prisma.EvolutionChainsWhereInput;
    /**
     * Limit how many EvolutionChains to delete.
     */
    limit?: number;
};
/**
 * EvolutionChains.babyTriggerItem
 */
export type EvolutionChains$babyTriggerItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: Prisma.ItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Items
     */
    omit?: Prisma.ItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ItemsInclude<ExtArgs> | null;
    where?: Prisma.ItemsWhereInput;
};
/**
 * EvolutionChains.species
 */
export type EvolutionChains$speciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: Prisma.PokemonSpeciesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: Prisma.PokemonSpeciesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonSpeciesInclude<ExtArgs> | null;
    where?: Prisma.PokemonSpeciesWhereInput;
    orderBy?: Prisma.PokemonSpeciesOrderByWithRelationInput | Prisma.PokemonSpeciesOrderByWithRelationInput[];
    cursor?: Prisma.PokemonSpeciesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonSpeciesScalarFieldEnum | Prisma.PokemonSpeciesScalarFieldEnum[];
};
/**
 * EvolutionChains without action
 */
export type EvolutionChainsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionChains
     */
    select?: Prisma.EvolutionChainsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionChains
     */
    omit?: Prisma.EvolutionChainsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionChainsInclude<ExtArgs> | null;
};
