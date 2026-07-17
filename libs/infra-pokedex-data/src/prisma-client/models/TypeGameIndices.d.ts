import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TypeGameIndices
 * @@TypeGraphQL.type(name: "TypeGameIndex")
 */
export type TypeGameIndicesModel = runtime.Types.Result.DefaultSelection<Prisma.$TypeGameIndicesPayload>;
export type AggregateTypeGameIndices = {
    _count: TypeGameIndicesCountAggregateOutputType | null;
    _avg: TypeGameIndicesAvgAggregateOutputType | null;
    _sum: TypeGameIndicesSumAggregateOutputType | null;
    _min: TypeGameIndicesMinAggregateOutputType | null;
    _max: TypeGameIndicesMaxAggregateOutputType | null;
};
export type TypeGameIndicesAvgAggregateOutputType = {
    type_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type TypeGameIndicesSumAggregateOutputType = {
    type_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type TypeGameIndicesMinAggregateOutputType = {
    type_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type TypeGameIndicesMaxAggregateOutputType = {
    type_id: number | null;
    generation_id: number | null;
    game_index: number | null;
};
export type TypeGameIndicesCountAggregateOutputType = {
    type_id: number;
    generation_id: number;
    game_index: number;
    _all: number;
};
export type TypeGameIndicesAvgAggregateInputType = {
    type_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type TypeGameIndicesSumAggregateInputType = {
    type_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type TypeGameIndicesMinAggregateInputType = {
    type_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type TypeGameIndicesMaxAggregateInputType = {
    type_id?: true;
    generation_id?: true;
    game_index?: true;
};
export type TypeGameIndicesCountAggregateInputType = {
    type_id?: true;
    generation_id?: true;
    game_index?: true;
    _all?: true;
};
export type TypeGameIndicesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TypeGameIndices to aggregate.
     */
    where?: Prisma.TypeGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeGameIndices to fetch.
     */
    orderBy?: Prisma.TypeGameIndicesOrderByWithRelationInput | Prisma.TypeGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TypeGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TypeGameIndices
    **/
    _count?: true | TypeGameIndicesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TypeGameIndicesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TypeGameIndicesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TypeGameIndicesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TypeGameIndicesMaxAggregateInputType;
};
export type GetTypeGameIndicesAggregateType<T extends TypeGameIndicesAggregateArgs> = {
    [P in keyof T & keyof AggregateTypeGameIndices]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTypeGameIndices[P]> : Prisma.GetScalarType<T[P], AggregateTypeGameIndices[P]>;
};
export type TypeGameIndicesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeGameIndicesWhereInput;
    orderBy?: Prisma.TypeGameIndicesOrderByWithAggregationInput | Prisma.TypeGameIndicesOrderByWithAggregationInput[];
    by: Prisma.TypeGameIndicesScalarFieldEnum[] | Prisma.TypeGameIndicesScalarFieldEnum;
    having?: Prisma.TypeGameIndicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TypeGameIndicesCountAggregateInputType | true;
    _avg?: TypeGameIndicesAvgAggregateInputType;
    _sum?: TypeGameIndicesSumAggregateInputType;
    _min?: TypeGameIndicesMinAggregateInputType;
    _max?: TypeGameIndicesMaxAggregateInputType;
};
export type TypeGameIndicesGroupByOutputType = {
    type_id: number;
    generation_id: number;
    game_index: number;
    _count: TypeGameIndicesCountAggregateOutputType | null;
    _avg: TypeGameIndicesAvgAggregateOutputType | null;
    _sum: TypeGameIndicesSumAggregateOutputType | null;
    _min: TypeGameIndicesMinAggregateOutputType | null;
    _max: TypeGameIndicesMaxAggregateOutputType | null;
};
export type GetTypeGameIndicesGroupByPayload<T extends TypeGameIndicesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TypeGameIndicesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TypeGameIndicesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TypeGameIndicesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TypeGameIndicesGroupByOutputType[P]>;
}>>;
export type TypeGameIndicesWhereInput = {
    AND?: Prisma.TypeGameIndicesWhereInput | Prisma.TypeGameIndicesWhereInput[];
    OR?: Prisma.TypeGameIndicesWhereInput[];
    NOT?: Prisma.TypeGameIndicesWhereInput | Prisma.TypeGameIndicesWhereInput[];
    type_id?: Prisma.IntFilter<"TypeGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"TypeGameIndices"> | number;
    game_index?: Prisma.IntFilter<"TypeGameIndices"> | number;
    type?: Prisma.XOR<Prisma.TypesScalarRelationFilter, Prisma.TypesWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
};
export type TypeGameIndicesOrderByWithRelationInput = {
    type_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    type?: Prisma.TypesOrderByWithRelationInput;
    generation?: Prisma.GenerationsOrderByWithRelationInput;
};
export type TypeGameIndicesWhereUniqueInput = Prisma.AtLeast<{
    type_id_generation_id?: Prisma.TypeGameIndicesType_idGeneration_idCompoundUniqueInput;
    AND?: Prisma.TypeGameIndicesWhereInput | Prisma.TypeGameIndicesWhereInput[];
    OR?: Prisma.TypeGameIndicesWhereInput[];
    NOT?: Prisma.TypeGameIndicesWhereInput | Prisma.TypeGameIndicesWhereInput[];
    type_id?: Prisma.IntFilter<"TypeGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"TypeGameIndices"> | number;
    game_index?: Prisma.IntFilter<"TypeGameIndices"> | number;
    type?: Prisma.XOR<Prisma.TypesScalarRelationFilter, Prisma.TypesWhereInput>;
    generation?: Prisma.XOR<Prisma.GenerationsScalarRelationFilter, Prisma.GenerationsWhereInput>;
}, "type_id_generation_id">;
export type TypeGameIndicesOrderByWithAggregationInput = {
    type_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
    _count?: Prisma.TypeGameIndicesCountOrderByAggregateInput;
    _avg?: Prisma.TypeGameIndicesAvgOrderByAggregateInput;
    _max?: Prisma.TypeGameIndicesMaxOrderByAggregateInput;
    _min?: Prisma.TypeGameIndicesMinOrderByAggregateInput;
    _sum?: Prisma.TypeGameIndicesSumOrderByAggregateInput;
};
export type TypeGameIndicesScalarWhereWithAggregatesInput = {
    AND?: Prisma.TypeGameIndicesScalarWhereWithAggregatesInput | Prisma.TypeGameIndicesScalarWhereWithAggregatesInput[];
    OR?: Prisma.TypeGameIndicesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TypeGameIndicesScalarWhereWithAggregatesInput | Prisma.TypeGameIndicesScalarWhereWithAggregatesInput[];
    type_id?: Prisma.IntWithAggregatesFilter<"TypeGameIndices"> | number;
    generation_id?: Prisma.IntWithAggregatesFilter<"TypeGameIndices"> | number;
    game_index?: Prisma.IntWithAggregatesFilter<"TypeGameIndices"> | number;
};
export type TypeGameIndicesCreateInput = {
    game_index: number;
    type: Prisma.TypesCreateNestedOneWithoutGameIndicesInput;
    generation: Prisma.GenerationsCreateNestedOneWithoutTypeGameIndicesInput;
};
export type TypeGameIndicesUncheckedCreateInput = {
    type_id: number;
    generation_id: number;
    game_index: number;
};
export type TypeGameIndicesUpdateInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.TypesUpdateOneRequiredWithoutGameIndicesNestedInput;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput;
};
export type TypeGameIndicesUncheckedUpdateInput = {
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TypeGameIndicesCreateManyInput = {
    type_id: number;
    generation_id: number;
    game_index: number;
};
export type TypeGameIndicesUpdateManyMutationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TypeGameIndicesUncheckedUpdateManyInput = {
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TypeGameIndicesListRelationFilter = {
    every?: Prisma.TypeGameIndicesWhereInput;
    some?: Prisma.TypeGameIndicesWhereInput;
    none?: Prisma.TypeGameIndicesWhereInput;
};
export type TypeGameIndicesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TypeGameIndicesType_idGeneration_idCompoundUniqueInput = {
    type_id: number;
    generation_id: number;
};
export type TypeGameIndicesCountOrderByAggregateInput = {
    type_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type TypeGameIndicesAvgOrderByAggregateInput = {
    type_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type TypeGameIndicesMaxOrderByAggregateInput = {
    type_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type TypeGameIndicesMinOrderByAggregateInput = {
    type_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type TypeGameIndicesSumOrderByAggregateInput = {
    type_id?: Prisma.SortOrder;
    generation_id?: Prisma.SortOrder;
    game_index?: Prisma.SortOrder;
};
export type TypeGameIndicesCreateNestedManyWithoutTypeInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput> | Prisma.TypeGameIndicesCreateWithoutTypeInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput | Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyTypeInputEnvelope;
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
};
export type TypeGameIndicesUncheckedCreateNestedManyWithoutTypeInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput> | Prisma.TypeGameIndicesCreateWithoutTypeInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput | Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyTypeInputEnvelope;
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
};
export type TypeGameIndicesUpdateManyWithoutTypeNestedInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput> | Prisma.TypeGameIndicesCreateWithoutTypeInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput | Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput[];
    upsert?: Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput | Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyTypeInputEnvelope;
    set?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    delete?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    update?: Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput | Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?: Prisma.TypeGameIndicesUpdateManyWithWhereWithoutTypeInput | Prisma.TypeGameIndicesUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: Prisma.TypeGameIndicesScalarWhereInput | Prisma.TypeGameIndicesScalarWhereInput[];
};
export type TypeGameIndicesUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput> | Prisma.TypeGameIndicesCreateWithoutTypeInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput | Prisma.TypeGameIndicesCreateOrConnectWithoutTypeInput[];
    upsert?: Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput | Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyTypeInputEnvelope;
    set?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    delete?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    update?: Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput | Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?: Prisma.TypeGameIndicesUpdateManyWithWhereWithoutTypeInput | Prisma.TypeGameIndicesUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: Prisma.TypeGameIndicesScalarWhereInput | Prisma.TypeGameIndicesScalarWhereInput[];
};
export type TypeGameIndicesCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.TypeGameIndicesCreateWithoutGenerationInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyGenerationInputEnvelope;
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
};
export type TypeGameIndicesUncheckedCreateNestedManyWithoutGenerationInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.TypeGameIndicesCreateWithoutGenerationInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyGenerationInputEnvelope;
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
};
export type TypeGameIndicesUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.TypeGameIndicesCreateWithoutGenerationInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput | Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyGenerationInputEnvelope;
    set?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    delete?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    update?: Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput | Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput | Prisma.TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.TypeGameIndicesScalarWhereInput | Prisma.TypeGameIndicesScalarWhereInput[];
};
export type TypeGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput = {
    create?: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput> | Prisma.TypeGameIndicesCreateWithoutGenerationInput[] | Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput[];
    connectOrCreate?: Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput | Prisma.TypeGameIndicesCreateOrConnectWithoutGenerationInput[];
    upsert?: Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput | Prisma.TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput[];
    createMany?: Prisma.TypeGameIndicesCreateManyGenerationInputEnvelope;
    set?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    disconnect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    delete?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    connect?: Prisma.TypeGameIndicesWhereUniqueInput | Prisma.TypeGameIndicesWhereUniqueInput[];
    update?: Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput | Prisma.TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput[];
    updateMany?: Prisma.TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput | Prisma.TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput[];
    deleteMany?: Prisma.TypeGameIndicesScalarWhereInput | Prisma.TypeGameIndicesScalarWhereInput[];
};
export type TypeGameIndicesCreateWithoutTypeInput = {
    game_index: number;
    generation: Prisma.GenerationsCreateNestedOneWithoutTypeGameIndicesInput;
};
export type TypeGameIndicesUncheckedCreateWithoutTypeInput = {
    generation_id: number;
    game_index: number;
};
export type TypeGameIndicesCreateOrConnectWithoutTypeInput = {
    where: Prisma.TypeGameIndicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput>;
};
export type TypeGameIndicesCreateManyTypeInputEnvelope = {
    data: Prisma.TypeGameIndicesCreateManyTypeInput | Prisma.TypeGameIndicesCreateManyTypeInput[];
    skipDuplicates?: boolean;
};
export type TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput = {
    where: Prisma.TypeGameIndicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.TypeGameIndicesUpdateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedUpdateWithoutTypeInput>;
    create: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedCreateWithoutTypeInput>;
};
export type TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput = {
    where: Prisma.TypeGameIndicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.TypeGameIndicesUpdateWithoutTypeInput, Prisma.TypeGameIndicesUncheckedUpdateWithoutTypeInput>;
};
export type TypeGameIndicesUpdateManyWithWhereWithoutTypeInput = {
    where: Prisma.TypeGameIndicesScalarWhereInput;
    data: Prisma.XOR<Prisma.TypeGameIndicesUpdateManyMutationInput, Prisma.TypeGameIndicesUncheckedUpdateManyWithoutTypeInput>;
};
export type TypeGameIndicesScalarWhereInput = {
    AND?: Prisma.TypeGameIndicesScalarWhereInput | Prisma.TypeGameIndicesScalarWhereInput[];
    OR?: Prisma.TypeGameIndicesScalarWhereInput[];
    NOT?: Prisma.TypeGameIndicesScalarWhereInput | Prisma.TypeGameIndicesScalarWhereInput[];
    type_id?: Prisma.IntFilter<"TypeGameIndices"> | number;
    generation_id?: Prisma.IntFilter<"TypeGameIndices"> | number;
    game_index?: Prisma.IntFilter<"TypeGameIndices"> | number;
};
export type TypeGameIndicesCreateWithoutGenerationInput = {
    game_index: number;
    type: Prisma.TypesCreateNestedOneWithoutGameIndicesInput;
};
export type TypeGameIndicesUncheckedCreateWithoutGenerationInput = {
    type_id: number;
    game_index: number;
};
export type TypeGameIndicesCreateOrConnectWithoutGenerationInput = {
    where: Prisma.TypeGameIndicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput>;
};
export type TypeGameIndicesCreateManyGenerationInputEnvelope = {
    data: Prisma.TypeGameIndicesCreateManyGenerationInput | Prisma.TypeGameIndicesCreateManyGenerationInput[];
    skipDuplicates?: boolean;
};
export type TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.TypeGameIndicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.TypeGameIndicesUpdateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedUpdateWithoutGenerationInput>;
    create: Prisma.XOR<Prisma.TypeGameIndicesCreateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedCreateWithoutGenerationInput>;
};
export type TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput = {
    where: Prisma.TypeGameIndicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.TypeGameIndicesUpdateWithoutGenerationInput, Prisma.TypeGameIndicesUncheckedUpdateWithoutGenerationInput>;
};
export type TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput = {
    where: Prisma.TypeGameIndicesScalarWhereInput;
    data: Prisma.XOR<Prisma.TypeGameIndicesUpdateManyMutationInput, Prisma.TypeGameIndicesUncheckedUpdateManyWithoutGenerationInput>;
};
export type TypeGameIndicesCreateManyTypeInput = {
    generation_id: number;
    game_index: number;
};
export type TypeGameIndicesUpdateWithoutTypeInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    generation?: Prisma.GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput;
};
export type TypeGameIndicesUncheckedUpdateWithoutTypeInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TypeGameIndicesUncheckedUpdateManyWithoutTypeInput = {
    generation_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TypeGameIndicesCreateManyGenerationInput = {
    type_id: number;
    game_index: number;
};
export type TypeGameIndicesUpdateWithoutGenerationInput = {
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.TypesUpdateOneRequiredWithoutGameIndicesNestedInput;
};
export type TypeGameIndicesUncheckedUpdateWithoutGenerationInput = {
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TypeGameIndicesUncheckedUpdateManyWithoutGenerationInput = {
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_index?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TypeGameIndicesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    type_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["typeGameIndices"]>;
export type TypeGameIndicesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    type_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["typeGameIndices"]>;
export type TypeGameIndicesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    type_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["typeGameIndices"]>;
export type TypeGameIndicesSelectScalar = {
    type_id?: boolean;
    generation_id?: boolean;
    game_index?: boolean;
};
export type TypeGameIndicesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"type_id" | "generation_id" | "game_index", ExtArgs["result"]["typeGameIndices"]>;
export type TypeGameIndicesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type TypeGameIndicesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type TypeGameIndicesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
    generation?: boolean | Prisma.GenerationsDefaultArgs<ExtArgs>;
};
export type $TypeGameIndicesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TypeGameIndices";
    objects: {
        type: Prisma.$TypesPayload<ExtArgs>;
        generation: Prisma.$GenerationsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        type_id: number;
        generation_id: number;
        game_index: number;
    }, ExtArgs["result"]["typeGameIndices"]>;
    composites: {};
};
export type TypeGameIndicesGetPayload<S extends boolean | null | undefined | TypeGameIndicesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload, S>;
export type TypeGameIndicesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TypeGameIndicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TypeGameIndicesCountAggregateInputType | true;
};
export interface TypeGameIndicesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TypeGameIndices'];
        meta: {
            name: 'TypeGameIndices';
        };
    };
    /**
     * Find zero or one TypeGameIndices that matches the filter.
     * @param {TypeGameIndicesFindUniqueArgs} args - Arguments to find a TypeGameIndices
     * @example
     * // Get one TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeGameIndicesFindUniqueArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TypeGameIndices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeGameIndicesFindUniqueOrThrowArgs} args - Arguments to find a TypeGameIndices
     * @example
     * // Get one TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeGameIndicesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TypeGameIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGameIndicesFindFirstArgs} args - Arguments to find a TypeGameIndices
     * @example
     * // Get one TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeGameIndicesFindFirstArgs>(args?: Prisma.SelectSubset<T, TypeGameIndicesFindFirstArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TypeGameIndices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGameIndicesFindFirstOrThrowArgs} args - Arguments to find a TypeGameIndices
     * @example
     * // Get one TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeGameIndicesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TypeGameIndicesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TypeGameIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGameIndicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.findMany()
     *
     * // Get first 10 TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.findMany({ take: 10 })
     *
     * // Only select the `type_id`
     * const typeGameIndicesWithType_idOnly = await prisma.typeGameIndices.findMany({ select: { type_id: true } })
     *
     */
    findMany<T extends TypeGameIndicesFindManyArgs>(args?: Prisma.SelectSubset<T, TypeGameIndicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TypeGameIndices.
     * @param {TypeGameIndicesCreateArgs} args - Arguments to create a TypeGameIndices.
     * @example
     * // Create one TypeGameIndices
     * const TypeGameIndices = await prisma.typeGameIndices.create({
     *   data: {
     *     // ... data to create a TypeGameIndices
     *   }
     * })
     *
     */
    create<T extends TypeGameIndicesCreateArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesCreateArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TypeGameIndices.
     * @param {TypeGameIndicesCreateManyArgs} args - Arguments to create many TypeGameIndices.
     * @example
     * // Create many TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TypeGameIndicesCreateManyArgs>(args?: Prisma.SelectSubset<T, TypeGameIndicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TypeGameIndices and returns the data saved in the database.
     * @param {TypeGameIndicesCreateManyAndReturnArgs} args - Arguments to create many TypeGameIndices.
     * @example
     * // Create many TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TypeGameIndices and only return the `type_id`
     * const typeGameIndicesWithType_idOnly = await prisma.typeGameIndices.createManyAndReturn({
     *   select: { type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TypeGameIndicesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TypeGameIndicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TypeGameIndices.
     * @param {TypeGameIndicesDeleteArgs} args - Arguments to delete one TypeGameIndices.
     * @example
     * // Delete one TypeGameIndices
     * const TypeGameIndices = await prisma.typeGameIndices.delete({
     *   where: {
     *     // ... filter to delete one TypeGameIndices
     *   }
     * })
     *
     */
    delete<T extends TypeGameIndicesDeleteArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesDeleteArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TypeGameIndices.
     * @param {TypeGameIndicesUpdateArgs} args - Arguments to update one TypeGameIndices.
     * @example
     * // Update one TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TypeGameIndicesUpdateArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesUpdateArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TypeGameIndices.
     * @param {TypeGameIndicesDeleteManyArgs} args - Arguments to filter TypeGameIndices to delete.
     * @example
     * // Delete a few TypeGameIndices
     * const { count } = await prisma.typeGameIndices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TypeGameIndicesDeleteManyArgs>(args?: Prisma.SelectSubset<T, TypeGameIndicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TypeGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGameIndicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TypeGameIndicesUpdateManyArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TypeGameIndices and returns the data updated in the database.
     * @param {TypeGameIndicesUpdateManyAndReturnArgs} args - Arguments to update many TypeGameIndices.
     * @example
     * // Update many TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TypeGameIndices and only return the `type_id`
     * const typeGameIndicesWithType_idOnly = await prisma.typeGameIndices.updateManyAndReturn({
     *   select: { type_id: true },
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
    updateManyAndReturn<T extends TypeGameIndicesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TypeGameIndices.
     * @param {TypeGameIndicesUpsertArgs} args - Arguments to update or create a TypeGameIndices.
     * @example
     * // Update or create a TypeGameIndices
     * const typeGameIndices = await prisma.typeGameIndices.upsert({
     *   create: {
     *     // ... data to create a TypeGameIndices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeGameIndices we want to update
     *   }
     * })
     */
    upsert<T extends TypeGameIndicesUpsertArgs>(args: Prisma.SelectSubset<T, TypeGameIndicesUpsertArgs<ExtArgs>>): Prisma.Prisma__TypeGameIndicesClient<runtime.Types.Result.GetResult<Prisma.$TypeGameIndicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TypeGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGameIndicesCountArgs} args - Arguments to filter TypeGameIndices to count.
     * @example
     * // Count the number of TypeGameIndices
     * const count = await prisma.typeGameIndices.count({
     *   where: {
     *     // ... the filter for the TypeGameIndices we want to count
     *   }
     * })
    **/
    count<T extends TypeGameIndicesCountArgs>(args?: Prisma.Subset<T, TypeGameIndicesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TypeGameIndicesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TypeGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGameIndicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeGameIndicesAggregateArgs>(args: Prisma.Subset<T, TypeGameIndicesAggregateArgs>): Prisma.PrismaPromise<GetTypeGameIndicesAggregateType<T>>;
    /**
     * Group by TypeGameIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGameIndicesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TypeGameIndicesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TypeGameIndicesGroupByArgs['orderBy'];
    } : {
        orderBy?: TypeGameIndicesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TypeGameIndicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGameIndicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TypeGameIndices model
     */
    readonly fields: TypeGameIndicesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TypeGameIndices.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TypeGameIndicesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    type<T extends Prisma.TypesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypesDefaultArgs<ExtArgs>>): Prisma.Prisma__TypesClient<runtime.Types.Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TypeGameIndices model
 */
export interface TypeGameIndicesFieldRefs {
    readonly type_id: Prisma.FieldRef<"TypeGameIndices", 'Int'>;
    readonly generation_id: Prisma.FieldRef<"TypeGameIndices", 'Int'>;
    readonly game_index: Prisma.FieldRef<"TypeGameIndices", 'Int'>;
}
/**
 * TypeGameIndices findUnique
 */
export type TypeGameIndicesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which TypeGameIndices to fetch.
     */
    where: Prisma.TypeGameIndicesWhereUniqueInput;
};
/**
 * TypeGameIndices findUniqueOrThrow
 */
export type TypeGameIndicesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which TypeGameIndices to fetch.
     */
    where: Prisma.TypeGameIndicesWhereUniqueInput;
};
/**
 * TypeGameIndices findFirst
 */
export type TypeGameIndicesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which TypeGameIndices to fetch.
     */
    where?: Prisma.TypeGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeGameIndices to fetch.
     */
    orderBy?: Prisma.TypeGameIndicesOrderByWithRelationInput | Prisma.TypeGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TypeGameIndices.
     */
    cursor?: Prisma.TypeGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TypeGameIndices.
     */
    distinct?: Prisma.TypeGameIndicesScalarFieldEnum | Prisma.TypeGameIndicesScalarFieldEnum[];
};
/**
 * TypeGameIndices findFirstOrThrow
 */
export type TypeGameIndicesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which TypeGameIndices to fetch.
     */
    where?: Prisma.TypeGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeGameIndices to fetch.
     */
    orderBy?: Prisma.TypeGameIndicesOrderByWithRelationInput | Prisma.TypeGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TypeGameIndices.
     */
    cursor?: Prisma.TypeGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TypeGameIndices.
     */
    distinct?: Prisma.TypeGameIndicesScalarFieldEnum | Prisma.TypeGameIndicesScalarFieldEnum[];
};
/**
 * TypeGameIndices findMany
 */
export type TypeGameIndicesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter, which TypeGameIndices to fetch.
     */
    where?: Prisma.TypeGameIndicesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TypeGameIndices to fetch.
     */
    orderBy?: Prisma.TypeGameIndicesOrderByWithRelationInput | Prisma.TypeGameIndicesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TypeGameIndices.
     */
    cursor?: Prisma.TypeGameIndicesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TypeGameIndices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TypeGameIndices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TypeGameIndices.
     */
    distinct?: Prisma.TypeGameIndicesScalarFieldEnum | Prisma.TypeGameIndicesScalarFieldEnum[];
};
/**
 * TypeGameIndices create
 */
export type TypeGameIndicesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * The data needed to create a TypeGameIndices.
     */
    data: Prisma.XOR<Prisma.TypeGameIndicesCreateInput, Prisma.TypeGameIndicesUncheckedCreateInput>;
};
/**
 * TypeGameIndices createMany
 */
export type TypeGameIndicesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeGameIndices.
     */
    data: Prisma.TypeGameIndicesCreateManyInput | Prisma.TypeGameIndicesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TypeGameIndices createManyAndReturn
 */
export type TypeGameIndicesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * The data used to create many TypeGameIndices.
     */
    data: Prisma.TypeGameIndicesCreateManyInput | Prisma.TypeGameIndicesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TypeGameIndices update
 */
export type TypeGameIndicesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * The data needed to update a TypeGameIndices.
     */
    data: Prisma.XOR<Prisma.TypeGameIndicesUpdateInput, Prisma.TypeGameIndicesUncheckedUpdateInput>;
    /**
     * Choose, which TypeGameIndices to update.
     */
    where: Prisma.TypeGameIndicesWhereUniqueInput;
};
/**
 * TypeGameIndices updateMany
 */
export type TypeGameIndicesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeGameIndices.
     */
    data: Prisma.XOR<Prisma.TypeGameIndicesUpdateManyMutationInput, Prisma.TypeGameIndicesUncheckedUpdateManyInput>;
    /**
     * Filter which TypeGameIndices to update
     */
    where?: Prisma.TypeGameIndicesWhereInput;
    /**
     * Limit how many TypeGameIndices to update.
     */
    limit?: number;
};
/**
 * TypeGameIndices updateManyAndReturn
 */
export type TypeGameIndicesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * The data used to update TypeGameIndices.
     */
    data: Prisma.XOR<Prisma.TypeGameIndicesUpdateManyMutationInput, Prisma.TypeGameIndicesUncheckedUpdateManyInput>;
    /**
     * Filter which TypeGameIndices to update
     */
    where?: Prisma.TypeGameIndicesWhereInput;
    /**
     * Limit how many TypeGameIndices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TypeGameIndices upsert
 */
export type TypeGameIndicesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * The filter to search for the TypeGameIndices to update in case it exists.
     */
    where: Prisma.TypeGameIndicesWhereUniqueInput;
    /**
     * In case the TypeGameIndices found by the `where` argument doesn't exist, create a new TypeGameIndices with this data.
     */
    create: Prisma.XOR<Prisma.TypeGameIndicesCreateInput, Prisma.TypeGameIndicesUncheckedCreateInput>;
    /**
     * In case the TypeGameIndices was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TypeGameIndicesUpdateInput, Prisma.TypeGameIndicesUncheckedUpdateInput>;
};
/**
 * TypeGameIndices delete
 */
export type TypeGameIndicesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
    /**
     * Filter which TypeGameIndices to delete.
     */
    where: Prisma.TypeGameIndicesWhereUniqueInput;
};
/**
 * TypeGameIndices deleteMany
 */
export type TypeGameIndicesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TypeGameIndices to delete
     */
    where?: Prisma.TypeGameIndicesWhereInput;
    /**
     * Limit how many TypeGameIndices to delete.
     */
    limit?: number;
};
/**
 * TypeGameIndices without action
 */
export type TypeGameIndicesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeGameIndices
     */
    select?: Prisma.TypeGameIndicesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TypeGameIndices
     */
    omit?: Prisma.TypeGameIndicesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TypeGameIndicesInclude<ExtArgs> | null;
};
