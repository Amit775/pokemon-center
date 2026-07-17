import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Pokemon
 *
 */
export type PokemonModel = runtime.Types.Result.DefaultSelection<Prisma.$PokemonPayload>;
export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null;
    _avg: PokemonAvgAggregateOutputType | null;
    _sum: PokemonSumAggregateOutputType | null;
    _min: PokemonMinAggregateOutputType | null;
    _max: PokemonMaxAggregateOutputType | null;
};
export type PokemonAvgAggregateOutputType = {
    id: number | null;
    species_id: number | null;
    height: number | null;
    weight: number | null;
    base_experience: number | null;
    order: number | null;
    is_default: number | null;
};
export type PokemonSumAggregateOutputType = {
    id: number | null;
    species_id: number | null;
    height: number | null;
    weight: number | null;
    base_experience: number | null;
    order: number | null;
    is_default: number | null;
};
export type PokemonMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
    species_id: number | null;
    height: number | null;
    weight: number | null;
    base_experience: number | null;
    order: number | null;
    is_default: number | null;
};
export type PokemonMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
    species_id: number | null;
    height: number | null;
    weight: number | null;
    base_experience: number | null;
    order: number | null;
    is_default: number | null;
};
export type PokemonCountAggregateOutputType = {
    id: number;
    identifier: number;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order: number;
    is_default: number;
    _all: number;
};
export type PokemonAvgAggregateInputType = {
    id?: true;
    species_id?: true;
    height?: true;
    weight?: true;
    base_experience?: true;
    order?: true;
    is_default?: true;
};
export type PokemonSumAggregateInputType = {
    id?: true;
    species_id?: true;
    height?: true;
    weight?: true;
    base_experience?: true;
    order?: true;
    is_default?: true;
};
export type PokemonMinAggregateInputType = {
    id?: true;
    identifier?: true;
    species_id?: true;
    height?: true;
    weight?: true;
    base_experience?: true;
    order?: true;
    is_default?: true;
};
export type PokemonMaxAggregateInputType = {
    id?: true;
    identifier?: true;
    species_id?: true;
    height?: true;
    weight?: true;
    base_experience?: true;
    order?: true;
    is_default?: true;
};
export type PokemonCountAggregateInputType = {
    id?: true;
    identifier?: true;
    species_id?: true;
    height?: true;
    weight?: true;
    base_experience?: true;
    order?: true;
    is_default?: true;
    _all?: true;
};
export type PokemonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: Prisma.PokemonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PokemonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pokemon.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType;
};
export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
    [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePokemon[P]> : Prisma.GetScalarType<T[P], AggregatePokemon[P]>;
};
export type PokemonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonWhereInput;
    orderBy?: Prisma.PokemonOrderByWithAggregationInput | Prisma.PokemonOrderByWithAggregationInput[];
    by: Prisma.PokemonScalarFieldEnum[] | Prisma.PokemonScalarFieldEnum;
    having?: Prisma.PokemonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PokemonCountAggregateInputType | true;
    _avg?: PokemonAvgAggregateInputType;
    _sum?: PokemonSumAggregateInputType;
    _min?: PokemonMinAggregateInputType;
    _max?: PokemonMaxAggregateInputType;
};
export type PokemonGroupByOutputType = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order: number | null;
    is_default: number;
    _count: PokemonCountAggregateOutputType | null;
    _avg: PokemonAvgAggregateOutputType | null;
    _sum: PokemonSumAggregateOutputType | null;
    _min: PokemonMinAggregateOutputType | null;
    _max: PokemonMaxAggregateOutputType | null;
};
export type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PokemonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PokemonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PokemonGroupByOutputType[P]>;
}>>;
export type PokemonWhereInput = {
    AND?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    OR?: Prisma.PokemonWhereInput[];
    NOT?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    id?: Prisma.IntFilter<"Pokemon"> | number;
    identifier?: Prisma.StringFilter<"Pokemon"> | string;
    species_id?: Prisma.IntFilter<"Pokemon"> | number;
    height?: Prisma.IntFilter<"Pokemon"> | number;
    weight?: Prisma.IntFilter<"Pokemon"> | number;
    base_experience?: Prisma.IntFilter<"Pokemon"> | number;
    order?: Prisma.IntNullableFilter<"Pokemon"> | number | null;
    is_default?: Prisma.IntFilter<"Pokemon"> | number;
    species?: Prisma.XOR<Prisma.PokemonSpeciesScalarRelationFilter, Prisma.PokemonSpeciesWhereInput>;
    forms?: Prisma.PokemonFormsListRelationFilter;
    abilities?: Prisma.PokemonAbilitiesListRelationFilter;
    moves?: Prisma.PokemonMovesListRelationFilter;
    stats?: Prisma.PokemonStatsListRelationFilter;
    types?: Prisma.PokemonTypesListRelationFilter;
    items?: Prisma.PokemonItemsListRelationFilter;
    gameIndices?: Prisma.PokemonGameIndicesListRelationFilter;
    encounters?: Prisma.EncountersListRelationFilter;
};
export type PokemonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    species_id?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    base_experience?: Prisma.SortOrder;
    order?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    species?: Prisma.PokemonSpeciesOrderByWithRelationInput;
    forms?: Prisma.PokemonFormsOrderByRelationAggregateInput;
    abilities?: Prisma.PokemonAbilitiesOrderByRelationAggregateInput;
    moves?: Prisma.PokemonMovesOrderByRelationAggregateInput;
    stats?: Prisma.PokemonStatsOrderByRelationAggregateInput;
    types?: Prisma.PokemonTypesOrderByRelationAggregateInput;
    items?: Prisma.PokemonItemsOrderByRelationAggregateInput;
    gameIndices?: Prisma.PokemonGameIndicesOrderByRelationAggregateInput;
    encounters?: Prisma.EncountersOrderByRelationAggregateInput;
};
export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    OR?: Prisma.PokemonWhereInput[];
    NOT?: Prisma.PokemonWhereInput | Prisma.PokemonWhereInput[];
    identifier?: Prisma.StringFilter<"Pokemon"> | string;
    species_id?: Prisma.IntFilter<"Pokemon"> | number;
    height?: Prisma.IntFilter<"Pokemon"> | number;
    weight?: Prisma.IntFilter<"Pokemon"> | number;
    base_experience?: Prisma.IntFilter<"Pokemon"> | number;
    order?: Prisma.IntNullableFilter<"Pokemon"> | number | null;
    is_default?: Prisma.IntFilter<"Pokemon"> | number;
    species?: Prisma.XOR<Prisma.PokemonSpeciesScalarRelationFilter, Prisma.PokemonSpeciesWhereInput>;
    forms?: Prisma.PokemonFormsListRelationFilter;
    abilities?: Prisma.PokemonAbilitiesListRelationFilter;
    moves?: Prisma.PokemonMovesListRelationFilter;
    stats?: Prisma.PokemonStatsListRelationFilter;
    types?: Prisma.PokemonTypesListRelationFilter;
    items?: Prisma.PokemonItemsListRelationFilter;
    gameIndices?: Prisma.PokemonGameIndicesListRelationFilter;
    encounters?: Prisma.EncountersListRelationFilter;
}, "id">;
export type PokemonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    species_id?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    base_experience?: Prisma.SortOrder;
    order?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    _count?: Prisma.PokemonCountOrderByAggregateInput;
    _avg?: Prisma.PokemonAvgOrderByAggregateInput;
    _max?: Prisma.PokemonMaxOrderByAggregateInput;
    _min?: Prisma.PokemonMinOrderByAggregateInput;
    _sum?: Prisma.PokemonSumOrderByAggregateInput;
};
export type PokemonScalarWhereWithAggregatesInput = {
    AND?: Prisma.PokemonScalarWhereWithAggregatesInput | Prisma.PokemonScalarWhereWithAggregatesInput[];
    OR?: Prisma.PokemonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PokemonScalarWhereWithAggregatesInput | Prisma.PokemonScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"Pokemon"> | string;
    species_id?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    height?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    weight?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    base_experience?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
    order?: Prisma.IntNullableWithAggregatesFilter<"Pokemon"> | number | null;
    is_default?: Prisma.IntWithAggregatesFilter<"Pokemon"> | number;
};
export type PokemonCreateInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateManyInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
};
export type PokemonUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    species_id?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    base_experience?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type PokemonAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    species_id?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    base_experience?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type PokemonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    species_id?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    base_experience?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type PokemonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    species_id?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    base_experience?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type PokemonSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    species_id?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    base_experience?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type PokemonListRelationFilter = {
    every?: Prisma.PokemonWhereInput;
    some?: Prisma.PokemonWhereInput;
    none?: Prisma.PokemonWhereInput;
};
export type PokemonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PokemonScalarRelationFilter = {
    is?: Prisma.PokemonWhereInput;
    isNot?: Prisma.PokemonWhereInput;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PokemonCreateNestedManyWithoutSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutSpeciesInput, Prisma.PokemonUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonCreateWithoutSpeciesInput[] | Prisma.PokemonUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutSpeciesInput | Prisma.PokemonCreateOrConnectWithoutSpeciesInput[];
    createMany?: Prisma.PokemonCreateManySpeciesInputEnvelope;
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
};
export type PokemonUncheckedCreateNestedManyWithoutSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutSpeciesInput, Prisma.PokemonUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonCreateWithoutSpeciesInput[] | Prisma.PokemonUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutSpeciesInput | Prisma.PokemonCreateOrConnectWithoutSpeciesInput[];
    createMany?: Prisma.PokemonCreateManySpeciesInputEnvelope;
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
};
export type PokemonUpdateManyWithoutSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutSpeciesInput, Prisma.PokemonUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonCreateWithoutSpeciesInput[] | Prisma.PokemonUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutSpeciesInput | Prisma.PokemonCreateOrConnectWithoutSpeciesInput[];
    upsert?: Prisma.PokemonUpsertWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonUpsertWithWhereUniqueWithoutSpeciesInput[];
    createMany?: Prisma.PokemonCreateManySpeciesInputEnvelope;
    set?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    disconnect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    delete?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    update?: Prisma.PokemonUpdateWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonUpdateWithWhereUniqueWithoutSpeciesInput[];
    updateMany?: Prisma.PokemonUpdateManyWithWhereWithoutSpeciesInput | Prisma.PokemonUpdateManyWithWhereWithoutSpeciesInput[];
    deleteMany?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
};
export type PokemonUncheckedUpdateManyWithoutSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutSpeciesInput, Prisma.PokemonUncheckedCreateWithoutSpeciesInput> | Prisma.PokemonCreateWithoutSpeciesInput[] | Prisma.PokemonUncheckedCreateWithoutSpeciesInput[];
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutSpeciesInput | Prisma.PokemonCreateOrConnectWithoutSpeciesInput[];
    upsert?: Prisma.PokemonUpsertWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonUpsertWithWhereUniqueWithoutSpeciesInput[];
    createMany?: Prisma.PokemonCreateManySpeciesInputEnvelope;
    set?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    disconnect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    delete?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    connect?: Prisma.PokemonWhereUniqueInput | Prisma.PokemonWhereUniqueInput[];
    update?: Prisma.PokemonUpdateWithWhereUniqueWithoutSpeciesInput | Prisma.PokemonUpdateWithWhereUniqueWithoutSpeciesInput[];
    updateMany?: Prisma.PokemonUpdateManyWithWhereWithoutSpeciesInput | Prisma.PokemonUpdateManyWithWhereWithoutSpeciesInput[];
    deleteMany?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
};
export type PokemonCreateNestedOneWithoutFormsInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutFormsInput, Prisma.PokemonUncheckedCreateWithoutFormsInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutFormsInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutFormsNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutFormsInput, Prisma.PokemonUncheckedCreateWithoutFormsInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutFormsInput;
    upsert?: Prisma.PokemonUpsertWithoutFormsInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutFormsInput, Prisma.PokemonUpdateWithoutFormsInput>, Prisma.PokemonUncheckedUpdateWithoutFormsInput>;
};
export type PokemonCreateNestedOneWithoutEncountersInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutEncountersInput, Prisma.PokemonUncheckedCreateWithoutEncountersInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutEncountersInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutEncountersNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutEncountersInput, Prisma.PokemonUncheckedCreateWithoutEncountersInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutEncountersInput;
    upsert?: Prisma.PokemonUpsertWithoutEncountersInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutEncountersInput, Prisma.PokemonUpdateWithoutEncountersInput>, Prisma.PokemonUncheckedUpdateWithoutEncountersInput>;
};
export type PokemonCreateNestedOneWithoutAbilitiesInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutAbilitiesInput, Prisma.PokemonUncheckedCreateWithoutAbilitiesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutAbilitiesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutAbilitiesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutAbilitiesInput, Prisma.PokemonUncheckedCreateWithoutAbilitiesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutAbilitiesInput;
    upsert?: Prisma.PokemonUpsertWithoutAbilitiesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutAbilitiesInput, Prisma.PokemonUpdateWithoutAbilitiesInput>, Prisma.PokemonUncheckedUpdateWithoutAbilitiesInput>;
};
export type PokemonCreateNestedOneWithoutMovesInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutMovesInput, Prisma.PokemonUncheckedCreateWithoutMovesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutMovesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutMovesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutMovesInput, Prisma.PokemonUncheckedCreateWithoutMovesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutMovesInput;
    upsert?: Prisma.PokemonUpsertWithoutMovesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutMovesInput, Prisma.PokemonUpdateWithoutMovesInput>, Prisma.PokemonUncheckedUpdateWithoutMovesInput>;
};
export type PokemonCreateNestedOneWithoutStatsInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutStatsInput, Prisma.PokemonUncheckedCreateWithoutStatsInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutStatsInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutStatsNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutStatsInput, Prisma.PokemonUncheckedCreateWithoutStatsInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutStatsInput;
    upsert?: Prisma.PokemonUpsertWithoutStatsInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutStatsInput, Prisma.PokemonUpdateWithoutStatsInput>, Prisma.PokemonUncheckedUpdateWithoutStatsInput>;
};
export type PokemonCreateNestedOneWithoutTypesInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutTypesInput, Prisma.PokemonUncheckedCreateWithoutTypesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutTypesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutTypesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutTypesInput, Prisma.PokemonUncheckedCreateWithoutTypesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutTypesInput;
    upsert?: Prisma.PokemonUpsertWithoutTypesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutTypesInput, Prisma.PokemonUpdateWithoutTypesInput>, Prisma.PokemonUncheckedUpdateWithoutTypesInput>;
};
export type PokemonCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutItemsInput, Prisma.PokemonUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutItemsInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutItemsInput, Prisma.PokemonUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.PokemonUpsertWithoutItemsInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutItemsInput, Prisma.PokemonUpdateWithoutItemsInput>, Prisma.PokemonUncheckedUpdateWithoutItemsInput>;
};
export type PokemonCreateNestedOneWithoutGameIndicesInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutGameIndicesInput, Prisma.PokemonUncheckedCreateWithoutGameIndicesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutGameIndicesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
};
export type PokemonUpdateOneRequiredWithoutGameIndicesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonCreateWithoutGameIndicesInput, Prisma.PokemonUncheckedCreateWithoutGameIndicesInput>;
    connectOrCreate?: Prisma.PokemonCreateOrConnectWithoutGameIndicesInput;
    upsert?: Prisma.PokemonUpsertWithoutGameIndicesInput;
    connect?: Prisma.PokemonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PokemonUpdateToOneWithWhereWithoutGameIndicesInput, Prisma.PokemonUpdateWithoutGameIndicesInput>, Prisma.PokemonUncheckedUpdateWithoutGameIndicesInput>;
};
export type PokemonCreateWithoutSpeciesInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutSpeciesInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutSpeciesInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutSpeciesInput, Prisma.PokemonUncheckedCreateWithoutSpeciesInput>;
};
export type PokemonCreateManySpeciesInputEnvelope = {
    data: Prisma.PokemonCreateManySpeciesInput | Prisma.PokemonCreateManySpeciesInput[];
    skipDuplicates?: boolean;
};
export type PokemonUpsertWithWhereUniqueWithoutSpeciesInput = {
    where: Prisma.PokemonWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutSpeciesInput, Prisma.PokemonUncheckedUpdateWithoutSpeciesInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutSpeciesInput, Prisma.PokemonUncheckedCreateWithoutSpeciesInput>;
};
export type PokemonUpdateWithWhereUniqueWithoutSpeciesInput = {
    where: Prisma.PokemonWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutSpeciesInput, Prisma.PokemonUncheckedUpdateWithoutSpeciesInput>;
};
export type PokemonUpdateManyWithWhereWithoutSpeciesInput = {
    where: Prisma.PokemonScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateManyMutationInput, Prisma.PokemonUncheckedUpdateManyWithoutSpeciesInput>;
};
export type PokemonScalarWhereInput = {
    AND?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
    OR?: Prisma.PokemonScalarWhereInput[];
    NOT?: Prisma.PokemonScalarWhereInput | Prisma.PokemonScalarWhereInput[];
    id?: Prisma.IntFilter<"Pokemon"> | number;
    identifier?: Prisma.StringFilter<"Pokemon"> | string;
    species_id?: Prisma.IntFilter<"Pokemon"> | number;
    height?: Prisma.IntFilter<"Pokemon"> | number;
    weight?: Prisma.IntFilter<"Pokemon"> | number;
    base_experience?: Prisma.IntFilter<"Pokemon"> | number;
    order?: Prisma.IntNullableFilter<"Pokemon"> | number | null;
    is_default?: Prisma.IntFilter<"Pokemon"> | number;
};
export type PokemonCreateWithoutFormsInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutFormsInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutFormsInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutFormsInput, Prisma.PokemonUncheckedCreateWithoutFormsInput>;
};
export type PokemonUpsertWithoutFormsInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutFormsInput, Prisma.PokemonUncheckedUpdateWithoutFormsInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutFormsInput, Prisma.PokemonUncheckedCreateWithoutFormsInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutFormsInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutFormsInput, Prisma.PokemonUncheckedUpdateWithoutFormsInput>;
};
export type PokemonUpdateWithoutFormsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutFormsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateWithoutEncountersInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutEncountersInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutEncountersInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutEncountersInput, Prisma.PokemonUncheckedCreateWithoutEncountersInput>;
};
export type PokemonUpsertWithoutEncountersInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutEncountersInput, Prisma.PokemonUncheckedUpdateWithoutEncountersInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutEncountersInput, Prisma.PokemonUncheckedCreateWithoutEncountersInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutEncountersInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutEncountersInput, Prisma.PokemonUncheckedUpdateWithoutEncountersInput>;
};
export type PokemonUpdateWithoutEncountersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutEncountersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateWithoutAbilitiesInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutAbilitiesInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutAbilitiesInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutAbilitiesInput, Prisma.PokemonUncheckedCreateWithoutAbilitiesInput>;
};
export type PokemonUpsertWithoutAbilitiesInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutAbilitiesInput, Prisma.PokemonUncheckedUpdateWithoutAbilitiesInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutAbilitiesInput, Prisma.PokemonUncheckedCreateWithoutAbilitiesInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutAbilitiesInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutAbilitiesInput, Prisma.PokemonUncheckedUpdateWithoutAbilitiesInput>;
};
export type PokemonUpdateWithoutAbilitiesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutAbilitiesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateWithoutMovesInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutMovesInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutMovesInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutMovesInput, Prisma.PokemonUncheckedCreateWithoutMovesInput>;
};
export type PokemonUpsertWithoutMovesInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutMovesInput, Prisma.PokemonUncheckedUpdateWithoutMovesInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutMovesInput, Prisma.PokemonUncheckedCreateWithoutMovesInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutMovesInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutMovesInput, Prisma.PokemonUncheckedUpdateWithoutMovesInput>;
};
export type PokemonUpdateWithoutMovesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutMovesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateWithoutStatsInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutStatsInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutStatsInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutStatsInput, Prisma.PokemonUncheckedCreateWithoutStatsInput>;
};
export type PokemonUpsertWithoutStatsInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutStatsInput, Prisma.PokemonUncheckedUpdateWithoutStatsInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutStatsInput, Prisma.PokemonUncheckedCreateWithoutStatsInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutStatsInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutStatsInput, Prisma.PokemonUncheckedUpdateWithoutStatsInput>;
};
export type PokemonUpdateWithoutStatsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutStatsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateWithoutTypesInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutTypesInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutTypesInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutTypesInput, Prisma.PokemonUncheckedCreateWithoutTypesInput>;
};
export type PokemonUpsertWithoutTypesInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutTypesInput, Prisma.PokemonUncheckedUpdateWithoutTypesInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutTypesInput, Prisma.PokemonUncheckedCreateWithoutTypesInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutTypesInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutTypesInput, Prisma.PokemonUncheckedUpdateWithoutTypesInput>;
};
export type PokemonUpdateWithoutTypesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutTypesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateWithoutItemsInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutItemsInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutItemsInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutItemsInput, Prisma.PokemonUncheckedCreateWithoutItemsInput>;
};
export type PokemonUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutItemsInput, Prisma.PokemonUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutItemsInput, Prisma.PokemonUncheckedCreateWithoutItemsInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutItemsInput, Prisma.PokemonUncheckedUpdateWithoutItemsInput>;
};
export type PokemonUpdateWithoutItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateWithoutGameIndicesInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    species: Prisma.PokemonSpeciesCreateNestedOneWithoutPokemonInput;
    forms?: Prisma.PokemonFormsCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersCreateNestedManyWithoutPokemonInput;
};
export type PokemonUncheckedCreateWithoutGameIndicesInput = {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
    forms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;
    moves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;
    stats?: Prisma.PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;
    types?: Prisma.PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;
    items?: Prisma.PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;
    encounters?: Prisma.EncountersUncheckedCreateNestedManyWithoutPokemonInput;
};
export type PokemonCreateOrConnectWithoutGameIndicesInput = {
    where: Prisma.PokemonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutGameIndicesInput, Prisma.PokemonUncheckedCreateWithoutGameIndicesInput>;
};
export type PokemonUpsertWithoutGameIndicesInput = {
    update: Prisma.XOR<Prisma.PokemonUpdateWithoutGameIndicesInput, Prisma.PokemonUncheckedUpdateWithoutGameIndicesInput>;
    create: Prisma.XOR<Prisma.PokemonCreateWithoutGameIndicesInput, Prisma.PokemonUncheckedCreateWithoutGameIndicesInput>;
    where?: Prisma.PokemonWhereInput;
};
export type PokemonUpdateToOneWithWhereWithoutGameIndicesInput = {
    where?: Prisma.PokemonWhereInput;
    data: Prisma.XOR<Prisma.PokemonUpdateWithoutGameIndicesInput, Prisma.PokemonUncheckedUpdateWithoutGameIndicesInput>;
};
export type PokemonUpdateWithoutGameIndicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    species?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutGameIndicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonCreateManySpeciesInput = {
    id: number;
    identifier: string;
    height: number;
    weight: number;
    base_experience: number;
    order?: number | null;
    is_default: number;
};
export type PokemonUpdateWithoutSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateWithoutSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
    forms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput;
    abilities?: Prisma.PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput;
    moves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput;
    stats?: Prisma.PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput;
    types?: Prisma.PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput;
    items?: Prisma.PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput;
    gameIndices?: Prisma.PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput;
    encounters?: Prisma.EncountersUncheckedUpdateManyWithoutPokemonNestedInput;
};
export type PokemonUncheckedUpdateManyWithoutSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    base_experience?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_default?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type PokemonCountOutputType
 */
export type PokemonCountOutputType = {
    forms: number;
    abilities: number;
    moves: number;
    stats: number;
    types: number;
    items: number;
    gameIndices: number;
    encounters: number;
};
export type PokemonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    forms?: boolean | PokemonCountOutputTypeCountFormsArgs;
    abilities?: boolean | PokemonCountOutputTypeCountAbilitiesArgs;
    moves?: boolean | PokemonCountOutputTypeCountMovesArgs;
    stats?: boolean | PokemonCountOutputTypeCountStatsArgs;
    types?: boolean | PokemonCountOutputTypeCountTypesArgs;
    items?: boolean | PokemonCountOutputTypeCountItemsArgs;
    gameIndices?: boolean | PokemonCountOutputTypeCountGameIndicesArgs;
    encounters?: boolean | PokemonCountOutputTypeCountEncountersArgs;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: Prisma.PokemonCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonFormsWhereInput;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountAbilitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonAbilitiesWhereInput;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountMovesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonMovesWhereInput;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountStatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonStatsWhereInput;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountTypesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonTypesWhereInput;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonItemsWhereInput;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountGameIndicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonGameIndicesWhereInput;
};
/**
 * PokemonCountOutputType without action
 */
export type PokemonCountOutputTypeCountEncountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncountersWhereInput;
};
export type PokemonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    species_id?: boolean;
    height?: boolean;
    weight?: boolean;
    base_experience?: boolean;
    order?: boolean;
    is_default?: boolean;
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    forms?: boolean | Prisma.Pokemon$formsArgs<ExtArgs>;
    abilities?: boolean | Prisma.Pokemon$abilitiesArgs<ExtArgs>;
    moves?: boolean | Prisma.Pokemon$movesArgs<ExtArgs>;
    stats?: boolean | Prisma.Pokemon$statsArgs<ExtArgs>;
    types?: boolean | Prisma.Pokemon$typesArgs<ExtArgs>;
    items?: boolean | Prisma.Pokemon$itemsArgs<ExtArgs>;
    gameIndices?: boolean | Prisma.Pokemon$gameIndicesArgs<ExtArgs>;
    encounters?: boolean | Prisma.Pokemon$encountersArgs<ExtArgs>;
    _count?: boolean | Prisma.PokemonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemon"]>;
export type PokemonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    species_id?: boolean;
    height?: boolean;
    weight?: boolean;
    base_experience?: boolean;
    order?: boolean;
    is_default?: boolean;
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemon"]>;
export type PokemonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    species_id?: boolean;
    height?: boolean;
    weight?: boolean;
    base_experience?: boolean;
    order?: boolean;
    is_default?: boolean;
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pokemon"]>;
export type PokemonSelectScalar = {
    id?: boolean;
    identifier?: boolean;
    species_id?: boolean;
    height?: boolean;
    weight?: boolean;
    base_experience?: boolean;
    order?: boolean;
    is_default?: boolean;
};
export type PokemonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier" | "species_id" | "height" | "weight" | "base_experience" | "order" | "is_default", ExtArgs["result"]["pokemon"]>;
export type PokemonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    forms?: boolean | Prisma.Pokemon$formsArgs<ExtArgs>;
    abilities?: boolean | Prisma.Pokemon$abilitiesArgs<ExtArgs>;
    moves?: boolean | Prisma.Pokemon$movesArgs<ExtArgs>;
    stats?: boolean | Prisma.Pokemon$statsArgs<ExtArgs>;
    types?: boolean | Prisma.Pokemon$typesArgs<ExtArgs>;
    items?: boolean | Prisma.Pokemon$itemsArgs<ExtArgs>;
    gameIndices?: boolean | Prisma.Pokemon$gameIndicesArgs<ExtArgs>;
    encounters?: boolean | Prisma.Pokemon$encountersArgs<ExtArgs>;
    _count?: boolean | Prisma.PokemonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PokemonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
};
export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
};
export type $PokemonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pokemon";
    objects: {
        species: Prisma.$PokemonSpeciesPayload<ExtArgs>;
        forms: Prisma.$PokemonFormsPayload<ExtArgs>[];
        abilities: Prisma.$PokemonAbilitiesPayload<ExtArgs>[];
        moves: Prisma.$PokemonMovesPayload<ExtArgs>[];
        stats: Prisma.$PokemonStatsPayload<ExtArgs>[];
        types: Prisma.$PokemonTypesPayload<ExtArgs>[];
        items: Prisma.$PokemonItemsPayload<ExtArgs>[];
        gameIndices: Prisma.$PokemonGameIndicesPayload<ExtArgs>[];
        encounters: Prisma.$EncountersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
        species_id: number;
        height: number;
        weight: number;
        base_experience: number;
        order: number | null;
        is_default: number;
    }, ExtArgs["result"]["pokemon"]>;
    composites: {};
};
export type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PokemonPayload, S>;
export type PokemonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PokemonCountAggregateInputType | true;
};
export interface PokemonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'];
        meta: {
            name: 'Pokemon';
        };
    };
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: Prisma.SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: Prisma.SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     *
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PokemonFindManyArgs>(args?: Prisma.SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     *
     */
    create<T extends PokemonCreateArgs>(args: Prisma.SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PokemonCreateManyArgs>(args?: Prisma.SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     *
     */
    delete<T extends PokemonDeleteArgs>(args: Prisma.SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PokemonUpdateArgs>(args: Prisma.SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: Prisma.SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: Prisma.SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pokemon and returns the data updated in the database.
     * @param {PokemonUpdateManyAndReturnArgs} args - Arguments to update many Pokemon.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.updateManyAndReturn({
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
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: Prisma.SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma.Prisma__PokemonClient<runtime.Types.Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(args?: Prisma.Subset<T, PokemonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PokemonCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonAggregateArgs>(args: Prisma.Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>;
    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PokemonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PokemonGroupByArgs['orderBy'];
    } : {
        orderBy?: PokemonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Pokemon model
     */
    readonly fields: PokemonFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Pokemon.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    species<T extends Prisma.PokemonSpeciesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonSpeciesDefaultArgs<ExtArgs>>): Prisma.Prisma__PokemonSpeciesClient<runtime.Types.Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    forms<T extends Prisma.Pokemon$formsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$formsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonFormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    abilities<T extends Prisma.Pokemon$abilitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$abilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonAbilitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    moves<T extends Prisma.Pokemon$movesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$movesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonMovesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stats<T extends Prisma.Pokemon$statsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$statsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    types<T extends Prisma.Pokemon$typesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$typesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    items<T extends Prisma.Pokemon$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gameIndices<T extends Prisma.Pokemon$gameIndicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$gameIndicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonGameIndicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    encounters<T extends Prisma.Pokemon$encountersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pokemon$encountersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncountersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Pokemon model
 */
export interface PokemonFieldRefs {
    readonly id: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly identifier: Prisma.FieldRef<"Pokemon", 'String'>;
    readonly species_id: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly height: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly weight: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly base_experience: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly order: Prisma.FieldRef<"Pokemon", 'Int'>;
    readonly is_default: Prisma.FieldRef<"Pokemon", 'Int'>;
}
/**
 * Pokemon findUnique
 */
export type PokemonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * Filter, which Pokemon to fetch.
     */
    where: Prisma.PokemonWhereUniqueInput;
};
/**
 * Pokemon findUniqueOrThrow
 */
export type PokemonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * Filter, which Pokemon to fetch.
     */
    where: Prisma.PokemonWhereUniqueInput;
};
/**
 * Pokemon findFirst
 */
export type PokemonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: Prisma.PokemonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pokemon.
     */
    cursor?: Prisma.PokemonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pokemon.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pokemon.
     */
    distinct?: Prisma.PokemonScalarFieldEnum | Prisma.PokemonScalarFieldEnum[];
};
/**
 * Pokemon findFirstOrThrow
 */
export type PokemonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: Prisma.PokemonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pokemon.
     */
    cursor?: Prisma.PokemonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pokemon.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pokemon.
     */
    distinct?: Prisma.PokemonScalarFieldEnum | Prisma.PokemonScalarFieldEnum[];
};
/**
 * Pokemon findMany
 */
export type PokemonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: Prisma.PokemonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: Prisma.PokemonOrderByWithRelationInput | Prisma.PokemonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pokemon.
     */
    cursor?: Prisma.PokemonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pokemon.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pokemon.
     */
    distinct?: Prisma.PokemonScalarFieldEnum | Prisma.PokemonScalarFieldEnum[];
};
/**
 * Pokemon create
 */
export type PokemonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * The data needed to create a Pokemon.
     */
    data: Prisma.XOR<Prisma.PokemonCreateInput, Prisma.PokemonUncheckedCreateInput>;
};
/**
 * Pokemon createMany
 */
export type PokemonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: Prisma.PokemonCreateManyInput | Prisma.PokemonCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Pokemon createManyAndReturn
 */
export type PokemonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * The data used to create many Pokemon.
     */
    data: Prisma.PokemonCreateManyInput | Prisma.PokemonCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Pokemon update
 */
export type PokemonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * The data needed to update a Pokemon.
     */
    data: Prisma.XOR<Prisma.PokemonUpdateInput, Prisma.PokemonUncheckedUpdateInput>;
    /**
     * Choose, which Pokemon to update.
     */
    where: Prisma.PokemonWhereUniqueInput;
};
/**
 * Pokemon updateMany
 */
export type PokemonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: Prisma.XOR<Prisma.PokemonUpdateManyMutationInput, Prisma.PokemonUncheckedUpdateManyInput>;
    /**
     * Filter which Pokemon to update
     */
    where?: Prisma.PokemonWhereInput;
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number;
};
/**
 * Pokemon updateManyAndReturn
 */
export type PokemonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * The data used to update Pokemon.
     */
    data: Prisma.XOR<Prisma.PokemonUpdateManyMutationInput, Prisma.PokemonUncheckedUpdateManyInput>;
    /**
     * Filter which Pokemon to update
     */
    where?: Prisma.PokemonWhereInput;
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Pokemon upsert
 */
export type PokemonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: Prisma.PokemonWhereUniqueInput;
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: Prisma.XOR<Prisma.PokemonCreateInput, Prisma.PokemonUncheckedCreateInput>;
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PokemonUpdateInput, Prisma.PokemonUncheckedUpdateInput>;
};
/**
 * Pokemon delete
 */
export type PokemonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
    /**
     * Filter which Pokemon to delete.
     */
    where: Prisma.PokemonWhereUniqueInput;
};
/**
 * Pokemon deleteMany
 */
export type PokemonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: Prisma.PokemonWhereInput;
    /**
     * Limit how many Pokemon to delete.
     */
    limit?: number;
};
/**
 * Pokemon.forms
 */
export type Pokemon$formsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonForms
     */
    select?: Prisma.PokemonFormsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonForms
     */
    omit?: Prisma.PokemonFormsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonFormsInclude<ExtArgs> | null;
    where?: Prisma.PokemonFormsWhereInput;
    orderBy?: Prisma.PokemonFormsOrderByWithRelationInput | Prisma.PokemonFormsOrderByWithRelationInput[];
    cursor?: Prisma.PokemonFormsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonFormsScalarFieldEnum | Prisma.PokemonFormsScalarFieldEnum[];
};
/**
 * Pokemon.abilities
 */
export type Pokemon$abilitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PokemonAbilitiesWhereInput;
    orderBy?: Prisma.PokemonAbilitiesOrderByWithRelationInput | Prisma.PokemonAbilitiesOrderByWithRelationInput[];
    cursor?: Prisma.PokemonAbilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonAbilitiesScalarFieldEnum | Prisma.PokemonAbilitiesScalarFieldEnum[];
};
/**
 * Pokemon.moves
 */
export type Pokemon$movesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonMoves
     */
    select?: Prisma.PokemonMovesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonMoves
     */
    omit?: Prisma.PokemonMovesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonMovesInclude<ExtArgs> | null;
    where?: Prisma.PokemonMovesWhereInput;
    orderBy?: Prisma.PokemonMovesOrderByWithRelationInput | Prisma.PokemonMovesOrderByWithRelationInput[];
    cursor?: Prisma.PokemonMovesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonMovesScalarFieldEnum | Prisma.PokemonMovesScalarFieldEnum[];
};
/**
 * Pokemon.stats
 */
export type Pokemon$statsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: Prisma.PokemonStatsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: Prisma.PokemonStatsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonStatsInclude<ExtArgs> | null;
    where?: Prisma.PokemonStatsWhereInput;
    orderBy?: Prisma.PokemonStatsOrderByWithRelationInput | Prisma.PokemonStatsOrderByWithRelationInput[];
    cursor?: Prisma.PokemonStatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonStatsScalarFieldEnum | Prisma.PokemonStatsScalarFieldEnum[];
};
/**
 * Pokemon.types
 */
export type Pokemon$typesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonTypes
     */
    select?: Prisma.PokemonTypesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonTypes
     */
    omit?: Prisma.PokemonTypesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonTypesInclude<ExtArgs> | null;
    where?: Prisma.PokemonTypesWhereInput;
    orderBy?: Prisma.PokemonTypesOrderByWithRelationInput | Prisma.PokemonTypesOrderByWithRelationInput[];
    cursor?: Prisma.PokemonTypesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonTypesScalarFieldEnum | Prisma.PokemonTypesScalarFieldEnum[];
};
/**
 * Pokemon.items
 */
export type Pokemon$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PokemonItemsWhereInput;
    orderBy?: Prisma.PokemonItemsOrderByWithRelationInput | Prisma.PokemonItemsOrderByWithRelationInput[];
    cursor?: Prisma.PokemonItemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonItemsScalarFieldEnum | Prisma.PokemonItemsScalarFieldEnum[];
};
/**
 * Pokemon.gameIndices
 */
export type Pokemon$gameIndicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonGameIndices
     */
    select?: Prisma.PokemonGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonGameIndices
     */
    omit?: Prisma.PokemonGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonGameIndicesInclude<ExtArgs> | null;
    where?: Prisma.PokemonGameIndicesWhereInput;
    orderBy?: Prisma.PokemonGameIndicesOrderByWithRelationInput | Prisma.PokemonGameIndicesOrderByWithRelationInput[];
    cursor?: Prisma.PokemonGameIndicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonGameIndicesScalarFieldEnum | Prisma.PokemonGameIndicesScalarFieldEnum[];
};
/**
 * Pokemon.encounters
 */
export type Pokemon$encountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounters
     */
    select?: Prisma.EncountersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Encounters
     */
    omit?: Prisma.EncountersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EncountersInclude<ExtArgs> | null;
    where?: Prisma.EncountersWhereInput;
    orderBy?: Prisma.EncountersOrderByWithRelationInput | Prisma.EncountersOrderByWithRelationInput[];
    cursor?: Prisma.EncountersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncountersScalarFieldEnum | Prisma.EncountersScalarFieldEnum[];
};
/**
 * Pokemon without action
 */
export type PokemonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: Prisma.PokemonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: Prisma.PokemonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonInclude<ExtArgs> | null;
};
