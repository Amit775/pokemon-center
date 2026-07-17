import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PokemonEggGroups
 * @@TypeGraphQL.type(name: "PokemonEggGroup")
 */
export type PokemonEggGroupsModel = runtime.Types.Result.DefaultSelection<Prisma.$PokemonEggGroupsPayload>;
export type AggregatePokemonEggGroups = {
    _count: PokemonEggGroupsCountAggregateOutputType | null;
    _avg: PokemonEggGroupsAvgAggregateOutputType | null;
    _sum: PokemonEggGroupsSumAggregateOutputType | null;
    _min: PokemonEggGroupsMinAggregateOutputType | null;
    _max: PokemonEggGroupsMaxAggregateOutputType | null;
};
export type PokemonEggGroupsAvgAggregateOutputType = {
    species_id: number | null;
    egg_group_id: number | null;
};
export type PokemonEggGroupsSumAggregateOutputType = {
    species_id: number | null;
    egg_group_id: number | null;
};
export type PokemonEggGroupsMinAggregateOutputType = {
    species_id: number | null;
    egg_group_id: number | null;
};
export type PokemonEggGroupsMaxAggregateOutputType = {
    species_id: number | null;
    egg_group_id: number | null;
};
export type PokemonEggGroupsCountAggregateOutputType = {
    species_id: number;
    egg_group_id: number;
    _all: number;
};
export type PokemonEggGroupsAvgAggregateInputType = {
    species_id?: true;
    egg_group_id?: true;
};
export type PokemonEggGroupsSumAggregateInputType = {
    species_id?: true;
    egg_group_id?: true;
};
export type PokemonEggGroupsMinAggregateInputType = {
    species_id?: true;
    egg_group_id?: true;
};
export type PokemonEggGroupsMaxAggregateInputType = {
    species_id?: true;
    egg_group_id?: true;
};
export type PokemonEggGroupsCountAggregateInputType = {
    species_id?: true;
    egg_group_id?: true;
    _all?: true;
};
export type PokemonEggGroupsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonEggGroups to aggregate.
     */
    where?: Prisma.PokemonEggGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEggGroups to fetch.
     */
    orderBy?: Prisma.PokemonEggGroupsOrderByWithRelationInput | Prisma.PokemonEggGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PokemonEggGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEggGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEggGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PokemonEggGroups
    **/
    _count?: true | PokemonEggGroupsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PokemonEggGroupsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PokemonEggGroupsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PokemonEggGroupsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PokemonEggGroupsMaxAggregateInputType;
};
export type GetPokemonEggGroupsAggregateType<T extends PokemonEggGroupsAggregateArgs> = {
    [P in keyof T & keyof AggregatePokemonEggGroups]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePokemonEggGroups[P]> : Prisma.GetScalarType<T[P], AggregatePokemonEggGroups[P]>;
};
export type PokemonEggGroupsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonEggGroupsWhereInput;
    orderBy?: Prisma.PokemonEggGroupsOrderByWithAggregationInput | Prisma.PokemonEggGroupsOrderByWithAggregationInput[];
    by: Prisma.PokemonEggGroupsScalarFieldEnum[] | Prisma.PokemonEggGroupsScalarFieldEnum;
    having?: Prisma.PokemonEggGroupsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PokemonEggGroupsCountAggregateInputType | true;
    _avg?: PokemonEggGroupsAvgAggregateInputType;
    _sum?: PokemonEggGroupsSumAggregateInputType;
    _min?: PokemonEggGroupsMinAggregateInputType;
    _max?: PokemonEggGroupsMaxAggregateInputType;
};
export type PokemonEggGroupsGroupByOutputType = {
    species_id: number;
    egg_group_id: number;
    _count: PokemonEggGroupsCountAggregateOutputType | null;
    _avg: PokemonEggGroupsAvgAggregateOutputType | null;
    _sum: PokemonEggGroupsSumAggregateOutputType | null;
    _min: PokemonEggGroupsMinAggregateOutputType | null;
    _max: PokemonEggGroupsMaxAggregateOutputType | null;
};
export type GetPokemonEggGroupsGroupByPayload<T extends PokemonEggGroupsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PokemonEggGroupsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PokemonEggGroupsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PokemonEggGroupsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PokemonEggGroupsGroupByOutputType[P]>;
}>>;
export type PokemonEggGroupsWhereInput = {
    AND?: Prisma.PokemonEggGroupsWhereInput | Prisma.PokemonEggGroupsWhereInput[];
    OR?: Prisma.PokemonEggGroupsWhereInput[];
    NOT?: Prisma.PokemonEggGroupsWhereInput | Prisma.PokemonEggGroupsWhereInput[];
    species_id?: Prisma.IntFilter<"PokemonEggGroups"> | number;
    egg_group_id?: Prisma.IntFilter<"PokemonEggGroups"> | number;
    species?: Prisma.XOR<Prisma.PokemonSpeciesScalarRelationFilter, Prisma.PokemonSpeciesWhereInput>;
    eggGroup?: Prisma.XOR<Prisma.EggGroupsScalarRelationFilter, Prisma.EggGroupsWhereInput>;
};
export type PokemonEggGroupsOrderByWithRelationInput = {
    species_id?: Prisma.SortOrder;
    egg_group_id?: Prisma.SortOrder;
    species?: Prisma.PokemonSpeciesOrderByWithRelationInput;
    eggGroup?: Prisma.EggGroupsOrderByWithRelationInput;
};
export type PokemonEggGroupsWhereUniqueInput = Prisma.AtLeast<{
    species_id_egg_group_id?: Prisma.PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput;
    AND?: Prisma.PokemonEggGroupsWhereInput | Prisma.PokemonEggGroupsWhereInput[];
    OR?: Prisma.PokemonEggGroupsWhereInput[];
    NOT?: Prisma.PokemonEggGroupsWhereInput | Prisma.PokemonEggGroupsWhereInput[];
    species_id?: Prisma.IntFilter<"PokemonEggGroups"> | number;
    egg_group_id?: Prisma.IntFilter<"PokemonEggGroups"> | number;
    species?: Prisma.XOR<Prisma.PokemonSpeciesScalarRelationFilter, Prisma.PokemonSpeciesWhereInput>;
    eggGroup?: Prisma.XOR<Prisma.EggGroupsScalarRelationFilter, Prisma.EggGroupsWhereInput>;
}, "species_id_egg_group_id">;
export type PokemonEggGroupsOrderByWithAggregationInput = {
    species_id?: Prisma.SortOrder;
    egg_group_id?: Prisma.SortOrder;
    _count?: Prisma.PokemonEggGroupsCountOrderByAggregateInput;
    _avg?: Prisma.PokemonEggGroupsAvgOrderByAggregateInput;
    _max?: Prisma.PokemonEggGroupsMaxOrderByAggregateInput;
    _min?: Prisma.PokemonEggGroupsMinOrderByAggregateInput;
    _sum?: Prisma.PokemonEggGroupsSumOrderByAggregateInput;
};
export type PokemonEggGroupsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PokemonEggGroupsScalarWhereWithAggregatesInput | Prisma.PokemonEggGroupsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PokemonEggGroupsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PokemonEggGroupsScalarWhereWithAggregatesInput | Prisma.PokemonEggGroupsScalarWhereWithAggregatesInput[];
    species_id?: Prisma.IntWithAggregatesFilter<"PokemonEggGroups"> | number;
    egg_group_id?: Prisma.IntWithAggregatesFilter<"PokemonEggGroups"> | number;
};
export type PokemonEggGroupsCreateInput = {
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutEggGroupsInput;
    eggGroup: Prisma.EggGroupsCreateNestedOneWithoutSpeciesInput;
};
export type PokemonEggGroupsUncheckedCreateInput = {
    species_id: number;
    egg_group_id: number;
};
export type PokemonEggGroupsUpdateInput = {
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput;
    eggGroup?: Prisma.EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput;
};
export type PokemonEggGroupsUncheckedUpdateInput = {
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    egg_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEggGroupsCreateManyInput = {
    species_id: number;
    egg_group_id: number;
};
export type PokemonEggGroupsUpdateManyMutationInput = {};
export type PokemonEggGroupsUncheckedUpdateManyInput = {
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    egg_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEggGroupsListRelationFilter = {
    every?: Prisma.PokemonEggGroupsWhereInput;
    some?: Prisma.PokemonEggGroupsWhereInput;
    none?: Prisma.PokemonEggGroupsWhereInput;
};
export type PokemonEggGroupsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput = {
    species_id: number;
    egg_group_id: number;
};
export type PokemonEggGroupsCountOrderByAggregateInput = {
    species_id?: Prisma.SortOrder;
    egg_group_id?: Prisma.SortOrder;
};
export type PokemonEggGroupsAvgOrderByAggregateInput = {
    species_id?: Prisma.SortOrder;
    egg_group_id?: Prisma.SortOrder;
};
export type PokemonEggGroupsMaxOrderByAggregateInput = {
    species_id?: Prisma.SortOrder;
    egg_group_id?: Prisma.SortOrder;
};
export type PokemonEggGroupsMinOrderByAggregateInput = {
    species_id?: Prisma.SortOrder;
    egg_group_id?: Prisma.SortOrder;
};
export type PokemonEggGroupsSumOrderByAggregateInput = {
    species_id?: Prisma.SortOrder;
    egg_group_id?: Prisma.SortOrder;
};
export type PokemonEggGroupsCreateNestedManyWithoutSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonEggGroupsCreateWithoutSpeciesInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManySpeciesInputEnvelope;
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
};
export type PokemonEggGroupsUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonEggGroupsCreateWithoutSpeciesInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManySpeciesInputEnvelope;
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
};
export type PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonEggGroupsCreateWithoutSpeciesInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput[];
    upsert?: Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManySpeciesInputEnvelope;
    set?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    disconnect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    delete?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    update?: Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput[];
    updateMany?: Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput | Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput[];
    deleteMany?: Prisma.PokemonEggGroupsScalarWhereInput | Prisma.PokemonEggGroupsScalarWhereInput[];
};
export type PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonEggGroupsCreateWithoutSpeciesInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutSpeciesInput[];
    upsert?: Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManySpeciesInputEnvelope;
    set?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    disconnect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    delete?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    update?: Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput[];
    updateMany?: Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput | Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput[];
    deleteMany?: Prisma.PokemonEggGroupsScalarWhereInput | Prisma.PokemonEggGroupsScalarWhereInput[];
};
export type PokemonEggGroupsCreateNestedManyWithoutEggGroupInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput> | Prisma.PokemonEggGroupsCreateWithoutEggGroupInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManyEggGroupInputEnvelope;
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
};
export type PokemonEggGroupsUncheckedCreateNestedManyWithoutEggGroupInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput> | Prisma.PokemonEggGroupsCreateWithoutEggGroupInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManyEggGroupInputEnvelope;
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
};
export type PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput> | Prisma.PokemonEggGroupsCreateWithoutEggGroupInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput[];
    upsert?: Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput | Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManyEggGroupInputEnvelope;
    set?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    disconnect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    delete?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    update?: Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput | Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput[];
    updateMany?: Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput | Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput[];
    deleteMany?: Prisma.PokemonEggGroupsScalarWhereInput | Prisma.PokemonEggGroupsScalarWhereInput[];
};
export type PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput> | Prisma.PokemonEggGroupsCreateWithoutEggGroupInput[] | Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput[];
    connectOrCreate?: Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput | Prisma.PokemonEggGroupsCreateOrConnectWithoutEggGroupInput[];
    upsert?: Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput | Prisma.PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput[];
    createMany?: Prisma.PokemonEggGroupsCreateManyEggGroupInputEnvelope;
    set?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    disconnect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    delete?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    connect?: Prisma.PokemonEggGroupsWhereUniqueInput | Prisma.PokemonEggGroupsWhereUniqueInput[];
    update?: Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput | Prisma.PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput[];
    updateMany?: Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput | Prisma.PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput[];
    deleteMany?: Prisma.PokemonEggGroupsScalarWhereInput | Prisma.PokemonEggGroupsScalarWhereInput[];
};
export type PokemonEggGroupsCreateWithoutSpeciesInput = {
    eggGroup: Prisma.EggGroupsCreateNestedOneWithoutSpeciesInput;
};
export type PokemonEggGroupsUncheckedCreateWithoutSpeciesInput = {
    egg_group_id: number;
};
export type PokemonEggGroupsCreateOrConnectWithoutSpeciesInput = {
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput>;
};
export type PokemonEggGroupsCreateManySpeciesInputEnvelope = {
    data: Prisma.PokemonEggGroupsCreateManySpeciesInput | Prisma.PokemonEggGroupsCreateManySpeciesInput[];
    skipDuplicates?: boolean;
};
export type PokemonEggGroupsUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEggGroupsUpdateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedUpdateWithoutSpeciesInput>;
    create: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutSpeciesInput>;
};
export type PokemonEggGroupsUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEggGroupsUpdateWithoutSpeciesInput, Prisma.PokemonEggGroupsUncheckedUpdateWithoutSpeciesInput>;
};
export type PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput = {
    where: Prisma.PokemonEggGroupsScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEggGroupsUpdateManyMutationInput, Prisma.PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesInput>;
};
export type PokemonEggGroupsScalarWhereInput = {
    AND?: Prisma.PokemonEggGroupsScalarWhereInput | Prisma.PokemonEggGroupsScalarWhereInput[];
    OR?: Prisma.PokemonEggGroupsScalarWhereInput[];
    NOT?: Prisma.PokemonEggGroupsScalarWhereInput | Prisma.PokemonEggGroupsScalarWhereInput[];
    species_id?: Prisma.IntFilter<"PokemonEggGroups"> | number;
    egg_group_id?: Prisma.IntFilter<"PokemonEggGroups"> | number;
};
export type PokemonEggGroupsCreateWithoutEggGroupInput = {
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutEggGroupsInput;
};
export type PokemonEggGroupsUncheckedCreateWithoutEggGroupInput = {
    species_id: number;
};
export type PokemonEggGroupsCreateOrConnectWithoutEggGroupInput = {
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput>;
};
export type PokemonEggGroupsCreateManyEggGroupInputEnvelope = {
    data: Prisma.PokemonEggGroupsCreateManyEggGroupInput | Prisma.PokemonEggGroupsCreateManyEggGroupInput[];
    skipDuplicates?: boolean;
};
export type PokemonEggGroupsUpsertWithWhereUniqueWithoutEggGroupInput = {
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEggGroupsUpdateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedUpdateWithoutEggGroupInput>;
    create: Prisma.XOR<Prisma.PokemonEggGroupsCreateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedCreateWithoutEggGroupInput>;
};
export type PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput = {
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEggGroupsUpdateWithoutEggGroupInput, Prisma.PokemonEggGroupsUncheckedUpdateWithoutEggGroupInput>;
};
export type PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput = {
    where: Prisma.PokemonEggGroupsScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEggGroupsUpdateManyMutationInput, Prisma.PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupInput>;
};
export type PokemonEggGroupsCreateManySpeciesInput = {
    egg_group_id: number;
};
export type PokemonEggGroupsUpdateWithoutSpeciesInput = {
    eggGroup?: Prisma.EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput;
};
export type PokemonEggGroupsUncheckedUpdateWithoutSpeciesInput = {
    egg_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesInput = {
    egg_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEggGroupsCreateManyEggGroupInput = {
    species_id: number;
};
export type PokemonEggGroupsUpdateWithoutEggGroupInput = {
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput;
};
export type PokemonEggGroupsUncheckedUpdateWithoutEggGroupInput = {
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupInput = {
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEggGroupsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    species_id?: boolean;
    egg_group_id?: boolean;
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    eggGroup?: boolean | Prisma.EggGroupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonEggGroups"]>;
export type PokemonEggGroupsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    species_id?: boolean;
    egg_group_id?: boolean;
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    eggGroup?: boolean | Prisma.EggGroupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonEggGroups"]>;
export type PokemonEggGroupsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    species_id?: boolean;
    egg_group_id?: boolean;
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    eggGroup?: boolean | Prisma.EggGroupsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonEggGroups"]>;
export type PokemonEggGroupsSelectScalar = {
    species_id?: boolean;
    egg_group_id?: boolean;
};
export type PokemonEggGroupsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"species_id" | "egg_group_id", ExtArgs["result"]["pokemonEggGroups"]>;
export type PokemonEggGroupsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    eggGroup?: boolean | Prisma.EggGroupsDefaultArgs<ExtArgs>;
};
export type PokemonEggGroupsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    eggGroup?: boolean | Prisma.EggGroupsDefaultArgs<ExtArgs>;
};
export type PokemonEggGroupsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    eggGroup?: boolean | Prisma.EggGroupsDefaultArgs<ExtArgs>;
};
export type $PokemonEggGroupsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PokemonEggGroups";
    objects: {
        species: Prisma.$PokemonSpeciesPayload<ExtArgs>;
        eggGroup: Prisma.$EggGroupsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        species_id: number;
        egg_group_id: number;
    }, ExtArgs["result"]["pokemonEggGroups"]>;
    composites: {};
};
export type PokemonEggGroupsGetPayload<S extends boolean | null | undefined | PokemonEggGroupsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload, S>;
export type PokemonEggGroupsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PokemonEggGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PokemonEggGroupsCountAggregateInputType | true;
};
export interface PokemonEggGroupsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PokemonEggGroups'];
        meta: {
            name: 'PokemonEggGroups';
        };
    };
    /**
     * Find zero or one PokemonEggGroups that matches the filter.
     * @param {PokemonEggGroupsFindUniqueArgs} args - Arguments to find a PokemonEggGroups
     * @example
     * // Get one PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonEggGroupsFindUniqueArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PokemonEggGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonEggGroupsFindUniqueOrThrowArgs} args - Arguments to find a PokemonEggGroups
     * @example
     * // Get one PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonEggGroupsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonEggGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEggGroupsFindFirstArgs} args - Arguments to find a PokemonEggGroups
     * @example
     * // Get one PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonEggGroupsFindFirstArgs>(args?: Prisma.SelectSubset<T, PokemonEggGroupsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonEggGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEggGroupsFindFirstOrThrowArgs} args - Arguments to find a PokemonEggGroups
     * @example
     * // Get one PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonEggGroupsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PokemonEggGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PokemonEggGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEggGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.findMany()
     *
     * // Get first 10 PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.findMany({ take: 10 })
     *
     * // Only select the `species_id`
     * const pokemonEggGroupsWithSpecies_idOnly = await prisma.pokemonEggGroups.findMany({ select: { species_id: true } })
     *
     */
    findMany<T extends PokemonEggGroupsFindManyArgs>(args?: Prisma.SelectSubset<T, PokemonEggGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PokemonEggGroups.
     * @param {PokemonEggGroupsCreateArgs} args - Arguments to create a PokemonEggGroups.
     * @example
     * // Create one PokemonEggGroups
     * const PokemonEggGroups = await prisma.pokemonEggGroups.create({
     *   data: {
     *     // ... data to create a PokemonEggGroups
     *   }
     * })
     *
     */
    create<T extends PokemonEggGroupsCreateArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsCreateArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PokemonEggGroups.
     * @param {PokemonEggGroupsCreateManyArgs} args - Arguments to create many PokemonEggGroups.
     * @example
     * // Create many PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PokemonEggGroupsCreateManyArgs>(args?: Prisma.SelectSubset<T, PokemonEggGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PokemonEggGroups and returns the data saved in the database.
     * @param {PokemonEggGroupsCreateManyAndReturnArgs} args - Arguments to create many PokemonEggGroups.
     * @example
     * // Create many PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PokemonEggGroups and only return the `species_id`
     * const pokemonEggGroupsWithSpecies_idOnly = await prisma.pokemonEggGroups.createManyAndReturn({
     *   select: { species_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PokemonEggGroupsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PokemonEggGroupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PokemonEggGroups.
     * @param {PokemonEggGroupsDeleteArgs} args - Arguments to delete one PokemonEggGroups.
     * @example
     * // Delete one PokemonEggGroups
     * const PokemonEggGroups = await prisma.pokemonEggGroups.delete({
     *   where: {
     *     // ... filter to delete one PokemonEggGroups
     *   }
     * })
     *
     */
    delete<T extends PokemonEggGroupsDeleteArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsDeleteArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PokemonEggGroups.
     * @param {PokemonEggGroupsUpdateArgs} args - Arguments to update one PokemonEggGroups.
     * @example
     * // Update one PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PokemonEggGroupsUpdateArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsUpdateArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PokemonEggGroups.
     * @param {PokemonEggGroupsDeleteManyArgs} args - Arguments to filter PokemonEggGroups to delete.
     * @example
     * // Delete a few PokemonEggGroups
     * const { count } = await prisma.pokemonEggGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PokemonEggGroupsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PokemonEggGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonEggGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEggGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PokemonEggGroupsUpdateManyArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonEggGroups and returns the data updated in the database.
     * @param {PokemonEggGroupsUpdateManyAndReturnArgs} args - Arguments to update many PokemonEggGroups.
     * @example
     * // Update many PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PokemonEggGroups and only return the `species_id`
     * const pokemonEggGroupsWithSpecies_idOnly = await prisma.pokemonEggGroups.updateManyAndReturn({
     *   select: { species_id: true },
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
    updateManyAndReturn<T extends PokemonEggGroupsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PokemonEggGroups.
     * @param {PokemonEggGroupsUpsertArgs} args - Arguments to update or create a PokemonEggGroups.
     * @example
     * // Update or create a PokemonEggGroups
     * const pokemonEggGroups = await prisma.pokemonEggGroups.upsert({
     *   create: {
     *     // ... data to create a PokemonEggGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonEggGroups we want to update
     *   }
     * })
     */
    upsert<T extends PokemonEggGroupsUpsertArgs>(args: Prisma.SelectSubset<T, PokemonEggGroupsUpsertArgs<ExtArgs>>): Prisma.Prisma__PokemonEggGroupsClient<runtime.Types.Result.GetResult<Prisma.$PokemonEggGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PokemonEggGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEggGroupsCountArgs} args - Arguments to filter PokemonEggGroups to count.
     * @example
     * // Count the number of PokemonEggGroups
     * const count = await prisma.pokemonEggGroups.count({
     *   where: {
     *     // ... the filter for the PokemonEggGroups we want to count
     *   }
     * })
    **/
    count<T extends PokemonEggGroupsCountArgs>(args?: Prisma.Subset<T, PokemonEggGroupsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PokemonEggGroupsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PokemonEggGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEggGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonEggGroupsAggregateArgs>(args: Prisma.Subset<T, PokemonEggGroupsAggregateArgs>): Prisma.PrismaPromise<GetPokemonEggGroupsAggregateType<T>>;
    /**
     * Group by PokemonEggGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEggGroupsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PokemonEggGroupsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PokemonEggGroupsGroupByArgs['orderBy'];
    } : {
        orderBy?: PokemonEggGroupsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PokemonEggGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonEggGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PokemonEggGroups model
     */
    readonly fields: PokemonEggGroupsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PokemonEggGroups.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PokemonEggGroupsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    species<T extends Prisma.PokemonSpeciesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonSpeciesDefaultArgs<ExtArgs>>): Prisma.Prisma__PokemonSpeciesClient<runtime.Types.Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    eggGroup<T extends Prisma.EggGroupsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EggGroupsDefaultArgs<ExtArgs>>): Prisma.Prisma__EggGroupsClient<runtime.Types.Result.GetResult<Prisma.$EggGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PokemonEggGroups model
 */
export interface PokemonEggGroupsFieldRefs {
    readonly species_id: Prisma.FieldRef<"PokemonEggGroups", 'Int'>;
    readonly egg_group_id: Prisma.FieldRef<"PokemonEggGroups", 'Int'>;
}
/**
 * PokemonEggGroups findUnique
 */
export type PokemonEggGroupsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEggGroups to fetch.
     */
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
};
/**
 * PokemonEggGroups findUniqueOrThrow
 */
export type PokemonEggGroupsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEggGroups to fetch.
     */
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
};
/**
 * PokemonEggGroups findFirst
 */
export type PokemonEggGroupsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEggGroups to fetch.
     */
    where?: Prisma.PokemonEggGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEggGroups to fetch.
     */
    orderBy?: Prisma.PokemonEggGroupsOrderByWithRelationInput | Prisma.PokemonEggGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonEggGroups.
     */
    cursor?: Prisma.PokemonEggGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEggGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEggGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonEggGroups.
     */
    distinct?: Prisma.PokemonEggGroupsScalarFieldEnum | Prisma.PokemonEggGroupsScalarFieldEnum[];
};
/**
 * PokemonEggGroups findFirstOrThrow
 */
export type PokemonEggGroupsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEggGroups to fetch.
     */
    where?: Prisma.PokemonEggGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEggGroups to fetch.
     */
    orderBy?: Prisma.PokemonEggGroupsOrderByWithRelationInput | Prisma.PokemonEggGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonEggGroups.
     */
    cursor?: Prisma.PokemonEggGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEggGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEggGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonEggGroups.
     */
    distinct?: Prisma.PokemonEggGroupsScalarFieldEnum | Prisma.PokemonEggGroupsScalarFieldEnum[];
};
/**
 * PokemonEggGroups findMany
 */
export type PokemonEggGroupsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEggGroups to fetch.
     */
    where?: Prisma.PokemonEggGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEggGroups to fetch.
     */
    orderBy?: Prisma.PokemonEggGroupsOrderByWithRelationInput | Prisma.PokemonEggGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PokemonEggGroups.
     */
    cursor?: Prisma.PokemonEggGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEggGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEggGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonEggGroups.
     */
    distinct?: Prisma.PokemonEggGroupsScalarFieldEnum | Prisma.PokemonEggGroupsScalarFieldEnum[];
};
/**
 * PokemonEggGroups create
 */
export type PokemonEggGroupsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * The data needed to create a PokemonEggGroups.
     */
    data: Prisma.XOR<Prisma.PokemonEggGroupsCreateInput, Prisma.PokemonEggGroupsUncheckedCreateInput>;
};
/**
 * PokemonEggGroups createMany
 */
export type PokemonEggGroupsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonEggGroups.
     */
    data: Prisma.PokemonEggGroupsCreateManyInput | Prisma.PokemonEggGroupsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PokemonEggGroups createManyAndReturn
 */
export type PokemonEggGroupsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * The data used to create many PokemonEggGroups.
     */
    data: Prisma.PokemonEggGroupsCreateManyInput | Prisma.PokemonEggGroupsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonEggGroups update
 */
export type PokemonEggGroupsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * The data needed to update a PokemonEggGroups.
     */
    data: Prisma.XOR<Prisma.PokemonEggGroupsUpdateInput, Prisma.PokemonEggGroupsUncheckedUpdateInput>;
    /**
     * Choose, which PokemonEggGroups to update.
     */
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
};
/**
 * PokemonEggGroups updateMany
 */
export type PokemonEggGroupsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonEggGroups.
     */
    data: Prisma.XOR<Prisma.PokemonEggGroupsUpdateManyMutationInput, Prisma.PokemonEggGroupsUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonEggGroups to update
     */
    where?: Prisma.PokemonEggGroupsWhereInput;
    /**
     * Limit how many PokemonEggGroups to update.
     */
    limit?: number;
};
/**
 * PokemonEggGroups updateManyAndReturn
 */
export type PokemonEggGroupsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * The data used to update PokemonEggGroups.
     */
    data: Prisma.XOR<Prisma.PokemonEggGroupsUpdateManyMutationInput, Prisma.PokemonEggGroupsUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonEggGroups to update
     */
    where?: Prisma.PokemonEggGroupsWhereInput;
    /**
     * Limit how many PokemonEggGroups to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonEggGroups upsert
 */
export type PokemonEggGroupsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * The filter to search for the PokemonEggGroups to update in case it exists.
     */
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
    /**
     * In case the PokemonEggGroups found by the `where` argument doesn't exist, create a new PokemonEggGroups with this data.
     */
    create: Prisma.XOR<Prisma.PokemonEggGroupsCreateInput, Prisma.PokemonEggGroupsUncheckedCreateInput>;
    /**
     * In case the PokemonEggGroups was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PokemonEggGroupsUpdateInput, Prisma.PokemonEggGroupsUncheckedUpdateInput>;
};
/**
 * PokemonEggGroups delete
 */
export type PokemonEggGroupsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
    /**
     * Filter which PokemonEggGroups to delete.
     */
    where: Prisma.PokemonEggGroupsWhereUniqueInput;
};
/**
 * PokemonEggGroups deleteMany
 */
export type PokemonEggGroupsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonEggGroups to delete
     */
    where?: Prisma.PokemonEggGroupsWhereInput;
    /**
     * Limit how many PokemonEggGroups to delete.
     */
    limit?: number;
};
/**
 * PokemonEggGroups without action
 */
export type PokemonEggGroupsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEggGroups
     */
    select?: Prisma.PokemonEggGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEggGroups
     */
    omit?: Prisma.PokemonEggGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEggGroupsInclude<ExtArgs> | null;
};
