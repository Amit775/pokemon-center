import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PokemonEvolution
 *
 */
export type PokemonEvolutionModel = runtime.Types.Result.DefaultSelection<Prisma.$PokemonEvolutionPayload>;
export type AggregatePokemonEvolution = {
    _count: PokemonEvolutionCountAggregateOutputType | null;
    _avg: PokemonEvolutionAvgAggregateOutputType | null;
    _sum: PokemonEvolutionSumAggregateOutputType | null;
    _min: PokemonEvolutionMinAggregateOutputType | null;
    _max: PokemonEvolutionMaxAggregateOutputType | null;
};
export type PokemonEvolutionAvgAggregateOutputType = {
    id: number | null;
    evolved_species_id: number | null;
    evolution_trigger_id: number | null;
    trigger_item_id: number | null;
    minimum_level: number | null;
    gender_id: number | null;
    location_id: number | null;
    held_item_id: number | null;
    known_move_id: number | null;
    known_move_type_id: number | null;
    minimum_happiness: number | null;
    minimum_beauty: number | null;
    minimum_affection: number | null;
    relative_physical_stats: number | null;
    party_species_id: number | null;
    party_type_id: number | null;
    trade_species_id: number | null;
    needs_overworld_rain: number | null;
    turn_upside_down: number | null;
};
export type PokemonEvolutionSumAggregateOutputType = {
    id: number | null;
    evolved_species_id: number | null;
    evolution_trigger_id: number | null;
    trigger_item_id: number | null;
    minimum_level: number | null;
    gender_id: number | null;
    location_id: number | null;
    held_item_id: number | null;
    known_move_id: number | null;
    known_move_type_id: number | null;
    minimum_happiness: number | null;
    minimum_beauty: number | null;
    minimum_affection: number | null;
    relative_physical_stats: number | null;
    party_species_id: number | null;
    party_type_id: number | null;
    trade_species_id: number | null;
    needs_overworld_rain: number | null;
    turn_upside_down: number | null;
};
export type PokemonEvolutionMinAggregateOutputType = {
    id: number | null;
    evolved_species_id: number | null;
    evolution_trigger_id: number | null;
    trigger_item_id: number | null;
    minimum_level: number | null;
    gender_id: number | null;
    location_id: number | null;
    held_item_id: number | null;
    time_of_day: string | null;
    known_move_id: number | null;
    known_move_type_id: number | null;
    minimum_happiness: number | null;
    minimum_beauty: number | null;
    minimum_affection: number | null;
    relative_physical_stats: number | null;
    party_species_id: number | null;
    party_type_id: number | null;
    trade_species_id: number | null;
    needs_overworld_rain: number | null;
    turn_upside_down: number | null;
};
export type PokemonEvolutionMaxAggregateOutputType = {
    id: number | null;
    evolved_species_id: number | null;
    evolution_trigger_id: number | null;
    trigger_item_id: number | null;
    minimum_level: number | null;
    gender_id: number | null;
    location_id: number | null;
    held_item_id: number | null;
    time_of_day: string | null;
    known_move_id: number | null;
    known_move_type_id: number | null;
    minimum_happiness: number | null;
    minimum_beauty: number | null;
    minimum_affection: number | null;
    relative_physical_stats: number | null;
    party_species_id: number | null;
    party_type_id: number | null;
    trade_species_id: number | null;
    needs_overworld_rain: number | null;
    turn_upside_down: number | null;
};
export type PokemonEvolutionCountAggregateOutputType = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id: number;
    minimum_level: number;
    gender_id: number;
    location_id: number;
    held_item_id: number;
    time_of_day: number;
    known_move_id: number;
    known_move_type_id: number;
    minimum_happiness: number;
    minimum_beauty: number;
    minimum_affection: number;
    relative_physical_stats: number;
    party_species_id: number;
    party_type_id: number;
    trade_species_id: number;
    needs_overworld_rain: number;
    turn_upside_down: number;
    _all: number;
};
export type PokemonEvolutionAvgAggregateInputType = {
    id?: true;
    evolved_species_id?: true;
    evolution_trigger_id?: true;
    trigger_item_id?: true;
    minimum_level?: true;
    gender_id?: true;
    location_id?: true;
    held_item_id?: true;
    known_move_id?: true;
    known_move_type_id?: true;
    minimum_happiness?: true;
    minimum_beauty?: true;
    minimum_affection?: true;
    relative_physical_stats?: true;
    party_species_id?: true;
    party_type_id?: true;
    trade_species_id?: true;
    needs_overworld_rain?: true;
    turn_upside_down?: true;
};
export type PokemonEvolutionSumAggregateInputType = {
    id?: true;
    evolved_species_id?: true;
    evolution_trigger_id?: true;
    trigger_item_id?: true;
    minimum_level?: true;
    gender_id?: true;
    location_id?: true;
    held_item_id?: true;
    known_move_id?: true;
    known_move_type_id?: true;
    minimum_happiness?: true;
    minimum_beauty?: true;
    minimum_affection?: true;
    relative_physical_stats?: true;
    party_species_id?: true;
    party_type_id?: true;
    trade_species_id?: true;
    needs_overworld_rain?: true;
    turn_upside_down?: true;
};
export type PokemonEvolutionMinAggregateInputType = {
    id?: true;
    evolved_species_id?: true;
    evolution_trigger_id?: true;
    trigger_item_id?: true;
    minimum_level?: true;
    gender_id?: true;
    location_id?: true;
    held_item_id?: true;
    time_of_day?: true;
    known_move_id?: true;
    known_move_type_id?: true;
    minimum_happiness?: true;
    minimum_beauty?: true;
    minimum_affection?: true;
    relative_physical_stats?: true;
    party_species_id?: true;
    party_type_id?: true;
    trade_species_id?: true;
    needs_overworld_rain?: true;
    turn_upside_down?: true;
};
export type PokemonEvolutionMaxAggregateInputType = {
    id?: true;
    evolved_species_id?: true;
    evolution_trigger_id?: true;
    trigger_item_id?: true;
    minimum_level?: true;
    gender_id?: true;
    location_id?: true;
    held_item_id?: true;
    time_of_day?: true;
    known_move_id?: true;
    known_move_type_id?: true;
    minimum_happiness?: true;
    minimum_beauty?: true;
    minimum_affection?: true;
    relative_physical_stats?: true;
    party_species_id?: true;
    party_type_id?: true;
    trade_species_id?: true;
    needs_overworld_rain?: true;
    turn_upside_down?: true;
};
export type PokemonEvolutionCountAggregateInputType = {
    id?: true;
    evolved_species_id?: true;
    evolution_trigger_id?: true;
    trigger_item_id?: true;
    minimum_level?: true;
    gender_id?: true;
    location_id?: true;
    held_item_id?: true;
    time_of_day?: true;
    known_move_id?: true;
    known_move_type_id?: true;
    minimum_happiness?: true;
    minimum_beauty?: true;
    minimum_affection?: true;
    relative_physical_stats?: true;
    party_species_id?: true;
    party_type_id?: true;
    trade_species_id?: true;
    needs_overworld_rain?: true;
    turn_upside_down?: true;
    _all?: true;
};
export type PokemonEvolutionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonEvolution to aggregate.
     */
    where?: Prisma.PokemonEvolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEvolutions to fetch.
     */
    orderBy?: Prisma.PokemonEvolutionOrderByWithRelationInput | Prisma.PokemonEvolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PokemonEvolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEvolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEvolutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PokemonEvolutions
    **/
    _count?: true | PokemonEvolutionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PokemonEvolutionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PokemonEvolutionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PokemonEvolutionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PokemonEvolutionMaxAggregateInputType;
};
export type GetPokemonEvolutionAggregateType<T extends PokemonEvolutionAggregateArgs> = {
    [P in keyof T & keyof AggregatePokemonEvolution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePokemonEvolution[P]> : Prisma.GetScalarType<T[P], AggregatePokemonEvolution[P]>;
};
export type PokemonEvolutionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonEvolutionWhereInput;
    orderBy?: Prisma.PokemonEvolutionOrderByWithAggregationInput | Prisma.PokemonEvolutionOrderByWithAggregationInput[];
    by: Prisma.PokemonEvolutionScalarFieldEnum[] | Prisma.PokemonEvolutionScalarFieldEnum;
    having?: Prisma.PokemonEvolutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PokemonEvolutionCountAggregateInputType | true;
    _avg?: PokemonEvolutionAvgAggregateInputType;
    _sum?: PokemonEvolutionSumAggregateInputType;
    _min?: PokemonEvolutionMinAggregateInputType;
    _max?: PokemonEvolutionMaxAggregateInputType;
};
export type PokemonEvolutionGroupByOutputType = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id: number | null;
    minimum_level: number | null;
    gender_id: number | null;
    location_id: number | null;
    held_item_id: number | null;
    time_of_day: string | null;
    known_move_id: number | null;
    known_move_type_id: number | null;
    minimum_happiness: number | null;
    minimum_beauty: number | null;
    minimum_affection: number | null;
    relative_physical_stats: number | null;
    party_species_id: number | null;
    party_type_id: number | null;
    trade_species_id: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    _count: PokemonEvolutionCountAggregateOutputType | null;
    _avg: PokemonEvolutionAvgAggregateOutputType | null;
    _sum: PokemonEvolutionSumAggregateOutputType | null;
    _min: PokemonEvolutionMinAggregateOutputType | null;
    _max: PokemonEvolutionMaxAggregateOutputType | null;
};
export type GetPokemonEvolutionGroupByPayload<T extends PokemonEvolutionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PokemonEvolutionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PokemonEvolutionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PokemonEvolutionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PokemonEvolutionGroupByOutputType[P]>;
}>>;
export type PokemonEvolutionWhereInput = {
    AND?: Prisma.PokemonEvolutionWhereInput | Prisma.PokemonEvolutionWhereInput[];
    OR?: Prisma.PokemonEvolutionWhereInput[];
    NOT?: Prisma.PokemonEvolutionWhereInput | Prisma.PokemonEvolutionWhereInput[];
    id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    evolved_species_id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    evolution_trigger_id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    trigger_item_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_level?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    gender_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    location_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    held_item_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    time_of_day?: Prisma.StringNullableFilter<"PokemonEvolution"> | string | null;
    known_move_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    known_move_type_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_happiness?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_beauty?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_affection?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    relative_physical_stats?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    party_species_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    party_type_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    trade_species_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    needs_overworld_rain?: Prisma.IntFilter<"PokemonEvolution"> | number;
    turn_upside_down?: Prisma.IntFilter<"PokemonEvolution"> | number;
    evolvedSpecies?: Prisma.XOR<Prisma.PokemonSpeciesScalarRelationFilter, Prisma.PokemonSpeciesWhereInput>;
    evolutionTrigger?: Prisma.XOR<Prisma.EvolutionTriggersScalarRelationFilter, Prisma.EvolutionTriggersWhereInput>;
    triggerItem?: Prisma.XOR<Prisma.ItemsNullableScalarRelationFilter, Prisma.ItemsWhereInput> | null;
    gender?: Prisma.XOR<Prisma.GendersNullableScalarRelationFilter, Prisma.GendersWhereInput> | null;
    location?: Prisma.XOR<Prisma.LocationsNullableScalarRelationFilter, Prisma.LocationsWhereInput> | null;
    heldItem?: Prisma.XOR<Prisma.ItemsNullableScalarRelationFilter, Prisma.ItemsWhereInput> | null;
    knownMove?: Prisma.XOR<Prisma.MovesNullableScalarRelationFilter, Prisma.MovesWhereInput> | null;
    knownMoveType?: Prisma.XOR<Prisma.TypesNullableScalarRelationFilter, Prisma.TypesWhereInput> | null;
    partySpecies?: Prisma.XOR<Prisma.PokemonSpeciesNullableScalarRelationFilter, Prisma.PokemonSpeciesWhereInput> | null;
    partyType?: Prisma.XOR<Prisma.TypesNullableScalarRelationFilter, Prisma.TypesWhereInput> | null;
    tradeSpecies?: Prisma.XOR<Prisma.PokemonSpeciesNullableScalarRelationFilter, Prisma.PokemonSpeciesWhereInput> | null;
};
export type PokemonEvolutionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    evolved_species_id?: Prisma.SortOrder;
    evolution_trigger_id?: Prisma.SortOrder;
    trigger_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    location_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    held_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    time_of_day?: Prisma.SortOrderInput | Prisma.SortOrder;
    known_move_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    known_move_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_happiness?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_beauty?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_affection?: Prisma.SortOrderInput | Prisma.SortOrder;
    relative_physical_stats?: Prisma.SortOrderInput | Prisma.SortOrder;
    party_species_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    party_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_species_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    needs_overworld_rain?: Prisma.SortOrder;
    turn_upside_down?: Prisma.SortOrder;
    evolvedSpecies?: Prisma.PokemonSpeciesOrderByWithRelationInput;
    evolutionTrigger?: Prisma.EvolutionTriggersOrderByWithRelationInput;
    triggerItem?: Prisma.ItemsOrderByWithRelationInput;
    gender?: Prisma.GendersOrderByWithRelationInput;
    location?: Prisma.LocationsOrderByWithRelationInput;
    heldItem?: Prisma.ItemsOrderByWithRelationInput;
    knownMove?: Prisma.MovesOrderByWithRelationInput;
    knownMoveType?: Prisma.TypesOrderByWithRelationInput;
    partySpecies?: Prisma.PokemonSpeciesOrderByWithRelationInput;
    partyType?: Prisma.TypesOrderByWithRelationInput;
    tradeSpecies?: Prisma.PokemonSpeciesOrderByWithRelationInput;
};
export type PokemonEvolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PokemonEvolutionWhereInput | Prisma.PokemonEvolutionWhereInput[];
    OR?: Prisma.PokemonEvolutionWhereInput[];
    NOT?: Prisma.PokemonEvolutionWhereInput | Prisma.PokemonEvolutionWhereInput[];
    evolved_species_id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    evolution_trigger_id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    trigger_item_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_level?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    gender_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    location_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    held_item_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    time_of_day?: Prisma.StringNullableFilter<"PokemonEvolution"> | string | null;
    known_move_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    known_move_type_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_happiness?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_beauty?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_affection?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    relative_physical_stats?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    party_species_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    party_type_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    trade_species_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    needs_overworld_rain?: Prisma.IntFilter<"PokemonEvolution"> | number;
    turn_upside_down?: Prisma.IntFilter<"PokemonEvolution"> | number;
    evolvedSpecies?: Prisma.XOR<Prisma.PokemonSpeciesScalarRelationFilter, Prisma.PokemonSpeciesWhereInput>;
    evolutionTrigger?: Prisma.XOR<Prisma.EvolutionTriggersScalarRelationFilter, Prisma.EvolutionTriggersWhereInput>;
    triggerItem?: Prisma.XOR<Prisma.ItemsNullableScalarRelationFilter, Prisma.ItemsWhereInput> | null;
    gender?: Prisma.XOR<Prisma.GendersNullableScalarRelationFilter, Prisma.GendersWhereInput> | null;
    location?: Prisma.XOR<Prisma.LocationsNullableScalarRelationFilter, Prisma.LocationsWhereInput> | null;
    heldItem?: Prisma.XOR<Prisma.ItemsNullableScalarRelationFilter, Prisma.ItemsWhereInput> | null;
    knownMove?: Prisma.XOR<Prisma.MovesNullableScalarRelationFilter, Prisma.MovesWhereInput> | null;
    knownMoveType?: Prisma.XOR<Prisma.TypesNullableScalarRelationFilter, Prisma.TypesWhereInput> | null;
    partySpecies?: Prisma.XOR<Prisma.PokemonSpeciesNullableScalarRelationFilter, Prisma.PokemonSpeciesWhereInput> | null;
    partyType?: Prisma.XOR<Prisma.TypesNullableScalarRelationFilter, Prisma.TypesWhereInput> | null;
    tradeSpecies?: Prisma.XOR<Prisma.PokemonSpeciesNullableScalarRelationFilter, Prisma.PokemonSpeciesWhereInput> | null;
}, "id">;
export type PokemonEvolutionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    evolved_species_id?: Prisma.SortOrder;
    evolution_trigger_id?: Prisma.SortOrder;
    trigger_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    location_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    held_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    time_of_day?: Prisma.SortOrderInput | Prisma.SortOrder;
    known_move_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    known_move_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_happiness?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_beauty?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimum_affection?: Prisma.SortOrderInput | Prisma.SortOrder;
    relative_physical_stats?: Prisma.SortOrderInput | Prisma.SortOrder;
    party_species_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    party_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_species_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    needs_overworld_rain?: Prisma.SortOrder;
    turn_upside_down?: Prisma.SortOrder;
    _count?: Prisma.PokemonEvolutionCountOrderByAggregateInput;
    _avg?: Prisma.PokemonEvolutionAvgOrderByAggregateInput;
    _max?: Prisma.PokemonEvolutionMaxOrderByAggregateInput;
    _min?: Prisma.PokemonEvolutionMinOrderByAggregateInput;
    _sum?: Prisma.PokemonEvolutionSumOrderByAggregateInput;
};
export type PokemonEvolutionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PokemonEvolutionScalarWhereWithAggregatesInput | Prisma.PokemonEvolutionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PokemonEvolutionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PokemonEvolutionScalarWhereWithAggregatesInput | Prisma.PokemonEvolutionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PokemonEvolution"> | number;
    evolved_species_id?: Prisma.IntWithAggregatesFilter<"PokemonEvolution"> | number;
    evolution_trigger_id?: Prisma.IntWithAggregatesFilter<"PokemonEvolution"> | number;
    trigger_item_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    minimum_level?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    gender_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    location_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    held_item_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    time_of_day?: Prisma.StringNullableWithAggregatesFilter<"PokemonEvolution"> | string | null;
    known_move_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    known_move_type_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    minimum_happiness?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    minimum_beauty?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    minimum_affection?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    relative_physical_stats?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    party_species_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    party_type_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    trade_species_id?: Prisma.IntNullableWithAggregatesFilter<"PokemonEvolution"> | number | null;
    needs_overworld_rain?: Prisma.IntWithAggregatesFilter<"PokemonEvolution"> | number;
    turn_upside_down?: Prisma.IntWithAggregatesFilter<"PokemonEvolution"> | number;
};
export type PokemonEvolutionCreateInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionCreateManyInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionListRelationFilter = {
    every?: Prisma.PokemonEvolutionWhereInput;
    some?: Prisma.PokemonEvolutionWhereInput;
    none?: Prisma.PokemonEvolutionWhereInput;
};
export type PokemonEvolutionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PokemonEvolutionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evolved_species_id?: Prisma.SortOrder;
    evolution_trigger_id?: Prisma.SortOrder;
    trigger_item_id?: Prisma.SortOrder;
    minimum_level?: Prisma.SortOrder;
    gender_id?: Prisma.SortOrder;
    location_id?: Prisma.SortOrder;
    held_item_id?: Prisma.SortOrder;
    time_of_day?: Prisma.SortOrder;
    known_move_id?: Prisma.SortOrder;
    known_move_type_id?: Prisma.SortOrder;
    minimum_happiness?: Prisma.SortOrder;
    minimum_beauty?: Prisma.SortOrder;
    minimum_affection?: Prisma.SortOrder;
    relative_physical_stats?: Prisma.SortOrder;
    party_species_id?: Prisma.SortOrder;
    party_type_id?: Prisma.SortOrder;
    trade_species_id?: Prisma.SortOrder;
    needs_overworld_rain?: Prisma.SortOrder;
    turn_upside_down?: Prisma.SortOrder;
};
export type PokemonEvolutionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evolved_species_id?: Prisma.SortOrder;
    evolution_trigger_id?: Prisma.SortOrder;
    trigger_item_id?: Prisma.SortOrder;
    minimum_level?: Prisma.SortOrder;
    gender_id?: Prisma.SortOrder;
    location_id?: Prisma.SortOrder;
    held_item_id?: Prisma.SortOrder;
    known_move_id?: Prisma.SortOrder;
    known_move_type_id?: Prisma.SortOrder;
    minimum_happiness?: Prisma.SortOrder;
    minimum_beauty?: Prisma.SortOrder;
    minimum_affection?: Prisma.SortOrder;
    relative_physical_stats?: Prisma.SortOrder;
    party_species_id?: Prisma.SortOrder;
    party_type_id?: Prisma.SortOrder;
    trade_species_id?: Prisma.SortOrder;
    needs_overworld_rain?: Prisma.SortOrder;
    turn_upside_down?: Prisma.SortOrder;
};
export type PokemonEvolutionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evolved_species_id?: Prisma.SortOrder;
    evolution_trigger_id?: Prisma.SortOrder;
    trigger_item_id?: Prisma.SortOrder;
    minimum_level?: Prisma.SortOrder;
    gender_id?: Prisma.SortOrder;
    location_id?: Prisma.SortOrder;
    held_item_id?: Prisma.SortOrder;
    time_of_day?: Prisma.SortOrder;
    known_move_id?: Prisma.SortOrder;
    known_move_type_id?: Prisma.SortOrder;
    minimum_happiness?: Prisma.SortOrder;
    minimum_beauty?: Prisma.SortOrder;
    minimum_affection?: Prisma.SortOrder;
    relative_physical_stats?: Prisma.SortOrder;
    party_species_id?: Prisma.SortOrder;
    party_type_id?: Prisma.SortOrder;
    trade_species_id?: Prisma.SortOrder;
    needs_overworld_rain?: Prisma.SortOrder;
    turn_upside_down?: Prisma.SortOrder;
};
export type PokemonEvolutionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evolved_species_id?: Prisma.SortOrder;
    evolution_trigger_id?: Prisma.SortOrder;
    trigger_item_id?: Prisma.SortOrder;
    minimum_level?: Prisma.SortOrder;
    gender_id?: Prisma.SortOrder;
    location_id?: Prisma.SortOrder;
    held_item_id?: Prisma.SortOrder;
    time_of_day?: Prisma.SortOrder;
    known_move_id?: Prisma.SortOrder;
    known_move_type_id?: Prisma.SortOrder;
    minimum_happiness?: Prisma.SortOrder;
    minimum_beauty?: Prisma.SortOrder;
    minimum_affection?: Prisma.SortOrder;
    relative_physical_stats?: Prisma.SortOrder;
    party_species_id?: Prisma.SortOrder;
    party_type_id?: Prisma.SortOrder;
    trade_species_id?: Prisma.SortOrder;
    needs_overworld_rain?: Prisma.SortOrder;
    turn_upside_down?: Prisma.SortOrder;
};
export type PokemonEvolutionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evolved_species_id?: Prisma.SortOrder;
    evolution_trigger_id?: Prisma.SortOrder;
    trigger_item_id?: Prisma.SortOrder;
    minimum_level?: Prisma.SortOrder;
    gender_id?: Prisma.SortOrder;
    location_id?: Prisma.SortOrder;
    held_item_id?: Prisma.SortOrder;
    known_move_id?: Prisma.SortOrder;
    known_move_type_id?: Prisma.SortOrder;
    minimum_happiness?: Prisma.SortOrder;
    minimum_beauty?: Prisma.SortOrder;
    minimum_affection?: Prisma.SortOrder;
    relative_physical_stats?: Prisma.SortOrder;
    party_species_id?: Prisma.SortOrder;
    party_type_id?: Prisma.SortOrder;
    trade_species_id?: Prisma.SortOrder;
    needs_overworld_rain?: Prisma.SortOrder;
    turn_upside_down?: Prisma.SortOrder;
};
export type PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput> | Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartySpeciesInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTradeSpeciesInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutEvolvedSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutPartySpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput> | Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartySpeciesInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutTradeSpeciesInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTradeSpeciesInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput> | Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartySpeciesInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTradeSpeciesInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput> | Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartySpeciesInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput> | Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTradeSpeciesInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutKnownMoveInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutPartyTypeInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput> | Prisma.PokemonEvolutionCreateWithoutPartyTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartyTypeInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveTypeInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutPartyTypeInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput> | Prisma.PokemonEvolutionCreateWithoutPartyTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartyTypeInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUpdateManyWithoutPartyTypeNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput> | Prisma.PokemonEvolutionCreateWithoutPartyTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartyTypeInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput> | Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput> | Prisma.PokemonEvolutionCreateWithoutPartyTypeInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput | Prisma.PokemonEvolutionCreateOrConnectWithoutPartyTypeInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyPartyTypeInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutTriggerItemInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput> | Prisma.PokemonEvolutionCreateWithoutTriggerItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTriggerItemInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutHeldItemInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput> | Prisma.PokemonEvolutionCreateWithoutHeldItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyHeldItemInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutTriggerItemInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput> | Prisma.PokemonEvolutionCreateWithoutTriggerItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTriggerItemInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutHeldItemInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput> | Prisma.PokemonEvolutionCreateWithoutHeldItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyHeldItemInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput> | Prisma.PokemonEvolutionCreateWithoutTriggerItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTriggerItemInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUpdateManyWithoutHeldItemNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput> | Prisma.PokemonEvolutionCreateWithoutHeldItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyHeldItemInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput> | Prisma.PokemonEvolutionCreateWithoutTriggerItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutTriggerItemInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyTriggerItemInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutHeldItemNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput> | Prisma.PokemonEvolutionCreateWithoutHeldItemInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput | Prisma.PokemonEvolutionCreateOrConnectWithoutHeldItemInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyHeldItemInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput> | Prisma.PokemonEvolutionCreateWithoutLocationInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput | Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyLocationInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput> | Prisma.PokemonEvolutionCreateWithoutLocationInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput | Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyLocationInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput> | Prisma.PokemonEvolutionCreateWithoutLocationInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput | Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyLocationInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutLocationInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput> | Prisma.PokemonEvolutionCreateWithoutLocationInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput | Prisma.PokemonEvolutionCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyLocationInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutLocationInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput> | Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutEvolutionTriggerInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput> | Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput> | Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput> | Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionCreateNestedManyWithoutGenderInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput> | Prisma.PokemonEvolutionCreateWithoutGenderInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput | Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyGenderInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUncheckedCreateNestedManyWithoutGenderInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput> | Prisma.PokemonEvolutionCreateWithoutGenderInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput | Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyGenderInputEnvelope;
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
};
export type PokemonEvolutionUpdateManyWithoutGenderNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput> | Prisma.PokemonEvolutionCreateWithoutGenderInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput | Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyGenderInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutGenderInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutGenderInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionUncheckedUpdateManyWithoutGenderNestedInput = {
    create?: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput> | Prisma.PokemonEvolutionCreateWithoutGenderInput[] | Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput[];
    connectOrCreate?: Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput | Prisma.PokemonEvolutionCreateOrConnectWithoutGenderInput[];
    upsert?: Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput | Prisma.PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput[];
    createMany?: Prisma.PokemonEvolutionCreateManyGenderInputEnvelope;
    set?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    disconnect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    delete?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    connect?: Prisma.PokemonEvolutionWhereUniqueInput | Prisma.PokemonEvolutionWhereUniqueInput[];
    update?: Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput | Prisma.PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput[];
    updateMany?: Prisma.PokemonEvolutionUpdateManyWithWhereWithoutGenderInput | Prisma.PokemonEvolutionUpdateManyWithWhereWithoutGenderInput[];
    deleteMany?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
};
export type PokemonEvolutionCreateWithoutEvolvedSpeciesInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput = {
    id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput>;
};
export type PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyEvolvedSpeciesInput | Prisma.PokemonEvolutionCreateManyEvolvedSpeciesInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionCreateWithoutPartySpeciesInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput>;
};
export type PokemonEvolutionCreateManyPartySpeciesInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyPartySpeciesInput | Prisma.PokemonEvolutionCreateManyPartySpeciesInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionCreateWithoutTradeSpeciesInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput>;
};
export type PokemonEvolutionCreateManyTradeSpeciesInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyTradeSpeciesInput | Prisma.PokemonEvolutionCreateManyTradeSpeciesInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutEvolvedSpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutEvolvedSpeciesInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolvedSpeciesInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutEvolvedSpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutEvolvedSpeciesInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutEvolvedSpeciesInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutEvolvedSpeciesInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesInput>;
};
export type PokemonEvolutionScalarWhereInput = {
    AND?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
    OR?: Prisma.PokemonEvolutionScalarWhereInput[];
    NOT?: Prisma.PokemonEvolutionScalarWhereInput | Prisma.PokemonEvolutionScalarWhereInput[];
    id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    evolved_species_id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    evolution_trigger_id?: Prisma.IntFilter<"PokemonEvolution"> | number;
    trigger_item_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_level?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    gender_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    location_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    held_item_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    time_of_day?: Prisma.StringNullableFilter<"PokemonEvolution"> | string | null;
    known_move_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    known_move_type_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_happiness?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_beauty?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    minimum_affection?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    relative_physical_stats?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    party_species_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    party_type_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    trade_species_id?: Prisma.IntNullableFilter<"PokemonEvolution"> | number | null;
    needs_overworld_rain?: Prisma.IntFilter<"PokemonEvolution"> | number;
    turn_upside_down?: Prisma.IntFilter<"PokemonEvolution"> | number;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutPartySpeciesInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartySpeciesInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutPartySpeciesInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutPartySpeciesInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesInput>;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutTradeSpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutTradeSpeciesInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTradeSpeciesInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutTradeSpeciesInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutTradeSpeciesInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutTradeSpeciesInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutTradeSpeciesInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesInput>;
};
export type PokemonEvolutionCreateWithoutKnownMoveInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutKnownMoveInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutKnownMoveInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput>;
};
export type PokemonEvolutionCreateManyKnownMoveInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyKnownMoveInput | Prisma.PokemonEvolutionCreateManyKnownMoveInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutKnownMoveInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutKnownMoveInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutKnownMoveInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveInput>;
};
export type PokemonEvolutionCreateWithoutKnownMoveTypeInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput>;
};
export type PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyKnownMoveTypeInput | Prisma.PokemonEvolutionCreateManyKnownMoveTypeInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionCreateWithoutPartyTypeInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutPartyTypeInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutPartyTypeInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput>;
};
export type PokemonEvolutionCreateManyPartyTypeInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyPartyTypeInput | Prisma.PokemonEvolutionCreateManyPartyTypeInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutKnownMoveTypeInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutKnownMoveTypeInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutKnownMoveTypeInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutKnownMoveTypeInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeInput>;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutPartyTypeInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedCreateWithoutPartyTypeInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutPartyTypeInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutPartyTypeInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutPartyTypeInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutPartyTypeInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeInput>;
};
export type PokemonEvolutionCreateWithoutTriggerItemInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutTriggerItemInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutTriggerItemInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput>;
};
export type PokemonEvolutionCreateManyTriggerItemInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyTriggerItemInput | Prisma.PokemonEvolutionCreateManyTriggerItemInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionCreateWithoutHeldItemInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutHeldItemInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutHeldItemInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput>;
};
export type PokemonEvolutionCreateManyHeldItemInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyHeldItemInput | Prisma.PokemonEvolutionCreateManyHeldItemInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutTriggerItemInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutTriggerItemInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutTriggerItemInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutTriggerItemInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutTriggerItemInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemInput>;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutHeldItemInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedCreateWithoutHeldItemInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutHeldItemInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutHeldItemInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutHeldItemInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutHeldItemInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutHeldItemInput>;
};
export type PokemonEvolutionCreateWithoutLocationInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutLocationInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutLocationInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput>;
};
export type PokemonEvolutionCreateManyLocationInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyLocationInput | Prisma.PokemonEvolutionCreateManyLocationInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutLocationInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedCreateWithoutLocationInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutLocationInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutLocationInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutLocationInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutLocationInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutLocationInput>;
};
export type PokemonEvolutionCreateWithoutEvolutionTriggerInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    gender?: Prisma.GendersCreateNestedOneWithoutEvolutionInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput = {
    id: number;
    evolved_species_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput>;
};
export type PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyEvolutionTriggerInput | Prisma.PokemonEvolutionCreateManyEvolutionTriggerInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutEvolutionTriggerInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedCreateWithoutEvolutionTriggerInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutEvolutionTriggerInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutEvolutionTriggerInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerInput>;
};
export type PokemonEvolutionCreateWithoutGenderInput = {
    id: number;
    minimum_level?: number | null;
    time_of_day?: string | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
    evolvedSpecies: Prisma.PokemonSpeciesCreateNestedOneWithoutEvolutionInput;
    evolutionTrigger: Prisma.EvolutionTriggersCreateNestedOneWithoutEvolutionInput;
    triggerItem?: Prisma.ItemsCreateNestedOneWithoutTriggerItemsInput;
    location?: Prisma.LocationsCreateNestedOneWithoutEvolutionInput;
    heldItem?: Prisma.ItemsCreateNestedOneWithoutHeldItemsInput;
    knownMove?: Prisma.MovesCreateNestedOneWithoutKnownMovesInput;
    knownMoveType?: Prisma.TypesCreateNestedOneWithoutKnownMoveTypesInput;
    partySpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput;
    partyType?: Prisma.TypesCreateNestedOneWithoutPartyTypesInput;
    tradeSpecies?: Prisma.PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput;
};
export type PokemonEvolutionUncheckedCreateWithoutGenderInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateOrConnectWithoutGenderInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput>;
};
export type PokemonEvolutionCreateManyGenderInputEnvelope = {
    data: Prisma.PokemonEvolutionCreateManyGenderInput | Prisma.PokemonEvolutionCreateManyGenderInput[];
    skipDuplicates?: boolean;
};
export type PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutGenderInput>;
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedCreateWithoutGenderInput>;
};
export type PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput = {
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateWithoutGenderInput, Prisma.PokemonEvolutionUncheckedUpdateWithoutGenderInput>;
};
export type PokemonEvolutionUpdateManyWithWhereWithoutGenderInput = {
    where: Prisma.PokemonEvolutionScalarWhereInput;
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyWithoutGenderInput>;
};
export type PokemonEvolutionCreateManyEvolvedSpeciesInput = {
    id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateManyPartySpeciesInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateManyTradeSpeciesInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateWithoutEvolvedSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutEvolvedSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutEvolvedSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUpdateWithoutPartySpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutPartySpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutPartySpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUpdateWithoutTradeSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutTradeSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutTradeSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionCreateManyKnownMoveInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateWithoutKnownMoveInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutKnownMoveInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionCreateManyKnownMoveTypeInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateManyPartyTypeInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateWithoutKnownMoveTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutKnownMoveTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUpdateWithoutPartyTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutPartyTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutPartyTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionCreateManyTriggerItemInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionCreateManyHeldItemInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateWithoutTriggerItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutTriggerItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutTriggerItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUpdateWithoutHeldItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutHeldItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutHeldItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionCreateManyLocationInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateWithoutLocationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutLocationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutLocationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionCreateManyEvolutionTriggerInput = {
    id: number;
    evolved_species_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    gender_id?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateWithoutEvolutionTriggerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    gender?: Prisma.GendersUpdateOneWithoutEvolutionNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutEvolutionTriggerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    gender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionCreateManyGenderInput = {
    id: number;
    evolved_species_id: number;
    evolution_trigger_id: number;
    trigger_item_id?: number | null;
    minimum_level?: number | null;
    location_id?: number | null;
    held_item_id?: number | null;
    time_of_day?: string | null;
    known_move_id?: number | null;
    known_move_type_id?: number | null;
    minimum_happiness?: number | null;
    minimum_beauty?: number | null;
    minimum_affection?: number | null;
    relative_physical_stats?: number | null;
    party_species_id?: number | null;
    party_type_id?: number | null;
    trade_species_id?: number | null;
    needs_overworld_rain: number;
    turn_upside_down: number;
};
export type PokemonEvolutionUpdateWithoutGenderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
    evolvedSpecies?: Prisma.PokemonSpeciesUpdateOneRequiredWithoutEvolutionNestedInput;
    evolutionTrigger?: Prisma.EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput;
    triggerItem?: Prisma.ItemsUpdateOneWithoutTriggerItemsNestedInput;
    location?: Prisma.LocationsUpdateOneWithoutEvolutionNestedInput;
    heldItem?: Prisma.ItemsUpdateOneWithoutHeldItemsNestedInput;
    knownMove?: Prisma.MovesUpdateOneWithoutKnownMovesNestedInput;
    knownMoveType?: Prisma.TypesUpdateOneWithoutKnownMoveTypesNestedInput;
    partySpecies?: Prisma.PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput;
    partyType?: Prisma.TypesUpdateOneWithoutPartyTypesNestedInput;
    tradeSpecies?: Prisma.PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput;
};
export type PokemonEvolutionUncheckedUpdateWithoutGenderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionUncheckedUpdateManyWithoutGenderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolved_species_id?: Prisma.IntFieldUpdateOperationsInput | number;
    evolution_trigger_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trigger_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_level?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    location_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    held_item_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    time_of_day?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    known_move_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    known_move_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_happiness?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_beauty?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    minimum_affection?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    relative_physical_stats?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    party_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_species_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    needs_overworld_rain?: Prisma.IntFieldUpdateOperationsInput | number;
    turn_upside_down?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PokemonEvolutionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evolved_species_id?: boolean;
    evolution_trigger_id?: boolean;
    trigger_item_id?: boolean;
    minimum_level?: boolean;
    gender_id?: boolean;
    location_id?: boolean;
    held_item_id?: boolean;
    time_of_day?: boolean;
    known_move_id?: boolean;
    known_move_type_id?: boolean;
    minimum_happiness?: boolean;
    minimum_beauty?: boolean;
    minimum_affection?: boolean;
    relative_physical_stats?: boolean;
    party_species_id?: boolean;
    party_type_id?: boolean;
    trade_species_id?: boolean;
    needs_overworld_rain?: boolean;
    turn_upside_down?: boolean;
    evolvedSpecies?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    evolutionTrigger?: boolean | Prisma.EvolutionTriggersDefaultArgs<ExtArgs>;
    triggerItem?: boolean | Prisma.PokemonEvolution$triggerItemArgs<ExtArgs>;
    gender?: boolean | Prisma.PokemonEvolution$genderArgs<ExtArgs>;
    location?: boolean | Prisma.PokemonEvolution$locationArgs<ExtArgs>;
    heldItem?: boolean | Prisma.PokemonEvolution$heldItemArgs<ExtArgs>;
    knownMove?: boolean | Prisma.PokemonEvolution$knownMoveArgs<ExtArgs>;
    knownMoveType?: boolean | Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs>;
    partySpecies?: boolean | Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs>;
    partyType?: boolean | Prisma.PokemonEvolution$partyTypeArgs<ExtArgs>;
    tradeSpecies?: boolean | Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonEvolution"]>;
export type PokemonEvolutionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evolved_species_id?: boolean;
    evolution_trigger_id?: boolean;
    trigger_item_id?: boolean;
    minimum_level?: boolean;
    gender_id?: boolean;
    location_id?: boolean;
    held_item_id?: boolean;
    time_of_day?: boolean;
    known_move_id?: boolean;
    known_move_type_id?: boolean;
    minimum_happiness?: boolean;
    minimum_beauty?: boolean;
    minimum_affection?: boolean;
    relative_physical_stats?: boolean;
    party_species_id?: boolean;
    party_type_id?: boolean;
    trade_species_id?: boolean;
    needs_overworld_rain?: boolean;
    turn_upside_down?: boolean;
    evolvedSpecies?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    evolutionTrigger?: boolean | Prisma.EvolutionTriggersDefaultArgs<ExtArgs>;
    triggerItem?: boolean | Prisma.PokemonEvolution$triggerItemArgs<ExtArgs>;
    gender?: boolean | Prisma.PokemonEvolution$genderArgs<ExtArgs>;
    location?: boolean | Prisma.PokemonEvolution$locationArgs<ExtArgs>;
    heldItem?: boolean | Prisma.PokemonEvolution$heldItemArgs<ExtArgs>;
    knownMove?: boolean | Prisma.PokemonEvolution$knownMoveArgs<ExtArgs>;
    knownMoveType?: boolean | Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs>;
    partySpecies?: boolean | Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs>;
    partyType?: boolean | Prisma.PokemonEvolution$partyTypeArgs<ExtArgs>;
    tradeSpecies?: boolean | Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonEvolution"]>;
export type PokemonEvolutionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evolved_species_id?: boolean;
    evolution_trigger_id?: boolean;
    trigger_item_id?: boolean;
    minimum_level?: boolean;
    gender_id?: boolean;
    location_id?: boolean;
    held_item_id?: boolean;
    time_of_day?: boolean;
    known_move_id?: boolean;
    known_move_type_id?: boolean;
    minimum_happiness?: boolean;
    minimum_beauty?: boolean;
    minimum_affection?: boolean;
    relative_physical_stats?: boolean;
    party_species_id?: boolean;
    party_type_id?: boolean;
    trade_species_id?: boolean;
    needs_overworld_rain?: boolean;
    turn_upside_down?: boolean;
    evolvedSpecies?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    evolutionTrigger?: boolean | Prisma.EvolutionTriggersDefaultArgs<ExtArgs>;
    triggerItem?: boolean | Prisma.PokemonEvolution$triggerItemArgs<ExtArgs>;
    gender?: boolean | Prisma.PokemonEvolution$genderArgs<ExtArgs>;
    location?: boolean | Prisma.PokemonEvolution$locationArgs<ExtArgs>;
    heldItem?: boolean | Prisma.PokemonEvolution$heldItemArgs<ExtArgs>;
    knownMove?: boolean | Prisma.PokemonEvolution$knownMoveArgs<ExtArgs>;
    knownMoveType?: boolean | Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs>;
    partySpecies?: boolean | Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs>;
    partyType?: boolean | Prisma.PokemonEvolution$partyTypeArgs<ExtArgs>;
    tradeSpecies?: boolean | Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs>;
}, ExtArgs["result"]["pokemonEvolution"]>;
export type PokemonEvolutionSelectScalar = {
    id?: boolean;
    evolved_species_id?: boolean;
    evolution_trigger_id?: boolean;
    trigger_item_id?: boolean;
    minimum_level?: boolean;
    gender_id?: boolean;
    location_id?: boolean;
    held_item_id?: boolean;
    time_of_day?: boolean;
    known_move_id?: boolean;
    known_move_type_id?: boolean;
    minimum_happiness?: boolean;
    minimum_beauty?: boolean;
    minimum_affection?: boolean;
    relative_physical_stats?: boolean;
    party_species_id?: boolean;
    party_type_id?: boolean;
    trade_species_id?: boolean;
    needs_overworld_rain?: boolean;
    turn_upside_down?: boolean;
};
export type PokemonEvolutionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evolved_species_id" | "evolution_trigger_id" | "trigger_item_id" | "minimum_level" | "gender_id" | "location_id" | "held_item_id" | "time_of_day" | "known_move_id" | "known_move_type_id" | "minimum_happiness" | "minimum_beauty" | "minimum_affection" | "relative_physical_stats" | "party_species_id" | "party_type_id" | "trade_species_id" | "needs_overworld_rain" | "turn_upside_down", ExtArgs["result"]["pokemonEvolution"]>;
export type PokemonEvolutionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evolvedSpecies?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    evolutionTrigger?: boolean | Prisma.EvolutionTriggersDefaultArgs<ExtArgs>;
    triggerItem?: boolean | Prisma.PokemonEvolution$triggerItemArgs<ExtArgs>;
    gender?: boolean | Prisma.PokemonEvolution$genderArgs<ExtArgs>;
    location?: boolean | Prisma.PokemonEvolution$locationArgs<ExtArgs>;
    heldItem?: boolean | Prisma.PokemonEvolution$heldItemArgs<ExtArgs>;
    knownMove?: boolean | Prisma.PokemonEvolution$knownMoveArgs<ExtArgs>;
    knownMoveType?: boolean | Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs>;
    partySpecies?: boolean | Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs>;
    partyType?: boolean | Prisma.PokemonEvolution$partyTypeArgs<ExtArgs>;
    tradeSpecies?: boolean | Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs>;
};
export type PokemonEvolutionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evolvedSpecies?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    evolutionTrigger?: boolean | Prisma.EvolutionTriggersDefaultArgs<ExtArgs>;
    triggerItem?: boolean | Prisma.PokemonEvolution$triggerItemArgs<ExtArgs>;
    gender?: boolean | Prisma.PokemonEvolution$genderArgs<ExtArgs>;
    location?: boolean | Prisma.PokemonEvolution$locationArgs<ExtArgs>;
    heldItem?: boolean | Prisma.PokemonEvolution$heldItemArgs<ExtArgs>;
    knownMove?: boolean | Prisma.PokemonEvolution$knownMoveArgs<ExtArgs>;
    knownMoveType?: boolean | Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs>;
    partySpecies?: boolean | Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs>;
    partyType?: boolean | Prisma.PokemonEvolution$partyTypeArgs<ExtArgs>;
    tradeSpecies?: boolean | Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs>;
};
export type PokemonEvolutionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evolvedSpecies?: boolean | Prisma.PokemonSpeciesDefaultArgs<ExtArgs>;
    evolutionTrigger?: boolean | Prisma.EvolutionTriggersDefaultArgs<ExtArgs>;
    triggerItem?: boolean | Prisma.PokemonEvolution$triggerItemArgs<ExtArgs>;
    gender?: boolean | Prisma.PokemonEvolution$genderArgs<ExtArgs>;
    location?: boolean | Prisma.PokemonEvolution$locationArgs<ExtArgs>;
    heldItem?: boolean | Prisma.PokemonEvolution$heldItemArgs<ExtArgs>;
    knownMove?: boolean | Prisma.PokemonEvolution$knownMoveArgs<ExtArgs>;
    knownMoveType?: boolean | Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs>;
    partySpecies?: boolean | Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs>;
    partyType?: boolean | Prisma.PokemonEvolution$partyTypeArgs<ExtArgs>;
    tradeSpecies?: boolean | Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs>;
};
export type $PokemonEvolutionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PokemonEvolution";
    objects: {
        evolvedSpecies: Prisma.$PokemonSpeciesPayload<ExtArgs>;
        evolutionTrigger: Prisma.$EvolutionTriggersPayload<ExtArgs>;
        triggerItem: Prisma.$ItemsPayload<ExtArgs> | null;
        gender: Prisma.$GendersPayload<ExtArgs> | null;
        location: Prisma.$LocationsPayload<ExtArgs> | null;
        heldItem: Prisma.$ItemsPayload<ExtArgs> | null;
        knownMove: Prisma.$MovesPayload<ExtArgs> | null;
        knownMoveType: Prisma.$TypesPayload<ExtArgs> | null;
        partySpecies: Prisma.$PokemonSpeciesPayload<ExtArgs> | null;
        partyType: Prisma.$TypesPayload<ExtArgs> | null;
        tradeSpecies: Prisma.$PokemonSpeciesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        evolved_species_id: number;
        evolution_trigger_id: number;
        trigger_item_id: number | null;
        minimum_level: number | null;
        gender_id: number | null;
        location_id: number | null;
        held_item_id: number | null;
        time_of_day: string | null;
        known_move_id: number | null;
        known_move_type_id: number | null;
        minimum_happiness: number | null;
        minimum_beauty: number | null;
        minimum_affection: number | null;
        relative_physical_stats: number | null;
        party_species_id: number | null;
        party_type_id: number | null;
        trade_species_id: number | null;
        needs_overworld_rain: number;
        turn_upside_down: number;
    }, ExtArgs["result"]["pokemonEvolution"]>;
    composites: {};
};
export type PokemonEvolutionGetPayload<S extends boolean | null | undefined | PokemonEvolutionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload, S>;
export type PokemonEvolutionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PokemonEvolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PokemonEvolutionCountAggregateInputType | true;
};
export interface PokemonEvolutionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PokemonEvolution'];
        meta: {
            name: 'PokemonEvolution';
        };
    };
    /**
     * Find zero or one PokemonEvolution that matches the filter.
     * @param {PokemonEvolutionFindUniqueArgs} args - Arguments to find a PokemonEvolution
     * @example
     * // Get one PokemonEvolution
     * const pokemonEvolution = await prisma.pokemonEvolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonEvolutionFindUniqueArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PokemonEvolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonEvolutionFindUniqueOrThrowArgs} args - Arguments to find a PokemonEvolution
     * @example
     * // Get one PokemonEvolution
     * const pokemonEvolution = await prisma.pokemonEvolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonEvolutionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonEvolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEvolutionFindFirstArgs} args - Arguments to find a PokemonEvolution
     * @example
     * // Get one PokemonEvolution
     * const pokemonEvolution = await prisma.pokemonEvolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonEvolutionFindFirstArgs>(args?: Prisma.SelectSubset<T, PokemonEvolutionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PokemonEvolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEvolutionFindFirstOrThrowArgs} args - Arguments to find a PokemonEvolution
     * @example
     * // Get one PokemonEvolution
     * const pokemonEvolution = await prisma.pokemonEvolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonEvolutionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PokemonEvolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PokemonEvolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEvolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonEvolutions
     * const pokemonEvolutions = await prisma.pokemonEvolution.findMany()
     *
     * // Get first 10 PokemonEvolutions
     * const pokemonEvolutions = await prisma.pokemonEvolution.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pokemonEvolutionWithIdOnly = await prisma.pokemonEvolution.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PokemonEvolutionFindManyArgs>(args?: Prisma.SelectSubset<T, PokemonEvolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PokemonEvolution.
     * @param {PokemonEvolutionCreateArgs} args - Arguments to create a PokemonEvolution.
     * @example
     * // Create one PokemonEvolution
     * const PokemonEvolution = await prisma.pokemonEvolution.create({
     *   data: {
     *     // ... data to create a PokemonEvolution
     *   }
     * })
     *
     */
    create<T extends PokemonEvolutionCreateArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionCreateArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PokemonEvolutions.
     * @param {PokemonEvolutionCreateManyArgs} args - Arguments to create many PokemonEvolutions.
     * @example
     * // Create many PokemonEvolutions
     * const pokemonEvolution = await prisma.pokemonEvolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PokemonEvolutionCreateManyArgs>(args?: Prisma.SelectSubset<T, PokemonEvolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PokemonEvolutions and returns the data saved in the database.
     * @param {PokemonEvolutionCreateManyAndReturnArgs} args - Arguments to create many PokemonEvolutions.
     * @example
     * // Create many PokemonEvolutions
     * const pokemonEvolution = await prisma.pokemonEvolution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PokemonEvolutions and only return the `id`
     * const pokemonEvolutionWithIdOnly = await prisma.pokemonEvolution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PokemonEvolutionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PokemonEvolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PokemonEvolution.
     * @param {PokemonEvolutionDeleteArgs} args - Arguments to delete one PokemonEvolution.
     * @example
     * // Delete one PokemonEvolution
     * const PokemonEvolution = await prisma.pokemonEvolution.delete({
     *   where: {
     *     // ... filter to delete one PokemonEvolution
     *   }
     * })
     *
     */
    delete<T extends PokemonEvolutionDeleteArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionDeleteArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PokemonEvolution.
     * @param {PokemonEvolutionUpdateArgs} args - Arguments to update one PokemonEvolution.
     * @example
     * // Update one PokemonEvolution
     * const pokemonEvolution = await prisma.pokemonEvolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PokemonEvolutionUpdateArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionUpdateArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PokemonEvolutions.
     * @param {PokemonEvolutionDeleteManyArgs} args - Arguments to filter PokemonEvolutions to delete.
     * @example
     * // Delete a few PokemonEvolutions
     * const { count } = await prisma.pokemonEvolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PokemonEvolutionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PokemonEvolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonEvolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEvolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonEvolutions
     * const pokemonEvolution = await prisma.pokemonEvolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PokemonEvolutionUpdateManyArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PokemonEvolutions and returns the data updated in the database.
     * @param {PokemonEvolutionUpdateManyAndReturnArgs} args - Arguments to update many PokemonEvolutions.
     * @example
     * // Update many PokemonEvolutions
     * const pokemonEvolution = await prisma.pokemonEvolution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PokemonEvolutions and only return the `id`
     * const pokemonEvolutionWithIdOnly = await prisma.pokemonEvolution.updateManyAndReturn({
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
    updateManyAndReturn<T extends PokemonEvolutionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PokemonEvolution.
     * @param {PokemonEvolutionUpsertArgs} args - Arguments to update or create a PokemonEvolution.
     * @example
     * // Update or create a PokemonEvolution
     * const pokemonEvolution = await prisma.pokemonEvolution.upsert({
     *   create: {
     *     // ... data to create a PokemonEvolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonEvolution we want to update
     *   }
     * })
     */
    upsert<T extends PokemonEvolutionUpsertArgs>(args: Prisma.SelectSubset<T, PokemonEvolutionUpsertArgs<ExtArgs>>): Prisma.Prisma__PokemonEvolutionClient<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PokemonEvolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEvolutionCountArgs} args - Arguments to filter PokemonEvolutions to count.
     * @example
     * // Count the number of PokemonEvolutions
     * const count = await prisma.pokemonEvolution.count({
     *   where: {
     *     // ... the filter for the PokemonEvolutions we want to count
     *   }
     * })
    **/
    count<T extends PokemonEvolutionCountArgs>(args?: Prisma.Subset<T, PokemonEvolutionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PokemonEvolutionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PokemonEvolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEvolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonEvolutionAggregateArgs>(args: Prisma.Subset<T, PokemonEvolutionAggregateArgs>): Prisma.PrismaPromise<GetPokemonEvolutionAggregateType<T>>;
    /**
     * Group by PokemonEvolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonEvolutionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PokemonEvolutionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PokemonEvolutionGroupByArgs['orderBy'];
    } : {
        orderBy?: PokemonEvolutionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PokemonEvolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonEvolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PokemonEvolution model
     */
    readonly fields: PokemonEvolutionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PokemonEvolution.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PokemonEvolutionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evolvedSpecies<T extends Prisma.PokemonSpeciesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonSpeciesDefaultArgs<ExtArgs>>): Prisma.Prisma__PokemonSpeciesClient<runtime.Types.Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    evolutionTrigger<T extends Prisma.EvolutionTriggersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvolutionTriggersDefaultArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    triggerItem<T extends Prisma.PokemonEvolution$triggerItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$triggerItemArgs<ExtArgs>>): Prisma.Prisma__ItemsClient<runtime.Types.Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    gender<T extends Prisma.PokemonEvolution$genderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$genderArgs<ExtArgs>>): Prisma.Prisma__GendersClient<runtime.Types.Result.GetResult<Prisma.$GendersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    location<T extends Prisma.PokemonEvolution$locationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$locationArgs<ExtArgs>>): Prisma.Prisma__LocationsClient<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    heldItem<T extends Prisma.PokemonEvolution$heldItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$heldItemArgs<ExtArgs>>): Prisma.Prisma__ItemsClient<runtime.Types.Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    knownMove<T extends Prisma.PokemonEvolution$knownMoveArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$knownMoveArgs<ExtArgs>>): Prisma.Prisma__MovesClient<runtime.Types.Result.GetResult<Prisma.$MovesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    knownMoveType<T extends Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$knownMoveTypeArgs<ExtArgs>>): Prisma.Prisma__TypesClient<runtime.Types.Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    partySpecies<T extends Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$partySpeciesArgs<ExtArgs>>): Prisma.Prisma__PokemonSpeciesClient<runtime.Types.Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    partyType<T extends Prisma.PokemonEvolution$partyTypeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$partyTypeArgs<ExtArgs>>): Prisma.Prisma__TypesClient<runtime.Types.Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tradeSpecies<T extends Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PokemonEvolution$tradeSpeciesArgs<ExtArgs>>): Prisma.Prisma__PokemonSpeciesClient<runtime.Types.Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PokemonEvolution model
 */
export interface PokemonEvolutionFieldRefs {
    readonly id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly evolved_species_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly evolution_trigger_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly trigger_item_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly minimum_level: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly gender_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly location_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly held_item_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly time_of_day: Prisma.FieldRef<"PokemonEvolution", 'String'>;
    readonly known_move_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly known_move_type_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly minimum_happiness: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly minimum_beauty: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly minimum_affection: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly relative_physical_stats: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly party_species_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly party_type_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly trade_species_id: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly needs_overworld_rain: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
    readonly turn_upside_down: Prisma.FieldRef<"PokemonEvolution", 'Int'>;
}
/**
 * PokemonEvolution findUnique
 */
export type PokemonEvolutionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEvolution to fetch.
     */
    where: Prisma.PokemonEvolutionWhereUniqueInput;
};
/**
 * PokemonEvolution findUniqueOrThrow
 */
export type PokemonEvolutionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEvolution to fetch.
     */
    where: Prisma.PokemonEvolutionWhereUniqueInput;
};
/**
 * PokemonEvolution findFirst
 */
export type PokemonEvolutionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEvolution to fetch.
     */
    where?: Prisma.PokemonEvolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEvolutions to fetch.
     */
    orderBy?: Prisma.PokemonEvolutionOrderByWithRelationInput | Prisma.PokemonEvolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonEvolutions.
     */
    cursor?: Prisma.PokemonEvolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEvolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEvolutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonEvolutions.
     */
    distinct?: Prisma.PokemonEvolutionScalarFieldEnum | Prisma.PokemonEvolutionScalarFieldEnum[];
};
/**
 * PokemonEvolution findFirstOrThrow
 */
export type PokemonEvolutionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEvolution to fetch.
     */
    where?: Prisma.PokemonEvolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEvolutions to fetch.
     */
    orderBy?: Prisma.PokemonEvolutionOrderByWithRelationInput | Prisma.PokemonEvolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PokemonEvolutions.
     */
    cursor?: Prisma.PokemonEvolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEvolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEvolutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonEvolutions.
     */
    distinct?: Prisma.PokemonEvolutionScalarFieldEnum | Prisma.PokemonEvolutionScalarFieldEnum[];
};
/**
 * PokemonEvolution findMany
 */
export type PokemonEvolutionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * Filter, which PokemonEvolutions to fetch.
     */
    where?: Prisma.PokemonEvolutionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PokemonEvolutions to fetch.
     */
    orderBy?: Prisma.PokemonEvolutionOrderByWithRelationInput | Prisma.PokemonEvolutionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PokemonEvolutions.
     */
    cursor?: Prisma.PokemonEvolutionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PokemonEvolutions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PokemonEvolutions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PokemonEvolutions.
     */
    distinct?: Prisma.PokemonEvolutionScalarFieldEnum | Prisma.PokemonEvolutionScalarFieldEnum[];
};
/**
 * PokemonEvolution create
 */
export type PokemonEvolutionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * The data needed to create a PokemonEvolution.
     */
    data: Prisma.XOR<Prisma.PokemonEvolutionCreateInput, Prisma.PokemonEvolutionUncheckedCreateInput>;
};
/**
 * PokemonEvolution createMany
 */
export type PokemonEvolutionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonEvolutions.
     */
    data: Prisma.PokemonEvolutionCreateManyInput | Prisma.PokemonEvolutionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PokemonEvolution createManyAndReturn
 */
export type PokemonEvolutionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * The data used to create many PokemonEvolutions.
     */
    data: Prisma.PokemonEvolutionCreateManyInput | Prisma.PokemonEvolutionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonEvolution update
 */
export type PokemonEvolutionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * The data needed to update a PokemonEvolution.
     */
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateInput, Prisma.PokemonEvolutionUncheckedUpdateInput>;
    /**
     * Choose, which PokemonEvolution to update.
     */
    where: Prisma.PokemonEvolutionWhereUniqueInput;
};
/**
 * PokemonEvolution updateMany
 */
export type PokemonEvolutionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonEvolutions.
     */
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonEvolutions to update
     */
    where?: Prisma.PokemonEvolutionWhereInput;
    /**
     * Limit how many PokemonEvolutions to update.
     */
    limit?: number;
};
/**
 * PokemonEvolution updateManyAndReturn
 */
export type PokemonEvolutionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * The data used to update PokemonEvolutions.
     */
    data: Prisma.XOR<Prisma.PokemonEvolutionUpdateManyMutationInput, Prisma.PokemonEvolutionUncheckedUpdateManyInput>;
    /**
     * Filter which PokemonEvolutions to update
     */
    where?: Prisma.PokemonEvolutionWhereInput;
    /**
     * Limit how many PokemonEvolutions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PokemonEvolution upsert
 */
export type PokemonEvolutionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * The filter to search for the PokemonEvolution to update in case it exists.
     */
    where: Prisma.PokemonEvolutionWhereUniqueInput;
    /**
     * In case the PokemonEvolution found by the `where` argument doesn't exist, create a new PokemonEvolution with this data.
     */
    create: Prisma.XOR<Prisma.PokemonEvolutionCreateInput, Prisma.PokemonEvolutionUncheckedCreateInput>;
    /**
     * In case the PokemonEvolution was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PokemonEvolutionUpdateInput, Prisma.PokemonEvolutionUncheckedUpdateInput>;
};
/**
 * PokemonEvolution delete
 */
export type PokemonEvolutionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
    /**
     * Filter which PokemonEvolution to delete.
     */
    where: Prisma.PokemonEvolutionWhereUniqueInput;
};
/**
 * PokemonEvolution deleteMany
 */
export type PokemonEvolutionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonEvolutions to delete
     */
    where?: Prisma.PokemonEvolutionWhereInput;
    /**
     * Limit how many PokemonEvolutions to delete.
     */
    limit?: number;
};
/**
 * PokemonEvolution.triggerItem
 */
export type PokemonEvolution$triggerItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * PokemonEvolution.gender
 */
export type PokemonEvolution$genderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genders
     */
    select?: Prisma.GendersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Genders
     */
    omit?: Prisma.GendersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GendersInclude<ExtArgs> | null;
    where?: Prisma.GendersWhereInput;
};
/**
 * PokemonEvolution.location
 */
export type PokemonEvolution$locationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: Prisma.LocationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Locations
     */
    omit?: Prisma.LocationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationsInclude<ExtArgs> | null;
    where?: Prisma.LocationsWhereInput;
};
/**
 * PokemonEvolution.heldItem
 */
export type PokemonEvolution$heldItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * PokemonEvolution.knownMove
 */
export type PokemonEvolution$knownMoveArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moves
     */
    select?: Prisma.MovesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moves
     */
    omit?: Prisma.MovesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MovesInclude<ExtArgs> | null;
    where?: Prisma.MovesWhereInput;
};
/**
 * PokemonEvolution.knownMoveType
 */
export type PokemonEvolution$knownMoveTypeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: Prisma.TypesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Types
     */
    omit?: Prisma.TypesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypesInclude<ExtArgs> | null;
    where?: Prisma.TypesWhereInput;
};
/**
 * PokemonEvolution.partySpecies
 */
export type PokemonEvolution$partySpeciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * PokemonEvolution.partyType
 */
export type PokemonEvolution$partyTypeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: Prisma.TypesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Types
     */
    omit?: Prisma.TypesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypesInclude<ExtArgs> | null;
    where?: Prisma.TypesWhereInput;
};
/**
 * PokemonEvolution.tradeSpecies
 */
export type PokemonEvolution$tradeSpeciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * PokemonEvolution without action
 */
export type PokemonEvolutionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonEvolution
     */
    select?: Prisma.PokemonEvolutionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonEvolution
     */
    omit?: Prisma.PokemonEvolutionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonEvolutionInclude<ExtArgs> | null;
};
