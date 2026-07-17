import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Regions
 * @@TypeGraphQL.type(name: "Region")
 */
export type RegionsModel = runtime.Types.Result.DefaultSelection<Prisma.$RegionsPayload>;
export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null;
    _avg: RegionsAvgAggregateOutputType | null;
    _sum: RegionsSumAggregateOutputType | null;
    _min: RegionsMinAggregateOutputType | null;
    _max: RegionsMaxAggregateOutputType | null;
};
export type RegionsAvgAggregateOutputType = {
    id: number | null;
};
export type RegionsSumAggregateOutputType = {
    id: number | null;
};
export type RegionsMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type RegionsMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type RegionsCountAggregateOutputType = {
    id: number;
    identifier: number;
    _all: number;
};
export type RegionsAvgAggregateInputType = {
    id?: true;
};
export type RegionsSumAggregateInputType = {
    id?: true;
};
export type RegionsMinAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type RegionsMaxAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type RegionsCountAggregateInputType = {
    id?: true;
    identifier?: true;
    _all?: true;
};
export type RegionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to aggregate.
     */
    where?: Prisma.RegionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regions to fetch.
     */
    orderBy?: Prisma.RegionsOrderByWithRelationInput | Prisma.RegionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RegionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Regions
    **/
    _count?: true | RegionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RegionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RegionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType;
};
export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
    [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegions[P]> : Prisma.GetScalarType<T[P], AggregateRegions[P]>;
};
export type RegionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegionsWhereInput;
    orderBy?: Prisma.RegionsOrderByWithAggregationInput | Prisma.RegionsOrderByWithAggregationInput[];
    by: Prisma.RegionsScalarFieldEnum[] | Prisma.RegionsScalarFieldEnum;
    having?: Prisma.RegionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegionsCountAggregateInputType | true;
    _avg?: RegionsAvgAggregateInputType;
    _sum?: RegionsSumAggregateInputType;
    _min?: RegionsMinAggregateInputType;
    _max?: RegionsMaxAggregateInputType;
};
export type RegionsGroupByOutputType = {
    id: number;
    identifier: string;
    _count: RegionsCountAggregateOutputType | null;
    _avg: RegionsAvgAggregateOutputType | null;
    _sum: RegionsSumAggregateOutputType | null;
    _min: RegionsMinAggregateOutputType | null;
    _max: RegionsMaxAggregateOutputType | null;
};
export type GetRegionsGroupByPayload<T extends RegionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegionsGroupByOutputType[P]>;
}>>;
export type RegionsWhereInput = {
    AND?: Prisma.RegionsWhereInput | Prisma.RegionsWhereInput[];
    OR?: Prisma.RegionsWhereInput[];
    NOT?: Prisma.RegionsWhereInput | Prisma.RegionsWhereInput[];
    id?: Prisma.IntFilter<"Regions"> | number;
    identifier?: Prisma.StringFilter<"Regions"> | string;
    generations?: Prisma.GenerationsListRelationFilter;
    locations?: Prisma.LocationsListRelationFilter;
    pokedexes?: Prisma.PokedexesListRelationFilter;
    versionGroups?: Prisma.VersionGroupRegionsListRelationFilter;
};
export type RegionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    generations?: Prisma.GenerationsOrderByRelationAggregateInput;
    locations?: Prisma.LocationsOrderByRelationAggregateInput;
    pokedexes?: Prisma.PokedexesOrderByRelationAggregateInput;
    versionGroups?: Prisma.VersionGroupRegionsOrderByRelationAggregateInput;
};
export type RegionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RegionsWhereInput | Prisma.RegionsWhereInput[];
    OR?: Prisma.RegionsWhereInput[];
    NOT?: Prisma.RegionsWhereInput | Prisma.RegionsWhereInput[];
    identifier?: Prisma.StringFilter<"Regions"> | string;
    generations?: Prisma.GenerationsListRelationFilter;
    locations?: Prisma.LocationsListRelationFilter;
    pokedexes?: Prisma.PokedexesListRelationFilter;
    versionGroups?: Prisma.VersionGroupRegionsListRelationFilter;
}, "id">;
export type RegionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    _count?: Prisma.RegionsCountOrderByAggregateInput;
    _avg?: Prisma.RegionsAvgOrderByAggregateInput;
    _max?: Prisma.RegionsMaxOrderByAggregateInput;
    _min?: Prisma.RegionsMinOrderByAggregateInput;
    _sum?: Prisma.RegionsSumOrderByAggregateInput;
};
export type RegionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegionsScalarWhereWithAggregatesInput | Prisma.RegionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegionsScalarWhereWithAggregatesInput | Prisma.RegionsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Regions"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"Regions"> | string;
};
export type RegionsCreateInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsCreateNestedManyWithoutRegionInput;
    locations?: Prisma.LocationsCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsCreateNestedManyWithoutRegionInput;
};
export type RegionsUncheckedCreateInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsUncheckedCreateNestedManyWithoutRegionInput;
    locations?: Prisma.LocationsUncheckedCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesUncheckedCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput;
};
export type RegionsUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUpdateManyWithoutRegionNestedInput;
    locations?: Prisma.LocationsUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUpdateManyWithoutRegionNestedInput;
};
export type RegionsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUncheckedUpdateManyWithoutRegionNestedInput;
    locations?: Prisma.LocationsUncheckedUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUncheckedUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput;
};
export type RegionsCreateManyInput = {
    id: number;
    identifier: string;
};
export type RegionsUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegionsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegionsScalarRelationFilter = {
    is?: Prisma.RegionsWhereInput;
    isNot?: Prisma.RegionsWhereInput;
};
export type RegionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type RegionsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RegionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type RegionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type RegionsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RegionsNullableScalarRelationFilter = {
    is?: Prisma.RegionsWhereInput | null;
    isNot?: Prisma.RegionsWhereInput | null;
};
export type RegionsCreateNestedOneWithoutGenerationsInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutGenerationsInput, Prisma.RegionsUncheckedCreateWithoutGenerationsInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutGenerationsInput;
    connect?: Prisma.RegionsWhereUniqueInput;
};
export type RegionsUpdateOneRequiredWithoutGenerationsNestedInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutGenerationsInput, Prisma.RegionsUncheckedCreateWithoutGenerationsInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutGenerationsInput;
    upsert?: Prisma.RegionsUpsertWithoutGenerationsInput;
    connect?: Prisma.RegionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegionsUpdateToOneWithWhereWithoutGenerationsInput, Prisma.RegionsUpdateWithoutGenerationsInput>, Prisma.RegionsUncheckedUpdateWithoutGenerationsInput>;
};
export type RegionsCreateNestedOneWithoutLocationsInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutLocationsInput, Prisma.RegionsUncheckedCreateWithoutLocationsInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutLocationsInput;
    connect?: Prisma.RegionsWhereUniqueInput;
};
export type RegionsUpdateOneWithoutLocationsNestedInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutLocationsInput, Prisma.RegionsUncheckedCreateWithoutLocationsInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutLocationsInput;
    upsert?: Prisma.RegionsUpsertWithoutLocationsInput;
    disconnect?: Prisma.RegionsWhereInput | boolean;
    delete?: Prisma.RegionsWhereInput | boolean;
    connect?: Prisma.RegionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegionsUpdateToOneWithWhereWithoutLocationsInput, Prisma.RegionsUpdateWithoutLocationsInput>, Prisma.RegionsUncheckedUpdateWithoutLocationsInput>;
};
export type RegionsCreateNestedOneWithoutPokedexesInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutPokedexesInput, Prisma.RegionsUncheckedCreateWithoutPokedexesInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutPokedexesInput;
    connect?: Prisma.RegionsWhereUniqueInput;
};
export type RegionsUpdateOneWithoutPokedexesNestedInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutPokedexesInput, Prisma.RegionsUncheckedCreateWithoutPokedexesInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutPokedexesInput;
    upsert?: Prisma.RegionsUpsertWithoutPokedexesInput;
    disconnect?: Prisma.RegionsWhereInput | boolean;
    delete?: Prisma.RegionsWhereInput | boolean;
    connect?: Prisma.RegionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegionsUpdateToOneWithWhereWithoutPokedexesInput, Prisma.RegionsUpdateWithoutPokedexesInput>, Prisma.RegionsUncheckedUpdateWithoutPokedexesInput>;
};
export type RegionsCreateNestedOneWithoutVersionGroupsInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutVersionGroupsInput, Prisma.RegionsUncheckedCreateWithoutVersionGroupsInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutVersionGroupsInput;
    connect?: Prisma.RegionsWhereUniqueInput;
};
export type RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.RegionsCreateWithoutVersionGroupsInput, Prisma.RegionsUncheckedCreateWithoutVersionGroupsInput>;
    connectOrCreate?: Prisma.RegionsCreateOrConnectWithoutVersionGroupsInput;
    upsert?: Prisma.RegionsUpsertWithoutVersionGroupsInput;
    connect?: Prisma.RegionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RegionsUpdateToOneWithWhereWithoutVersionGroupsInput, Prisma.RegionsUpdateWithoutVersionGroupsInput>, Prisma.RegionsUncheckedUpdateWithoutVersionGroupsInput>;
};
export type RegionsCreateWithoutGenerationsInput = {
    id: number;
    identifier: string;
    locations?: Prisma.LocationsCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsCreateNestedManyWithoutRegionInput;
};
export type RegionsUncheckedCreateWithoutGenerationsInput = {
    id: number;
    identifier: string;
    locations?: Prisma.LocationsUncheckedCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesUncheckedCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput;
};
export type RegionsCreateOrConnectWithoutGenerationsInput = {
    where: Prisma.RegionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutGenerationsInput, Prisma.RegionsUncheckedCreateWithoutGenerationsInput>;
};
export type RegionsUpsertWithoutGenerationsInput = {
    update: Prisma.XOR<Prisma.RegionsUpdateWithoutGenerationsInput, Prisma.RegionsUncheckedUpdateWithoutGenerationsInput>;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutGenerationsInput, Prisma.RegionsUncheckedCreateWithoutGenerationsInput>;
    where?: Prisma.RegionsWhereInput;
};
export type RegionsUpdateToOneWithWhereWithoutGenerationsInput = {
    where?: Prisma.RegionsWhereInput;
    data: Prisma.XOR<Prisma.RegionsUpdateWithoutGenerationsInput, Prisma.RegionsUncheckedUpdateWithoutGenerationsInput>;
};
export type RegionsUpdateWithoutGenerationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    locations?: Prisma.LocationsUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUpdateManyWithoutRegionNestedInput;
};
export type RegionsUncheckedUpdateWithoutGenerationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    locations?: Prisma.LocationsUncheckedUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUncheckedUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput;
};
export type RegionsCreateWithoutLocationsInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsCreateNestedManyWithoutRegionInput;
};
export type RegionsUncheckedCreateWithoutLocationsInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsUncheckedCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesUncheckedCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput;
};
export type RegionsCreateOrConnectWithoutLocationsInput = {
    where: Prisma.RegionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutLocationsInput, Prisma.RegionsUncheckedCreateWithoutLocationsInput>;
};
export type RegionsUpsertWithoutLocationsInput = {
    update: Prisma.XOR<Prisma.RegionsUpdateWithoutLocationsInput, Prisma.RegionsUncheckedUpdateWithoutLocationsInput>;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutLocationsInput, Prisma.RegionsUncheckedCreateWithoutLocationsInput>;
    where?: Prisma.RegionsWhereInput;
};
export type RegionsUpdateToOneWithWhereWithoutLocationsInput = {
    where?: Prisma.RegionsWhereInput;
    data: Prisma.XOR<Prisma.RegionsUpdateWithoutLocationsInput, Prisma.RegionsUncheckedUpdateWithoutLocationsInput>;
};
export type RegionsUpdateWithoutLocationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUpdateManyWithoutRegionNestedInput;
};
export type RegionsUncheckedUpdateWithoutLocationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUncheckedUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUncheckedUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput;
};
export type RegionsCreateWithoutPokedexesInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsCreateNestedManyWithoutRegionInput;
    locations?: Prisma.LocationsCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsCreateNestedManyWithoutRegionInput;
};
export type RegionsUncheckedCreateWithoutPokedexesInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsUncheckedCreateNestedManyWithoutRegionInput;
    locations?: Prisma.LocationsUncheckedCreateNestedManyWithoutRegionInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedCreateNestedManyWithoutRegionInput;
};
export type RegionsCreateOrConnectWithoutPokedexesInput = {
    where: Prisma.RegionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutPokedexesInput, Prisma.RegionsUncheckedCreateWithoutPokedexesInput>;
};
export type RegionsUpsertWithoutPokedexesInput = {
    update: Prisma.XOR<Prisma.RegionsUpdateWithoutPokedexesInput, Prisma.RegionsUncheckedUpdateWithoutPokedexesInput>;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutPokedexesInput, Prisma.RegionsUncheckedCreateWithoutPokedexesInput>;
    where?: Prisma.RegionsWhereInput;
};
export type RegionsUpdateToOneWithWhereWithoutPokedexesInput = {
    where?: Prisma.RegionsWhereInput;
    data: Prisma.XOR<Prisma.RegionsUpdateWithoutPokedexesInput, Prisma.RegionsUncheckedUpdateWithoutPokedexesInput>;
};
export type RegionsUpdateWithoutPokedexesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUpdateManyWithoutRegionNestedInput;
    locations?: Prisma.LocationsUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUpdateManyWithoutRegionNestedInput;
};
export type RegionsUncheckedUpdateWithoutPokedexesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUncheckedUpdateManyWithoutRegionNestedInput;
    locations?: Prisma.LocationsUncheckedUpdateManyWithoutRegionNestedInput;
    versionGroups?: Prisma.VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput;
};
export type RegionsCreateWithoutVersionGroupsInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsCreateNestedManyWithoutRegionInput;
    locations?: Prisma.LocationsCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesCreateNestedManyWithoutRegionInput;
};
export type RegionsUncheckedCreateWithoutVersionGroupsInput = {
    id: number;
    identifier: string;
    generations?: Prisma.GenerationsUncheckedCreateNestedManyWithoutRegionInput;
    locations?: Prisma.LocationsUncheckedCreateNestedManyWithoutRegionInput;
    pokedexes?: Prisma.PokedexesUncheckedCreateNestedManyWithoutRegionInput;
};
export type RegionsCreateOrConnectWithoutVersionGroupsInput = {
    where: Prisma.RegionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutVersionGroupsInput, Prisma.RegionsUncheckedCreateWithoutVersionGroupsInput>;
};
export type RegionsUpsertWithoutVersionGroupsInput = {
    update: Prisma.XOR<Prisma.RegionsUpdateWithoutVersionGroupsInput, Prisma.RegionsUncheckedUpdateWithoutVersionGroupsInput>;
    create: Prisma.XOR<Prisma.RegionsCreateWithoutVersionGroupsInput, Prisma.RegionsUncheckedCreateWithoutVersionGroupsInput>;
    where?: Prisma.RegionsWhereInput;
};
export type RegionsUpdateToOneWithWhereWithoutVersionGroupsInput = {
    where?: Prisma.RegionsWhereInput;
    data: Prisma.XOR<Prisma.RegionsUpdateWithoutVersionGroupsInput, Prisma.RegionsUncheckedUpdateWithoutVersionGroupsInput>;
};
export type RegionsUpdateWithoutVersionGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUpdateManyWithoutRegionNestedInput;
    locations?: Prisma.LocationsUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUpdateManyWithoutRegionNestedInput;
};
export type RegionsUncheckedUpdateWithoutVersionGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    generations?: Prisma.GenerationsUncheckedUpdateManyWithoutRegionNestedInput;
    locations?: Prisma.LocationsUncheckedUpdateManyWithoutRegionNestedInput;
    pokedexes?: Prisma.PokedexesUncheckedUpdateManyWithoutRegionNestedInput;
};
/**
 * Count Type RegionsCountOutputType
 */
export type RegionsCountOutputType = {
    generations: number;
    locations: number;
    pokedexes: number;
    versionGroups: number;
};
export type RegionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generations?: boolean | RegionsCountOutputTypeCountGenerationsArgs;
    locations?: boolean | RegionsCountOutputTypeCountLocationsArgs;
    pokedexes?: boolean | RegionsCountOutputTypeCountPokedexesArgs;
    versionGroups?: boolean | RegionsCountOutputTypeCountVersionGroupsArgs;
};
/**
 * RegionsCountOutputType without action
 */
export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     */
    select?: Prisma.RegionsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RegionsCountOutputType without action
 */
export type RegionsCountOutputTypeCountGenerationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GenerationsWhereInput;
};
/**
 * RegionsCountOutputType without action
 */
export type RegionsCountOutputTypeCountLocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationsWhereInput;
};
/**
 * RegionsCountOutputType without action
 */
export type RegionsCountOutputTypeCountPokedexesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokedexesWhereInput;
};
/**
 * RegionsCountOutputType without action
 */
export type RegionsCountOutputTypeCountVersionGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VersionGroupRegionsWhereInput;
};
export type RegionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    generations?: boolean | Prisma.Regions$generationsArgs<ExtArgs>;
    locations?: boolean | Prisma.Regions$locationsArgs<ExtArgs>;
    pokedexes?: boolean | Prisma.Regions$pokedexesArgs<ExtArgs>;
    versionGroups?: boolean | Prisma.Regions$versionGroupsArgs<ExtArgs>;
    _count?: boolean | Prisma.RegionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regions"]>;
export type RegionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["regions"]>;
export type RegionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["regions"]>;
export type RegionsSelectScalar = {
    id?: boolean;
    identifier?: boolean;
};
export type RegionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier", ExtArgs["result"]["regions"]>;
export type RegionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generations?: boolean | Prisma.Regions$generationsArgs<ExtArgs>;
    locations?: boolean | Prisma.Regions$locationsArgs<ExtArgs>;
    pokedexes?: boolean | Prisma.Regions$pokedexesArgs<ExtArgs>;
    versionGroups?: boolean | Prisma.Regions$versionGroupsArgs<ExtArgs>;
    _count?: boolean | Prisma.RegionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RegionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RegionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RegionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Regions";
    objects: {
        generations: Prisma.$GenerationsPayload<ExtArgs>[];
        locations: Prisma.$LocationsPayload<ExtArgs>[];
        pokedexes: Prisma.$PokedexesPayload<ExtArgs>[];
        versionGroups: Prisma.$VersionGroupRegionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
    }, ExtArgs["result"]["regions"]>;
    composites: {};
};
export type RegionsGetPayload<S extends boolean | null | undefined | RegionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegionsPayload, S>;
export type RegionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegionsCountAggregateInputType | true;
};
export interface RegionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Regions'];
        meta: {
            name: 'Regions';
        };
    };
    /**
     * Find zero or one Regions that matches the filter.
     * @param {RegionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionsFindUniqueArgs>(args: Prisma.SelectSubset<T, RegionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Regions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionsFindUniqueOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionsFindFirstArgs>(args?: Prisma.SelectSubset<T, RegionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     *
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const regionsWithIdOnly = await prisma.regions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RegionsFindManyArgs>(args?: Prisma.SelectSubset<T, RegionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Regions.
     * @param {RegionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     *
     */
    create<T extends RegionsCreateArgs>(args: Prisma.SelectSubset<T, RegionsCreateArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Regions.
     * @param {RegionsCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RegionsCreateManyArgs>(args?: Prisma.SelectSubset<T, RegionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionsCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RegionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Regions.
     * @param {RegionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     *
     */
    delete<T extends RegionsDeleteArgs>(args: Prisma.SelectSubset<T, RegionsDeleteArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Regions.
     * @param {RegionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RegionsUpdateArgs>(args: Prisma.SelectSubset<T, RegionsUpdateArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Regions.
     * @param {RegionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RegionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RegionsUpdateManyArgs>(args: Prisma.SelectSubset<T, RegionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionsUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Regions.
     * @param {RegionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
     */
    upsert<T extends RegionsUpsertArgs>(args: Prisma.SelectSubset<T, RegionsUpsertArgs<ExtArgs>>): Prisma.Prisma__RegionsClient<runtime.Types.Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionsCountArgs>(args?: Prisma.Subset<T, RegionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionsAggregateArgs>(args: Prisma.Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>;
    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RegionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegionsGroupByArgs['orderBy'];
    } : {
        orderBy?: RegionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Regions model
     */
    readonly fields: RegionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Regions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RegionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    generations<T extends Prisma.Regions$generationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Regions$generationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GenerationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    locations<T extends Prisma.Regions$locationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Regions$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pokedexes<T extends Prisma.Regions$pokedexesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Regions$pokedexesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokedexesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    versionGroups<T extends Prisma.Regions$versionGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Regions$versionGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VersionGroupRegionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Regions model
 */
export interface RegionsFieldRefs {
    readonly id: Prisma.FieldRef<"Regions", 'Int'>;
    readonly identifier: Prisma.FieldRef<"Regions", 'String'>;
}
/**
 * Regions findUnique
 */
export type RegionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * Filter, which Regions to fetch.
     */
    where: Prisma.RegionsWhereUniqueInput;
};
/**
 * Regions findUniqueOrThrow
 */
export type RegionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * Filter, which Regions to fetch.
     */
    where: Prisma.RegionsWhereUniqueInput;
};
/**
 * Regions findFirst
 */
export type RegionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * Filter, which Regions to fetch.
     */
    where?: Prisma.RegionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regions to fetch.
     */
    orderBy?: Prisma.RegionsOrderByWithRelationInput | Prisma.RegionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Regions.
     */
    cursor?: Prisma.RegionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Regions.
     */
    distinct?: Prisma.RegionsScalarFieldEnum | Prisma.RegionsScalarFieldEnum[];
};
/**
 * Regions findFirstOrThrow
 */
export type RegionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * Filter, which Regions to fetch.
     */
    where?: Prisma.RegionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regions to fetch.
     */
    orderBy?: Prisma.RegionsOrderByWithRelationInput | Prisma.RegionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Regions.
     */
    cursor?: Prisma.RegionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Regions.
     */
    distinct?: Prisma.RegionsScalarFieldEnum | Prisma.RegionsScalarFieldEnum[];
};
/**
 * Regions findMany
 */
export type RegionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * Filter, which Regions to fetch.
     */
    where?: Prisma.RegionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regions to fetch.
     */
    orderBy?: Prisma.RegionsOrderByWithRelationInput | Prisma.RegionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Regions.
     */
    cursor?: Prisma.RegionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Regions.
     */
    distinct?: Prisma.RegionsScalarFieldEnum | Prisma.RegionsScalarFieldEnum[];
};
/**
 * Regions create
 */
export type RegionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Regions.
     */
    data: Prisma.XOR<Prisma.RegionsCreateInput, Prisma.RegionsUncheckedCreateInput>;
};
/**
 * Regions createMany
 */
export type RegionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: Prisma.RegionsCreateManyInput | Prisma.RegionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Regions createManyAndReturn
 */
export type RegionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * The data used to create many Regions.
     */
    data: Prisma.RegionsCreateManyInput | Prisma.RegionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Regions update
 */
export type RegionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Regions.
     */
    data: Prisma.XOR<Prisma.RegionsUpdateInput, Prisma.RegionsUncheckedUpdateInput>;
    /**
     * Choose, which Regions to update.
     */
    where: Prisma.RegionsWhereUniqueInput;
};
/**
 * Regions updateMany
 */
export type RegionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: Prisma.XOR<Prisma.RegionsUpdateManyMutationInput, Prisma.RegionsUncheckedUpdateManyInput>;
    /**
     * Filter which Regions to update
     */
    where?: Prisma.RegionsWhereInput;
    /**
     * Limit how many Regions to update.
     */
    limit?: number;
};
/**
 * Regions updateManyAndReturn
 */
export type RegionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * The data used to update Regions.
     */
    data: Prisma.XOR<Prisma.RegionsUpdateManyMutationInput, Prisma.RegionsUncheckedUpdateManyInput>;
    /**
     * Filter which Regions to update
     */
    where?: Prisma.RegionsWhereInput;
    /**
     * Limit how many Regions to update.
     */
    limit?: number;
};
/**
 * Regions upsert
 */
export type RegionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Regions to update in case it exists.
     */
    where: Prisma.RegionsWhereUniqueInput;
    /**
     * In case the Regions found by the `where` argument doesn't exist, create a new Regions with this data.
     */
    create: Prisma.XOR<Prisma.RegionsCreateInput, Prisma.RegionsUncheckedCreateInput>;
    /**
     * In case the Regions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RegionsUpdateInput, Prisma.RegionsUncheckedUpdateInput>;
};
/**
 * Regions delete
 */
export type RegionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
    /**
     * Filter which Regions to delete.
     */
    where: Prisma.RegionsWhereUniqueInput;
};
/**
 * Regions deleteMany
 */
export type RegionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: Prisma.RegionsWhereInput;
    /**
     * Limit how many Regions to delete.
     */
    limit?: number;
};
/**
 * Regions.generations
 */
export type Regions$generationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generations
     */
    select?: Prisma.GenerationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Generations
     */
    omit?: Prisma.GenerationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GenerationsInclude<ExtArgs> | null;
    where?: Prisma.GenerationsWhereInput;
    orderBy?: Prisma.GenerationsOrderByWithRelationInput | Prisma.GenerationsOrderByWithRelationInput[];
    cursor?: Prisma.GenerationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GenerationsScalarFieldEnum | Prisma.GenerationsScalarFieldEnum[];
};
/**
 * Regions.locations
 */
export type Regions$locationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.LocationsOrderByWithRelationInput | Prisma.LocationsOrderByWithRelationInput[];
    cursor?: Prisma.LocationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationsScalarFieldEnum | Prisma.LocationsScalarFieldEnum[];
};
/**
 * Regions.pokedexes
 */
export type Regions$pokedexesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokedexes
     */
    select?: Prisma.PokedexesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pokedexes
     */
    omit?: Prisma.PokedexesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokedexesInclude<ExtArgs> | null;
    where?: Prisma.PokedexesWhereInput;
    orderBy?: Prisma.PokedexesOrderByWithRelationInput | Prisma.PokedexesOrderByWithRelationInput[];
    cursor?: Prisma.PokedexesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokedexesScalarFieldEnum | Prisma.PokedexesScalarFieldEnum[];
};
/**
 * Regions.versionGroups
 */
export type Regions$versionGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Regions without action
 */
export type RegionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: Prisma.RegionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regions
     */
    omit?: Prisma.RegionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionsInclude<ExtArgs> | null;
};
