import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model LocationAreaEncounterRates
 * @@TypeGraphQL.type(name: "LocationAreaEncounterRate")
 */
export type LocationAreaEncounterRatesModel = runtime.Types.Result.DefaultSelection<Prisma.$LocationAreaEncounterRatesPayload>;
export type AggregateLocationAreaEncounterRates = {
    _count: LocationAreaEncounterRatesCountAggregateOutputType | null;
    _avg: LocationAreaEncounterRatesAvgAggregateOutputType | null;
    _sum: LocationAreaEncounterRatesSumAggregateOutputType | null;
    _min: LocationAreaEncounterRatesMinAggregateOutputType | null;
    _max: LocationAreaEncounterRatesMaxAggregateOutputType | null;
};
export type LocationAreaEncounterRatesAvgAggregateOutputType = {
    location_area_id: number | null;
    encounter_method_id: number | null;
    version_id: number | null;
    rate: number | null;
};
export type LocationAreaEncounterRatesSumAggregateOutputType = {
    location_area_id: number | null;
    encounter_method_id: number | null;
    version_id: number | null;
    rate: number | null;
};
export type LocationAreaEncounterRatesMinAggregateOutputType = {
    location_area_id: number | null;
    encounter_method_id: number | null;
    version_id: number | null;
    rate: number | null;
};
export type LocationAreaEncounterRatesMaxAggregateOutputType = {
    location_area_id: number | null;
    encounter_method_id: number | null;
    version_id: number | null;
    rate: number | null;
};
export type LocationAreaEncounterRatesCountAggregateOutputType = {
    location_area_id: number;
    encounter_method_id: number;
    version_id: number;
    rate: number;
    _all: number;
};
export type LocationAreaEncounterRatesAvgAggregateInputType = {
    location_area_id?: true;
    encounter_method_id?: true;
    version_id?: true;
    rate?: true;
};
export type LocationAreaEncounterRatesSumAggregateInputType = {
    location_area_id?: true;
    encounter_method_id?: true;
    version_id?: true;
    rate?: true;
};
export type LocationAreaEncounterRatesMinAggregateInputType = {
    location_area_id?: true;
    encounter_method_id?: true;
    version_id?: true;
    rate?: true;
};
export type LocationAreaEncounterRatesMaxAggregateInputType = {
    location_area_id?: true;
    encounter_method_id?: true;
    version_id?: true;
    rate?: true;
};
export type LocationAreaEncounterRatesCountAggregateInputType = {
    location_area_id?: true;
    encounter_method_id?: true;
    version_id?: true;
    rate?: true;
    _all?: true;
};
export type LocationAreaEncounterRatesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAreaEncounterRates to aggregate.
     */
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationAreaEncounterRates to fetch.
     */
    orderBy?: Prisma.LocationAreaEncounterRatesOrderByWithRelationInput | Prisma.LocationAreaEncounterRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationAreaEncounterRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationAreaEncounterRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LocationAreaEncounterRates
    **/
    _count?: true | LocationAreaEncounterRatesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LocationAreaEncounterRatesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LocationAreaEncounterRatesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LocationAreaEncounterRatesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LocationAreaEncounterRatesMaxAggregateInputType;
};
export type GetLocationAreaEncounterRatesAggregateType<T extends LocationAreaEncounterRatesAggregateArgs> = {
    [P in keyof T & keyof AggregateLocationAreaEncounterRates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocationAreaEncounterRates[P]> : Prisma.GetScalarType<T[P], AggregateLocationAreaEncounterRates[P]>;
};
export type LocationAreaEncounterRatesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    orderBy?: Prisma.LocationAreaEncounterRatesOrderByWithAggregationInput | Prisma.LocationAreaEncounterRatesOrderByWithAggregationInput[];
    by: Prisma.LocationAreaEncounterRatesScalarFieldEnum[] | Prisma.LocationAreaEncounterRatesScalarFieldEnum;
    having?: Prisma.LocationAreaEncounterRatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocationAreaEncounterRatesCountAggregateInputType | true;
    _avg?: LocationAreaEncounterRatesAvgAggregateInputType;
    _sum?: LocationAreaEncounterRatesSumAggregateInputType;
    _min?: LocationAreaEncounterRatesMinAggregateInputType;
    _max?: LocationAreaEncounterRatesMaxAggregateInputType;
};
export type LocationAreaEncounterRatesGroupByOutputType = {
    location_area_id: number;
    encounter_method_id: number;
    version_id: number;
    rate: number;
    _count: LocationAreaEncounterRatesCountAggregateOutputType | null;
    _avg: LocationAreaEncounterRatesAvgAggregateOutputType | null;
    _sum: LocationAreaEncounterRatesSumAggregateOutputType | null;
    _min: LocationAreaEncounterRatesMinAggregateOutputType | null;
    _max: LocationAreaEncounterRatesMaxAggregateOutputType | null;
};
export type GetLocationAreaEncounterRatesGroupByPayload<T extends LocationAreaEncounterRatesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocationAreaEncounterRatesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocationAreaEncounterRatesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocationAreaEncounterRatesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocationAreaEncounterRatesGroupByOutputType[P]>;
}>>;
export type LocationAreaEncounterRatesWhereInput = {
    AND?: Prisma.LocationAreaEncounterRatesWhereInput | Prisma.LocationAreaEncounterRatesWhereInput[];
    OR?: Prisma.LocationAreaEncounterRatesWhereInput[];
    NOT?: Prisma.LocationAreaEncounterRatesWhereInput | Prisma.LocationAreaEncounterRatesWhereInput[];
    location_area_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    encounter_method_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    version_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    rate?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    locationArea?: Prisma.XOR<Prisma.LocationAreasScalarRelationFilter, Prisma.LocationAreasWhereInput>;
    encounterMethod?: Prisma.XOR<Prisma.EncounterMethodsScalarRelationFilter, Prisma.EncounterMethodsWhereInput>;
    version?: Prisma.XOR<Prisma.VersionsScalarRelationFilter, Prisma.VersionsWhereInput>;
};
export type LocationAreaEncounterRatesOrderByWithRelationInput = {
    location_area_id?: Prisma.SortOrder;
    encounter_method_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    locationArea?: Prisma.LocationAreasOrderByWithRelationInput;
    encounterMethod?: Prisma.EncounterMethodsOrderByWithRelationInput;
    version?: Prisma.VersionsOrderByWithRelationInput;
};
export type LocationAreaEncounterRatesWhereUniqueInput = Prisma.AtLeast<{
    location_area_id_encounter_method_id_version_id?: Prisma.LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput;
    AND?: Prisma.LocationAreaEncounterRatesWhereInput | Prisma.LocationAreaEncounterRatesWhereInput[];
    OR?: Prisma.LocationAreaEncounterRatesWhereInput[];
    NOT?: Prisma.LocationAreaEncounterRatesWhereInput | Prisma.LocationAreaEncounterRatesWhereInput[];
    location_area_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    encounter_method_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    version_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    rate?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    locationArea?: Prisma.XOR<Prisma.LocationAreasScalarRelationFilter, Prisma.LocationAreasWhereInput>;
    encounterMethod?: Prisma.XOR<Prisma.EncounterMethodsScalarRelationFilter, Prisma.EncounterMethodsWhereInput>;
    version?: Prisma.XOR<Prisma.VersionsScalarRelationFilter, Prisma.VersionsWhereInput>;
}, "location_area_id_encounter_method_id_version_id">;
export type LocationAreaEncounterRatesOrderByWithAggregationInput = {
    location_area_id?: Prisma.SortOrder;
    encounter_method_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    _count?: Prisma.LocationAreaEncounterRatesCountOrderByAggregateInput;
    _avg?: Prisma.LocationAreaEncounterRatesAvgOrderByAggregateInput;
    _max?: Prisma.LocationAreaEncounterRatesMaxOrderByAggregateInput;
    _min?: Prisma.LocationAreaEncounterRatesMinOrderByAggregateInput;
    _sum?: Prisma.LocationAreaEncounterRatesSumOrderByAggregateInput;
};
export type LocationAreaEncounterRatesScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocationAreaEncounterRatesScalarWhereWithAggregatesInput | Prisma.LocationAreaEncounterRatesScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocationAreaEncounterRatesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocationAreaEncounterRatesScalarWhereWithAggregatesInput | Prisma.LocationAreaEncounterRatesScalarWhereWithAggregatesInput[];
    location_area_id?: Prisma.IntWithAggregatesFilter<"LocationAreaEncounterRates"> | number;
    encounter_method_id?: Prisma.IntWithAggregatesFilter<"LocationAreaEncounterRates"> | number;
    version_id?: Prisma.IntWithAggregatesFilter<"LocationAreaEncounterRates"> | number;
    rate?: Prisma.IntWithAggregatesFilter<"LocationAreaEncounterRates"> | number;
};
export type LocationAreaEncounterRatesCreateInput = {
    rate: number;
    locationArea: Prisma.LocationAreasCreateNestedOneWithoutEncounterRatesInput;
    encounterMethod: Prisma.EncounterMethodsCreateNestedOneWithoutEncounterRatesInput;
    version: Prisma.VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput;
};
export type LocationAreaEncounterRatesUncheckedCreateInput = {
    location_area_id: number;
    encounter_method_id: number;
    version_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesUpdateInput = {
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
    locationArea?: Prisma.LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput;
    encounterMethod?: Prisma.EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput;
    version?: Prisma.VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput;
};
export type LocationAreaEncounterRatesUncheckedUpdateInput = {
    location_area_id?: Prisma.IntFieldUpdateOperationsInput | number;
    encounter_method_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesCreateManyInput = {
    location_area_id: number;
    encounter_method_id: number;
    version_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesUpdateManyMutationInput = {
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesUncheckedUpdateManyInput = {
    location_area_id?: Prisma.IntFieldUpdateOperationsInput | number;
    encounter_method_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesListRelationFilter = {
    every?: Prisma.LocationAreaEncounterRatesWhereInput;
    some?: Prisma.LocationAreaEncounterRatesWhereInput;
    none?: Prisma.LocationAreaEncounterRatesWhereInput;
};
export type LocationAreaEncounterRatesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput = {
    location_area_id: number;
    encounter_method_id: number;
    version_id: number;
};
export type LocationAreaEncounterRatesCountOrderByAggregateInput = {
    location_area_id?: Prisma.SortOrder;
    encounter_method_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
};
export type LocationAreaEncounterRatesAvgOrderByAggregateInput = {
    location_area_id?: Prisma.SortOrder;
    encounter_method_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
};
export type LocationAreaEncounterRatesMaxOrderByAggregateInput = {
    location_area_id?: Prisma.SortOrder;
    encounter_method_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
};
export type LocationAreaEncounterRatesMinOrderByAggregateInput = {
    location_area_id?: Prisma.SortOrder;
    encounter_method_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
};
export type LocationAreaEncounterRatesSumOrderByAggregateInput = {
    location_area_id?: Prisma.SortOrder;
    encounter_method_id?: Prisma.SortOrder;
    version_id?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
};
export type LocationAreaEncounterRatesCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput> | Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyVersionInputEnvelope;
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
};
export type LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput> | Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyVersionInputEnvelope;
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
};
export type LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput> | Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput | Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyVersionInputEnvelope;
    set?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    disconnect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    delete?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    update?: Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput | Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput | Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
};
export type LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput> | Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput | Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyVersionInputEnvelope;
    set?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    disconnect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    delete?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    update?: Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput | Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput | Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
};
export type LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput> | Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope;
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
};
export type LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutLocationAreaInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput> | Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope;
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
};
export type LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput> | Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput[];
    upsert?: Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope;
    set?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    disconnect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    delete?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    update?: Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput[];
    updateMany?: Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput[];
    deleteMany?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
};
export type LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaNestedInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput> | Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput[];
    upsert?: Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope;
    set?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    disconnect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    delete?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    update?: Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput[];
    updateMany?: Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput | Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput[];
    deleteMany?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
};
export type LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput> | Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope;
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
};
export type LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput> | Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope;
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
};
export type LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput> | Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput[];
    upsert?: Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope;
    set?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    disconnect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    delete?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    update?: Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput[];
    updateMany?: Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput[];
    deleteMany?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
};
export type LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput = {
    create?: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput> | Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput[] | Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput[];
    connectOrCreate?: Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput[];
    upsert?: Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput[];
    createMany?: Prisma.LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope;
    set?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    disconnect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    delete?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    connect?: Prisma.LocationAreaEncounterRatesWhereUniqueInput | Prisma.LocationAreaEncounterRatesWhereUniqueInput[];
    update?: Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput[];
    updateMany?: Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput | Prisma.LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput[];
    deleteMany?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
};
export type LocationAreaEncounterRatesCreateWithoutVersionInput = {
    rate: number;
    locationArea: Prisma.LocationAreasCreateNestedOneWithoutEncounterRatesInput;
    encounterMethod: Prisma.EncounterMethodsCreateNestedOneWithoutEncounterRatesInput;
};
export type LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput = {
    location_area_id: number;
    encounter_method_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput>;
};
export type LocationAreaEncounterRatesCreateManyVersionInputEnvelope = {
    data: Prisma.LocationAreaEncounterRatesCreateManyVersionInput | Prisma.LocationAreaEncounterRatesCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutVersionInput>;
};
export type LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateWithoutVersionInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateWithoutVersionInput>;
};
export type LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.LocationAreaEncounterRatesScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateManyMutationInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionInput>;
};
export type LocationAreaEncounterRatesScalarWhereInput = {
    AND?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
    OR?: Prisma.LocationAreaEncounterRatesScalarWhereInput[];
    NOT?: Prisma.LocationAreaEncounterRatesScalarWhereInput | Prisma.LocationAreaEncounterRatesScalarWhereInput[];
    location_area_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    encounter_method_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    version_id?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
    rate?: Prisma.IntFilter<"LocationAreaEncounterRates"> | number;
};
export type LocationAreaEncounterRatesCreateWithoutLocationAreaInput = {
    rate: number;
    encounterMethod: Prisma.EncounterMethodsCreateNestedOneWithoutEncounterRatesInput;
    version: Prisma.VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput;
};
export type LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput = {
    encounter_method_id: number;
    version_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput>;
};
export type LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope = {
    data: Prisma.LocationAreaEncounterRatesCreateManyLocationAreaInput | Prisma.LocationAreaEncounterRatesCreateManyLocationAreaInput[];
    skipDuplicates?: boolean;
};
export type LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateWithoutLocationAreaInput>;
    create: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutLocationAreaInput>;
};
export type LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateWithoutLocationAreaInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateWithoutLocationAreaInput>;
};
export type LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput = {
    where: Prisma.LocationAreaEncounterRatesScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateManyMutationInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaInput>;
};
export type LocationAreaEncounterRatesCreateWithoutEncounterMethodInput = {
    rate: number;
    locationArea: Prisma.LocationAreasCreateNestedOneWithoutEncounterRatesInput;
    version: Prisma.VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput;
};
export type LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput = {
    location_area_id: number;
    version_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput>;
};
export type LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope = {
    data: Prisma.LocationAreaEncounterRatesCreateManyEncounterMethodInput | Prisma.LocationAreaEncounterRatesCreateManyEncounterMethodInput[];
    skipDuplicates?: boolean;
};
export type LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateWithoutEncounterMethodInput>;
    create: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedCreateWithoutEncounterMethodInput>;
};
export type LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput = {
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateWithoutEncounterMethodInput>;
};
export type LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput = {
    where: Prisma.LocationAreaEncounterRatesScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateManyMutationInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodInput>;
};
export type LocationAreaEncounterRatesCreateManyVersionInput = {
    location_area_id: number;
    encounter_method_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesUpdateWithoutVersionInput = {
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
    locationArea?: Prisma.LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput;
    encounterMethod?: Prisma.EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput;
};
export type LocationAreaEncounterRatesUncheckedUpdateWithoutVersionInput = {
    location_area_id?: Prisma.IntFieldUpdateOperationsInput | number;
    encounter_method_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionInput = {
    location_area_id?: Prisma.IntFieldUpdateOperationsInput | number;
    encounter_method_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesCreateManyLocationAreaInput = {
    encounter_method_id: number;
    version_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesUpdateWithoutLocationAreaInput = {
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
    encounterMethod?: Prisma.EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput;
    version?: Prisma.VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput;
};
export type LocationAreaEncounterRatesUncheckedUpdateWithoutLocationAreaInput = {
    encounter_method_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaInput = {
    encounter_method_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesCreateManyEncounterMethodInput = {
    location_area_id: number;
    version_id: number;
    rate: number;
};
export type LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput = {
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
    locationArea?: Prisma.LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput;
    version?: Prisma.VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput;
};
export type LocationAreaEncounterRatesUncheckedUpdateWithoutEncounterMethodInput = {
    location_area_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodInput = {
    location_area_id?: Prisma.IntFieldUpdateOperationsInput | number;
    version_id?: Prisma.IntFieldUpdateOperationsInput | number;
    rate?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LocationAreaEncounterRatesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    location_area_id?: boolean;
    encounter_method_id?: boolean;
    version_id?: boolean;
    rate?: boolean;
    locationArea?: boolean | Prisma.LocationAreasDefaultArgs<ExtArgs>;
    encounterMethod?: boolean | Prisma.EncounterMethodsDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationAreaEncounterRates"]>;
export type LocationAreaEncounterRatesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    location_area_id?: boolean;
    encounter_method_id?: boolean;
    version_id?: boolean;
    rate?: boolean;
    locationArea?: boolean | Prisma.LocationAreasDefaultArgs<ExtArgs>;
    encounterMethod?: boolean | Prisma.EncounterMethodsDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationAreaEncounterRates"]>;
export type LocationAreaEncounterRatesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    location_area_id?: boolean;
    encounter_method_id?: boolean;
    version_id?: boolean;
    rate?: boolean;
    locationArea?: boolean | Prisma.LocationAreasDefaultArgs<ExtArgs>;
    encounterMethod?: boolean | Prisma.EncounterMethodsDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationAreaEncounterRates"]>;
export type LocationAreaEncounterRatesSelectScalar = {
    location_area_id?: boolean;
    encounter_method_id?: boolean;
    version_id?: boolean;
    rate?: boolean;
};
export type LocationAreaEncounterRatesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"location_area_id" | "encounter_method_id" | "version_id" | "rate", ExtArgs["result"]["locationAreaEncounterRates"]>;
export type LocationAreaEncounterRatesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    locationArea?: boolean | Prisma.LocationAreasDefaultArgs<ExtArgs>;
    encounterMethod?: boolean | Prisma.EncounterMethodsDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
};
export type LocationAreaEncounterRatesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    locationArea?: boolean | Prisma.LocationAreasDefaultArgs<ExtArgs>;
    encounterMethod?: boolean | Prisma.EncounterMethodsDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
};
export type LocationAreaEncounterRatesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    locationArea?: boolean | Prisma.LocationAreasDefaultArgs<ExtArgs>;
    encounterMethod?: boolean | Prisma.EncounterMethodsDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.VersionsDefaultArgs<ExtArgs>;
};
export type $LocationAreaEncounterRatesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LocationAreaEncounterRates";
    objects: {
        locationArea: Prisma.$LocationAreasPayload<ExtArgs>;
        encounterMethod: Prisma.$EncounterMethodsPayload<ExtArgs>;
        version: Prisma.$VersionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        location_area_id: number;
        encounter_method_id: number;
        version_id: number;
        rate: number;
    }, ExtArgs["result"]["locationAreaEncounterRates"]>;
    composites: {};
};
export type LocationAreaEncounterRatesGetPayload<S extends boolean | null | undefined | LocationAreaEncounterRatesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload, S>;
export type LocationAreaEncounterRatesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocationAreaEncounterRatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocationAreaEncounterRatesCountAggregateInputType | true;
};
export interface LocationAreaEncounterRatesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LocationAreaEncounterRates'];
        meta: {
            name: 'LocationAreaEncounterRates';
        };
    };
    /**
     * Find zero or one LocationAreaEncounterRates that matches the filter.
     * @param {LocationAreaEncounterRatesFindUniqueArgs} args - Arguments to find a LocationAreaEncounterRates
     * @example
     * // Get one LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationAreaEncounterRatesFindUniqueArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LocationAreaEncounterRates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationAreaEncounterRatesFindUniqueOrThrowArgs} args - Arguments to find a LocationAreaEncounterRates
     * @example
     * // Get one LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationAreaEncounterRatesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LocationAreaEncounterRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAreaEncounterRatesFindFirstArgs} args - Arguments to find a LocationAreaEncounterRates
     * @example
     * // Get one LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationAreaEncounterRatesFindFirstArgs>(args?: Prisma.SelectSubset<T, LocationAreaEncounterRatesFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LocationAreaEncounterRates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAreaEncounterRatesFindFirstOrThrowArgs} args - Arguments to find a LocationAreaEncounterRates
     * @example
     * // Get one LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationAreaEncounterRatesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocationAreaEncounterRatesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LocationAreaEncounterRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAreaEncounterRatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.findMany()
     *
     * // Get first 10 LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.findMany({ take: 10 })
     *
     * // Only select the `location_area_id`
     * const locationAreaEncounterRatesWithLocation_area_idOnly = await prisma.locationAreaEncounterRates.findMany({ select: { location_area_id: true } })
     *
     */
    findMany<T extends LocationAreaEncounterRatesFindManyArgs>(args?: Prisma.SelectSubset<T, LocationAreaEncounterRatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LocationAreaEncounterRates.
     * @param {LocationAreaEncounterRatesCreateArgs} args - Arguments to create a LocationAreaEncounterRates.
     * @example
     * // Create one LocationAreaEncounterRates
     * const LocationAreaEncounterRates = await prisma.locationAreaEncounterRates.create({
     *   data: {
     *     // ... data to create a LocationAreaEncounterRates
     *   }
     * })
     *
     */
    create<T extends LocationAreaEncounterRatesCreateArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesCreateArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LocationAreaEncounterRates.
     * @param {LocationAreaEncounterRatesCreateManyArgs} args - Arguments to create many LocationAreaEncounterRates.
     * @example
     * // Create many LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LocationAreaEncounterRatesCreateManyArgs>(args?: Prisma.SelectSubset<T, LocationAreaEncounterRatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LocationAreaEncounterRates and returns the data saved in the database.
     * @param {LocationAreaEncounterRatesCreateManyAndReturnArgs} args - Arguments to create many LocationAreaEncounterRates.
     * @example
     * // Create many LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LocationAreaEncounterRates and only return the `location_area_id`
     * const locationAreaEncounterRatesWithLocation_area_idOnly = await prisma.locationAreaEncounterRates.createManyAndReturn({
     *   select: { location_area_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LocationAreaEncounterRatesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocationAreaEncounterRatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LocationAreaEncounterRates.
     * @param {LocationAreaEncounterRatesDeleteArgs} args - Arguments to delete one LocationAreaEncounterRates.
     * @example
     * // Delete one LocationAreaEncounterRates
     * const LocationAreaEncounterRates = await prisma.locationAreaEncounterRates.delete({
     *   where: {
     *     // ... filter to delete one LocationAreaEncounterRates
     *   }
     * })
     *
     */
    delete<T extends LocationAreaEncounterRatesDeleteArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesDeleteArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LocationAreaEncounterRates.
     * @param {LocationAreaEncounterRatesUpdateArgs} args - Arguments to update one LocationAreaEncounterRates.
     * @example
     * // Update one LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LocationAreaEncounterRatesUpdateArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesUpdateArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LocationAreaEncounterRates.
     * @param {LocationAreaEncounterRatesDeleteManyArgs} args - Arguments to filter LocationAreaEncounterRates to delete.
     * @example
     * // Delete a few LocationAreaEncounterRates
     * const { count } = await prisma.locationAreaEncounterRates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LocationAreaEncounterRatesDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocationAreaEncounterRatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LocationAreaEncounterRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAreaEncounterRatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LocationAreaEncounterRatesUpdateManyArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LocationAreaEncounterRates and returns the data updated in the database.
     * @param {LocationAreaEncounterRatesUpdateManyAndReturnArgs} args - Arguments to update many LocationAreaEncounterRates.
     * @example
     * // Update many LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LocationAreaEncounterRates and only return the `location_area_id`
     * const locationAreaEncounterRatesWithLocation_area_idOnly = await prisma.locationAreaEncounterRates.updateManyAndReturn({
     *   select: { location_area_id: true },
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
    updateManyAndReturn<T extends LocationAreaEncounterRatesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LocationAreaEncounterRates.
     * @param {LocationAreaEncounterRatesUpsertArgs} args - Arguments to update or create a LocationAreaEncounterRates.
     * @example
     * // Update or create a LocationAreaEncounterRates
     * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.upsert({
     *   create: {
     *     // ... data to create a LocationAreaEncounterRates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationAreaEncounterRates we want to update
     *   }
     * })
     */
    upsert<T extends LocationAreaEncounterRatesUpsertArgs>(args: Prisma.SelectSubset<T, LocationAreaEncounterRatesUpsertArgs<ExtArgs>>): Prisma.Prisma__LocationAreaEncounterRatesClient<runtime.Types.Result.GetResult<Prisma.$LocationAreaEncounterRatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LocationAreaEncounterRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAreaEncounterRatesCountArgs} args - Arguments to filter LocationAreaEncounterRates to count.
     * @example
     * // Count the number of LocationAreaEncounterRates
     * const count = await prisma.locationAreaEncounterRates.count({
     *   where: {
     *     // ... the filter for the LocationAreaEncounterRates we want to count
     *   }
     * })
    **/
    count<T extends LocationAreaEncounterRatesCountArgs>(args?: Prisma.Subset<T, LocationAreaEncounterRatesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocationAreaEncounterRatesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LocationAreaEncounterRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAreaEncounterRatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAreaEncounterRatesAggregateArgs>(args: Prisma.Subset<T, LocationAreaEncounterRatesAggregateArgs>): Prisma.PrismaPromise<GetLocationAreaEncounterRatesAggregateType<T>>;
    /**
     * Group by LocationAreaEncounterRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAreaEncounterRatesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LocationAreaEncounterRatesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocationAreaEncounterRatesGroupByArgs['orderBy'];
    } : {
        orderBy?: LocationAreaEncounterRatesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocationAreaEncounterRatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationAreaEncounterRatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LocationAreaEncounterRates model
     */
    readonly fields: LocationAreaEncounterRatesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LocationAreaEncounterRates.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LocationAreaEncounterRatesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    locationArea<T extends Prisma.LocationAreasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LocationAreasDefaultArgs<ExtArgs>>): Prisma.Prisma__LocationAreasClient<runtime.Types.Result.GetResult<Prisma.$LocationAreasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    encounterMethod<T extends Prisma.EncounterMethodsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EncounterMethodsDefaultArgs<ExtArgs>>): Prisma.Prisma__EncounterMethodsClient<runtime.Types.Result.GetResult<Prisma.$EncounterMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    version<T extends Prisma.VersionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VersionsDefaultArgs<ExtArgs>>): Prisma.Prisma__VersionsClient<runtime.Types.Result.GetResult<Prisma.$VersionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LocationAreaEncounterRates model
 */
export interface LocationAreaEncounterRatesFieldRefs {
    readonly location_area_id: Prisma.FieldRef<"LocationAreaEncounterRates", 'Int'>;
    readonly encounter_method_id: Prisma.FieldRef<"LocationAreaEncounterRates", 'Int'>;
    readonly version_id: Prisma.FieldRef<"LocationAreaEncounterRates", 'Int'>;
    readonly rate: Prisma.FieldRef<"LocationAreaEncounterRates", 'Int'>;
}
/**
 * LocationAreaEncounterRates findUnique
 */
export type LocationAreaEncounterRatesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * Filter, which LocationAreaEncounterRates to fetch.
     */
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
};
/**
 * LocationAreaEncounterRates findUniqueOrThrow
 */
export type LocationAreaEncounterRatesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * Filter, which LocationAreaEncounterRates to fetch.
     */
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
};
/**
 * LocationAreaEncounterRates findFirst
 */
export type LocationAreaEncounterRatesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * Filter, which LocationAreaEncounterRates to fetch.
     */
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationAreaEncounterRates to fetch.
     */
    orderBy?: Prisma.LocationAreaEncounterRatesOrderByWithRelationInput | Prisma.LocationAreaEncounterRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LocationAreaEncounterRates.
     */
    cursor?: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationAreaEncounterRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationAreaEncounterRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocationAreaEncounterRates.
     */
    distinct?: Prisma.LocationAreaEncounterRatesScalarFieldEnum | Prisma.LocationAreaEncounterRatesScalarFieldEnum[];
};
/**
 * LocationAreaEncounterRates findFirstOrThrow
 */
export type LocationAreaEncounterRatesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * Filter, which LocationAreaEncounterRates to fetch.
     */
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationAreaEncounterRates to fetch.
     */
    orderBy?: Prisma.LocationAreaEncounterRatesOrderByWithRelationInput | Prisma.LocationAreaEncounterRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LocationAreaEncounterRates.
     */
    cursor?: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationAreaEncounterRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationAreaEncounterRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocationAreaEncounterRates.
     */
    distinct?: Prisma.LocationAreaEncounterRatesScalarFieldEnum | Prisma.LocationAreaEncounterRatesScalarFieldEnum[];
};
/**
 * LocationAreaEncounterRates findMany
 */
export type LocationAreaEncounterRatesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * Filter, which LocationAreaEncounterRates to fetch.
     */
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LocationAreaEncounterRates to fetch.
     */
    orderBy?: Prisma.LocationAreaEncounterRatesOrderByWithRelationInput | Prisma.LocationAreaEncounterRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LocationAreaEncounterRates.
     */
    cursor?: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LocationAreaEncounterRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LocationAreaEncounterRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LocationAreaEncounterRates.
     */
    distinct?: Prisma.LocationAreaEncounterRatesScalarFieldEnum | Prisma.LocationAreaEncounterRatesScalarFieldEnum[];
};
/**
 * LocationAreaEncounterRates create
 */
export type LocationAreaEncounterRatesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * The data needed to create a LocationAreaEncounterRates.
     */
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateInput, Prisma.LocationAreaEncounterRatesUncheckedCreateInput>;
};
/**
 * LocationAreaEncounterRates createMany
 */
export type LocationAreaEncounterRatesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationAreaEncounterRates.
     */
    data: Prisma.LocationAreaEncounterRatesCreateManyInput | Prisma.LocationAreaEncounterRatesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LocationAreaEncounterRates createManyAndReturn
 */
export type LocationAreaEncounterRatesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * The data used to create many LocationAreaEncounterRates.
     */
    data: Prisma.LocationAreaEncounterRatesCreateManyInput | Prisma.LocationAreaEncounterRatesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LocationAreaEncounterRates update
 */
export type LocationAreaEncounterRatesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * The data needed to update a LocationAreaEncounterRates.
     */
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateInput>;
    /**
     * Choose, which LocationAreaEncounterRates to update.
     */
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
};
/**
 * LocationAreaEncounterRates updateMany
 */
export type LocationAreaEncounterRatesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationAreaEncounterRates.
     */
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateManyMutationInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateManyInput>;
    /**
     * Filter which LocationAreaEncounterRates to update
     */
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    /**
     * Limit how many LocationAreaEncounterRates to update.
     */
    limit?: number;
};
/**
 * LocationAreaEncounterRates updateManyAndReturn
 */
export type LocationAreaEncounterRatesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * The data used to update LocationAreaEncounterRates.
     */
    data: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateManyMutationInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateManyInput>;
    /**
     * Filter which LocationAreaEncounterRates to update
     */
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    /**
     * Limit how many LocationAreaEncounterRates to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LocationAreaEncounterRates upsert
 */
export type LocationAreaEncounterRatesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * The filter to search for the LocationAreaEncounterRates to update in case it exists.
     */
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
    /**
     * In case the LocationAreaEncounterRates found by the `where` argument doesn't exist, create a new LocationAreaEncounterRates with this data.
     */
    create: Prisma.XOR<Prisma.LocationAreaEncounterRatesCreateInput, Prisma.LocationAreaEncounterRatesUncheckedCreateInput>;
    /**
     * In case the LocationAreaEncounterRates was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LocationAreaEncounterRatesUpdateInput, Prisma.LocationAreaEncounterRatesUncheckedUpdateInput>;
};
/**
 * LocationAreaEncounterRates delete
 */
export type LocationAreaEncounterRatesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
    /**
     * Filter which LocationAreaEncounterRates to delete.
     */
    where: Prisma.LocationAreaEncounterRatesWhereUniqueInput;
};
/**
 * LocationAreaEncounterRates deleteMany
 */
export type LocationAreaEncounterRatesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAreaEncounterRates to delete
     */
    where?: Prisma.LocationAreaEncounterRatesWhereInput;
    /**
     * Limit how many LocationAreaEncounterRates to delete.
     */
    limit?: number;
};
/**
 * LocationAreaEncounterRates without action
 */
export type LocationAreaEncounterRatesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAreaEncounterRates
     */
    select?: Prisma.LocationAreaEncounterRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LocationAreaEncounterRates
     */
    omit?: Prisma.LocationAreaEncounterRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LocationAreaEncounterRatesInclude<ExtArgs> | null;
};
