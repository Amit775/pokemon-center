import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PokemonItems
 * @@TypeGraphQL.type(name: "PokemonItem")
 */
export type PokemonItemsModel = runtime.Types.Result.DefaultSelection<Prisma.$PokemonItemsPayload>;
export type AggregatePokemonItems = {
    _count: PokemonItemsCountAggregateOutputType | null;
    _avg: PokemonItemsAvgAggregateOutputType | null;
    _sum: PokemonItemsSumAggregateOutputType | null;
    _min: PokemonItemsMinAggregateOutputType | null;
    _max: PokemonItemsMaxAggregateOutputType | null;
};
export type PokemonItemsAvgAggregateOutputType = {
    pokemon_id: number | null;
    version_id: number | null;
    item_id: number | null;
    rarity: number | null;
};
export type PokemonItemsSumAggregateOutputType = {
    pokemon_id: number | null;
    version_id: number | null;
    item_id: number | null;
    rarity: number | null;
};
export type PokemonItemsMinAggregateOutputType = {
    pokemon_id: number | null;
    version_id: number | null;
    item_id: number | null;
    rarity: number | null;
};
export type PokemonItemsMaxAggregateOutputType = {
    pokemon_id: number | null;
    version_id: number | null;
    item_id: number | null;
    rarity: number | null;
};
export type PokemonItemsCountAggregateOutputType = {
    pokemon_id: number;
    version_id: number;
    item_id: number;
    rarity: number;
    _all: number;
};
export type PokemonItemsAvgAggregateInputType = {
    pokemon_id?: true;
    version_id?: true;
    item_id?: true;
    rarity?: true;
};
export type PokemonItemsSumAggregateInputType = {
    pokemon_id?: true;
    version_id?: true;
    item_id?: true;
    rarity?: true;
};
export type PokemonItemsMinAggregateInputType = {
    pokemon_id?: true;
    version_id?: true;
    item_id?: true;
    rarity?: true;
};
export type PokemonItemsMaxAggregateInputType = {
    pokemon_id?: true;
    version_id?: true;
    item_id?: true;
    rarity?: true;
};
export type PokemonItemsCountAggregateInputType = {
    pokemon_id?: true;
    version_id?: true;
    item_id?: true;
    rarity?: true;
    _all?: true;
};
export type PokemonItemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonItems to aggregate.
     */
    where?: Prisma.PokemonItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonItems to fetch.
     */
    orderBy?: Prisma.PokemonItemsOrderByWithRelationInput | Prisma.PokemonItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PokemonItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PokemonItems
    **/
    _count?: true | PokemonItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PokemonItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PokemonItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PokemonItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PokemonItemsMaxAggregateInputType;
};
export type GetPokemonItemsAggregateType<T extends PokemonItemsAggregateArgs> = {
    [P in keyof T & keyof AggregatePokemonItems]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePokemonItems[P]> : Prisma.GetScalarType<T[P], AggregatePokemonItems[P]>;
};
export type PokemonItemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonItemsWhereInput;
    orderBy?: Prisma.PokemonItemsOrderByWithAggregationInput | Prisma.PokemonItemsOrderByWithAggregationInput[];
    by: Prisma.PokemonItemsScalarFieldEnum[] | Prisma.PokemonItemsScalarFieldEnum;
    having?: Prisma.PokemonItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PokemonItemsCountAggregateInputType | true;
    _avg?: PokemonItemsAvgAggregateInputType;
    _sum?: PokemonItemsSumAggregateInputType;
    _min?: PokemonItemsMinAggregateInputType;
    _max?: PokemonItemsMaxAggregateInputType;
};
export type PokemonItemsGroupByOutputType = {
    pokemon_id: number;
    version_id: number;
    item_id: number;
    rarity: number;
    _count: PokemonItemsCountAggregateOutputType | null;
    _avg: PokemonItemsAvgAggregateOutputType | null;
    _sum: PokemonItemsSumAggregateOutputType | null;
    _min: PokemonItemsMinAggregateOutputType | null;
    _max: PokemonItemsMaxAggregateOutputType | null;
};
export type GetPokemonItemsGroupByPayload<T extends PokemonItemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PokemonItemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PokemonItemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PokemonItemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PokemonItemsGroupByOutputType[P]>;
}>>;
export type PokemonItemsWhereInput = {
    AND?: Prisma.PokemonItemsWhereInput | Prisma.PokemonItemsWhereInput[];
    OR?: Prisma.PokemonItemsWhereInput[];
    NOT?: Prisma.PokemonItemsWhereInput | Prisma.PokemonItemsWhereInput[];
    pokemon_id?: Prisma.IntFilter<"PokemonItems"> | number;
    version_id?: Prisma.IntFilter<"PokemonItems"> | number;
    item_id?: Prisma.IntFilter<"PokemonItems"> | number;
    rarity?: Prisma.IntFilter<"PokemonItems"> | number;
    pokemon?: Prisma.XOR<Prisma.PokemonScalarRelationFilter, Prisma.PokemonWhereInput>;
    version?: Prisma.XOR<Prisma.VersionsScalarRelationFilter, Prisma.VersionsWhereInput>;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
};
export type PokemonItemsOrderByWithRelationInput = {
    pokemon_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
    pokemon?: Prisma.PokemonOrderByWithRelationInput;
    version?: Prisma.VersionsOrderByWithRelationInput;
    item?: Prisma.ItemsOrderByWithRelationInput;
};
export type PokemonItemsWhereUniqueInput = Prisma.AtLeast<{
    pokemon_id_version_id_item_id?: Prisma.PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput;
    AND?: Prisma.PokemonItemsWhereInput | Prisma.PokemonItemsWhereInput[];
    OR?: Prisma.PokemonItemsWhereInput[];
    NOT?: Prisma.PokemonItemsWhereInput | Prisma.PokemonItemsWhereInput[];
    pokemon_id?: Prisma.IntFilter<"PokemonItems"> | number;
    version_id?: Prisma.IntFilter<"PokemonItems"> | number;
    item_id?: Prisma.IntFilter<"PokemonItems"> | number;
    rarity?: Prisma.IntFilter<"PokemonItems"> | number;
    pokemon?: Prisma.XOR<Prisma.PokemonScalarRelationFilter, Prisma.PokemonWhereInput>;
    version?: Prisma.XOR<Prisma.VersionsScalarRelationFilter, Prisma.VersionsWhereInput>;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
}, "pokemon_id_version_id_item_id">;
export type PokemonItemsOrderByWithAggregationInput = {
    pokemon_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
    _count?: Prisma.PokemonItemsCountOrderByAggregateInput;
    _avg?: Prisma.PokemonItemsAvgOrderByAggregateInput;
    _max?: Prisma.PokemonItemsMaxOrderByAggregateInput;
    _min?: Prisma.PokemonItemsMinOrderByAggregateInput;
    _sum?: Prisma.PokemonItemsSumOrderByAggregateInput;
};
export type PokemonItemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PokemonItemsScalarWhereWithAggregatesInput | Prisma.PokemonItemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PokemonItemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PokemonItemsScalarWhereWithAggregatesInput | Prisma.PokemonItemsScalarWhereWithAggregatesInput[];
    pokemon_id?: Prisma.IntWithAggregatesFilter<"PokemonItems"> | number;
    version_id?: Prisma.IntWithAggregatesFilter<"PokemonItems"> | number;
    item_id?: Prisma.IntWithAggregatesFilter<"PokemonItems"> | number;
    rarity?: Prisma.IntWithAggregatesFilter<"PokemonItems"> | number;
};
export type PokemonItemsCreateInput = {
    rarity: number;
    pokemon: Prisma.PokemonCreateNestedOneWithoutItemsInput;
    version: Prisma.VersionsCreateNestedOneWithoutPokemonItemsInput;
    item: Prisma.ItemsCreateNestedOneWithoutPokemonItemsInput;
};
export type PokemonItemsUncheckedCreateInput = {
    pokemon_id: number;
    version_id: number;
    item_id: number;
    rarity: number;
};
export type PokemonItemsUpdateInput = {
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
    pokemon?: Prisma.PokemonUpdateOneRequiredWithoutItemsNestedInput;
    version?: Prisma.VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput;
    item?: Prisma.ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput;
};
export type PokemonItemsUncheckedUpdateInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsCreateManyInput = {
    pokemon_id: number;
    version_id: number;
    item_id: number;
    rarity: number;
};
export type PokemonItemsUpdateManyMutationInput = {
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsUncheckedUpdateManyInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsListRelationFilter = {
    every?: Prisma.PokemonItemsWhereInput;
    some?: Prisma.PokemonItemsWhereInput;
    none?: Prisma.PokemonItemsWhereInput;
};
export type PokemonItemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PokemonItemsPokemon_idVersion_idItem_idCompoundUniqueInput = {
    pokemon_id: number;
    version_id: number;
    item_id: number;
};
export type PokemonItemsCountOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
};
export type PokemonItemsAvgOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
};
export type PokemonItemsMaxOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
};
export type PokemonItemsMinOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
};
export type PokemonItemsSumOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    rarity?: Prisma.SortOrder;
};
export type PokemonItemsCreateNestedManyWithoutPokemonInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutPokemonInput, Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput> | Prisma.PokemonItemsCreateWithoutPokemonInput[] | Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput | Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput[];
    createMany?: Prisma.PokemonItemsCreateManyPokemonInputEnvelope;
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
};
export type PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutPokemonInput, Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput> | Prisma.PokemonItemsCreateWithoutPokemonInput[] | Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput | Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput[];
    createMany?: Prisma.PokemonItemsCreateManyPokemonInputEnvelope;
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
};
export type PokemonItemsUpdateManyWithoutPokemonNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutPokemonInput, Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput> | Prisma.PokemonItemsCreateWithoutPokemonInput[] | Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput | Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput[];
    upsert?: Prisma.PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput | Prisma.PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput[];
    createMany?: Prisma.PokemonItemsCreateManyPokemonInputEnvelope;
    set?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    disconnect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    delete?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    update?: Prisma.PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput | Prisma.PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput[];
    updateMany?: Prisma.PokemonItemsUpdateManyWithWhereWithoutPokemonInput | Prisma.PokemonItemsUpdateManyWithWhereWithoutPokemonInput[];
    deleteMany?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
};
export type PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutPokemonInput, Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput> | Prisma.PokemonItemsCreateWithoutPokemonInput[] | Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput | Prisma.PokemonItemsCreateOrConnectWithoutPokemonInput[];
    upsert?: Prisma.PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput | Prisma.PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput[];
    createMany?: Prisma.PokemonItemsCreateManyPokemonInputEnvelope;
    set?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    disconnect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    delete?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    update?: Prisma.PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput | Prisma.PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput[];
    updateMany?: Prisma.PokemonItemsUpdateManyWithWhereWithoutPokemonInput | Prisma.PokemonItemsUpdateManyWithWhereWithoutPokemonInput[];
    deleteMany?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
};
export type PokemonItemsCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutItemInput, Prisma.PokemonItemsUncheckedCreateWithoutItemInput> | Prisma.PokemonItemsCreateWithoutItemInput[] | Prisma.PokemonItemsUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutItemInput | Prisma.PokemonItemsCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.PokemonItemsCreateManyItemInputEnvelope;
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
};
export type PokemonItemsUncheckedCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutItemInput, Prisma.PokemonItemsUncheckedCreateWithoutItemInput> | Prisma.PokemonItemsCreateWithoutItemInput[] | Prisma.PokemonItemsUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutItemInput | Prisma.PokemonItemsCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.PokemonItemsCreateManyItemInputEnvelope;
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
};
export type PokemonItemsUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutItemInput, Prisma.PokemonItemsUncheckedCreateWithoutItemInput> | Prisma.PokemonItemsCreateWithoutItemInput[] | Prisma.PokemonItemsUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutItemInput | Prisma.PokemonItemsCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.PokemonItemsUpsertWithWhereUniqueWithoutItemInput | Prisma.PokemonItemsUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.PokemonItemsCreateManyItemInputEnvelope;
    set?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    disconnect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    delete?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    update?: Prisma.PokemonItemsUpdateWithWhereUniqueWithoutItemInput | Prisma.PokemonItemsUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.PokemonItemsUpdateManyWithWhereWithoutItemInput | Prisma.PokemonItemsUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
};
export type PokemonItemsUncheckedUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutItemInput, Prisma.PokemonItemsUncheckedCreateWithoutItemInput> | Prisma.PokemonItemsCreateWithoutItemInput[] | Prisma.PokemonItemsUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutItemInput | Prisma.PokemonItemsCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.PokemonItemsUpsertWithWhereUniqueWithoutItemInput | Prisma.PokemonItemsUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.PokemonItemsCreateManyItemInputEnvelope;
    set?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    disconnect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    delete?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    update?: Prisma.PokemonItemsUpdateWithWhereUniqueWithoutItemInput | Prisma.PokemonItemsUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.PokemonItemsUpdateManyWithWhereWithoutItemInput | Prisma.PokemonItemsUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
};
export type PokemonItemsCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutVersionInput, Prisma.PokemonItemsUncheckedCreateWithoutVersionInput> | Prisma.PokemonItemsCreateWithoutVersionInput[] | Prisma.PokemonItemsUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutVersionInput | Prisma.PokemonItemsCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.PokemonItemsCreateManyVersionInputEnvelope;
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
};
export type PokemonItemsUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutVersionInput, Prisma.PokemonItemsUncheckedCreateWithoutVersionInput> | Prisma.PokemonItemsCreateWithoutVersionInput[] | Prisma.PokemonItemsUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutVersionInput | Prisma.PokemonItemsCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.PokemonItemsCreateManyVersionInputEnvelope;
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
};
export type PokemonItemsUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutVersionInput, Prisma.PokemonItemsUncheckedCreateWithoutVersionInput> | Prisma.PokemonItemsCreateWithoutVersionInput[] | Prisma.PokemonItemsUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutVersionInput | Prisma.PokemonItemsCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.PokemonItemsUpsertWithWhereUniqueWithoutVersionInput | Prisma.PokemonItemsUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.PokemonItemsCreateManyVersionInputEnvelope;
    set?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    disconnect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    delete?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    update?: Prisma.PokemonItemsUpdateWithWhereUniqueWithoutVersionInput | Prisma.PokemonItemsUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.PokemonItemsUpdateManyWithWhereWithoutVersionInput | Prisma.PokemonItemsUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
};
export type PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonItemsCreateWithoutVersionInput, Prisma.PokemonItemsUncheckedCreateWithoutVersionInput> | Prisma.PokemonItemsCreateWithoutVersionInput[] | Prisma.PokemonItemsUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PokemonItemsCreateOrConnectWithoutVersionInput | Prisma.PokemonItemsCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.PokemonItemsUpsertWithWhereUniqueWithoutVersionInput | Prisma.PokemonItemsUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.PokemonItemsCreateManyVersionInputEnvelope;
    set?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    disconnect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    delete?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    connect?: Prisma.PokemonItemsWhereUniqueInput | Prisma.PokemonItemsWhereUniqueInput[];
    update?: Prisma.PokemonItemsUpdateWithWhereUniqueWithoutVersionInput | Prisma.PokemonItemsUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.PokemonItemsUpdateManyWithWhereWithoutVersionInput | Prisma.PokemonItemsUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
};
export type PokemonItemsCreateWithoutPokemonInput = {
    rarity: number;
    version: Prisma.VersionsCreateNestedOneWithoutPokemonItemsInput;
    item: Prisma.ItemsCreateNestedOneWithoutPokemonItemsInput;
};
export type PokemonItemsUncheckedCreateWithoutPokemonInput = {
    version_id: number;
    item_id: number;
    rarity: number;
};
export type PokemonItemsCreateOrConnectWithoutPokemonInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonItemsCreateWithoutPokemonInput, Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput>;
};
export type PokemonItemsCreateManyPokemonInputEnvelope = {
    data: Prisma.PokemonItemsCreateManyPokemonInput | Prisma.PokemonItemsCreateManyPokemonInput[];
    skipDuplicates?: boolean;
};
export type PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonItemsUpdateWithoutPokemonInput, Prisma.PokemonItemsUncheckedUpdateWithoutPokemonInput>;
    create: Prisma.XOR<Prisma.PokemonItemsCreateWithoutPokemonInput, Prisma.PokemonItemsUncheckedCreateWithoutPokemonInput>;
};
export type PokemonItemsUpdateWithWhereUniqueWithoutPokemonInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonItemsUpdateWithoutPokemonInput, Prisma.PokemonItemsUncheckedUpdateWithoutPokemonInput>;
};
export type PokemonItemsUpdateManyWithWhereWithoutPokemonInput = {
    where: Prisma.PokemonItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonItemsUpdateManyMutationInput, Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonInput>;
};
export type PokemonItemsScalarWhereInput = {
    AND?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
    OR?: Prisma.PokemonItemsScalarWhereInput[];
    NOT?: Prisma.PokemonItemsScalarWhereInput | Prisma.PokemonItemsScalarWhereInput[];
    pokemon_id?: Prisma.IntFilter<"PokemonItems"> | number;
    version_id?: Prisma.IntFilter<"PokemonItems"> | number;
    item_id?: Prisma.IntFilter<"PokemonItems"> | number;
    rarity?: Prisma.IntFilter<"PokemonItems"> | number;
};
export type PokemonItemsCreateWithoutItemInput = {
    rarity: number;
    pokemon: Prisma.PokemonCreateNestedOneWithoutItemsInput;
    version: Prisma.VersionsCreateNestedOneWithoutPokemonItemsInput;
};
export type PokemonItemsUncheckedCreateWithoutItemInput = {
    pokemon_id: number;
    version_id: number;
    rarity: number;
};
export type PokemonItemsCreateOrConnectWithoutItemInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonItemsCreateWithoutItemInput, Prisma.PokemonItemsUncheckedCreateWithoutItemInput>;
};
export type PokemonItemsCreateManyItemInputEnvelope = {
    data: Prisma.PokemonItemsCreateManyItemInput | Prisma.PokemonItemsCreateManyItemInput[];
    skipDuplicates?: boolean;
};
export type PokemonItemsUpsertWithWhereUniqueWithoutItemInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonItemsUpdateWithoutItemInput, Prisma.PokemonItemsUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.PokemonItemsCreateWithoutItemInput, Prisma.PokemonItemsUncheckedCreateWithoutItemInput>;
};
export type PokemonItemsUpdateWithWhereUniqueWithoutItemInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonItemsUpdateWithoutItemInput, Prisma.PokemonItemsUncheckedUpdateWithoutItemInput>;
};
export type PokemonItemsUpdateManyWithWhereWithoutItemInput = {
    where: Prisma.PokemonItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonItemsUpdateManyMutationInput, Prisma.PokemonItemsUncheckedUpdateManyWithoutItemInput>;
};
export type PokemonItemsCreateWithoutVersionInput = {
    rarity: number;
    pokemon: Prisma.PokemonCreateNestedOneWithoutItemsInput;
    item: Prisma.ItemsCreateNestedOneWithoutPokemonItemsInput;
};
export type PokemonItemsUncheckedCreateWithoutVersionInput = {
    pokemon_id: number;
    item_id: number;
    rarity: number;
};
export type PokemonItemsCreateOrConnectWithoutVersionInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonItemsCreateWithoutVersionInput, Prisma.PokemonItemsUncheckedCreateWithoutVersionInput>;
};
export type PokemonItemsCreateManyVersionInputEnvelope = {
    data: Prisma.PokemonItemsCreateManyVersionInput | Prisma.PokemonItemsCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type PokemonItemsUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonItemsUpdateWithoutVersionInput, Prisma.PokemonItemsUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.PokemonItemsCreateWithoutVersionInput, Prisma.PokemonItemsUncheckedCreateWithoutVersionInput>;
};
export type PokemonItemsUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.PokemonItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonItemsUpdateWithoutVersionInput, Prisma.PokemonItemsUncheckedUpdateWithoutVersionInput>;
};
export type PokemonItemsUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.PokemonItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonItemsUpdateManyMutationInput, Prisma.PokemonItemsUncheckedUpdateManyWithoutVersionInput>;
};
export type PokemonItemsCreateManyPokemonInput = {
    version_id: number;
    item_id: number;
    rarity: number;
};
export type PokemonItemsUpdateWithoutPokemonInput = {
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput;
    item?: Prisma.ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput;
};
export type PokemonItemsUncheckedUpdateWithoutPokemonInput = {
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsUncheckedUpdateManyWithoutPokemonInput = {
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsCreateManyItemInput = {
    pokemon_id: number;
    version_id: number;
    rarity: number;
};
export type PokemonItemsUpdateWithoutItemInput = {
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
    pokemon?: Prisma.PokemonUpdateOneRequiredWithoutItemsNestedInput;
    version?: Prisma.VersionsUpdateOneRequiredWithoutPokemonItemsNestedInput;
};
export type PokemonItemsUncheckedUpdateWithoutItemInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsUncheckedUpdateManyWithoutItemInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsCreateManyVersionInput = {
    pokemon_id: number;
    item_id: number;
    rarity: number;
};
export type PokemonItemsUpdateWithoutVersionInput = {
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
    pokemon?: Prisma.PokemonUpdateOneRequiredWithoutItemsNestedInput;
    item?: Prisma.ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput;
};
export type PokemonItemsUncheckedUpdateWithoutVersionInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsUncheckedUpdateManyWithoutVersionInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rarity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonItemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_id?: boolean;
    version_id?: boolean;
    item_id?: boolean;
    rarity?: boolean;
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonItems"]>;
export type PokemonItemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_id?: boolean;
    version_id?: boolean;
    item_id?: boolean;
    rarity?: boolean;
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonItems"]>;
export type PokemonItemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_id?: boolean;
    version_id?: boolean;
    item_id?: boolean;
    rarity?: boolean;
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonItems"]>;
export type PokemonItemsSelectScalar = {
    pokemon_id?: boolean;
    version_id?: boolean;
    item_id?: boolean;
    rarity?: boolean;
};
export type PokemonItemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"pokemon_id" | "version_id" | "item_id" | "rarity", ExtArgs["result"]["pokemonItems"]>;
export type PokemonItemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
};
export type PokemonItemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
};
export type PokemonItemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
};
export type $PokemonItemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PokemonItems";
    objects: {
        pokemon: Prisma.$PokemonPayload<ExtArgs>;
        version: Prisma.$VersionsPayload<ExtArgs>;
        item: Prisma.$ItemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        pokemon_id: number;
        version_id: number;
        item_id: number;
        rarity: number;
    }, ExtArgs["result"]["pokemonItems"]>;
    composites: {};
};
export type PokemonItemsGetPayload<S extends boolean | null | undefined | PokemonItemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload, S>;
export type PokemonItemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PokemonItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PokemonItemsCountAggregateInputType | true;
};
export interface PokemonItemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PokemonItems'];
        meta: {
            name: 'PokemonItems';
        };
    };
    /**
     * Find zero or one PokemonItems that matches the filter.
     * @param {PokemonItemsFindUniqueArgs} args - Arguments to find a PokemonItems
     * @example
     * // Get one PokemonItems
     * const pokemonItems = await prisma.pokemonItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonItemsFindUniqueArgs>(args: Prisma.SelectSubset<T, PokemonItemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PokemonItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonItemsFindUniqueOrThrowArgs} args - Arguments to find a PokemonItems
     * @example
     * // Get one PokemonItems
     * const pokemonItems = await prisma.pokemonItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonItemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PokemonItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonItemsFindFirstArgs} args - Arguments to find a PokemonItems
     * @example
     * // Get one PokemonItems
     * const pokemonItems = await prisma.pokemonItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonItemsFindFirstArgs>(args?: Prisma.SelectSubset<T, PokemonItemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonItemsFindFirstOrThrowArgs} args - Arguments to find a PokemonItems
     * @example
     * // Get one PokemonItems
     * const pokemonItems = await prisma.pokemonItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonItemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PokemonItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PokemonItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonItems
     * const pokemonItems = await prisma.pokemonItems.findMany()
     *
     * // Get first 10 PokemonItems
     * const pokemonItems = await prisma.pokemonItems.findMany({ take: 10 })
     *
     * // Only select the `pokemon_id`
     * const pokemonItemsWithPokemon_idOnly = await prisma.pokemonItems.findMany({ select: { pokemon_id: true } })
     *
     */
    findMany<T extends PokemonItemsFindManyArgs>(args?: Prisma.SelectSubset<T, PokemonItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PokemonItems.
     * @param {PokemonItemsCreateArgs} args - Arguments to create a PokemonItems.
     * @example
     * // Create one PokemonItems
     * const PokemonItems = await prisma.pokemonItems.create({
     *   data: {
     *     // ... data to create a PokemonItems
     *   }
     * })
     *
     */
    create<T extends PokemonItemsCreateArgs>(args: Prisma.SelectSubset<T, PokemonItemsCreateArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PokemonItems.
     * @param {PokemonItemsCreateManyArgs} args - Arguments to create many PokemonItems.
     * @example
     * // Create many PokemonItems
     * const pokemonItems = await prisma.pokemonItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PokemonItemsCreateManyArgs>(args?: Prisma.SelectSubset<T, PokemonItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PokemonItems and returns the data saved in the database.
     * @param {PokemonItemsCreateManyAndReturnArgs} args - Arguments to create many PokemonItems.
     * @example
     * // Create many PokemonItems
     * const pokemonItems = await prisma.pokemonItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PokemonItems and only return the `pokemon_id`
     * const pokemonItemsWithPokemon_idOnly = await prisma.pokemonItems.createManyAndReturn({
     *   select: { pokemon_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PokemonItemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PokemonItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PokemonItems.
     * @param {PokemonItemsDeleteArgs} args - Arguments to delete one PokemonItems.
     * @example
     * // Delete one PokemonItems
     * const PokemonItems = await prisma.pokemonItems.delete({
     *   where: {
     *     // ... filter to delete one PokemonItems
     *   }
     * })
     *
     */
    delete<T extends PokemonItemsDeleteArgs>(args: Prisma.SelectSubset<T, PokemonItemsDeleteArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PokemonItems.
     * @param {PokemonItemsUpdateArgs} args - Arguments to update one PokemonItems.
     * @example
     * // Update one PokemonItems
     * const pokemonItems = await prisma.pokemonItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PokemonItemsUpdateArgs>(args: Prisma.SelectSubset<T, PokemonItemsUpdateArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PokemonItems.
     * @param {PokemonItemsDeleteManyArgs} args - Arguments to filter PokemonItems to delete.
     * @example
     * // Delete a few PokemonItems
     * const { count } = await prisma.pokemonItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PokemonItemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PokemonItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonItems
     * const pokemonItems = await prisma.pokemonItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PokemonItemsUpdateManyArgs>(args: Prisma.SelectSubset<T, PokemonItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonItems and returns the data updated in the database.
     * @param {PokemonItemsUpdateManyAndReturnArgs} args - Arguments to update many PokemonItems.
     * @example
     * // Update many PokemonItems
     * const pokemonItems = await prisma.pokemonItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PokemonItems and only return the `pokemon_id`
     * const pokemonItemsWithPokemon_idOnly = await prisma.pokemonItems.updateManyAndReturn({
     *   select: { pokemon_id: true },
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
    updateManyAndReturn<T extends PokemonItemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PokemonItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PokemonItems.
     * @param {PokemonItemsUpsertArgs} args - Arguments to update or create a PokemonItems.
     * @example
     * // Update or create a PokemonItems
     * const pokemonItems = await prisma.pokemonItems.upsert({
     *   create: {
     *     // ... data to create a PokemonItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonItems we want to update
     *   }
     * })
     */
    upsert<T extends PokemonItemsUpsertArgs>(args: Prisma.SelectSubset<T, PokemonItemsUpsertArgs<ExtArgs>>): Prisma.Prisma__PokemonItemsClient<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PokemonItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonItemsCountArgs} args - Arguments to filter PokemonItems to count.
     * @example
     * // Count the number of PokemonItems
     * const count = await prisma.pokemonItems.count({
     *   where: {
     *     // ... the filter for the PokemonItems we want to count
     *   }
     * })
    **/
    count<T extends PokemonItemsCountArgs>(args?: Prisma.Subset<T, PokemonItemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PokemonItemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PokemonItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonItemsAggregateArgs>(args: Prisma.Subset<T, PokemonItemsAggregateArgs>): Prisma.PrismaPromise<GetPokemonItemsAggregateType<T>>;
    /**
     * Group by PokemonItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonItemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PokemonItemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PokemonItemsGroupByArgs['orderBy'];
    } : {
        orderBy?: PokemonItemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PokemonItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PokemonItems model
     */
    readonly fields: PokemonItemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PokemonItems.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PokemonItemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pokemon<T extends Prisma.PokemonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonDefaultArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    version<T extends Prisma.VersionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionsDefaultArgs<ExtArgs>>): Prisma.Prisma__VersionsClient<runtime.Types.Result.GetResult<Prisma.$VersionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    item<T extends Prisma.ItemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemsDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemsClient<runtime.Types.Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PokemonItems model
 */
export interface PokemonItemsFieldRefs {
    readonly pokemon_id: Prisma.FieldRef<"PokemonItems", 'Int'>;
    readonly version_id: Prisma.FieldRef<"PokemonItems", 'Int'>;
    readonly item_id: Prisma.FieldRef<"PokemonItems", 'Int'>;
    readonly rarity: Prisma.FieldRef<"PokemonItems", 'Int'>;
}
/**
 * PokemonItems findUnique
 */
export type PokemonItemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonItems to fetch.
     */
    where: Prisma.PokemonItemsWhereUniqueInput;
};
/**
 * PokemonItems findUniqueOrThrow
 */
export type PokemonItemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonItems to fetch.
     */
    where: Prisma.PokemonItemsWhereUniqueInput;
};
/**
 * PokemonItems findFirst
 */
export type PokemonItemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonItems to fetch.
     */
    where?: Prisma.PokemonItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonItems to fetch.
     */
    orderBy?: Prisma.PokemonItemsOrderByWithRelationInput | Prisma.PokemonItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonItems.
     */
    cursor?: Prisma.PokemonItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonItems.
     */
    distinct?: Prisma.PokemonItemsScalarFieldEnum | Prisma.PokemonItemsScalarFieldEnum[];
};
/**
 * PokemonItems findFirstOrThrow
 */
export type PokemonItemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonItems to fetch.
     */
    where?: Prisma.PokemonItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonItems to fetch.
     */
    orderBy?: Prisma.PokemonItemsOrderByWithRelationInput | Prisma.PokemonItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonItems.
     */
    cursor?: Prisma.PokemonItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonItems.
     */
    distinct?: Prisma.PokemonItemsScalarFieldEnum | Prisma.PokemonItemsScalarFieldEnum[];
};
/**
 * PokemonItems findMany
 */
export type PokemonItemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonItems to fetch.
     */
    where?: Prisma.PokemonItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonItems to fetch.
     */
    orderBy?: Prisma.PokemonItemsOrderByWithRelationInput | Prisma.PokemonItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PokemonItems.
     */
    cursor?: Prisma.PokemonItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonItems.
     */
    distinct?: Prisma.PokemonItemsScalarFieldEnum | Prisma.PokemonItemsScalarFieldEnum[];
};
/**
 * PokemonItems create
 */
export type PokemonItemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a PokemonItems.
     */
    data: Prisma.XOR<Prisma.PokemonItemsCreateInput, Prisma.PokemonItemsUncheckedCreateInput>;
};
/**
 * PokemonItems createMany
 */
export type PokemonItemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonItems.
     */
    data: Prisma.PokemonItemsCreateManyInput | Prisma.PokemonItemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PokemonItems createManyAndReturn
 */
export type PokemonItemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * The data used to create many PokemonItems.
     */
    data: Prisma.PokemonItemsCreateManyInput | Prisma.PokemonItemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonItems update
 */
export type PokemonItemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a PokemonItems.
     */
    data: Prisma.XOR<Prisma.PokemonItemsUpdateInput, Prisma.PokemonItemsUncheckedUpdateInput>;
    /**
     * Choose, which PokemonItems to update.
     */
    where: Prisma.PokemonItemsWhereUniqueInput;
};
/**
 * PokemonItems updateMany
 */
export type PokemonItemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonItems.
     */
    data: Prisma.XOR<Prisma.PokemonItemsUpdateManyMutationInput, Prisma.PokemonItemsUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonItems to update
     */
    where?: Prisma.PokemonItemsWhereInput;
    /**
     * Limit how many PokemonItems to update.
     */
    limit?: number;
};
/**
 * PokemonItems updateManyAndReturn
 */
export type PokemonItemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * The data used to update PokemonItems.
     */
    data: Prisma.XOR<Prisma.PokemonItemsUpdateManyMutationInput, Prisma.PokemonItemsUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonItems to update
     */
    where?: Prisma.PokemonItemsWhereInput;
    /**
     * Limit how many PokemonItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonItems upsert
 */
export type PokemonItemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the PokemonItems to update in case it exists.
     */
    where: Prisma.PokemonItemsWhereUniqueInput;
    /**
     * In case the PokemonItems found by the `where` argument doesn't exist, create a new PokemonItems with this data.
     */
    create: Prisma.XOR<Prisma.PokemonItemsCreateInput, Prisma.PokemonItemsUncheckedCreateInput>;
    /**
     * In case the PokemonItems was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PokemonItemsUpdateInput, Prisma.PokemonItemsUncheckedUpdateInput>;
};
/**
 * PokemonItems delete
 */
export type PokemonItemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
    /**
     * Filter which PokemonItems to delete.
     */
    where: Prisma.PokemonItemsWhereUniqueInput;
};
/**
 * PokemonItems deleteMany
 */
export type PokemonItemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonItems to delete
     */
    where?: Prisma.PokemonItemsWhereInput;
    /**
     * Limit how many PokemonItems to delete.
     */
    limit?: number;
};
/**
 * PokemonItems without action
 */
export type PokemonItemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonItems
     */
    select?: Prisma.PokemonItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonItems
     */
    omit?: Prisma.PokemonItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonItemsInclude<ExtArgs> | null;
};
