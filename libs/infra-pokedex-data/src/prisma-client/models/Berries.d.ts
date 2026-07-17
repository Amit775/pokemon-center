import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Berries
 * @@TypeGraphQL.type(name: "Berry")
 */
export type BerriesModel = runtime.Types.Result.DefaultSelection<Prisma.$BerriesPayload>;
export type AggregateBerries = {
    _count: BerriesCountAggregateOutputType | null;
    _avg: BerriesAvgAggregateOutputType | null;
    _sum: BerriesSumAggregateOutputType | null;
    _min: BerriesMinAggregateOutputType | null;
    _max: BerriesMaxAggregateOutputType | null;
};
export type BerriesAvgAggregateOutputType = {
    id: number | null;
    item_id: number | null;
    firmness_id: number | null;
    natural_gift_power: number | null;
    natural_gift_type_id: number | null;
    size: number | null;
    max_harvest: number | null;
    growth_time: number | null;
    soil_dryness: number | null;
    smoothness: number | null;
};
export type BerriesSumAggregateOutputType = {
    id: number | null;
    item_id: number | null;
    firmness_id: number | null;
    natural_gift_power: number | null;
    natural_gift_type_id: number | null;
    size: number | null;
    max_harvest: number | null;
    growth_time: number | null;
    soil_dryness: number | null;
    smoothness: number | null;
};
export type BerriesMinAggregateOutputType = {
    id: number | null;
    item_id: number | null;
    firmness_id: number | null;
    natural_gift_power: number | null;
    natural_gift_type_id: number | null;
    size: number | null;
    max_harvest: number | null;
    growth_time: number | null;
    soil_dryness: number | null;
    smoothness: number | null;
};
export type BerriesMaxAggregateOutputType = {
    id: number | null;
    item_id: number | null;
    firmness_id: number | null;
    natural_gift_power: number | null;
    natural_gift_type_id: number | null;
    size: number | null;
    max_harvest: number | null;
    growth_time: number | null;
    soil_dryness: number | null;
    smoothness: number | null;
};
export type BerriesCountAggregateOutputType = {
    id: number;
    item_id: number;
    firmness_id: number;
    natural_gift_power: number;
    natural_gift_type_id: number;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    _all: number;
};
export type BerriesAvgAggregateInputType = {
    id?: true;
    item_id?: true;
    firmness_id?: true;
    natural_gift_power?: true;
    natural_gift_type_id?: true;
    size?: true;
    max_harvest?: true;
    growth_time?: true;
    soil_dryness?: true;
    smoothness?: true;
};
export type BerriesSumAggregateInputType = {
    id?: true;
    item_id?: true;
    firmness_id?: true;
    natural_gift_power?: true;
    natural_gift_type_id?: true;
    size?: true;
    max_harvest?: true;
    growth_time?: true;
    soil_dryness?: true;
    smoothness?: true;
};
export type BerriesMinAggregateInputType = {
    id?: true;
    item_id?: true;
    firmness_id?: true;
    natural_gift_power?: true;
    natural_gift_type_id?: true;
    size?: true;
    max_harvest?: true;
    growth_time?: true;
    soil_dryness?: true;
    smoothness?: true;
};
export type BerriesMaxAggregateInputType = {
    id?: true;
    item_id?: true;
    firmness_id?: true;
    natural_gift_power?: true;
    natural_gift_type_id?: true;
    size?: true;
    max_harvest?: true;
    growth_time?: true;
    soil_dryness?: true;
    smoothness?: true;
};
export type BerriesCountAggregateInputType = {
    id?: true;
    item_id?: true;
    firmness_id?: true;
    natural_gift_power?: true;
    natural_gift_type_id?: true;
    size?: true;
    max_harvest?: true;
    growth_time?: true;
    soil_dryness?: true;
    smoothness?: true;
    _all?: true;
};
export type BerriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Berries to aggregate.
     */
    where?: Prisma.BerriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Berries to fetch.
     */
    orderBy?: Prisma.BerriesOrderByWithRelationInput | Prisma.BerriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BerriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Berries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Berries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Berries
    **/
    _count?: true | BerriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BerriesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BerriesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BerriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BerriesMaxAggregateInputType;
};
export type GetBerriesAggregateType<T extends BerriesAggregateArgs> = {
    [P in keyof T & keyof AggregateBerries]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBerries[P]> : Prisma.GetScalarType<T[P], AggregateBerries[P]>;
};
export type BerriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BerriesWhereInput;
    orderBy?: Prisma.BerriesOrderByWithAggregationInput | Prisma.BerriesOrderByWithAggregationInput[];
    by: Prisma.BerriesScalarFieldEnum[] | Prisma.BerriesScalarFieldEnum;
    having?: Prisma.BerriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BerriesCountAggregateInputType | true;
    _avg?: BerriesAvgAggregateInputType;
    _sum?: BerriesSumAggregateInputType;
    _min?: BerriesMinAggregateInputType;
    _max?: BerriesMaxAggregateInputType;
};
export type BerriesGroupByOutputType = {
    id: number;
    item_id: number;
    firmness_id: number;
    natural_gift_power: number | null;
    natural_gift_type_id: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    _count: BerriesCountAggregateOutputType | null;
    _avg: BerriesAvgAggregateOutputType | null;
    _sum: BerriesSumAggregateOutputType | null;
    _min: BerriesMinAggregateOutputType | null;
    _max: BerriesMaxAggregateOutputType | null;
};
export type GetBerriesGroupByPayload<T extends BerriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BerriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BerriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BerriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BerriesGroupByOutputType[P]>;
}>>;
export type BerriesWhereInput = {
    AND?: Prisma.BerriesWhereInput | Prisma.BerriesWhereInput[];
    OR?: Prisma.BerriesWhereInput[];
    NOT?: Prisma.BerriesWhereInput | Prisma.BerriesWhereInput[];
    id?: Prisma.IntFilter<"Berries"> | number;
    item_id?: Prisma.IntFilter<"Berries"> | number;
    firmness_id?: Prisma.IntFilter<"Berries"> | number;
    natural_gift_power?: Prisma.IntNullableFilter<"Berries"> | number | null;
    natural_gift_type_id?: Prisma.IntNullableFilter<"Berries"> | number | null;
    size?: Prisma.IntFilter<"Berries"> | number;
    max_harvest?: Prisma.IntFilter<"Berries"> | number;
    growth_time?: Prisma.IntFilter<"Berries"> | number;
    soil_dryness?: Prisma.IntFilter<"Berries"> | number;
    smoothness?: Prisma.IntFilter<"Berries"> | number;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
    firmness?: Prisma.XOR<Prisma.BerryFirmnessScalarRelationFilter, Prisma.BerryFirmnessWhereInput>;
    naturalGiftType?: Prisma.XOR<Prisma.TypesNullableScalarRelationFilter, Prisma.TypesWhereInput> | null;
    flavors?: Prisma.BerryFlavorsListRelationFilter;
};
export type BerriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    firmness_id?: Prisma.SortOrder;
    natural_gift_power?: Prisma.SortOrderInput | Prisma.SortOrder;
    natural_gift_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    size?: Prisma.SortOrder;
    max_harvest?: Prisma.SortOrder;
    growth_time?: Prisma.SortOrder;
    soil_dryness?: Prisma.SortOrder;
    smoothness?: Prisma.SortOrder;
    item?: Prisma.ItemsOrderByWithRelationInput;
    firmness?: Prisma.BerryFirmnessOrderByWithRelationInput;
    naturalGiftType?: Prisma.TypesOrderByWithRelationInput;
    flavors?: Prisma.BerryFlavorsOrderByRelationAggregateInput;
};
export type BerriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BerriesWhereInput | Prisma.BerriesWhereInput[];
    OR?: Prisma.BerriesWhereInput[];
    NOT?: Prisma.BerriesWhereInput | Prisma.BerriesWhereInput[];
    item_id?: Prisma.IntFilter<"Berries"> | number;
    firmness_id?: Prisma.IntFilter<"Berries"> | number;
    natural_gift_power?: Prisma.IntNullableFilter<"Berries"> | number | null;
    natural_gift_type_id?: Prisma.IntNullableFilter<"Berries"> | number | null;
    size?: Prisma.IntFilter<"Berries"> | number;
    max_harvest?: Prisma.IntFilter<"Berries"> | number;
    growth_time?: Prisma.IntFilter<"Berries"> | number;
    soil_dryness?: Prisma.IntFilter<"Berries"> | number;
    smoothness?: Prisma.IntFilter<"Berries"> | number;
    item?: Prisma.XOR<Prisma.ItemsScalarRelationFilter, Prisma.ItemsWhereInput>;
    firmness?: Prisma.XOR<Prisma.BerryFirmnessScalarRelationFilter, Prisma.BerryFirmnessWhereInput>;
    naturalGiftType?: Prisma.XOR<Prisma.TypesNullableScalarRelationFilter, Prisma.TypesWhereInput> | null;
    flavors?: Prisma.BerryFlavorsListRelationFilter;
}, "id">;
export type BerriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    firmness_id?: Prisma.SortOrder;
    natural_gift_power?: Prisma.SortOrderInput | Prisma.SortOrder;
    natural_gift_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    size?: Prisma.SortOrder;
    max_harvest?: Prisma.SortOrder;
    growth_time?: Prisma.SortOrder;
    soil_dryness?: Prisma.SortOrder;
    smoothness?: Prisma.SortOrder;
    _count?: Prisma.BerriesCountOrderByAggregateInput;
    _avg?: Prisma.BerriesAvgOrderByAggregateInput;
    _max?: Prisma.BerriesMaxOrderByAggregateInput;
    _min?: Prisma.BerriesMinOrderByAggregateInput;
    _sum?: Prisma.BerriesSumOrderByAggregateInput;
};
export type BerriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.BerriesScalarWhereWithAggregatesInput | Prisma.BerriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.BerriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BerriesScalarWhereWithAggregatesInput | Prisma.BerriesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
    item_id?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
    firmness_id?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
    natural_gift_power?: Prisma.IntNullableWithAggregatesFilter<"Berries"> | number | null;
    natural_gift_type_id?: Prisma.IntNullableWithAggregatesFilter<"Berries"> | number | null;
    size?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
    max_harvest?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
    growth_time?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
    soil_dryness?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
    smoothness?: Prisma.IntWithAggregatesFilter<"Berries"> | number;
};
export type BerriesCreateInput = {
    id: number;
    natural_gift_power?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    item: Prisma.ItemsCreateNestedOneWithoutBerriesInput;
    firmness: Prisma.BerryFirmnessCreateNestedOneWithoutBerriesInput;
    naturalGiftType?: Prisma.TypesCreateNestedOneWithoutNaturalGiftTypesInput;
    flavors?: Prisma.BerryFlavorsCreateNestedManyWithoutBerryInput;
};
export type BerriesUncheckedCreateInput = {
    id: number;
    item_id: number;
    firmness_id: number;
    natural_gift_power?: number | null;
    natural_gift_type_id?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    flavors?: Prisma.BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput;
};
export type BerriesUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemsUpdateOneRequiredWithoutBerriesNestedInput;
    firmness?: Prisma.BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput;
    naturalGiftType?: Prisma.TypesUpdateOneWithoutNaturalGiftTypesNestedInput;
    flavors?: Prisma.BerryFlavorsUpdateManyWithoutBerryNestedInput;
};
export type BerriesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    natural_gift_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    flavors?: Prisma.BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput;
};
export type BerriesCreateManyInput = {
    id: number;
    item_id: number;
    firmness_id: number;
    natural_gift_power?: number | null;
    natural_gift_type_id?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
};
export type BerriesUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerriesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    natural_gift_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerriesListRelationFilter = {
    every?: Prisma.BerriesWhereInput;
    some?: Prisma.BerriesWhereInput;
    none?: Prisma.BerriesWhereInput;
};
export type BerriesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BerriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    firmness_id?: Prisma.SortOrder;
    natural_gift_power?: Prisma.SortOrder;
    natural_gift_type_id?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    max_harvest?: Prisma.SortOrder;
    growth_time?: Prisma.SortOrder;
    soil_dryness?: Prisma.SortOrder;
    smoothness?: Prisma.SortOrder;
};
export type BerriesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    firmness_id?: Prisma.SortOrder;
    natural_gift_power?: Prisma.SortOrder;
    natural_gift_type_id?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    max_harvest?: Prisma.SortOrder;
    growth_time?: Prisma.SortOrder;
    soil_dryness?: Prisma.SortOrder;
    smoothness?: Prisma.SortOrder;
};
export type BerriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    firmness_id?: Prisma.SortOrder;
    natural_gift_power?: Prisma.SortOrder;
    natural_gift_type_id?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    max_harvest?: Prisma.SortOrder;
    growth_time?: Prisma.SortOrder;
    soil_dryness?: Prisma.SortOrder;
    smoothness?: Prisma.SortOrder;
};
export type BerriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    firmness_id?: Prisma.SortOrder;
    natural_gift_power?: Prisma.SortOrder;
    natural_gift_type_id?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    max_harvest?: Prisma.SortOrder;
    growth_time?: Prisma.SortOrder;
    soil_dryness?: Prisma.SortOrder;
    smoothness?: Prisma.SortOrder;
};
export type BerriesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    item_id?: Prisma.SortOrder;
    firmness_id?: Prisma.SortOrder;
    natural_gift_power?: Prisma.SortOrder;
    natural_gift_type_id?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    max_harvest?: Prisma.SortOrder;
    growth_time?: Prisma.SortOrder;
    soil_dryness?: Prisma.SortOrder;
    smoothness?: Prisma.SortOrder;
};
export type BerriesScalarRelationFilter = {
    is?: Prisma.BerriesWhereInput;
    isNot?: Prisma.BerriesWhereInput;
};
export type BerriesCreateNestedManyWithoutNaturalGiftTypeInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput> | Prisma.BerriesCreateWithoutNaturalGiftTypeInput[] | Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput | Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput[];
    createMany?: Prisma.BerriesCreateManyNaturalGiftTypeInputEnvelope;
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
};
export type BerriesUncheckedCreateNestedManyWithoutNaturalGiftTypeInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput> | Prisma.BerriesCreateWithoutNaturalGiftTypeInput[] | Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput | Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput[];
    createMany?: Prisma.BerriesCreateManyNaturalGiftTypeInputEnvelope;
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
};
export type BerriesUpdateManyWithoutNaturalGiftTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput> | Prisma.BerriesCreateWithoutNaturalGiftTypeInput[] | Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput | Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput[];
    upsert?: Prisma.BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput | Prisma.BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput[];
    createMany?: Prisma.BerriesCreateManyNaturalGiftTypeInputEnvelope;
    set?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    disconnect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    delete?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    update?: Prisma.BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput | Prisma.BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput[];
    updateMany?: Prisma.BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput | Prisma.BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput[];
    deleteMany?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
};
export type BerriesUncheckedUpdateManyWithoutNaturalGiftTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput> | Prisma.BerriesCreateWithoutNaturalGiftTypeInput[] | Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput | Prisma.BerriesCreateOrConnectWithoutNaturalGiftTypeInput[];
    upsert?: Prisma.BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput | Prisma.BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput[];
    createMany?: Prisma.BerriesCreateManyNaturalGiftTypeInputEnvelope;
    set?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    disconnect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    delete?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    update?: Prisma.BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput | Prisma.BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput[];
    updateMany?: Prisma.BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput | Prisma.BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput[];
    deleteMany?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
};
export type BerriesCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutItemInput, Prisma.BerriesUncheckedCreateWithoutItemInput> | Prisma.BerriesCreateWithoutItemInput[] | Prisma.BerriesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutItemInput | Prisma.BerriesCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.BerriesCreateManyItemInputEnvelope;
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
};
export type BerriesUncheckedCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutItemInput, Prisma.BerriesUncheckedCreateWithoutItemInput> | Prisma.BerriesCreateWithoutItemInput[] | Prisma.BerriesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutItemInput | Prisma.BerriesCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.BerriesCreateManyItemInputEnvelope;
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
};
export type BerriesUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutItemInput, Prisma.BerriesUncheckedCreateWithoutItemInput> | Prisma.BerriesCreateWithoutItemInput[] | Prisma.BerriesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutItemInput | Prisma.BerriesCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.BerriesUpsertWithWhereUniqueWithoutItemInput | Prisma.BerriesUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.BerriesCreateManyItemInputEnvelope;
    set?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    disconnect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    delete?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    update?: Prisma.BerriesUpdateWithWhereUniqueWithoutItemInput | Prisma.BerriesUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.BerriesUpdateManyWithWhereWithoutItemInput | Prisma.BerriesUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
};
export type BerriesUncheckedUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutItemInput, Prisma.BerriesUncheckedCreateWithoutItemInput> | Prisma.BerriesCreateWithoutItemInput[] | Prisma.BerriesUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutItemInput | Prisma.BerriesCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.BerriesUpsertWithWhereUniqueWithoutItemInput | Prisma.BerriesUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.BerriesCreateManyItemInputEnvelope;
    set?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    disconnect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    delete?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    update?: Prisma.BerriesUpdateWithWhereUniqueWithoutItemInput | Prisma.BerriesUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.BerriesUpdateManyWithWhereWithoutItemInput | Prisma.BerriesUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
};
export type BerriesCreateNestedManyWithoutFirmnessInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutFirmnessInput, Prisma.BerriesUncheckedCreateWithoutFirmnessInput> | Prisma.BerriesCreateWithoutFirmnessInput[] | Prisma.BerriesUncheckedCreateWithoutFirmnessInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutFirmnessInput | Prisma.BerriesCreateOrConnectWithoutFirmnessInput[];
    createMany?: Prisma.BerriesCreateManyFirmnessInputEnvelope;
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
};
export type BerriesUncheckedCreateNestedManyWithoutFirmnessInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutFirmnessInput, Prisma.BerriesUncheckedCreateWithoutFirmnessInput> | Prisma.BerriesCreateWithoutFirmnessInput[] | Prisma.BerriesUncheckedCreateWithoutFirmnessInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutFirmnessInput | Prisma.BerriesCreateOrConnectWithoutFirmnessInput[];
    createMany?: Prisma.BerriesCreateManyFirmnessInputEnvelope;
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
};
export type BerriesUpdateManyWithoutFirmnessNestedInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutFirmnessInput, Prisma.BerriesUncheckedCreateWithoutFirmnessInput> | Prisma.BerriesCreateWithoutFirmnessInput[] | Prisma.BerriesUncheckedCreateWithoutFirmnessInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutFirmnessInput | Prisma.BerriesCreateOrConnectWithoutFirmnessInput[];
    upsert?: Prisma.BerriesUpsertWithWhereUniqueWithoutFirmnessInput | Prisma.BerriesUpsertWithWhereUniqueWithoutFirmnessInput[];
    createMany?: Prisma.BerriesCreateManyFirmnessInputEnvelope;
    set?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    disconnect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    delete?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    update?: Prisma.BerriesUpdateWithWhereUniqueWithoutFirmnessInput | Prisma.BerriesUpdateWithWhereUniqueWithoutFirmnessInput[];
    updateMany?: Prisma.BerriesUpdateManyWithWhereWithoutFirmnessInput | Prisma.BerriesUpdateManyWithWhereWithoutFirmnessInput[];
    deleteMany?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
};
export type BerriesUncheckedUpdateManyWithoutFirmnessNestedInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutFirmnessInput, Prisma.BerriesUncheckedCreateWithoutFirmnessInput> | Prisma.BerriesCreateWithoutFirmnessInput[] | Prisma.BerriesUncheckedCreateWithoutFirmnessInput[];
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutFirmnessInput | Prisma.BerriesCreateOrConnectWithoutFirmnessInput[];
    upsert?: Prisma.BerriesUpsertWithWhereUniqueWithoutFirmnessInput | Prisma.BerriesUpsertWithWhereUniqueWithoutFirmnessInput[];
    createMany?: Prisma.BerriesCreateManyFirmnessInputEnvelope;
    set?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    disconnect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    delete?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    connect?: Prisma.BerriesWhereUniqueInput | Prisma.BerriesWhereUniqueInput[];
    update?: Prisma.BerriesUpdateWithWhereUniqueWithoutFirmnessInput | Prisma.BerriesUpdateWithWhereUniqueWithoutFirmnessInput[];
    updateMany?: Prisma.BerriesUpdateManyWithWhereWithoutFirmnessInput | Prisma.BerriesUpdateManyWithWhereWithoutFirmnessInput[];
    deleteMany?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
};
export type BerriesCreateNestedOneWithoutFlavorsInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutFlavorsInput, Prisma.BerriesUncheckedCreateWithoutFlavorsInput>;
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutFlavorsInput;
    connect?: Prisma.BerriesWhereUniqueInput;
};
export type BerriesUpdateOneRequiredWithoutFlavorsNestedInput = {
    create?: Prisma.XOR<Prisma.BerriesCreateWithoutFlavorsInput, Prisma.BerriesUncheckedCreateWithoutFlavorsInput>;
    connectOrCreate?: Prisma.BerriesCreateOrConnectWithoutFlavorsInput;
    upsert?: Prisma.BerriesUpsertWithoutFlavorsInput;
    connect?: Prisma.BerriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BerriesUpdateToOneWithWhereWithoutFlavorsInput, Prisma.BerriesUpdateWithoutFlavorsInput>, Prisma.BerriesUncheckedUpdateWithoutFlavorsInput>;
};
export type BerriesCreateWithoutNaturalGiftTypeInput = {
    id: number;
    natural_gift_power?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    item: Prisma.ItemsCreateNestedOneWithoutBerriesInput;
    firmness: Prisma.BerryFirmnessCreateNestedOneWithoutBerriesInput;
    flavors?: Prisma.BerryFlavorsCreateNestedManyWithoutBerryInput;
};
export type BerriesUncheckedCreateWithoutNaturalGiftTypeInput = {
    id: number;
    item_id: number;
    firmness_id: number;
    natural_gift_power?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    flavors?: Prisma.BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput;
};
export type BerriesCreateOrConnectWithoutNaturalGiftTypeInput = {
    where: Prisma.BerriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput>;
};
export type BerriesCreateManyNaturalGiftTypeInputEnvelope = {
    data: Prisma.BerriesCreateManyNaturalGiftTypeInput | Prisma.BerriesCreateManyNaturalGiftTypeInput[];
    skipDuplicates?: boolean;
};
export type BerriesUpsertWithWhereUniqueWithoutNaturalGiftTypeInput = {
    where: Prisma.BerriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.BerriesUpdateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedUpdateWithoutNaturalGiftTypeInput>;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedCreateWithoutNaturalGiftTypeInput>;
};
export type BerriesUpdateWithWhereUniqueWithoutNaturalGiftTypeInput = {
    where: Prisma.BerriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.BerriesUpdateWithoutNaturalGiftTypeInput, Prisma.BerriesUncheckedUpdateWithoutNaturalGiftTypeInput>;
};
export type BerriesUpdateManyWithWhereWithoutNaturalGiftTypeInput = {
    where: Prisma.BerriesScalarWhereInput;
    data: Prisma.XOR<Prisma.BerriesUpdateManyMutationInput, Prisma.BerriesUncheckedUpdateManyWithoutNaturalGiftTypeInput>;
};
export type BerriesScalarWhereInput = {
    AND?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
    OR?: Prisma.BerriesScalarWhereInput[];
    NOT?: Prisma.BerriesScalarWhereInput | Prisma.BerriesScalarWhereInput[];
    id?: Prisma.IntFilter<"Berries"> | number;
    item_id?: Prisma.IntFilter<"Berries"> | number;
    firmness_id?: Prisma.IntFilter<"Berries"> | number;
    natural_gift_power?: Prisma.IntNullableFilter<"Berries"> | number | null;
    natural_gift_type_id?: Prisma.IntNullableFilter<"Berries"> | number | null;
    size?: Prisma.IntFilter<"Berries"> | number;
    max_harvest?: Prisma.IntFilter<"Berries"> | number;
    growth_time?: Prisma.IntFilter<"Berries"> | number;
    soil_dryness?: Prisma.IntFilter<"Berries"> | number;
    smoothness?: Prisma.IntFilter<"Berries"> | number;
};
export type BerriesCreateWithoutItemInput = {
    id: number;
    natural_gift_power?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    firmness: Prisma.BerryFirmnessCreateNestedOneWithoutBerriesInput;
    naturalGiftType?: Prisma.TypesCreateNestedOneWithoutNaturalGiftTypesInput;
    flavors?: Prisma.BerryFlavorsCreateNestedManyWithoutBerryInput;
};
export type BerriesUncheckedCreateWithoutItemInput = {
    id: number;
    firmness_id: number;
    natural_gift_power?: number | null;
    natural_gift_type_id?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    flavors?: Prisma.BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput;
};
export type BerriesCreateOrConnectWithoutItemInput = {
    where: Prisma.BerriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutItemInput, Prisma.BerriesUncheckedCreateWithoutItemInput>;
};
export type BerriesCreateManyItemInputEnvelope = {
    data: Prisma.BerriesCreateManyItemInput | Prisma.BerriesCreateManyItemInput[];
    skipDuplicates?: boolean;
};
export type BerriesUpsertWithWhereUniqueWithoutItemInput = {
    where: Prisma.BerriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.BerriesUpdateWithoutItemInput, Prisma.BerriesUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutItemInput, Prisma.BerriesUncheckedCreateWithoutItemInput>;
};
export type BerriesUpdateWithWhereUniqueWithoutItemInput = {
    where: Prisma.BerriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.BerriesUpdateWithoutItemInput, Prisma.BerriesUncheckedUpdateWithoutItemInput>;
};
export type BerriesUpdateManyWithWhereWithoutItemInput = {
    where: Prisma.BerriesScalarWhereInput;
    data: Prisma.XOR<Prisma.BerriesUpdateManyMutationInput, Prisma.BerriesUncheckedUpdateManyWithoutItemInput>;
};
export type BerriesCreateWithoutFirmnessInput = {
    id: number;
    natural_gift_power?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    item: Prisma.ItemsCreateNestedOneWithoutBerriesInput;
    naturalGiftType?: Prisma.TypesCreateNestedOneWithoutNaturalGiftTypesInput;
    flavors?: Prisma.BerryFlavorsCreateNestedManyWithoutBerryInput;
};
export type BerriesUncheckedCreateWithoutFirmnessInput = {
    id: number;
    item_id: number;
    natural_gift_power?: number | null;
    natural_gift_type_id?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    flavors?: Prisma.BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput;
};
export type BerriesCreateOrConnectWithoutFirmnessInput = {
    where: Prisma.BerriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutFirmnessInput, Prisma.BerriesUncheckedCreateWithoutFirmnessInput>;
};
export type BerriesCreateManyFirmnessInputEnvelope = {
    data: Prisma.BerriesCreateManyFirmnessInput | Prisma.BerriesCreateManyFirmnessInput[];
    skipDuplicates?: boolean;
};
export type BerriesUpsertWithWhereUniqueWithoutFirmnessInput = {
    where: Prisma.BerriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.BerriesUpdateWithoutFirmnessInput, Prisma.BerriesUncheckedUpdateWithoutFirmnessInput>;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutFirmnessInput, Prisma.BerriesUncheckedCreateWithoutFirmnessInput>;
};
export type BerriesUpdateWithWhereUniqueWithoutFirmnessInput = {
    where: Prisma.BerriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.BerriesUpdateWithoutFirmnessInput, Prisma.BerriesUncheckedUpdateWithoutFirmnessInput>;
};
export type BerriesUpdateManyWithWhereWithoutFirmnessInput = {
    where: Prisma.BerriesScalarWhereInput;
    data: Prisma.XOR<Prisma.BerriesUpdateManyMutationInput, Prisma.BerriesUncheckedUpdateManyWithoutFirmnessInput>;
};
export type BerriesCreateWithoutFlavorsInput = {
    id: number;
    natural_gift_power?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
    item: Prisma.ItemsCreateNestedOneWithoutBerriesInput;
    firmness: Prisma.BerryFirmnessCreateNestedOneWithoutBerriesInput;
    naturalGiftType?: Prisma.TypesCreateNestedOneWithoutNaturalGiftTypesInput;
};
export type BerriesUncheckedCreateWithoutFlavorsInput = {
    id: number;
    item_id: number;
    firmness_id: number;
    natural_gift_power?: number | null;
    natural_gift_type_id?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
};
export type BerriesCreateOrConnectWithoutFlavorsInput = {
    where: Prisma.BerriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutFlavorsInput, Prisma.BerriesUncheckedCreateWithoutFlavorsInput>;
};
export type BerriesUpsertWithoutFlavorsInput = {
    update: Prisma.XOR<Prisma.BerriesUpdateWithoutFlavorsInput, Prisma.BerriesUncheckedUpdateWithoutFlavorsInput>;
    create: Prisma.XOR<Prisma.BerriesCreateWithoutFlavorsInput, Prisma.BerriesUncheckedCreateWithoutFlavorsInput>;
    where?: Prisma.BerriesWhereInput;
};
export type BerriesUpdateToOneWithWhereWithoutFlavorsInput = {
    where?: Prisma.BerriesWhereInput;
    data: Prisma.XOR<Prisma.BerriesUpdateWithoutFlavorsInput, Prisma.BerriesUncheckedUpdateWithoutFlavorsInput>;
};
export type BerriesUpdateWithoutFlavorsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemsUpdateOneRequiredWithoutBerriesNestedInput;
    firmness?: Prisma.BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput;
    naturalGiftType?: Prisma.TypesUpdateOneWithoutNaturalGiftTypesNestedInput;
};
export type BerriesUncheckedUpdateWithoutFlavorsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    natural_gift_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerriesCreateManyNaturalGiftTypeInput = {
    id: number;
    item_id: number;
    firmness_id: number;
    natural_gift_power?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
};
export type BerriesUpdateWithoutNaturalGiftTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemsUpdateOneRequiredWithoutBerriesNestedInput;
    firmness?: Prisma.BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput;
    flavors?: Prisma.BerryFlavorsUpdateManyWithoutBerryNestedInput;
};
export type BerriesUncheckedUpdateWithoutNaturalGiftTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    flavors?: Prisma.BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput;
};
export type BerriesUncheckedUpdateManyWithoutNaturalGiftTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerriesCreateManyItemInput = {
    id: number;
    firmness_id: number;
    natural_gift_power?: number | null;
    natural_gift_type_id?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
};
export type BerriesUpdateWithoutItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness?: Prisma.BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput;
    naturalGiftType?: Prisma.TypesUpdateOneWithoutNaturalGiftTypesNestedInput;
    flavors?: Prisma.BerryFlavorsUpdateManyWithoutBerryNestedInput;
};
export type BerriesUncheckedUpdateWithoutItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    natural_gift_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    flavors?: Prisma.BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput;
};
export type BerriesUncheckedUpdateManyWithoutItemInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firmness_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    natural_gift_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerriesCreateManyFirmnessInput = {
    id: number;
    item_id: number;
    natural_gift_power?: number | null;
    natural_gift_type_id?: number | null;
    size: number;
    max_harvest: number;
    growth_time: number;
    soil_dryness: number;
    smoothness: number;
};
export type BerriesUpdateWithoutFirmnessInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemsUpdateOneRequiredWithoutBerriesNestedInput;
    naturalGiftType?: Prisma.TypesUpdateOneWithoutNaturalGiftTypesNestedInput;
    flavors?: Prisma.BerryFlavorsUpdateManyWithoutBerryNestedInput;
};
export type BerriesUncheckedUpdateWithoutFirmnessInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    natural_gift_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
    flavors?: Prisma.BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput;
};
export type BerriesUncheckedUpdateManyWithoutFirmnessInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_id?: Prisma.IntFieldUpdateOperationsInput | number;
    natural_gift_power?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    natural_gift_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    max_harvest?: Prisma.IntFieldUpdateOperationsInput | number;
    growth_time?: Prisma.IntFieldUpdateOperationsInput | number;
    soil_dryness?: Prisma.IntFieldUpdateOperationsInput | number;
    smoothness?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type BerriesCountOutputType
 */
export type BerriesCountOutputType = {
    flavors: number;
};
export type BerriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    flavors?: boolean | BerriesCountOutputTypeCountFlavorsArgs;
};
/**
 * BerriesCountOutputType without action
 */
export type BerriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BerriesCountOutputType
     */
    select?: Prisma.BerriesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BerriesCountOutputType without action
 */
export type BerriesCountOutputTypeCountFlavorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BerryFlavorsWhereInput;
};
export type BerriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    item_id?: boolean;
    firmness_id?: boolean;
    natural_gift_power?: boolean;
    natural_gift_type_id?: boolean;
    size?: boolean;
    max_harvest?: boolean;
    growth_time?: boolean;
    soil_dryness?: boolean;
    smoothness?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    firmness?: boolean | Prisma.BerryFirmnessDefaultArgs<ExtArgs>;
    naturalGiftType?: boolean | Prisma.Berries$naturalGiftTypeArgs<ExtArgs>;
    flavors?: boolean | Prisma.Berries$flavorsArgs<ExtArgs>;
    _count?: boolean | Prisma.BerriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["berries"]>;
export type BerriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    item_id?: boolean;
    firmness_id?: boolean;
    natural_gift_power?: boolean;
    natural_gift_type_id?: boolean;
    size?: boolean;
    max_harvest?: boolean;
    growth_time?: boolean;
    soil_dryness?: boolean;
    smoothness?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    firmness?: boolean | Prisma.BerryFirmnessDefaultArgs<ExtArgs>;
    naturalGiftType?: boolean | Prisma.Berries$naturalGiftTypeArgs<ExtArgs>;
}, ExtArgs["result"]["berries"]>;
export type BerriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    item_id?: boolean;
    firmness_id?: boolean;
    natural_gift_power?: boolean;
    natural_gift_type_id?: boolean;
    size?: boolean;
    max_harvest?: boolean;
    growth_time?: boolean;
    soil_dryness?: boolean;
    smoothness?: boolean;
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    firmness?: boolean | Prisma.BerryFirmnessDefaultArgs<ExtArgs>;
    naturalGiftType?: boolean | Prisma.Berries$naturalGiftTypeArgs<ExtArgs>;
}, ExtArgs["result"]["berries"]>;
export type BerriesSelectScalar = {
    id?: boolean;
    item_id?: boolean;
    firmness_id?: boolean;
    natural_gift_power?: boolean;
    natural_gift_type_id?: boolean;
    size?: boolean;
    max_harvest?: boolean;
    growth_time?: boolean;
    soil_dryness?: boolean;
    smoothness?: boolean;
};
export type BerriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "item_id" | "firmness_id" | "natural_gift_power" | "natural_gift_type_id" | "size" | "max_harvest" | "growth_time" | "soil_dryness" | "smoothness", ExtArgs["result"]["berries"]>;
export type BerriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    firmness?: boolean | Prisma.BerryFirmnessDefaultArgs<ExtArgs>;
    naturalGiftType?: boolean | Prisma.Berries$naturalGiftTypeArgs<ExtArgs>;
    flavors?: boolean | Prisma.Berries$flavorsArgs<ExtArgs>;
    _count?: boolean | Prisma.BerriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BerriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    firmness?: boolean | Prisma.BerryFirmnessDefaultArgs<ExtArgs>;
    naturalGiftType?: boolean | Prisma.Berries$naturalGiftTypeArgs<ExtArgs>;
};
export type BerriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    item?: boolean | Prisma.ItemsDefaultArgs<ExtArgs>;
    firmness?: boolean | Prisma.BerryFirmnessDefaultArgs<ExtArgs>;
    naturalGiftType?: boolean | Prisma.Berries$naturalGiftTypeArgs<ExtArgs>;
};
export type $BerriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Berries";
    objects: {
        item: Prisma.$ItemsPayload<ExtArgs>;
        firmness: Prisma.$BerryFirmnessPayload<ExtArgs>;
        naturalGiftType: Prisma.$TypesPayload<ExtArgs> | null;
        flavors: Prisma.$BerryFlavorsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        item_id: number;
        firmness_id: number;
        natural_gift_power: number | null;
        natural_gift_type_id: number | null;
        size: number;
        max_harvest: number;
        growth_time: number;
        soil_dryness: number;
        smoothness: number;
    }, ExtArgs["result"]["berries"]>;
    composites: {};
};
export type BerriesGetPayload<S extends boolean | null | undefined | BerriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BerriesPayload, S>;
export type BerriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BerriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BerriesCountAggregateInputType | true;
};
export interface BerriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Berries'];
        meta: {
            name: 'Berries';
        };
    };
    /**
     * Find zero or one Berries that matches the filter.
     * @param {BerriesFindUniqueArgs} args - Arguments to find a Berries
     * @example
     * // Get one Berries
     * const berries = await prisma.berries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BerriesFindUniqueArgs>(args: Prisma.SelectSubset<T, BerriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Berries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BerriesFindUniqueOrThrowArgs} args - Arguments to find a Berries
     * @example
     * // Get one Berries
     * const berries = await prisma.berries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BerriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BerriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Berries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerriesFindFirstArgs} args - Arguments to find a Berries
     * @example
     * // Get one Berries
     * const berries = await prisma.berries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BerriesFindFirstArgs>(args?: Prisma.SelectSubset<T, BerriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Berries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerriesFindFirstOrThrowArgs} args - Arguments to find a Berries
     * @example
     * // Get one Berries
     * const berries = await prisma.berries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BerriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BerriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Berries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Berries
     * const berries = await prisma.berries.findMany()
     *
     * // Get first 10 Berries
     * const berries = await prisma.berries.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const berriesWithIdOnly = await prisma.berries.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BerriesFindManyArgs>(args?: Prisma.SelectSubset<T, BerriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Berries.
     * @param {BerriesCreateArgs} args - Arguments to create a Berries.
     * @example
     * // Create one Berries
     * const Berries = await prisma.berries.create({
     *   data: {
     *     // ... data to create a Berries
     *   }
     * })
     *
     */
    create<T extends BerriesCreateArgs>(args: Prisma.SelectSubset<T, BerriesCreateArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Berries.
     * @param {BerriesCreateManyArgs} args - Arguments to create many Berries.
     * @example
     * // Create many Berries
     * const berries = await prisma.berries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BerriesCreateManyArgs>(args?: Prisma.SelectSubset<T, BerriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Berries and returns the data saved in the database.
     * @param {BerriesCreateManyAndReturnArgs} args - Arguments to create many Berries.
     * @example
     * // Create many Berries
     * const berries = await prisma.berries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Berries and only return the `id`
     * const berriesWithIdOnly = await prisma.berries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BerriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BerriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Berries.
     * @param {BerriesDeleteArgs} args - Arguments to delete one Berries.
     * @example
     * // Delete one Berries
     * const Berries = await prisma.berries.delete({
     *   where: {
     *     // ... filter to delete one Berries
     *   }
     * })
     *
     */
    delete<T extends BerriesDeleteArgs>(args: Prisma.SelectSubset<T, BerriesDeleteArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Berries.
     * @param {BerriesUpdateArgs} args - Arguments to update one Berries.
     * @example
     * // Update one Berries
     * const berries = await prisma.berries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BerriesUpdateArgs>(args: Prisma.SelectSubset<T, BerriesUpdateArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Berries.
     * @param {BerriesDeleteManyArgs} args - Arguments to filter Berries to delete.
     * @example
     * // Delete a few Berries
     * const { count } = await prisma.berries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BerriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, BerriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Berries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Berries
     * const berries = await prisma.berries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BerriesUpdateManyArgs>(args: Prisma.SelectSubset<T, BerriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Berries and returns the data updated in the database.
     * @param {BerriesUpdateManyAndReturnArgs} args - Arguments to update many Berries.
     * @example
     * // Update many Berries
     * const berries = await prisma.berries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Berries and only return the `id`
     * const berriesWithIdOnly = await prisma.berries.updateManyAndReturn({
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
    updateManyAndReturn<T extends BerriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BerriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Berries.
     * @param {BerriesUpsertArgs} args - Arguments to update or create a Berries.
     * @example
     * // Update or create a Berries
     * const berries = await prisma.berries.upsert({
     *   create: {
     *     // ... data to create a Berries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Berries we want to update
     *   }
     * })
     */
    upsert<T extends BerriesUpsertArgs>(args: Prisma.SelectSubset<T, BerriesUpsertArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Berries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerriesCountArgs} args - Arguments to filter Berries to count.
     * @example
     * // Count the number of Berries
     * const count = await prisma.berries.count({
     *   where: {
     *     // ... the filter for the Berries we want to count
     *   }
     * })
    **/
    count<T extends BerriesCountArgs>(args?: Prisma.Subset<T, BerriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BerriesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Berries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BerriesAggregateArgs>(args: Prisma.Subset<T, BerriesAggregateArgs>): Prisma.PrismaPromise<GetBerriesAggregateType<T>>;
    /**
     * Group by Berries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerriesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BerriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BerriesGroupByArgs['orderBy'];
    } : {
        orderBy?: BerriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BerriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBerriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Berries model
     */
    readonly fields: BerriesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Berries.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BerriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    item<T extends Prisma.ItemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemsDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemsClient<runtime.Types.Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    firmness<T extends Prisma.BerryFirmnessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BerryFirmnessDefaultArgs<ExtArgs>>): Prisma.Prisma__BerryFirmnessClient<runtime.Types.Result.GetResult<Prisma.$BerryFirmnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    naturalGiftType<T extends Prisma.Berries$naturalGiftTypeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Berries$naturalGiftTypeArgs<ExtArgs>>): Prisma.Prisma__TypesClient<runtime.Types.Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    flavors<T extends Prisma.Berries$flavorsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Berries$flavorsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Berries model
 */
export interface BerriesFieldRefs {
    readonly id: Prisma.FieldRef<"Berries", 'Int'>;
    readonly item_id: Prisma.FieldRef<"Berries", 'Int'>;
    readonly firmness_id: Prisma.FieldRef<"Berries", 'Int'>;
    readonly natural_gift_power: Prisma.FieldRef<"Berries", 'Int'>;
    readonly natural_gift_type_id: Prisma.FieldRef<"Berries", 'Int'>;
    readonly size: Prisma.FieldRef<"Berries", 'Int'>;
    readonly max_harvest: Prisma.FieldRef<"Berries", 'Int'>;
    readonly growth_time: Prisma.FieldRef<"Berries", 'Int'>;
    readonly soil_dryness: Prisma.FieldRef<"Berries", 'Int'>;
    readonly smoothness: Prisma.FieldRef<"Berries", 'Int'>;
}
/**
 * Berries findUnique
 */
export type BerriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * Filter, which Berries to fetch.
     */
    where: Prisma.BerriesWhereUniqueInput;
};
/**
 * Berries findUniqueOrThrow
 */
export type BerriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * Filter, which Berries to fetch.
     */
    where: Prisma.BerriesWhereUniqueInput;
};
/**
 * Berries findFirst
 */
export type BerriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * Filter, which Berries to fetch.
     */
    where?: Prisma.BerriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Berries to fetch.
     */
    orderBy?: Prisma.BerriesOrderByWithRelationInput | Prisma.BerriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Berries.
     */
    cursor?: Prisma.BerriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Berries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Berries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Berries.
     */
    distinct?: Prisma.BerriesScalarFieldEnum | Prisma.BerriesScalarFieldEnum[];
};
/**
 * Berries findFirstOrThrow
 */
export type BerriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * Filter, which Berries to fetch.
     */
    where?: Prisma.BerriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Berries to fetch.
     */
    orderBy?: Prisma.BerriesOrderByWithRelationInput | Prisma.BerriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Berries.
     */
    cursor?: Prisma.BerriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Berries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Berries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Berries.
     */
    distinct?: Prisma.BerriesScalarFieldEnum | Prisma.BerriesScalarFieldEnum[];
};
/**
 * Berries findMany
 */
export type BerriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * Filter, which Berries to fetch.
     */
    where?: Prisma.BerriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Berries to fetch.
     */
    orderBy?: Prisma.BerriesOrderByWithRelationInput | Prisma.BerriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Berries.
     */
    cursor?: Prisma.BerriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Berries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Berries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Berries.
     */
    distinct?: Prisma.BerriesScalarFieldEnum | Prisma.BerriesScalarFieldEnum[];
};
/**
 * Berries create
 */
export type BerriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Berries.
     */
    data: Prisma.XOR<Prisma.BerriesCreateInput, Prisma.BerriesUncheckedCreateInput>;
};
/**
 * Berries createMany
 */
export type BerriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Berries.
     */
    data: Prisma.BerriesCreateManyInput | Prisma.BerriesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Berries createManyAndReturn
 */
export type BerriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * The data used to create many Berries.
     */
    data: Prisma.BerriesCreateManyInput | Prisma.BerriesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Berries update
 */
export type BerriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Berries.
     */
    data: Prisma.XOR<Prisma.BerriesUpdateInput, Prisma.BerriesUncheckedUpdateInput>;
    /**
     * Choose, which Berries to update.
     */
    where: Prisma.BerriesWhereUniqueInput;
};
/**
 * Berries updateMany
 */
export type BerriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Berries.
     */
    data: Prisma.XOR<Prisma.BerriesUpdateManyMutationInput, Prisma.BerriesUncheckedUpdateManyInput>;
    /**
     * Filter which Berries to update
     */
    where?: Prisma.BerriesWhereInput;
    /**
     * Limit how many Berries to update.
     */
    limit?: number;
};
/**
 * Berries updateManyAndReturn
 */
export type BerriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * The data used to update Berries.
     */
    data: Prisma.XOR<Prisma.BerriesUpdateManyMutationInput, Prisma.BerriesUncheckedUpdateManyInput>;
    /**
     * Filter which Berries to update
     */
    where?: Prisma.BerriesWhereInput;
    /**
     * Limit how many Berries to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Berries upsert
 */
export type BerriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Berries to update in case it exists.
     */
    where: Prisma.BerriesWhereUniqueInput;
    /**
     * In case the Berries found by the `where` argument doesn't exist, create a new Berries with this data.
     */
    create: Prisma.XOR<Prisma.BerriesCreateInput, Prisma.BerriesUncheckedCreateInput>;
    /**
     * In case the Berries was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BerriesUpdateInput, Prisma.BerriesUncheckedUpdateInput>;
};
/**
 * Berries delete
 */
export type BerriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
    /**
     * Filter which Berries to delete.
     */
    where: Prisma.BerriesWhereUniqueInput;
};
/**
 * Berries deleteMany
 */
export type BerriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Berries to delete
     */
    where?: Prisma.BerriesWhereInput;
    /**
     * Limit how many Berries to delete.
     */
    limit?: number;
};
/**
 * Berries.naturalGiftType
 */
export type Berries$naturalGiftTypeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Berries.flavors
 */
export type Berries$flavorsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BerryFlavors
     */
    select?: Prisma.BerryFlavorsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BerryFlavors
     */
    omit?: Prisma.BerryFlavorsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerryFlavorsInclude<ExtArgs> | null;
    where?: Prisma.BerryFlavorsWhereInput;
    orderBy?: Prisma.BerryFlavorsOrderByWithRelationInput | Prisma.BerryFlavorsOrderByWithRelationInput[];
    cursor?: Prisma.BerryFlavorsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BerryFlavorsScalarFieldEnum | Prisma.BerryFlavorsScalarFieldEnum[];
};
/**
 * Berries without action
 */
export type BerriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berries
     */
    select?: Prisma.BerriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Berries
     */
    omit?: Prisma.BerriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerriesInclude<ExtArgs> | null;
};
