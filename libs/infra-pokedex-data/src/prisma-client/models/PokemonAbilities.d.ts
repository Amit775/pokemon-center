import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PokemonAbilities
 * @@TypeGraphQL.type(name: "PokemonAbility")
 */
export type PokemonAbilitiesModel = runtime.Types.Result.DefaultSelection<Prisma.$PokemonAbilitiesPayload>;
export type AggregatePokemonAbilities = {
    _count: PokemonAbilitiesCountAggregateOutputType | null;
    _avg: PokemonAbilitiesAvgAggregateOutputType | null;
    _sum: PokemonAbilitiesSumAggregateOutputType | null;
    _min: PokemonAbilitiesMinAggregateOutputType | null;
    _max: PokemonAbilitiesMaxAggregateOutputType | null;
};
export type PokemonAbilitiesAvgAggregateOutputType = {
    pokemon_id: number | null;
    ability_id: number | null;
    is_hidden: number | null;
    slot: number | null;
};
export type PokemonAbilitiesSumAggregateOutputType = {
    pokemon_id: number | null;
    ability_id: number | null;
    is_hidden: number | null;
    slot: number | null;
};
export type PokemonAbilitiesMinAggregateOutputType = {
    pokemon_id: number | null;
    ability_id: number | null;
    is_hidden: number | null;
    slot: number | null;
};
export type PokemonAbilitiesMaxAggregateOutputType = {
    pokemon_id: number | null;
    ability_id: number | null;
    is_hidden: number | null;
    slot: number | null;
};
export type PokemonAbilitiesCountAggregateOutputType = {
    pokemon_id: number;
    ability_id: number;
    is_hidden: number;
    slot: number;
    _all: number;
};
export type PokemonAbilitiesAvgAggregateInputType = {
    pokemon_id?: true;
    ability_id?: true;
    is_hidden?: true;
    slot?: true;
};
export type PokemonAbilitiesSumAggregateInputType = {
    pokemon_id?: true;
    ability_id?: true;
    is_hidden?: true;
    slot?: true;
};
export type PokemonAbilitiesMinAggregateInputType = {
    pokemon_id?: true;
    ability_id?: true;
    is_hidden?: true;
    slot?: true;
};
export type PokemonAbilitiesMaxAggregateInputType = {
    pokemon_id?: true;
    ability_id?: true;
    is_hidden?: true;
    slot?: true;
};
export type PokemonAbilitiesCountAggregateInputType = {
    pokemon_id?: true;
    ability_id?: true;
    is_hidden?: true;
    slot?: true;
    _all?: true;
};
export type PokemonAbilitiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonAbilities to aggregate.
     */
    where?: Prisma.PokemonAbilitiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonAbilities to fetch.
     */
    orderBy?: Prisma.PokemonAbilitiesOrderByWithRelationInput | Prisma.PokemonAbilitiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PokemonAbilitiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonAbilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonAbilities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PokemonAbilities
    **/
    _count?: true | PokemonAbilitiesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PokemonAbilitiesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PokemonAbilitiesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PokemonAbilitiesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PokemonAbilitiesMaxAggregateInputType;
};
export type GetPokemonAbilitiesAggregateType<T extends PokemonAbilitiesAggregateArgs> = {
    [P in keyof T & keyof AggregatePokemonAbilities]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePokemonAbilities[P]> : Prisma.GetScalarType<T[P], AggregatePokemonAbilities[P]>;
};
export type PokemonAbilitiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonAbilitiesWhereInput;
    orderBy?: Prisma.PokemonAbilitiesOrderByWithAggregationInput | Prisma.PokemonAbilitiesOrderByWithAggregationInput[];
    by: Prisma.PokemonAbilitiesScalarFieldEnum[] | Prisma.PokemonAbilitiesScalarFieldEnum;
    having?: Prisma.PokemonAbilitiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PokemonAbilitiesCountAggregateInputType | true;
    _avg?: PokemonAbilitiesAvgAggregateInputType;
    _sum?: PokemonAbilitiesSumAggregateInputType;
    _min?: PokemonAbilitiesMinAggregateInputType;
    _max?: PokemonAbilitiesMaxAggregateInputType;
};
export type PokemonAbilitiesGroupByOutputType = {
    pokemon_id: number;
    ability_id: number;
    is_hidden: number;
    slot: number;
    _count: PokemonAbilitiesCountAggregateOutputType | null;
    _avg: PokemonAbilitiesAvgAggregateOutputType | null;
    _sum: PokemonAbilitiesSumAggregateOutputType | null;
    _min: PokemonAbilitiesMinAggregateOutputType | null;
    _max: PokemonAbilitiesMaxAggregateOutputType | null;
};
export type GetPokemonAbilitiesGroupByPayload<T extends PokemonAbilitiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PokemonAbilitiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PokemonAbilitiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PokemonAbilitiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PokemonAbilitiesGroupByOutputType[P]>;
}>>;
export type PokemonAbilitiesWhereInput = {
    AND?: Prisma.PokemonAbilitiesWhereInput | Prisma.PokemonAbilitiesWhereInput[];
    OR?: Prisma.PokemonAbilitiesWhereInput[];
    NOT?: Prisma.PokemonAbilitiesWhereInput | Prisma.PokemonAbilitiesWhereInput[];
    pokemon_id?: Prisma.IntFilter<"PokemonAbilities"> | number;
    ability_id?: Prisma.IntFilter<"PokemonAbilities"> | number;
    is_hidden?: Prisma.IntFilter<"PokemonAbilities"> | number;
    slot?: Prisma.IntFilter<"PokemonAbilities"> | number;
    pokemon?: Prisma.XOR<Prisma.PokemonScalarRelationFilter, Prisma.PokemonWhereInput>;
    ability?: Prisma.XOR<Prisma.AbilitiesScalarRelationFilter, Prisma.AbilitiesWhereInput>;
};
export type PokemonAbilitiesOrderByWithRelationInput = {
    pokemon_id?: Prisma.SortOrder;
    ability_id?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    pokemon?: Prisma.PokemonOrderByWithRelationInput;
    ability?: Prisma.AbilitiesOrderByWithRelationInput;
};
export type PokemonAbilitiesWhereUniqueInput = Prisma.AtLeast<{
    pokemon_id_ability_id?: Prisma.PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput;
    AND?: Prisma.PokemonAbilitiesWhereInput | Prisma.PokemonAbilitiesWhereInput[];
    OR?: Prisma.PokemonAbilitiesWhereInput[];
    NOT?: Prisma.PokemonAbilitiesWhereInput | Prisma.PokemonAbilitiesWhereInput[];
    pokemon_id?: Prisma.IntFilter<"PokemonAbilities"> | number;
    ability_id?: Prisma.IntFilter<"PokemonAbilities"> | number;
    is_hidden?: Prisma.IntFilter<"PokemonAbilities"> | number;
    slot?: Prisma.IntFilter<"PokemonAbilities"> | number;
    pokemon?: Prisma.XOR<Prisma.PokemonScalarRelationFilter, Prisma.PokemonWhereInput>;
    ability?: Prisma.XOR<Prisma.AbilitiesScalarRelationFilter, Prisma.AbilitiesWhereInput>;
}, "pokemon_id_ability_id">;
export type PokemonAbilitiesOrderByWithAggregationInput = {
    pokemon_id?: Prisma.SortOrder;
    ability_id?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    _count?: Prisma.PokemonAbilitiesCountOrderByAggregateInput;
    _avg?: Prisma.PokemonAbilitiesAvgOrderByAggregateInput;
    _max?: Prisma.PokemonAbilitiesMaxOrderByAggregateInput;
    _min?: Prisma.PokemonAbilitiesMinOrderByAggregateInput;
    _sum?: Prisma.PokemonAbilitiesSumOrderByAggregateInput;
};
export type PokemonAbilitiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.PokemonAbilitiesScalarWhereWithAggregatesInput | Prisma.PokemonAbilitiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.PokemonAbilitiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PokemonAbilitiesScalarWhereWithAggregatesInput | Prisma.PokemonAbilitiesScalarWhereWithAggregatesInput[];
    pokemon_id?: Prisma.IntWithAggregatesFilter<"PokemonAbilities"> | number;
    ability_id?: Prisma.IntWithAggregatesFilter<"PokemonAbilities"> | number;
    is_hidden?: Prisma.IntWithAggregatesFilter<"PokemonAbilities"> | number;
    slot?: Prisma.IntWithAggregatesFilter<"PokemonAbilities"> | number;
};
export type PokemonAbilitiesCreateInput = {
    is_hidden: number;
    slot: number;
    pokemon: Prisma.PokemonCreateNestedOneWithoutAbilitiesInput;
    ability: Prisma.AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput;
};
export type PokemonAbilitiesUncheckedCreateInput = {
    pokemon_id: number;
    ability_id: number;
    is_hidden: number;
    slot: number;
};
export type PokemonAbilitiesUpdateInput = {
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    pokemon?: Prisma.PokemonUpdateOneRequiredWithoutAbilitiesNestedInput;
    ability?: Prisma.AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput;
};
export type PokemonAbilitiesUncheckedUpdateInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ability_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonAbilitiesCreateManyInput = {
    pokemon_id: number;
    ability_id: number;
    is_hidden: number;
    slot: number;
};
export type PokemonAbilitiesUpdateManyMutationInput = {
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonAbilitiesUncheckedUpdateManyInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ability_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonAbilitiesListRelationFilter = {
    every?: Prisma.PokemonAbilitiesWhereInput;
    some?: Prisma.PokemonAbilitiesWhereInput;
    none?: Prisma.PokemonAbilitiesWhereInput;
};
export type PokemonAbilitiesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput = {
    pokemon_id: number;
    ability_id: number;
};
export type PokemonAbilitiesCountOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    ability_id?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
};
export type PokemonAbilitiesAvgOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    ability_id?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
};
export type PokemonAbilitiesMaxOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    ability_id?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
};
export type PokemonAbilitiesMinOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    ability_id?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
};
export type PokemonAbilitiesSumOrderByAggregateInput = {
    pokemon_id?: Prisma.SortOrder;
    ability_id?: Prisma.SortOrder;
    is_hidden?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
};
export type PokemonAbilitiesCreateNestedManyWithoutPokemonInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput> | Prisma.PokemonAbilitiesCreateWithoutPokemonInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyPokemonInputEnvelope;
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
};
export type PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput> | Prisma.PokemonAbilitiesCreateWithoutPokemonInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyPokemonInputEnvelope;
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
};
export type PokemonAbilitiesUpdateManyWithoutPokemonNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput> | Prisma.PokemonAbilitiesCreateWithoutPokemonInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput[];
    upsert?: Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput | Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyPokemonInputEnvelope;
    set?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    disconnect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    delete?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    update?: Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput | Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput[];
    updateMany?: Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput | Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput[];
    deleteMany?: Prisma.PokemonAbilitiesScalarWhereInput | Prisma.PokemonAbilitiesScalarWhereInput[];
};
export type PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput> | Prisma.PokemonAbilitiesCreateWithoutPokemonInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutPokemonInput[];
    upsert?: Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput | Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyPokemonInputEnvelope;
    set?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    disconnect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    delete?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    update?: Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput | Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput[];
    updateMany?: Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput | Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput[];
    deleteMany?: Prisma.PokemonAbilitiesScalarWhereInput | Prisma.PokemonAbilitiesScalarWhereInput[];
};
export type PokemonAbilitiesCreateNestedManyWithoutAbilityInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput> | Prisma.PokemonAbilitiesCreateWithoutAbilityInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyAbilityInputEnvelope;
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
};
export type PokemonAbilitiesUncheckedCreateNestedManyWithoutAbilityInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput> | Prisma.PokemonAbilitiesCreateWithoutAbilityInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyAbilityInputEnvelope;
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
};
export type PokemonAbilitiesUpdateManyWithoutAbilityNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput> | Prisma.PokemonAbilitiesCreateWithoutAbilityInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput[];
    upsert?: Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput | Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyAbilityInputEnvelope;
    set?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    disconnect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    delete?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    update?: Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput | Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput[];
    updateMany?: Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput | Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput[];
    deleteMany?: Prisma.PokemonAbilitiesScalarWhereInput | Prisma.PokemonAbilitiesScalarWhereInput[];
};
export type PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput> | Prisma.PokemonAbilitiesCreateWithoutAbilityInput[] | Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput[];
    connectOrCreate?: Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput | Prisma.PokemonAbilitiesCreateOrConnectWithoutAbilityInput[];
    upsert?: Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput | Prisma.PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput[];
    createMany?: Prisma.PokemonAbilitiesCreateManyAbilityInputEnvelope;
    set?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    disconnect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    delete?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    connect?: Prisma.PokemonAbilitiesWhereUniqueInput | Prisma.PokemonAbilitiesWhereUniqueInput[];
    update?: Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput | Prisma.PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput[];
    updateMany?: Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput | Prisma.PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput[];
    deleteMany?: Prisma.PokemonAbilitiesScalarWhereInput | Prisma.PokemonAbilitiesScalarWhereInput[];
};
export type PokemonAbilitiesCreateWithoutPokemonInput = {
    is_hidden: number;
    slot: number;
    ability: Prisma.AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput;
};
export type PokemonAbilitiesUncheckedCreateWithoutPokemonInput = {
    ability_id: number;
    is_hidden: number;
    slot: number;
};
export type PokemonAbilitiesCreateOrConnectWithoutPokemonInput = {
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput>;
};
export type PokemonAbilitiesCreateManyPokemonInputEnvelope = {
    data: Prisma.PokemonAbilitiesCreateManyPokemonInput | Prisma.PokemonAbilitiesCreateManyPokemonInput[];
    skipDuplicates?: boolean;
};
export type PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput = {
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonAbilitiesUpdateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedUpdateWithoutPokemonInput>;
    create: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutPokemonInput>;
};
export type PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput = {
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonAbilitiesUpdateWithoutPokemonInput, Prisma.PokemonAbilitiesUncheckedUpdateWithoutPokemonInput>;
};
export type PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput = {
    where: Prisma.PokemonAbilitiesScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonAbilitiesUpdateManyMutationInput, Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonInput>;
};
export type PokemonAbilitiesScalarWhereInput = {
    AND?: Prisma.PokemonAbilitiesScalarWhereInput | Prisma.PokemonAbilitiesScalarWhereInput[];
    OR?: Prisma.PokemonAbilitiesScalarWhereInput[];
    NOT?: Prisma.PokemonAbilitiesScalarWhereInput | Prisma.PokemonAbilitiesScalarWhereInput[];
    pokemon_id?: Prisma.IntFilter<"PokemonAbilities"> | number;
    ability_id?: Prisma.IntFilter<"PokemonAbilities"> | number;
    is_hidden?: Prisma.IntFilter<"PokemonAbilities"> | number;
    slot?: Prisma.IntFilter<"PokemonAbilities"> | number;
};
export type PokemonAbilitiesCreateWithoutAbilityInput = {
    is_hidden: number;
    slot: number;
    pokemon: Prisma.PokemonCreateNestedOneWithoutAbilitiesInput;
};
export type PokemonAbilitiesUncheckedCreateWithoutAbilityInput = {
    pokemon_id: number;
    is_hidden: number;
    slot: number;
};
export type PokemonAbilitiesCreateOrConnectWithoutAbilityInput = {
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput>;
};
export type PokemonAbilitiesCreateManyAbilityInputEnvelope = {
    data: Prisma.PokemonAbilitiesCreateManyAbilityInput | Prisma.PokemonAbilitiesCreateManyAbilityInput[];
    skipDuplicates?: boolean;
};
export type PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput = {
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonAbilitiesUpdateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedUpdateWithoutAbilityInput>;
    create: Prisma.XOR<Prisma.PokemonAbilitiesCreateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedCreateWithoutAbilityInput>;
};
export type PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput = {
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonAbilitiesUpdateWithoutAbilityInput, Prisma.PokemonAbilitiesUncheckedUpdateWithoutAbilityInput>;
};
export type PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput = {
    where: Prisma.PokemonAbilitiesScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonAbilitiesUpdateManyMutationInput, Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutAbilityInput>;
};
export type PokemonAbilitiesCreateManyPokemonInput = {
    ability_id: number;
    is_hidden: number;
    slot: number;
};
export type PokemonAbilitiesUpdateWithoutPokemonInput = {
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    ability?: Prisma.AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput;
};
export type PokemonAbilitiesUncheckedUpdateWithoutPokemonInput = {
    ability_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonAbilitiesUncheckedUpdateManyWithoutPokemonInput = {
    ability_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonAbilitiesCreateManyAbilityInput = {
    pokemon_id: number;
    is_hidden: number;
    slot: number;
};
export type PokemonAbilitiesUpdateWithoutAbilityInput = {
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    pokemon?: Prisma.PokemonUpdateOneRequiredWithoutAbilitiesNestedInput;
};
export type PokemonAbilitiesUncheckedUpdateWithoutAbilityInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonAbilitiesUncheckedUpdateManyWithoutAbilityInput = {
    pokemon_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_hidden?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonAbilitiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_id?: boolean;
    ability_id?: boolean;
    is_hidden?: boolean;
    slot?: boolean;
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    ability?: boolean | Prisma.AbilitiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonAbilities"]>;
export type PokemonAbilitiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_id?: boolean;
    ability_id?: boolean;
    is_hidden?: boolean;
    slot?: boolean;
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    ability?: boolean | Prisma.AbilitiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonAbilities"]>;
export type PokemonAbilitiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_id?: boolean;
    ability_id?: boolean;
    is_hidden?: boolean;
    slot?: boolean;
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    ability?: boolean | Prisma.AbilitiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonAbilities"]>;
export type PokemonAbilitiesSelectScalar = {
    pokemon_id?: boolean;
    ability_id?: boolean;
    is_hidden?: boolean;
    slot?: boolean;
};
export type PokemonAbilitiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"pokemon_id" | "ability_id" | "is_hidden" | "slot", ExtArgs["result"]["pokemonAbilities"]>;
export type PokemonAbilitiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    ability?: boolean | Prisma.AbilitiesDefaultArgs<ExtArgs>;
};
export type PokemonAbilitiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    ability?: boolean | Prisma.AbilitiesDefaultArgs<ExtArgs>;
};
export type PokemonAbilitiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemon?: boolean | Prisma.PokemonDefaultArgs<ExtArgs>;
    ability?: boolean | Prisma.AbilitiesDefaultArgs<ExtArgs>;
};
export type $PokemonAbilitiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PokemonAbilities";
    objects: {
        pokemon: Prisma.$PokemonPayload<ExtArgs>;
        ability: Prisma.$AbilitiesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        pokemon_id: number;
        ability_id: number;
        is_hidden: number;
        slot: number;
    }, ExtArgs["result"]["pokemonAbilities"]>;
    composites: {};
};
export type PokemonAbilitiesGetPayload<S extends boolean | null | undefined | PokemonAbilitiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload, S>;
export type PokemonAbilitiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PokemonAbilitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PokemonAbilitiesCountAggregateInputType | true;
};
export interface PokemonAbilitiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PokemonAbilities'];
        meta: {
            name: 'PokemonAbilities';
        };
    };
    /**
     * Find zero or one PokemonAbilities that matches the filter.
     * @param {PokemonAbilitiesFindUniqueArgs} args - Arguments to find a PokemonAbilities
     * @example
     * // Get one PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonAbilitiesFindUniqueArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PokemonAbilities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonAbilitiesFindUniqueOrThrowArgs} args - Arguments to find a PokemonAbilities
     * @example
     * // Get one PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonAbilitiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonAbilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAbilitiesFindFirstArgs} args - Arguments to find a PokemonAbilities
     * @example
     * // Get one PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonAbilitiesFindFirstArgs>(args?: Prisma.SelectSubset<T, PokemonAbilitiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonAbilities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAbilitiesFindFirstOrThrowArgs} args - Arguments to find a PokemonAbilities
     * @example
     * // Get one PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonAbilitiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PokemonAbilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PokemonAbilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAbilitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.findMany()
     *
     * // Get first 10 PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.findMany({ take: 10 })
     *
     * // Only select the `pokemon_id`
     * const pokemonAbilitiesWithPokemon_idOnly = await prisma.pokemonAbilities.findMany({ select: { pokemon_id: true } })
     *
     */
    findMany<T extends PokemonAbilitiesFindManyArgs>(args?: Prisma.SelectSubset<T, PokemonAbilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PokemonAbilities.
     * @param {PokemonAbilitiesCreateArgs} args - Arguments to create a PokemonAbilities.
     * @example
     * // Create one PokemonAbilities
     * const PokemonAbilities = await prisma.pokemonAbilities.create({
     *   data: {
     *     // ... data to create a PokemonAbilities
     *   }
     * })
     *
     */
    create<T extends PokemonAbilitiesCreateArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesCreateArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PokemonAbilities.
     * @param {PokemonAbilitiesCreateManyArgs} args - Arguments to create many PokemonAbilities.
     * @example
     * // Create many PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PokemonAbilitiesCreateManyArgs>(args?: Prisma.SelectSubset<T, PokemonAbilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PokemonAbilities and returns the data saved in the database.
     * @param {PokemonAbilitiesCreateManyAndReturnArgs} args - Arguments to create many PokemonAbilities.
     * @example
     * // Create many PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PokemonAbilities and only return the `pokemon_id`
     * const pokemonAbilitiesWithPokemon_idOnly = await prisma.pokemonAbilities.createManyAndReturn({
     *   select: { pokemon_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PokemonAbilitiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PokemonAbilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PokemonAbilities.
     * @param {PokemonAbilitiesDeleteArgs} args - Arguments to delete one PokemonAbilities.
     * @example
     * // Delete one PokemonAbilities
     * const PokemonAbilities = await prisma.pokemonAbilities.delete({
     *   where: {
     *     // ... filter to delete one PokemonAbilities
     *   }
     * })
     *
     */
    delete<T extends PokemonAbilitiesDeleteArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesDeleteArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PokemonAbilities.
     * @param {PokemonAbilitiesUpdateArgs} args - Arguments to update one PokemonAbilities.
     * @example
     * // Update one PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PokemonAbilitiesUpdateArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesUpdateArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PokemonAbilities.
     * @param {PokemonAbilitiesDeleteManyArgs} args - Arguments to filter PokemonAbilities to delete.
     * @example
     * // Delete a few PokemonAbilities
     * const { count } = await prisma.pokemonAbilities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PokemonAbilitiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, PokemonAbilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonAbilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAbilitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PokemonAbilitiesUpdateManyArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonAbilities and returns the data updated in the database.
     * @param {PokemonAbilitiesUpdateManyAndReturnArgs} args - Arguments to update many PokemonAbilities.
     * @example
     * // Update many PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PokemonAbilities and only return the `pokemon_id`
     * const pokemonAbilitiesWithPokemon_idOnly = await prisma.pokemonAbilities.updateManyAndReturn({
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
    updateManyAndReturn<T extends PokemonAbilitiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PokemonAbilities.
     * @param {PokemonAbilitiesUpsertArgs} args - Arguments to update or create a PokemonAbilities.
     * @example
     * // Update or create a PokemonAbilities
     * const pokemonAbilities = await prisma.pokemonAbilities.upsert({
     *   create: {
     *     // ... data to create a PokemonAbilities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonAbilities we want to update
     *   }
     * })
     */
    upsert<T extends PokemonAbilitiesUpsertArgs>(args: Prisma.SelectSubset<T, PokemonAbilitiesUpsertArgs<ExtArgs>>): Prisma.Prisma__PokemonAbilitiesClient<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PokemonAbilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAbilitiesCountArgs} args - Arguments to filter PokemonAbilities to count.
     * @example
     * // Count the number of PokemonAbilities
     * const count = await prisma.pokemonAbilities.count({
     *   where: {
     *     // ... the filter for the PokemonAbilities we want to count
     *   }
     * })
    **/
    count<T extends PokemonAbilitiesCountArgs>(args?: Prisma.Subset<T, PokemonAbilitiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PokemonAbilitiesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PokemonAbilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAbilitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonAbilitiesAggregateArgs>(args: Prisma.Subset<T, PokemonAbilitiesAggregateArgs>): Prisma.PrismaPromise<GetPokemonAbilitiesAggregateType<T>>;
    /**
     * Group by PokemonAbilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAbilitiesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PokemonAbilitiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PokemonAbilitiesGroupByArgs['orderBy'];
    } : {
        orderBy?: PokemonAbilitiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PokemonAbilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonAbilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PokemonAbilities model
     */
    readonly fields: PokemonAbilitiesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PokemonAbilities.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PokemonAbilitiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pokemon<T extends Prisma.PokemonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonDefaultArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ability<T extends Prisma.AbilitiesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AbilitiesDefaultArgs<ExtArgs>>): Prisma.Prisma__AbilitiesClient<runtime.Types.Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PokemonAbilities model
 */
export interface PokemonAbilitiesFieldRefs {
    readonly pokemon_id: Prisma.FieldRef<"PokemonAbilities", 'Int'>;
    readonly ability_id: Prisma.FieldRef<"PokemonAbilities", 'Int'>;
    readonly is_hidden: Prisma.FieldRef<"PokemonAbilities", 'Int'>;
    readonly slot: Prisma.FieldRef<"PokemonAbilities", 'Int'>;
}
/**
 * PokemonAbilities findUnique
 */
export type PokemonAbilitiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonAbilities to fetch.
     */
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
};
/**
 * PokemonAbilities findUniqueOrThrow
 */
export type PokemonAbilitiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonAbilities to fetch.
     */
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
};
/**
 * PokemonAbilities findFirst
 */
export type PokemonAbilitiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonAbilities to fetch.
     */
    where?: Prisma.PokemonAbilitiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonAbilities to fetch.
     */
    orderBy?: Prisma.PokemonAbilitiesOrderByWithRelationInput | Prisma.PokemonAbilitiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonAbilities.
     */
    cursor?: Prisma.PokemonAbilitiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonAbilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonAbilities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonAbilities.
     */
    distinct?: Prisma.PokemonAbilitiesScalarFieldEnum | Prisma.PokemonAbilitiesScalarFieldEnum[];
};
/**
 * PokemonAbilities findFirstOrThrow
 */
export type PokemonAbilitiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonAbilities to fetch.
     */
    where?: Prisma.PokemonAbilitiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonAbilities to fetch.
     */
    orderBy?: Prisma.PokemonAbilitiesOrderByWithRelationInput | Prisma.PokemonAbilitiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonAbilities.
     */
    cursor?: Prisma.PokemonAbilitiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonAbilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonAbilities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonAbilities.
     */
    distinct?: Prisma.PokemonAbilitiesScalarFieldEnum | Prisma.PokemonAbilitiesScalarFieldEnum[];
};
/**
 * PokemonAbilities findMany
 */
export type PokemonAbilitiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonAbilities to fetch.
     */
    where?: Prisma.PokemonAbilitiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonAbilities to fetch.
     */
    orderBy?: Prisma.PokemonAbilitiesOrderByWithRelationInput | Prisma.PokemonAbilitiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PokemonAbilities.
     */
    cursor?: Prisma.PokemonAbilitiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonAbilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonAbilities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonAbilities.
     */
    distinct?: Prisma.PokemonAbilitiesScalarFieldEnum | Prisma.PokemonAbilitiesScalarFieldEnum[];
};
/**
 * PokemonAbilities create
 */
export type PokemonAbilitiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * The data needed to create a PokemonAbilities.
     */
    data: Prisma.XOR<Prisma.PokemonAbilitiesCreateInput, Prisma.PokemonAbilitiesUncheckedCreateInput>;
};
/**
 * PokemonAbilities createMany
 */
export type PokemonAbilitiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonAbilities.
     */
    data: Prisma.PokemonAbilitiesCreateManyInput | Prisma.PokemonAbilitiesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PokemonAbilities createManyAndReturn
 */
export type PokemonAbilitiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * The data used to create many PokemonAbilities.
     */
    data: Prisma.PokemonAbilitiesCreateManyInput | Prisma.PokemonAbilitiesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonAbilities update
 */
export type PokemonAbilitiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * The data needed to update a PokemonAbilities.
     */
    data: Prisma.XOR<Prisma.PokemonAbilitiesUpdateInput, Prisma.PokemonAbilitiesUncheckedUpdateInput>;
    /**
     * Choose, which PokemonAbilities to update.
     */
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
};
/**
 * PokemonAbilities updateMany
 */
export type PokemonAbilitiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonAbilities.
     */
    data: Prisma.XOR<Prisma.PokemonAbilitiesUpdateManyMutationInput, Prisma.PokemonAbilitiesUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonAbilities to update
     */
    where?: Prisma.PokemonAbilitiesWhereInput;
    /**
     * Limit how many PokemonAbilities to update.
     */
    limit?: number;
};
/**
 * PokemonAbilities updateManyAndReturn
 */
export type PokemonAbilitiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * The data used to update PokemonAbilities.
     */
    data: Prisma.XOR<Prisma.PokemonAbilitiesUpdateManyMutationInput, Prisma.PokemonAbilitiesUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonAbilities to update
     */
    where?: Prisma.PokemonAbilitiesWhereInput;
    /**
     * Limit how many PokemonAbilities to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonAbilities upsert
 */
export type PokemonAbilitiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * The filter to search for the PokemonAbilities to update in case it exists.
     */
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
    /**
     * In case the PokemonAbilities found by the `where` argument doesn't exist, create a new PokemonAbilities with this data.
     */
    create: Prisma.XOR<Prisma.PokemonAbilitiesCreateInput, Prisma.PokemonAbilitiesUncheckedCreateInput>;
    /**
     * In case the PokemonAbilities was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PokemonAbilitiesUpdateInput, Prisma.PokemonAbilitiesUncheckedUpdateInput>;
};
/**
 * PokemonAbilities delete
 */
export type PokemonAbilitiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
    /**
     * Filter which PokemonAbilities to delete.
     */
    where: Prisma.PokemonAbilitiesWhereUniqueInput;
};
/**
 * PokemonAbilities deleteMany
 */
export type PokemonAbilitiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonAbilities to delete
     */
    where?: Prisma.PokemonAbilitiesWhereInput;
    /**
     * Limit how many PokemonAbilities to delete.
     */
    limit?: number;
};
/**
 * PokemonAbilities without action
 */
export type PokemonAbilitiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonAbilities
     */
    select?: Prisma.PokemonAbilitiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonAbilities
     */
    omit?: Prisma.PokemonAbilitiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonAbilitiesInclude<ExtArgs> | null;
};
