import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PokemonFormGenerations
 * @@TypeGraphQL.type(name: "PokemonFormGeneration")
 */
export type PokemonFormGenerationsModel = runtime.Types.Result.DefaultSelection<Prisma.$PokemonFormGenerationsPayload>;
export type AggregatePokemonFormGenerations = {
    _count: PokemonFormGenerationsCountAggregateOutputType | null;
    _avg: PokemonFormGenerationsAvgAggregateOutputType | null;
    _sum: PokemonFormGenerationsSumAggregateOutputType | null;
    _min: PokemonFormGenerationsMinAggregateOutputType | null;
    _max: PokemonFormGenerationsMaxAggregateOutputType | null;
};
export type PokemonFormGenerationsAvgAggregateOutputType = {
    pokemon_form_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type PokemonFormGenerationsSumAggregateOutputType = {
    pokemon_form_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type PokemonFormGenerationsMinAggregateOutputType = {
    pokemon_form_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type PokemonFormGenerationsMaxAggregateOutputType = {
    pokemon_form_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type PokemonFormGenerationsCountAggregateOutputType = {
    pokemon_form_id: number;
    generation_id: number;
    game_index: number;
    _all: number;
};
export type PokemonFormGenerationsAvgAggregateInputType = {
    pokemon_form_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type PokemonFormGenerationsSumAggregateInputType = {
    pokemon_form_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type PokemonFormGenerationsMinAggregateInputType = {
    pokemon_form_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type PokemonFormGenerationsMaxAggregateInputType = {
    pokemon_form_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type PokemonFormGenerationsCountAggregateInputType = {
    pokemon_form_id?: true;
    generation_id?: true;
    game_index?: true;
    _all?: true;
};
export type PokemonFormGenerationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonFormGenerations to aggregate.
     */
    where?: Prisma.PokemonFormGenerationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonFormGenerations to fetch.
     */
    orderBy?: Prisma.PokemonFormGenerationsOrderByWithRelationInput | Prisma.PokemonFormGenerationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PokemonFormGenerationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonFormGenerations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonFormGenerations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PokemonFormGenerations
    **/
    _count?: true | PokemonFormGenerationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PokemonFormGenerationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PokemonFormGenerationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PokemonFormGenerationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PokemonFormGenerationsMaxAggregateInputType;
};
export type GetPokemonFormGenerationsAggregateType<T extends PokemonFormGenerationsAggregateArgs> = {
    [P in keyof T & keyof AggregatePokemonFormGenerations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePokemonFormGenerations[P]> : Prisma.GetScalarType<T[P], AggregatePokemonFormGenerations[P]>;
};
export type PokemonFormGenerationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonFormGenerationsWhereInput;
    orderBy?: Prisma.PokemonFormGenerationsOrderByWithAggregationInput | Prisma.PokemonFormGenerationsOrderByWithAggregationInput[];
    by: Prisma.PokemonFormGenerationsScalarFieldEnum[] | Prisma.PokemonFormGenerationsScalarFieldEnum;
    having?: Prisma.PokemonFormGenerationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PokemonFormGenerationsCountAggregateInputType | true;
    _avg?: PokemonFormGenerationsAvgAggregateInputType;
    _sum?: PokemonFormGenerationsSumAggregateInputType;
    _min?: PokemonFormGenerationsMinAggregateInputType;
    _max?: PokemonFormGenerationsMaxAggregateInputType;
};
export type PokemonFormGenerationsGroupByOutputType = {
    pokemon_form_id: number;
    generation_id: number;
    game_index: number;
    _count: PokemonFormGenerationsCountAggregateOutputType | null;
    _avg: PokemonFormGenerationsAvgAggregateOutputType | null;
    _sum: PokemonFormGenerationsSumAggregateOutputType | null;
    _min: PokemonFormGenerationsMinAggregateOutputType | null;
    _max: PokemonFormGenerationsMaxAggregateOutputType | null;
};
export type GetPokemonFormGenerationsGroupByPayload<T extends PokemonFormGenerationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PokemonFormGenerationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PokemonFormGenerationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PokemonFormGenerationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PokemonFormGenerationsGroupByOutputType[P]>;
}>>;
export type PokemonFormGenerationsWhereInput = {
    AND?: Prisma.PokemonFormGenerationsWhereInput | Prisma.PokemonFormGenerationsWhereInput[];
    OR?: Prisma.PokemonFormGenerationsWhereInput[];
    NOT?: Prisma.PokemonFormGenerationsWhereInput | Prisma.PokemonFormGenerationsWhereInput[];
    pokemon_form_id?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    generation_id?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    game_index?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    pokemonForm?: Prisma.XOR<Prisma.PokemonFormsScalarRelationFilter, Prisma.PokemonFormsWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
};
export type PokemonFormGenerationsOrderByWithRelationInput = {
    pokemon_form_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    pokemonForm?: Prisma.PokemonFormsOrderByWithRelationInput;
    generation?: Prisma.GenerationsOrderByWithRelationInput;
};
export type PokemonFormGenerationsWhereUniqueInput = Prisma.AtLeast<{
    pokemon_form_id_generation_id?: Prisma.PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput;
    AND?: Prisma.PokemonFormGenerationsWhereInput | Prisma.PokemonFormGenerationsWhereInput[];
    OR?: Prisma.PokemonFormGenerationsWhereInput[];
    NOT?: Prisma.PokemonFormGenerationsWhereInput | Prisma.PokemonFormGenerationsWhereInput[];
    pokemon_form_id?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    generation_id?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    game_index?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    pokemonForm?: Prisma.XOR<Prisma.PokemonFormsScalarRelationFilter, Prisma.PokemonFormsWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
}, "pokemon_form_id_generation_id">;
export type PokemonFormGenerationsOrderByWithAggregationInput = {
    pokemon_form_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    _count?: Prisma.PokemonFormGenerationsCountOrderByAggregateInput;
    _avg?: Prisma.PokemonFormGenerationsAvgOrderByAggregateInput;
    _max?: Prisma.PokemonFormGenerationsMaxOrderByAggregateInput;
    _min?: Prisma.PokemonFormGenerationsMinOrderByAggregateInput;
    _sum?: Prisma.PokemonFormGenerationsSumOrderByAggregateInput;
};
export type PokemonFormGenerationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PokemonFormGenerationsScalarWhereWithAggregatesInput | Prisma.PokemonFormGenerationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PokemonFormGenerationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PokemonFormGenerationsScalarWhereWithAggregatesInput | Prisma.PokemonFormGenerationsScalarWhereWithAggregatesInput[];
    pokemon_form_id?: Prisma.IntWithAggregatesFilter<"PokemonFormGenerations"> | number;
    generation_id?: Prisma.IntWithAggregatesFilter<"PokemonFormGenerations"> | number;
    game_index?: Prisma.IntWithAggregatesFilter<"PokemonFormGenerations"> | number;
};
export type PokemonFormGenerationsCreateInput = {
    game_index: number;
    pokemonForm: Prisma.PokemonFormsCreateNestedOneWithoutGenerationsInput;
    generation: Prisma.GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput;
};
export type PokemonFormGenerationsUncheckedCreateInput = {
    pokemon_form_id: number;
    generation_id: number;
    game_index: number;
};
export type PokemonFormGenerationsUpdateInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    pokemonForm?: Prisma.PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput;
};
export type PokemonFormGenerationsUncheckedUpdateInput = {
    pokemon_form_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonFormGenerationsCreateManyInput = {
    pokemon_form_id: number;
    generation_id: number;
    game_index: number;
};
export type PokemonFormGenerationsUpdateManyMutationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonFormGenerationsUncheckedUpdateManyInput = {
    pokemon_form_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonFormGenerationsListRelationFilter = {
    every?: Prisma.PokemonFormGenerationsWhereInput;
    some?: Prisma.PokemonFormGenerationsWhereInput;
    none?: Prisma.PokemonFormGenerationsWhereInput;
};
export type PokemonFormGenerationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput = {
    pokemon_form_id: number;
    generation_id: number;
};
export type PokemonFormGenerationsCountOrderByAggregateInput = {
    pokemon_form_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type PokemonFormGenerationsAvgOrderByAggregateInput = {
    pokemon_form_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type PokemonFormGenerationsMaxOrderByAggregateInput = {
    pokemon_form_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type PokemonFormGenerationsMinOrderByAggregateInput = {
    pokemon_form_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type PokemonFormGenerationsSumOrderByAggregateInput = {
    pokemon_form_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput> | Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyPokemonFormInputEnvelope;
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
};
export type PokemonFormGenerationsUncheckedCreateNestedManyWithoutPokemonFormInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput> | Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyPokemonFormInputEnvelope;
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
};
export type PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput> | Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput[];
    upsert?: Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput | Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyPokemonFormInputEnvelope;
    set?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    disconnect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    delete?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    update?: Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput | Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput[];
    updateMany?: Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput | Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput[];
    deleteMany?: Prisma.PokemonFormGenerationsScalarWhereInput | Prisma.PokemonFormGenerationsScalarWhereInput[];
};
export type PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput> | Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput[];
    upsert?: Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput | Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyPokemonFormInputEnvelope;
    set?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    disconnect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    delete?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    update?: Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput | Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput[];
    updateMany?: Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput | Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput[];
    deleteMany?: Prisma.PokemonFormGenerationsScalarWhereInput | Prisma.PokemonFormGenerationsScalarWhereInput[];
};
export type PokemonFormGenerationsCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput> | Prisma.PokemonFormGenerationsCreateWithoutGenerationInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyGenerationInputEnvelope;
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
};
export type PokemonFormGenerationsUncheckedCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput> | Prisma.PokemonFormGenerationsCreateWithoutGenerationInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyGenerationInputEnvelope;
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
};
export type PokemonFormGenerationsUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput> | Prisma.PokemonFormGenerationsCreateWithoutGenerationInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput | Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyGenerationInputEnvelope;
    set?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    disconnect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    delete?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    update?: Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput | Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput | Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.PokemonFormGenerationsScalarWhereInput | Prisma.PokemonFormGenerationsScalarWhereInput[];
};
export type PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput> | Prisma.PokemonFormGenerationsCreateWithoutGenerationInput[] | Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput | Prisma.PokemonFormGenerationsCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput | Prisma.PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.PokemonFormGenerationsCreateManyGenerationInputEnvelope;
    set?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    disconnect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    delete?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    connect?: Prisma.PokemonFormGenerationsWhereUniqueInput | Prisma.PokemonFormGenerationsWhereUniqueInput[];
    update?: Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput | Prisma.PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput | Prisma.PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.PokemonFormGenerationsScalarWhereInput | Prisma.PokemonFormGenerationsScalarWhereInput[];
};
export type PokemonFormGenerationsCreateWithoutPokemonFormInput = {
    game_index: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput;
};
export type PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput = {
    generation_id: number;
    game_index: number;
};
export type PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput = {
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput>;
};
export type PokemonFormGenerationsCreateManyPokemonFormInputEnvelope = {
    data: Prisma.PokemonFormGenerationsCreateManyPokemonFormInput | Prisma.PokemonFormGenerationsCreateManyPokemonFormInput[];
    skipDuplicates?: boolean;
};
export type PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput = {
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedUpdateWithoutPokemonFormInput>;
    create: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutPokemonFormInput>;
};
export type PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput = {
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateWithoutPokemonFormInput, Prisma.PokemonFormGenerationsUncheckedUpdateWithoutPokemonFormInput>;
};
export type PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput = {
    where: Prisma.PokemonFormGenerationsScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateManyMutationInput, Prisma.PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormInput>;
};
export type PokemonFormGenerationsScalarWhereInput = {
    AND?: Prisma.PokemonFormGenerationsScalarWhereInput | Prisma.PokemonFormGenerationsScalarWhereInput[];
    OR?: Prisma.PokemonFormGenerationsScalarWhereInput[];
    NOT?: Prisma.PokemonFormGenerationsScalarWhereInput | Prisma.PokemonFormGenerationsScalarWhereInput[];
    pokemon_form_id?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    generation_id?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
    game_index?: Prisma.IntFilter<"PokemonFormGenerations"> | number;
};
export type PokemonFormGenerationsCreateWithoutGenerationInput = {
    game_index: number;
    pokemonForm: Prisma.PokemonFormsCreateNestedOneWithoutGenerationsInput;
};
export type PokemonFormGenerationsUncheckedCreateWithoutGenerationInput = {
    pokemon_form_id: number;
    game_index: number;
};
export type PokemonFormGenerationsCreateOrConnectWithoutGenerationInput = {
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput>;
};
export type PokemonFormGenerationsCreateManyGenerationInputEnvelope = {
    data: Prisma.PokemonFormGenerationsCreateManyGenerationInput | Prisma.PokemonFormGenerationsCreateManyGenerationInput[];
    skipDuplicates?: boolean;
};
export type PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedUpdateWithoutGenerationInput>;
    create: Prisma.XOR<Prisma.PokemonFormGenerationsCreateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedCreateWithoutGenerationInput>;
};
export type PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateWithoutGenerationInput, Prisma.PokemonFormGenerationsUncheckedUpdateWithoutGenerationInput>;
};
export type PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput = {
    where: Prisma.PokemonFormGenerationsScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateManyMutationInput, Prisma.PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationInput>;
};
export type PokemonFormGenerationsCreateManyPokemonFormInput = {
    generation_id: number;
    game_index: number;
};
export type PokemonFormGenerationsUpdateWithoutPokemonFormInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput;
};
export type PokemonFormGenerationsUncheckedUpdateWithoutPokemonFormInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonFormGenerationsCreateManyGenerationInput = {
    pokemon_form_id: number;
    game_index: number;
};
export type PokemonFormGenerationsUpdateWithoutGenerationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    pokemonForm?: Prisma.PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput;
};
export type PokemonFormGenerationsUncheckedUpdateWithoutGenerationInput = {
    pokemon_form_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationInput = {
    pokemon_form_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonFormGenerationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_form_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    pokemonForm?: boolean | Prisma.PokemonFormsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonFormGenerations"]>;
export type PokemonFormGenerationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_form_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    pokemonForm?: boolean | Prisma.PokemonFormsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonFormGenerations"]>;
export type PokemonFormGenerationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    pokemon_form_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    pokemonForm?: boolean | Prisma.PokemonFormsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonFormGenerations"]>;
export type PokemonFormGenerationsSelectScalar = {
    pokemon_form_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
};
export type PokemonFormGenerationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"pokemon_form_id" | "generation_id" | "game_index", ExtArgs["result"]["pokemonFormGenerations"]>;
export type PokemonFormGenerationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemonForm?: boolean | Prisma.PokemonFormsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type PokemonFormGenerationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemonForm?: boolean | Prisma.PokemonFormsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type PokemonFormGenerationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pokemonForm?: boolean | Prisma.PokemonFormsDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type $PokemonFormGenerationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PokemonFormGenerations";
    objects: {
        pokemonForm: Prisma.$PokemonFormsPayload<ExtArgs>;
        generation: Prisma.$GenerationsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        pokemon_form_id: number;
        generation_id: number;
        game_index: number;
    }, ExtArgs["result"]["pokemonFormGenerations"]>;
    composites: {};
};
export type PokemonFormGenerationsGetPayload<S extends boolean | null | undefined | PokemonFormGenerationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload, S>;
export type PokemonFormGenerationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PokemonFormGenerationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PokemonFormGenerationsCountAggregateInputType | true;
};
export interface PokemonFormGenerationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PokemonFormGenerations'];
        meta: {
            name: 'PokemonFormGenerations';
        };
    };
    /**
     * Find zero or one PokemonFormGenerations that matches the filter.
     * @param {PokemonFormGenerationsFindUniqueArgs} args - Arguments to find a PokemonFormGenerations
     * @example
     * // Get one PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFormGenerationsFindUniqueArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PokemonFormGenerations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFormGenerationsFindUniqueOrThrowArgs} args - Arguments to find a PokemonFormGenerations
     * @example
     * // Get one PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFormGenerationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonFormGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFormGenerationsFindFirstArgs} args - Arguments to find a PokemonFormGenerations
     * @example
     * // Get one PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFormGenerationsFindFirstArgs>(args?: Prisma.SelectSubset<T, PokemonFormGenerationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonFormGenerations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFormGenerationsFindFirstOrThrowArgs} args - Arguments to find a PokemonFormGenerations
     * @example
     * // Get one PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFormGenerationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PokemonFormGenerationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PokemonFormGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFormGenerationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.findMany()
     *
     * // Get first 10 PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.findMany({ take: 10 })
     *
     * // Only select the `pokemon_form_id`
     * const pokemonFormGenerationsWithPokemon_form_idOnly = await prisma.pokemonFormGenerations.findMany({ select: { pokemon_form_id: true } })
     *
     */
    findMany<T extends PokemonFormGenerationsFindManyArgs>(args?: Prisma.SelectSubset<T, PokemonFormGenerationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PokemonFormGenerations.
     * @param {PokemonFormGenerationsCreateArgs} args - Arguments to create a PokemonFormGenerations.
     * @example
     * // Create one PokemonFormGenerations
     * const PokemonFormGenerations = await prisma.pokemonFormGenerations.create({
     *   data: {
     *     // ... data to create a PokemonFormGenerations
     *   }
     * })
     *
     */
    create<T extends PokemonFormGenerationsCreateArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsCreateArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PokemonFormGenerations.
     * @param {PokemonFormGenerationsCreateManyArgs} args - Arguments to create many PokemonFormGenerations.
     * @example
     * // Create many PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PokemonFormGenerationsCreateManyArgs>(args?: Prisma.SelectSubset<T, PokemonFormGenerationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PokemonFormGenerations and returns the data saved in the database.
     * @param {PokemonFormGenerationsCreateManyAndReturnArgs} args - Arguments to create many PokemonFormGenerations.
     * @example
     * // Create many PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PokemonFormGenerations and only return the `pokemon_form_id`
     * const pokemonFormGenerationsWithPokemon_form_idOnly = await prisma.pokemonFormGenerations.createManyAndReturn({
     *   select: { pokemon_form_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PokemonFormGenerationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PokemonFormGenerationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PokemonFormGenerations.
     * @param {PokemonFormGenerationsDeleteArgs} args - Arguments to delete one PokemonFormGenerations.
     * @example
     * // Delete one PokemonFormGenerations
     * const PokemonFormGenerations = await prisma.pokemonFormGenerations.delete({
     *   where: {
     *     // ... filter to delete one PokemonFormGenerations
     *   }
     * })
     *
     */
    delete<T extends PokemonFormGenerationsDeleteArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsDeleteArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PokemonFormGenerations.
     * @param {PokemonFormGenerationsUpdateArgs} args - Arguments to update one PokemonFormGenerations.
     * @example
     * // Update one PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PokemonFormGenerationsUpdateArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsUpdateArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PokemonFormGenerations.
     * @param {PokemonFormGenerationsDeleteManyArgs} args - Arguments to filter PokemonFormGenerations to delete.
     * @example
     * // Delete a few PokemonFormGenerations
     * const { count } = await prisma.pokemonFormGenerations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PokemonFormGenerationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PokemonFormGenerationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonFormGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFormGenerationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PokemonFormGenerationsUpdateManyArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonFormGenerations and returns the data updated in the database.
     * @param {PokemonFormGenerationsUpdateManyAndReturnArgs} args - Arguments to update many PokemonFormGenerations.
     * @example
     * // Update many PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PokemonFormGenerations and only return the `pokemon_form_id`
     * const pokemonFormGenerationsWithPokemon_form_idOnly = await prisma.pokemonFormGenerations.updateManyAndReturn({
     *   select: { pokemon_form_id: true },
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
    updateManyAndReturn<T extends PokemonFormGenerationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PokemonFormGenerations.
     * @param {PokemonFormGenerationsUpsertArgs} args - Arguments to update or create a PokemonFormGenerations.
     * @example
     * // Update or create a PokemonFormGenerations
     * const pokemonFormGenerations = await prisma.pokemonFormGenerations.upsert({
     *   create: {
     *     // ... data to create a PokemonFormGenerations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonFormGenerations we want to update
     *   }
     * })
     */
    upsert<T extends PokemonFormGenerationsUpsertArgs>(args: Prisma.SelectSubset<T, PokemonFormGenerationsUpsertArgs<ExtArgs>>): Prisma.Prisma__PokemonFormGenerationsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormGenerationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PokemonFormGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFormGenerationsCountArgs} args - Arguments to filter PokemonFormGenerations to count.
     * @example
     * // Count the number of PokemonFormGenerations
     * const count = await prisma.pokemonFormGenerations.count({
     *   where: {
     *     // ... the filter for the PokemonFormGenerations we want to count
     *   }
     * })
    **/
    count<T extends PokemonFormGenerationsCountArgs>(args?: Prisma.Subset<T, PokemonFormGenerationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PokemonFormGenerationsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PokemonFormGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFormGenerationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonFormGenerationsAggregateArgs>(args: Prisma.Subset<T, PokemonFormGenerationsAggregateArgs>): Prisma.PrismaPromise<GetPokemonFormGenerationsAggregateType<T>>;
    /**
     * Group by PokemonFormGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFormGenerationsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PokemonFormGenerationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PokemonFormGenerationsGroupByArgs['orderBy'];
    } : {
        orderBy?: PokemonFormGenerationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PokemonFormGenerationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonFormGenerationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PokemonFormGenerations model
     */
    readonly fields: PokemonFormGenerationsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PokemonFormGenerations.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PokemonFormGenerationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pokemonForm<T extends Prisma.PokemonFormsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonFormsDefaultArgs<ExtArgs>>): Prisma.Prisma__PokemonFormsClient<runtime.Types.Result.GetResult<Prisma.$PokemonFormsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PokemonFormGenerations model
 */
export interface PokemonFormGenerationsFieldRefs {
    readonly pokemon_form_id: Prisma.FieldRef<"PokemonFormGenerations", 'Int'>;
    readonly generation_id: Prisma.FieldRef<"PokemonFormGenerations", 'Int'>;
    readonly game_index: Prisma.FieldRef<"PokemonFormGenerations", 'Int'>;
}
/**
 * PokemonFormGenerations findUnique
 */
export type PokemonFormGenerationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonFormGenerations to fetch.
     */
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
};
/**
 * PokemonFormGenerations findUniqueOrThrow
 */
export type PokemonFormGenerationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonFormGenerations to fetch.
     */
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
};
/**
 * PokemonFormGenerations findFirst
 */
export type PokemonFormGenerationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonFormGenerations to fetch.
     */
    where?: Prisma.PokemonFormGenerationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonFormGenerations to fetch.
     */
    orderBy?: Prisma.PokemonFormGenerationsOrderByWithRelationInput | Prisma.PokemonFormGenerationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonFormGenerations.
     */
    cursor?: Prisma.PokemonFormGenerationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonFormGenerations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonFormGenerations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonFormGenerations.
     */
    distinct?: Prisma.PokemonFormGenerationsScalarFieldEnum | Prisma.PokemonFormGenerationsScalarFieldEnum[];
};
/**
 * PokemonFormGenerations findFirstOrThrow
 */
export type PokemonFormGenerationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonFormGenerations to fetch.
     */
    where?: Prisma.PokemonFormGenerationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonFormGenerations to fetch.
     */
    orderBy?: Prisma.PokemonFormGenerationsOrderByWithRelationInput | Prisma.PokemonFormGenerationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonFormGenerations.
     */
    cursor?: Prisma.PokemonFormGenerationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonFormGenerations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonFormGenerations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonFormGenerations.
     */
    distinct?: Prisma.PokemonFormGenerationsScalarFieldEnum | Prisma.PokemonFormGenerationsScalarFieldEnum[];
};
/**
 * PokemonFormGenerations findMany
 */
export type PokemonFormGenerationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonFormGenerations to fetch.
     */
    where?: Prisma.PokemonFormGenerationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonFormGenerations to fetch.
     */
    orderBy?: Prisma.PokemonFormGenerationsOrderByWithRelationInput | Prisma.PokemonFormGenerationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PokemonFormGenerations.
     */
    cursor?: Prisma.PokemonFormGenerationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonFormGenerations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonFormGenerations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonFormGenerations.
     */
    distinct?: Prisma.PokemonFormGenerationsScalarFieldEnum | Prisma.PokemonFormGenerationsScalarFieldEnum[];
};
/**
 * PokemonFormGenerations create
 */
export type PokemonFormGenerationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * The data needed to create a PokemonFormGenerations.
     */
    data: Prisma.XOR<Prisma.PokemonFormGenerationsCreateInput, Prisma.PokemonFormGenerationsUncheckedCreateInput>;
};
/**
 * PokemonFormGenerations createMany
 */
export type PokemonFormGenerationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonFormGenerations.
     */
    data: Prisma.PokemonFormGenerationsCreateManyInput | Prisma.PokemonFormGenerationsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PokemonFormGenerations createManyAndReturn
 */
export type PokemonFormGenerationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * The data used to create many PokemonFormGenerations.
     */
    data: Prisma.PokemonFormGenerationsCreateManyInput | Prisma.PokemonFormGenerationsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonFormGenerations update
 */
export type PokemonFormGenerationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * The data needed to update a PokemonFormGenerations.
     */
    data: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateInput, Prisma.PokemonFormGenerationsUncheckedUpdateInput>;
    /**
     * Choose, which PokemonFormGenerations to update.
     */
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
};
/**
 * PokemonFormGenerations updateMany
 */
export type PokemonFormGenerationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonFormGenerations.
     */
    data: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateManyMutationInput, Prisma.PokemonFormGenerationsUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonFormGenerations to update
     */
    where?: Prisma.PokemonFormGenerationsWhereInput;
    /**
     * Limit how many PokemonFormGenerations to update.
     */
    limit?: number;
};
/**
 * PokemonFormGenerations updateManyAndReturn
 */
export type PokemonFormGenerationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * The data used to update PokemonFormGenerations.
     */
    data: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateManyMutationInput, Prisma.PokemonFormGenerationsUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonFormGenerations to update
     */
    where?: Prisma.PokemonFormGenerationsWhereInput;
    /**
     * Limit how many PokemonFormGenerations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonFormGenerations upsert
 */
export type PokemonFormGenerationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * The filter to search for the PokemonFormGenerations to update in case it exists.
     */
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
    /**
     * In case the PokemonFormGenerations found by the `where` argument doesn't exist, create a new PokemonFormGenerations with this data.
     */
    create: Prisma.XOR<Prisma.PokemonFormGenerationsCreateInput, Prisma.PokemonFormGenerationsUncheckedCreateInput>;
    /**
     * In case the PokemonFormGenerations was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PokemonFormGenerationsUpdateInput, Prisma.PokemonFormGenerationsUncheckedUpdateInput>;
};
/**
 * PokemonFormGenerations delete
 */
export type PokemonFormGenerationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
    /**
     * Filter which PokemonFormGenerations to delete.
     */
    where: Prisma.PokemonFormGenerationsWhereUniqueInput;
};
/**
 * PokemonFormGenerations deleteMany
 */
export type PokemonFormGenerationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonFormGenerations to delete
     */
    where?: Prisma.PokemonFormGenerationsWhereInput;
    /**
     * Limit how many PokemonFormGenerations to delete.
     */
    limit?: number;
};
/**
 * PokemonFormGenerations without action
 */
export type PokemonFormGenerationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonFormGenerations
     */
    select?: Prisma.PokemonFormGenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonFormGenerations
     */
    omit?: Prisma.PokemonFormGenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormGenerationsInclude<ExtArgs> | null;
};
