import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model VersionGroups
 * @@TypeGraphQL.type(name: "VersionGroup")
 */
export type VersionGroupsModel = runtime.Types.Result.DefaultSelection<Prisma.$VersionGroupsPayload>;
export type AggregateVersionGroups = {
    _count: VersionGroupsCountAggregateOutputType | null;
    _avg: VersionGroupsAvgAggregateOutputType | null;
    _sum: VersionGroupsSumAggregateOutputType | null;
    _min: VersionGroupsMinAggregateOutputType | null;
    _max: VersionGroupsMaxAggregateOutputType | null;
};
export type VersionGroupsAvgAggregateOutputType = {
    id: number | null;
    generation_id: number | null;
    order: number | null;
};
export type VersionGroupsSumAggregateOutputType = {
    id: number | null;
    generation_id: number | null;
    order: number | null;
};
export type VersionGroupsMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
    generation_id: number | null;
    order: number | null;
};
export type VersionGroupsMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
    generation_id: number | null;
    order: number | null;
};
export type VersionGroupsCountAggregateOutputType = {
    id: number;
    identifier: number;
    generation_id: number;
    order: number;
    _all: number;
};
export type VersionGroupsAvgAggregateInputType = {
    id?: true;
    generation_id?: true;
    order?: true;
};
export type VersionGroupsSumAggregateInputType = {
    id?: true;
    generation_id?: true;
    order?: true;
};
export type VersionGroupsMinAggregateInputType = {
    id?: true;
    identifier?: true;
    generation_id?: true;
    order?: true;
};
export type VersionGroupsMaxAggregateInputType = {
    id?: true;
    identifier?: true;
    generation_id?: true;
    order?: true;
};
export type VersionGroupsCountAggregateInputType = {
    id?: true;
    identifier?: true;
    generation_id?: true;
    order?: true;
    _all?: true;
};
export type VersionGroupsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VersionGroups to aggregate.
     */
    where?: Prisma.VersionGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VersionGroups to fetch.
     */
    orderBy?: Prisma.VersionGroupsOrderByWithRelationInput | Prisma.VersionGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VersionGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VersionGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VersionGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VersionGroups
    **/
    _count?: true | VersionGroupsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: VersionGroupsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: VersionGroupsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VersionGroupsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VersionGroupsMaxAggregateInputType;
};
export type GetVersionGroupsAggregateType<T extends VersionGroupsAggregateArgs> = {
    [P in keyof T & keyof AggregateVersionGroups]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVersionGroups[P]> : Prisma.GetScalarType<T[P], AggregateVersionGroups[P]>;
};
export type VersionGroupsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VersionGroupsWhereInput;
    orderBy?: Prisma.VersionGroupsOrderByWithAggregationInput | Prisma.VersionGroupsOrderByWithAggregationInput[];
    by: Prisma.VersionGroupsScalarFieldEnum[] | Prisma.VersionGroupsScalarFieldEnum;
    having?: Prisma.VersionGroupsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VersionGroupsCountAggregateInputType | true;
    _avg?: VersionGroupsAvgAggregateInputType;
    _sum?: VersionGroupsSumAggregateInputType;
    _min?: VersionGroupsMinAggregateInputType;
    _max?: VersionGroupsMaxAggregateInputType;
};
export type VersionGroupsGroupByOutputType = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    _count: VersionGroupsCountAggregateOutputType | null;
    _avg: VersionGroupsAvgAggregateOutputType | null;
    _sum: VersionGroupsSumAggregateOutputType | null;
    _min: VersionGroupsMinAggregateOutputType | null;
    _max: VersionGroupsMaxAggregateOutputType | null;
};
export type GetVersionGroupsGroupByPayload<T extends VersionGroupsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VersionGroupsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VersionGroupsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VersionGroupsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VersionGroupsGroupByOutputType[P]>;
}>>;
export type VersionGroupsWhereInput = {
    AND?: Prisma.VersionGroupsWhereInput | Prisma.VersionGroupsWhereInput[];
    OR?: Prisma.VersionGroupsWhereInput[];
    NOT?: Prisma.VersionGroupsWhereInput | Prisma.VersionGroupsWhereInput[];
    id?: Prisma.IntFilter<"VersionGroups"> | number;
    identifier?: Prisma.StringFilter<"VersionGroups"> | string;
    generation_id?: Prisma.IntFilter<"VersionGroups"> | number;
    order?: Prisma.IntFilter<"VersionGroups"> | number;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
    versions?: Prisma.VersionsListRelationFilter;
    encounterSlots?: Prisma.EncounterSlotsListRelationFilter;
    machines?: Prisma.MachinesListRelationFilter;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsListRelationFilter;
    versionGroupRegions?: Prisma.VersionGroupRegionsListRelationFilter;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsListRelationFilter;
    pokemonMoves?: Prisma.PokemonMovesListRelationFilter;
    pokemonForms?: Prisma.PokemonFormsListRelationFilter;
};
export type VersionGroupsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    generation?: Prisma.GenerationsOrderByWithRelationInput;
    versions?: Prisma.VersionsOrderByRelationAggregateInput;
    encounterSlots?: Prisma.EncounterSlotsOrderByRelationAggregateInput;
    machines?: Prisma.MachinesOrderByRelationAggregateInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsOrderByRelationAggregateInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsOrderByRelationAggregateInput;
    pokemonMoves?: Prisma.PokemonMovesOrderByRelationAggregateInput;
    pokemonForms?: Prisma.PokemonFormsOrderByRelationAggregateInput;
};
export type VersionGroupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.VersionGroupsWhereInput | Prisma.VersionGroupsWhereInput[];
    OR?: Prisma.VersionGroupsWhereInput[];
    NOT?: Prisma.VersionGroupsWhereInput | Prisma.VersionGroupsWhereInput[];
    identifier?: Prisma.StringFilter<"VersionGroups"> | string;
    generation_id?: Prisma.IntFilter<"VersionGroups"> | number;
    order?: Prisma.IntFilter<"VersionGroups"> | number;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
    versions?: Prisma.VersionsListRelationFilter;
    encounterSlots?: Prisma.EncounterSlotsListRelationFilter;
    machines?: Prisma.MachinesListRelationFilter;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsListRelationFilter;
    versionGroupRegions?: Prisma.VersionGroupRegionsListRelationFilter;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsListRelationFilter;
    pokemonMoves?: Prisma.PokemonMovesListRelationFilter;
    pokemonForms?: Prisma.PokemonFormsListRelationFilter;
}, "id">;
export type VersionGroupsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    _count?: Prisma.VersionGroupsCountOrderByAggregateInput;
    _avg?: Prisma.VersionGroupsAvgOrderByAggregateInput;
    _max?: Prisma.VersionGroupsMaxOrderByAggregateInput;
    _min?: Prisma.VersionGroupsMinOrderByAggregateInput;
    _sum?: Prisma.VersionGroupsSumOrderByAggregateInput;
};
export type VersionGroupsScalarWhereWithAggregatesInput = {
    AND?: Prisma.VersionGroupsScalarWhereWithAggregatesInput | Prisma.VersionGroupsScalarWhereWithAggregatesInput[];
    OR?: Prisma.VersionGroupsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VersionGroupsScalarWhereWithAggregatesInput | Prisma.VersionGroupsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"VersionGroups"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"VersionGroups"> | string;
    generation_id?: Prisma.IntWithAggregatesFilter<"VersionGroups"> | number;
    order?: Prisma.IntWithAggregatesFilter<"VersionGroups"> | number;
};
export type VersionGroupsCreateInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateManyInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
};
export type VersionGroupsUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VersionGroupsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VersionGroupsScalarRelationFilter = {
    is?: Prisma.VersionGroupsWhereInput;
    isNot?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsListRelationFilter = {
    every?: Prisma.VersionGroupsWhereInput;
    some?: Prisma.VersionGroupsWhereInput;
    none?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VersionGroupsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type VersionGroupsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type VersionGroupsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type VersionGroupsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type VersionGroupsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
};
export type VersionGroupsCreateNestedOneWithoutPokemonFormsInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonFormsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonFormsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutPokemonFormsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonFormsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonFormsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutPokemonFormsInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutPokemonFormsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput, Prisma.VersionGroupsUpdateWithoutPokemonFormsInput>, Prisma.VersionGroupsUncheckedUpdateWithoutPokemonFormsInput>;
};
export type VersionGroupsCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutGenerationInput, Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput> | Prisma.VersionGroupsCreateWithoutGenerationInput[] | Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput | Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.VersionGroupsCreateManyGenerationInputEnvelope;
    connect?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
};
export type VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutGenerationInput, Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput> | Prisma.VersionGroupsCreateWithoutGenerationInput[] | Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput | Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.VersionGroupsCreateManyGenerationInputEnvelope;
    connect?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
};
export type VersionGroupsUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutGenerationInput, Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput> | Prisma.VersionGroupsCreateWithoutGenerationInput[] | Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput | Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput | Prisma.VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.VersionGroupsCreateManyGenerationInputEnvelope;
    set?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    disconnect?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    delete?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    connect?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    update?: Prisma.VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput | Prisma.VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.VersionGroupsUpdateManyWithWhereWithoutGenerationInput | Prisma.VersionGroupsUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.VersionGroupsScalarWhereInput | Prisma.VersionGroupsScalarWhereInput[];
};
export type VersionGroupsUncheckedUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutGenerationInput, Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput> | Prisma.VersionGroupsCreateWithoutGenerationInput[] | Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput | Prisma.VersionGroupsCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput | Prisma.VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.VersionGroupsCreateManyGenerationInputEnvelope;
    set?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    disconnect?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    delete?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    connect?: Prisma.VersionGroupsWhereUniqueInput | Prisma.VersionGroupsWhereUniqueInput[];
    update?: Prisma.VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput | Prisma.VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.VersionGroupsUpdateManyWithWhereWithoutGenerationInput | Prisma.VersionGroupsUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.VersionGroupsScalarWhereInput | Prisma.VersionGroupsScalarWhereInput[];
};
export type VersionGroupsCreateNestedOneWithoutVersionsInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutVersionsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutVersionsInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutVersionsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutVersionsInput, Prisma.VersionGroupsUpdateWithoutVersionsInput>, Prisma.VersionGroupsUncheckedUpdateWithoutVersionsInput>;
};
export type VersionGroupsCreateNestedOneWithoutMachinesInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutMachinesInput, Prisma.VersionGroupsUncheckedCreateWithoutMachinesInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutMachinesInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutMachinesInput, Prisma.VersionGroupsUncheckedCreateWithoutMachinesInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutMachinesInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutMachinesInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutMachinesInput, Prisma.VersionGroupsUpdateWithoutMachinesInput>, Prisma.VersionGroupsUncheckedUpdateWithoutMachinesInput>;
};
export type VersionGroupsCreateNestedOneWithoutEncounterSlotsInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutEncounterSlotsInput, Prisma.VersionGroupsUncheckedCreateWithoutEncounterSlotsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutEncounterSlotsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutEncounterSlotsInput, Prisma.VersionGroupsUncheckedCreateWithoutEncounterSlotsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutEncounterSlotsInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutEncounterSlotsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput, Prisma.VersionGroupsUpdateWithoutEncounterSlotsInput>, Prisma.VersionGroupsUncheckedUpdateWithoutEncounterSlotsInput>;
};
export type VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupPokemonMoveMethodsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupPokemonMoveMethodsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput, Prisma.VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput>, Prisma.VersionGroupsUncheckedUpdateWithoutVersionGroupPokemonMoveMethodsInput>;
};
export type VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupRegionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupRegionsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupRegionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupRegionsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutVersionGroupRegionsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput, Prisma.VersionGroupsUpdateWithoutVersionGroupRegionsInput>, Prisma.VersionGroupsUncheckedUpdateWithoutVersionGroupRegionsInput>;
};
export type VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokedexVersionGroupsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokedexVersionGroupsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokedexVersionGroupsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokedexVersionGroupsInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutPokedexVersionGroupsInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput, Prisma.VersionGroupsUpdateWithoutPokedexVersionGroupsInput>, Prisma.VersionGroupsUncheckedUpdateWithoutPokedexVersionGroupsInput>;
};
export type VersionGroupsCreateNestedOneWithoutPokemonMovesInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonMovesInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonMovesInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutPokemonMovesInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
};
export type VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput = {
    create?: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonMovesInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonMovesInput>;
    connectOrCreate?: Prisma.VersionGroupsCreateOrConnectWithoutPokemonMovesInput;
    upsert?: Prisma.VersionGroupsUpsertWithoutPokemonMovesInput;
    connect?: Prisma.VersionGroupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput, Prisma.VersionGroupsUpdateWithoutPokemonMovesInput>, Prisma.VersionGroupsUncheckedUpdateWithoutPokemonMovesInput>;
};
export type VersionGroupsCreateWithoutPokemonFormsInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutPokemonFormsInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutPokemonFormsInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonFormsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonFormsInput>;
};
export type VersionGroupsUpsertWithoutPokemonFormsInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutPokemonFormsInput, Prisma.VersionGroupsUncheckedUpdateWithoutPokemonFormsInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonFormsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonFormsInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutPokemonFormsInput, Prisma.VersionGroupsUncheckedUpdateWithoutPokemonFormsInput>;
};
export type VersionGroupsUpdateWithoutPokemonFormsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutPokemonFormsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateWithoutGenerationInput = {
    id: number;
    identifier: string;
    order: number;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutGenerationInput = {
    id: number;
    identifier: string;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutGenerationInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutGenerationInput, Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput>;
};
export type VersionGroupsCreateManyGenerationInputEnvelope = {
    data: Prisma.VersionGroupsCreateManyGenerationInput | Prisma.VersionGroupsCreateManyGenerationInput[];
    skipDuplicates?: boolean;
};
export type VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutGenerationInput, Prisma.VersionGroupsUncheckedUpdateWithoutGenerationInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutGenerationInput, Prisma.VersionGroupsUncheckedCreateWithoutGenerationInput>;
};
export type VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutGenerationInput, Prisma.VersionGroupsUncheckedUpdateWithoutGenerationInput>;
};
export type VersionGroupsUpdateManyWithWhereWithoutGenerationInput = {
    where: Prisma.VersionGroupsScalarWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateManyMutationInput, Prisma.VersionGroupsUncheckedUpdateManyWithoutGenerationInput>;
};
export type VersionGroupsScalarWhereInput = {
    AND?: Prisma.VersionGroupsScalarWhereInput | Prisma.VersionGroupsScalarWhereInput[];
    OR?: Prisma.VersionGroupsScalarWhereInput[];
    NOT?: Prisma.VersionGroupsScalarWhereInput | Prisma.VersionGroupsScalarWhereInput[];
    id?: Prisma.IntFilter<"VersionGroups"> | number;
    identifier?: Prisma.StringFilter<"VersionGroups"> | string;
    generation_id?: Prisma.IntFilter<"VersionGroups"> | number;
    order?: Prisma.IntFilter<"VersionGroups"> | number;
};
export type VersionGroupsCreateWithoutVersionsInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutVersionsInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutVersionsInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionsInput>;
};
export type VersionGroupsUpsertWithoutVersionsInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutVersionsInput, Prisma.VersionGroupsUncheckedUpdateWithoutVersionsInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionsInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutVersionsInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutVersionsInput, Prisma.VersionGroupsUncheckedUpdateWithoutVersionsInput>;
};
export type VersionGroupsUpdateWithoutVersionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutVersionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateWithoutMachinesInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutMachinesInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutMachinesInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutMachinesInput, Prisma.VersionGroupsUncheckedCreateWithoutMachinesInput>;
};
export type VersionGroupsUpsertWithoutMachinesInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutMachinesInput, Prisma.VersionGroupsUncheckedUpdateWithoutMachinesInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutMachinesInput, Prisma.VersionGroupsUncheckedCreateWithoutMachinesInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutMachinesInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutMachinesInput, Prisma.VersionGroupsUncheckedUpdateWithoutMachinesInput>;
};
export type VersionGroupsUpdateWithoutMachinesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutMachinesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateWithoutEncounterSlotsInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutEncounterSlotsInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutEncounterSlotsInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutEncounterSlotsInput, Prisma.VersionGroupsUncheckedCreateWithoutEncounterSlotsInput>;
};
export type VersionGroupsUpsertWithoutEncounterSlotsInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutEncounterSlotsInput, Prisma.VersionGroupsUncheckedUpdateWithoutEncounterSlotsInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutEncounterSlotsInput, Prisma.VersionGroupsUncheckedCreateWithoutEncounterSlotsInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutEncounterSlotsInput, Prisma.VersionGroupsUncheckedUpdateWithoutEncounterSlotsInput>;
};
export type VersionGroupsUpdateWithoutEncounterSlotsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutEncounterSlotsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutVersionGroupPokemonMoveMethodsInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutVersionGroupPokemonMoveMethodsInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupPokemonMoveMethodsInput>;
};
export type VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput, Prisma.VersionGroupsUncheckedUpdateWithoutVersionGroupPokemonMoveMethodsInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupPokemonMoveMethodsInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput, Prisma.VersionGroupsUncheckedUpdateWithoutVersionGroupPokemonMoveMethodsInput>;
};
export type VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutVersionGroupPokemonMoveMethodsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateWithoutVersionGroupRegionsInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutVersionGroupRegionsInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupRegionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupRegionsInput>;
};
export type VersionGroupsUpsertWithoutVersionGroupRegionsInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutVersionGroupRegionsInput, Prisma.VersionGroupsUncheckedUpdateWithoutVersionGroupRegionsInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutVersionGroupRegionsInput, Prisma.VersionGroupsUncheckedCreateWithoutVersionGroupRegionsInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutVersionGroupRegionsInput, Prisma.VersionGroupsUncheckedUpdateWithoutVersionGroupRegionsInput>;
};
export type VersionGroupsUpdateWithoutVersionGroupRegionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutVersionGroupRegionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateWithoutPokedexVersionGroupsInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutPokedexVersionGroupsInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokedexVersionGroupsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokedexVersionGroupsInput>;
};
export type VersionGroupsUpsertWithoutPokedexVersionGroupsInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutPokedexVersionGroupsInput, Prisma.VersionGroupsUncheckedUpdateWithoutPokedexVersionGroupsInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokedexVersionGroupsInput, Prisma.VersionGroupsUncheckedCreateWithoutPokedexVersionGroupsInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutPokedexVersionGroupsInput, Prisma.VersionGroupsUncheckedUpdateWithoutPokedexVersionGroupsInput>;
};
export type VersionGroupsUpdateWithoutPokedexVersionGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutPokedexVersionGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateWithoutPokemonMovesInput = {
    id: number;
    identifier: string;
    order: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutVersionGroupsInput;
    versions?: Prisma.VersionsCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsUncheckedCreateWithoutPokemonMovesInput = {
    id: number;
    identifier: string;
    generation_id: number;
    order: number;
    versions?: Prisma.VersionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedCreateNestedManyWithoutVersionGroupInput;
    machines?: Prisma.MachinesUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutVersionGroupInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedCreateNestedManyWithoutVersionGroupInput;
};
export type VersionGroupsCreateOrConnectWithoutPokemonMovesInput = {
    where: Prisma.VersionGroupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonMovesInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonMovesInput>;
};
export type VersionGroupsUpsertWithoutPokemonMovesInput = {
    update: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutPokemonMovesInput, Prisma.VersionGroupsUncheckedUpdateWithoutPokemonMovesInput>;
    create: Prisma.XOR<Prisma.VersionGroupsCreateWithoutPokemonMovesInput, Prisma.VersionGroupsUncheckedCreateWithoutPokemonMovesInput>;
    where?: Prisma.VersionGroupsWhereInput;
};
export type VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput = {
    where?: Prisma.VersionGroupsWhereInput;
    data: Prisma.XOR<Prisma.VersionGroupsUpdateWithoutPokemonMovesInput, Prisma.VersionGroupsUncheckedUpdateWithoutPokemonMovesInput>;
};
export type VersionGroupsUpdateWithoutPokemonMovesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutPokemonMovesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsCreateManyGenerationInput = {
    id: number;
    identifier: string;
    order: number;
};
export type VersionGroupsUpdateWithoutGenerationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateWithoutGenerationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    versions?: Prisma.VersionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    encounterSlots?: Prisma.EncounterSlotsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    machines?: Prisma.MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupPokemonMoveMethods?: Prisma.VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    versionGroupRegions?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokedexVersionGroups?: Prisma.PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonMoves?: Prisma.PokemonMovesUncheckedUpdateManyWithoutVersionGroupNestedInput;
    pokemonForms?: Prisma.PokemonFormsUncheckedUpdateManyWithoutVersionGroupNestedInput;
};
export type VersionGroupsUncheckedUpdateManyWithoutGenerationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type VersionGroupsCountOutputType
 */
export type VersionGroupsCountOutputType = {
    versions: number;
    encounterSlots: number;
    machines: number;
    versionGroupPokemonMoveMethods: number;
    versionGroupRegions: number;
    pokedexVersionGroups: number;
    pokemonMoves: number;
    pokemonForms: number;
};
export type VersionGroupsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    versions?: boolean | VersionGroupsCountOutputTypeCountVersionsArgs;
    encounterSlots?: boolean | VersionGroupsCountOutputTypeCountEncounterSlotsArgs;
    machines?: boolean | VersionGroupsCountOutputTypeCountMachinesArgs;
    versionGroupPokemonMoveMethods?: boolean | VersionGroupsCountOutputTypeCountVersionGroupPokemonMoveMethodsArgs;
    versionGroupRegions?: boolean | VersionGroupsCountOutputTypeCountVersionGroupRegionsArgs;
    pokedexVersionGroups?: boolean | VersionGroupsCountOutputTypeCountPokedexVersionGroupsArgs;
    pokemonMoves?: boolean | VersionGroupsCountOutputTypeCountPokemonMovesArgs;
    pokemonForms?: boolean | VersionGroupsCountOutputTypeCountPokemonFormsArgs;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroupsCountOutputType
     */
    select?: Prisma.VersionGroupsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VersionsWhereInput;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountEncounterSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterSlotsWhereInput;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountMachinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MachinesWhereInput;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountVersionGroupPokemonMoveMethodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VersionGroupPokemonMoveMethodsWhereInput;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountVersionGroupRegionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VersionGroupRegionsWhereInput;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountPokedexVersionGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokedexVersionGroupsWhereInput;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountPokemonMovesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonMovesWhereInput;
};
/**
 * VersionGroupsCountOutputType without action
 */
export type VersionGroupsCountOutputTypeCountPokemonFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonFormsWhereInput;
};
export type VersionGroupsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    generation_id?: boolean;
    order?: boolean;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.VersionGroups$versionsArgs<ExtArgs>;
    encounterSlots?: boolean | Prisma.VersionGroups$encounterSlotsArgs<ExtArgs>;
    machines?: boolean | Prisma.VersionGroups$machinesArgs<ExtArgs>;
    versionGroupPokemonMoveMethods?: boolean | Prisma.VersionGroups$versionGroupPokemonMoveMethodsArgs<ExtArgs>;
    versionGroupRegions?: boolean | Prisma.VersionGroups$versionGroupRegionsArgs<ExtArgs>;
    pokedexVersionGroups?: boolean | Prisma.VersionGroups$pokedexVersionGroupsArgs<ExtArgs>;
    pokemonMoves?: boolean | Prisma.VersionGroups$pokemonMovesArgs<ExtArgs>;
    pokemonForms?: boolean | Prisma.VersionGroups$pokemonFormsArgs<ExtArgs>;
    _count?: boolean | Prisma.VersionGroupsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["versionGroups"]>;
export type VersionGroupsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    generation_id?: boolean;
    order?: boolean;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["versionGroups"]>;
export type VersionGroupsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    generation_id?: boolean;
    order?: boolean;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["versionGroups"]>;
export type VersionGroupsSelectScalar = {
    id?: boolean;
    identifier?: boolean;
    generation_id?: boolean;
    order?: boolean;
};
export type VersionGroupsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier" | "generation_id" | "order", ExtArgs["result"]["versionGroups"]>;
export type VersionGroupsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.VersionGroups$versionsArgs<ExtArgs>;
    encounterSlots?: boolean | Prisma.VersionGroups$encounterSlotsArgs<ExtArgs>;
    machines?: boolean | Prisma.VersionGroups$machinesArgs<ExtArgs>;
    versionGroupPokemonMoveMethods?: boolean | Prisma.VersionGroups$versionGroupPokemonMoveMethodsArgs<ExtArgs>;
    versionGroupRegions?: boolean | Prisma.VersionGroups$versionGroupRegionsArgs<ExtArgs>;
    pokedexVersionGroups?: boolean | Prisma.VersionGroups$pokedexVersionGroupsArgs<ExtArgs>;
    pokemonMoves?: boolean | Prisma.VersionGroups$pokemonMovesArgs<ExtArgs>;
    pokemonForms?: boolean | Prisma.VersionGroups$pokemonFormsArgs<ExtArgs>;
    _count?: boolean | Prisma.VersionGroupsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VersionGroupsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type VersionGroupsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type $VersionGroupsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VersionGroups";
    objects: {
        generation: Prisma.$GenerationsPayload<ExtArgs>;
        versions: Prisma.$VersionsPayload<ExtArgs>[];
        encounterSlots: Prisma.$EncounterSlotsPayload<ExtArgs>[];
        machines: Prisma.$MachinesPayload<ExtArgs>[];
        versionGroupPokemonMoveMethods: Prisma.$VersionGroupPokemonMoveMethodsPayload<ExtArgs>[];
        versionGroupRegions: Prisma.$VersionGroupRegionsPayload<ExtArgs>[];
        pokedexVersionGroups: Prisma.$PokedexVersionGroupsPayload<ExtArgs>[];
        pokemonMoves: Prisma.$PokemonMovesPayload<ExtArgs>[];
        pokemonForms: Prisma.$PokemonFormsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
        generation_id: number;
        order: number;
    }, ExtArgs["result"]["versionGroups"]>;
    composites: {};
};
export type VersionGroupsGetPayload<S extends boolean | null | undefined | VersionGroupsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload, S>;
export type VersionGroupsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VersionGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VersionGroupsCountAggregateInputType | true;
};
export interface VersionGroupsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VersionGroups'];
        meta: {
            name: 'VersionGroups';
        };
    };
    /**
     * Find zero or one VersionGroups that matches the filter.
     * @param {VersionGroupsFindUniqueArgs} args - Arguments to find a VersionGroups
     * @example
     * // Get one VersionGroups
     * const versionGroups = await prisma.versionGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VersionGroupsFindUniqueArgs>(args: Prisma.SelectSubset<T, VersionGroupsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VersionGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VersionGroupsFindUniqueOrThrowArgs} args - Arguments to find a VersionGroups
     * @example
     * // Get one VersionGroups
     * const versionGroups = await prisma.versionGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VersionGroupsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VersionGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VersionGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupsFindFirstArgs} args - Arguments to find a VersionGroups
     * @example
     * // Get one VersionGroups
     * const versionGroups = await prisma.versionGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VersionGroupsFindFirstArgs>(args?: Prisma.SelectSubset<T, VersionGroupsFindFirstArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VersionGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupsFindFirstOrThrowArgs} args - Arguments to find a VersionGroups
     * @example
     * // Get one VersionGroups
     * const versionGroups = await prisma.versionGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VersionGroupsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VersionGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VersionGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VersionGroups
     * const versionGroups = await prisma.versionGroups.findMany()
     *
     * // Get first 10 VersionGroups
     * const versionGroups = await prisma.versionGroups.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const versionGroupsWithIdOnly = await prisma.versionGroups.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VersionGroupsFindManyArgs>(args?: Prisma.SelectSubset<T, VersionGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VersionGroups.
     * @param {VersionGroupsCreateArgs} args - Arguments to create a VersionGroups.
     * @example
     * // Create one VersionGroups
     * const VersionGroups = await prisma.versionGroups.create({
     *   data: {
     *     // ... data to create a VersionGroups
     *   }
     * })
     *
     */
    create<T extends VersionGroupsCreateArgs>(args: Prisma.SelectSubset<T, VersionGroupsCreateArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VersionGroups.
     * @param {VersionGroupsCreateManyArgs} args - Arguments to create many VersionGroups.
     * @example
     * // Create many VersionGroups
     * const versionGroups = await prisma.versionGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VersionGroupsCreateManyArgs>(args?: Prisma.SelectSubset<T, VersionGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VersionGroups and returns the data saved in the database.
     * @param {VersionGroupsCreateManyAndReturnArgs} args - Arguments to create many VersionGroups.
     * @example
     * // Create many VersionGroups
     * const versionGroups = await prisma.versionGroups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VersionGroups and only return the `id`
     * const versionGroupsWithIdOnly = await prisma.versionGroups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VersionGroupsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VersionGroupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VersionGroups.
     * @param {VersionGroupsDeleteArgs} args - Arguments to delete one VersionGroups.
     * @example
     * // Delete one VersionGroups
     * const VersionGroups = await prisma.versionGroups.delete({
     *   where: {
     *     // ... filter to delete one VersionGroups
     *   }
     * })
     *
     */
    delete<T extends VersionGroupsDeleteArgs>(args: Prisma.SelectSubset<T, VersionGroupsDeleteArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VersionGroups.
     * @param {VersionGroupsUpdateArgs} args - Arguments to update one VersionGroups.
     * @example
     * // Update one VersionGroups
     * const versionGroups = await prisma.versionGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VersionGroupsUpdateArgs>(args: Prisma.SelectSubset<T, VersionGroupsUpdateArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VersionGroups.
     * @param {VersionGroupsDeleteManyArgs} args - Arguments to filter VersionGroups to delete.
     * @example
     * // Delete a few VersionGroups
     * const { count } = await prisma.versionGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VersionGroupsDeleteManyArgs>(args?: Prisma.SelectSubset<T, VersionGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VersionGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VersionGroups
     * const versionGroups = await prisma.versionGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VersionGroupsUpdateManyArgs>(args: Prisma.SelectSubset<T, VersionGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VersionGroups and returns the data updated in the database.
     * @param {VersionGroupsUpdateManyAndReturnArgs} args - Arguments to update many VersionGroups.
     * @example
     * // Update many VersionGroups
     * const versionGroups = await prisma.versionGroups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VersionGroups and only return the `id`
     * const versionGroupsWithIdOnly = await prisma.versionGroups.updateManyAndReturn({
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
    updateManyAndReturn<T extends VersionGroupsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VersionGroupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VersionGroups.
     * @param {VersionGroupsUpsertArgs} args - Arguments to update or create a VersionGroups.
     * @example
     * // Update or create a VersionGroups
     * const versionGroups = await prisma.versionGroups.upsert({
     *   create: {
     *     // ... data to create a VersionGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VersionGroups we want to update
     *   }
     * })
     */
    upsert<T extends VersionGroupsUpsertArgs>(args: Prisma.SelectSubset<T, VersionGroupsUpsertArgs<ExtArgs>>): Prisma.Prisma__VersionGroupsClient<runtime.Types.Result.GetResult<Prisma.$VersionGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VersionGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupsCountArgs} args - Arguments to filter VersionGroups to count.
     * @example
     * // Count the number of VersionGroups
     * const count = await prisma.versionGroups.count({
     *   where: {
     *     // ... the filter for the VersionGroups we want to count
     *   }
     * })
    **/
    count<T extends VersionGroupsCountArgs>(args?: Prisma.Subset<T, VersionGroupsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VersionGroupsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VersionGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VersionGroupsAggregateArgs>(args: Prisma.Subset<T, VersionGroupsAggregateArgs>): Prisma.PrismaPromise<GetVersionGroupsAggregateType<T>>;
    /**
     * Group by VersionGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionGroupsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VersionGroupsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VersionGroupsGroupByArgs['orderBy'];
    } : {
        orderBy?: VersionGroupsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VersionGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersionGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VersionGroups model
     */
    readonly fields: VersionGroupsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VersionGroups.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VersionGroupsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    generation<T extends Prisma.GenerationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GenerationsDefaultArgs<ExtArgs>>): Prisma.Prisma__GenerationsClient<runtime.Types.Result.GetResult<Prisma.$GenerationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    versions<T extends Prisma.VersionGroups$versionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VersionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    encounterSlots<T extends Prisma.VersionGroups$encounterSlotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$encounterSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterSlotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    machines<T extends Prisma.VersionGroups$machinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$machinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MachinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    versionGroupPokemonMoveMethods<T extends Prisma.VersionGroups$versionGroupPokemonMoveMethodsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$versionGroupPokemonMoveMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VersionGroupPokemonMoveMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    versionGroupRegions<T extends Prisma.VersionGroups$versionGroupRegionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$versionGroupRegionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VersionGroupRegionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pokedexVersionGroups<T extends Prisma.VersionGroups$pokedexVersionGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$pokedexVersionGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokedexVersionGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pokemonMoves<T extends Prisma.VersionGroups$pokemonMovesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$pokemonMovesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonMovesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pokemonForms<T extends Prisma.VersionGroups$pokemonFormsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionGroups$pokemonFormsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonFormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the VersionGroups model
 */
export interface VersionGroupsFieldRefs {
    readonly id: Prisma.FieldRef<"VersionGroups", 'Int'>;
    readonly identifier: Prisma.FieldRef<"VersionGroups", 'String'>;
    readonly generation_id: Prisma.FieldRef<"VersionGroups", 'Int'>;
    readonly order: Prisma.FieldRef<"VersionGroups", 'Int'>;
}
/**
 * VersionGroups findUnique
 */
export type VersionGroupsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which VersionGroups to fetch.
     */
    where: Prisma.VersionGroupsWhereUniqueInput;
};
/**
 * VersionGroups findUniqueOrThrow
 */
export type VersionGroupsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which VersionGroups to fetch.
     */
    where: Prisma.VersionGroupsWhereUniqueInput;
};
/**
 * VersionGroups findFirst
 */
export type VersionGroupsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which VersionGroups to fetch.
     */
    where?: Prisma.VersionGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VersionGroups to fetch.
     */
    orderBy?: Prisma.VersionGroupsOrderByWithRelationInput | Prisma.VersionGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VersionGroups.
     */
    cursor?: Prisma.VersionGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VersionGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VersionGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VersionGroups.
     */
    distinct?: Prisma.VersionGroupsScalarFieldEnum | Prisma.VersionGroupsScalarFieldEnum[];
};
/**
 * VersionGroups findFirstOrThrow
 */
export type VersionGroupsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which VersionGroups to fetch.
     */
    where?: Prisma.VersionGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VersionGroups to fetch.
     */
    orderBy?: Prisma.VersionGroupsOrderByWithRelationInput | Prisma.VersionGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VersionGroups.
     */
    cursor?: Prisma.VersionGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VersionGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VersionGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VersionGroups.
     */
    distinct?: Prisma.VersionGroupsScalarFieldEnum | Prisma.VersionGroupsScalarFieldEnum[];
};
/**
 * VersionGroups findMany
 */
export type VersionGroupsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * Filter, which VersionGroups to fetch.
     */
    where?: Prisma.VersionGroupsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VersionGroups to fetch.
     */
    orderBy?: Prisma.VersionGroupsOrderByWithRelationInput | Prisma.VersionGroupsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VersionGroups.
     */
    cursor?: Prisma.VersionGroupsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VersionGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VersionGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VersionGroups.
     */
    distinct?: Prisma.VersionGroupsScalarFieldEnum | Prisma.VersionGroupsScalarFieldEnum[];
};
/**
 * VersionGroups create
 */
export type VersionGroupsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * The data needed to create a VersionGroups.
     */
    data: Prisma.XOR<Prisma.VersionGroupsCreateInput, Prisma.VersionGroupsUncheckedCreateInput>;
};
/**
 * VersionGroups createMany
 */
export type VersionGroupsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VersionGroups.
     */
    data: Prisma.VersionGroupsCreateManyInput | Prisma.VersionGroupsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VersionGroups createManyAndReturn
 */
export type VersionGroupsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * The data used to create many VersionGroups.
     */
    data: Prisma.VersionGroupsCreateManyInput | Prisma.VersionGroupsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * VersionGroups update
 */
export type VersionGroupsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * The data needed to update a VersionGroups.
     */
    data: Prisma.XOR<Prisma.VersionGroupsUpdateInput, Prisma.VersionGroupsUncheckedUpdateInput>;
    /**
     * Choose, which VersionGroups to update.
     */
    where: Prisma.VersionGroupsWhereUniqueInput;
};
/**
 * VersionGroups updateMany
 */
export type VersionGroupsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VersionGroups.
     */
    data: Prisma.XOR<Prisma.VersionGroupsUpdateManyMutationInput, Prisma.VersionGroupsUncheckedUpdateManyInput>;
    /**
     * Filter which VersionGroups to update
     */
    where?: Prisma.VersionGroupsWhereInput;
    /**
     * Limit how many VersionGroups to update.
     */
    limit?: number;
};
/**
 * VersionGroups updateManyAndReturn
 */
export type VersionGroupsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * The data used to update VersionGroups.
     */
    data: Prisma.XOR<Prisma.VersionGroupsUpdateManyMutationInput, Prisma.VersionGroupsUncheckedUpdateManyInput>;
    /**
     * Filter which VersionGroups to update
     */
    where?: Prisma.VersionGroupsWhereInput;
    /**
     * Limit how many VersionGroups to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * VersionGroups upsert
 */
export type VersionGroupsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * The filter to search for the VersionGroups to update in case it exists.
     */
    where: Prisma.VersionGroupsWhereUniqueInput;
    /**
     * In case the VersionGroups found by the `where` argument doesn't exist, create a new VersionGroups with this data.
     */
    create: Prisma.XOR<Prisma.VersionGroupsCreateInput, Prisma.VersionGroupsUncheckedCreateInput>;
    /**
     * In case the VersionGroups was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VersionGroupsUpdateInput, Prisma.VersionGroupsUncheckedUpdateInput>;
};
/**
 * VersionGroups delete
 */
export type VersionGroupsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
    /**
     * Filter which VersionGroups to delete.
     */
    where: Prisma.VersionGroupsWhereUniqueInput;
};
/**
 * VersionGroups deleteMany
 */
export type VersionGroupsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VersionGroups to delete
     */
    where?: Prisma.VersionGroupsWhereInput;
    /**
     * Limit how many VersionGroups to delete.
     */
    limit?: number;
};
/**
 * VersionGroups.versions
 */
export type VersionGroups$versionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Versions
     */
    select?: Prisma.VersionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Versions
     */
    omit?: Prisma.VersionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionsInclude<ExtArgs> | null;
    where?: Prisma.VersionsWhereInput;
    orderBy?: Prisma.VersionsOrderByWithRelationInput | Prisma.VersionsOrderByWithRelationInput[];
    cursor?: Prisma.VersionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VersionsScalarFieldEnum | Prisma.VersionsScalarFieldEnum[];
};
/**
 * VersionGroups.encounterSlots
 */
export type VersionGroups$encounterSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EncounterSlots
     */
    select?: Prisma.EncounterSlotsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EncounterSlots
     */
    omit?: Prisma.EncounterSlotsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EncounterSlotsInclude<ExtArgs> | null;
    where?: Prisma.EncounterSlotsWhereInput;
    orderBy?: Prisma.EncounterSlotsOrderByWithRelationInput | Prisma.EncounterSlotsOrderByWithRelationInput[];
    cursor?: Prisma.EncounterSlotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterSlotsScalarFieldEnum | Prisma.EncounterSlotsScalarFieldEnum[];
};
/**
 * VersionGroups.machines
 */
export type VersionGroups$machinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Machines
     */
    select?: Prisma.MachinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Machines
     */
    omit?: Prisma.MachinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MachinesInclude<ExtArgs> | null;
    where?: Prisma.MachinesWhereInput;
    orderBy?: Prisma.MachinesOrderByWithRelationInput | Prisma.MachinesOrderByWithRelationInput[];
    cursor?: Prisma.MachinesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MachinesScalarFieldEnum | Prisma.MachinesScalarFieldEnum[];
};
/**
 * VersionGroups.versionGroupPokemonMoveMethods
 */
export type VersionGroups$versionGroupPokemonMoveMethodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroupPokemonMoveMethods
     */
    select?: Prisma.VersionGroupPokemonMoveMethodsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroupPokemonMoveMethods
     */
    omit?: Prisma.VersionGroupPokemonMoveMethodsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupPokemonMoveMethodsInclude<ExtArgs> | null;
    where?: Prisma.VersionGroupPokemonMoveMethodsWhereInput;
    orderBy?: Prisma.VersionGroupPokemonMoveMethodsOrderByWithRelationInput | Prisma.VersionGroupPokemonMoveMethodsOrderByWithRelationInput[];
    cursor?: Prisma.VersionGroupPokemonMoveMethodsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VersionGroupPokemonMoveMethodsScalarFieldEnum | Prisma.VersionGroupPokemonMoveMethodsScalarFieldEnum[];
};
/**
 * VersionGroups.versionGroupRegions
 */
export type VersionGroups$versionGroupRegionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroupRegions
     */
    select?: Prisma.VersionGroupRegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroupRegions
     */
    omit?: Prisma.VersionGroupRegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupRegionsInclude<ExtArgs> | null;
    where?: Prisma.VersionGroupRegionsWhereInput;
    orderBy?: Prisma.VersionGroupRegionsOrderByWithRelationInput | Prisma.VersionGroupRegionsOrderByWithRelationInput[];
    cursor?: Prisma.VersionGroupRegionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VersionGroupRegionsScalarFieldEnum | Prisma.VersionGroupRegionsScalarFieldEnum[];
};
/**
 * VersionGroups.pokedexVersionGroups
 */
export type VersionGroups$pokedexVersionGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokedexVersionGroups
     */
    select?: Prisma.PokedexVersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokedexVersionGroups
     */
    omit?: Prisma.PokedexVersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokedexVersionGroupsInclude<ExtArgs> | null;
    where?: Prisma.PokedexVersionGroupsWhereInput;
    orderBy?: Prisma.PokedexVersionGroupsOrderByWithRelationInput | Prisma.PokedexVersionGroupsOrderByWithRelationInput[];
    cursor?: Prisma.PokedexVersionGroupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokedexVersionGroupsScalarFieldEnum | Prisma.PokedexVersionGroupsScalarFieldEnum[];
};
/**
 * VersionGroups.pokemonMoves
 */
export type VersionGroups$pokemonMovesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * VersionGroups.pokemonForms
 */
export type VersionGroups$pokemonFormsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * VersionGroups without action
 */
export type VersionGroupsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VersionGroups
     */
    select?: Prisma.VersionGroupsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VersionGroups
     */
    omit?: Prisma.VersionGroupsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VersionGroupsInclude<ExtArgs> | null;
};
