import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SuperContestCombos
 * @@TypeGraphQL.type(name: "SuperContestCombo")
 */
export type SuperContestCombosModel = runtime.Types.Result.DefaultSelection<Prisma.$SuperContestCombosPayload>;
export type AggregateSuperContestCombos = {
    _count: SuperContestCombosCountAggregateOutputType | null;
    _avg: SuperContestCombosAvgAggregateOutputType | null;
    _sum: SuperContestCombosSumAggregateOutputType | null;
    _min: SuperContestCombosMinAggregateOutputType | null;
    _max: SuperContestCombosMaxAggregateOutputType | null;
};
export type SuperContestCombosAvgAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type SuperContestCombosSumAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type SuperContestCombosMinAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type SuperContestCombosMaxAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type SuperContestCombosCountAggregateOutputType = {
    first_move_id: number;
    second_move_id: number;
    _all: number;
};
export type SuperContestCombosAvgAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type SuperContestCombosSumAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type SuperContestCombosMinAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type SuperContestCombosMaxAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type SuperContestCombosCountAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
    _all?: true;
};
export type SuperContestCombosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SuperContestCombos to aggregate.
     */
    where?: Prisma.SuperContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuperContestCombos to fetch.
     */
    orderBy?: Prisma.SuperContestCombosOrderByWithRelationInput | Prisma.SuperContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SuperContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuperContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuperContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SuperContestCombos
    **/
    _count?: true | SuperContestCombosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SuperContestCombosAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SuperContestCombosSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SuperContestCombosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SuperContestCombosMaxAggregateInputType;
};
export type GetSuperContestCombosAggregateType<T extends SuperContestCombosAggregateArgs> = {
    [P in keyof T & keyof AggregateSuperContestCombos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSuperContestCombos[P]> : Prisma.GetScalarType<T[P], AggregateSuperContestCombos[P]>;
};
export type SuperContestCombosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuperContestCombosWhereInput;
    orderBy?: Prisma.SuperContestCombosOrderByWithAggregationInput | Prisma.SuperContestCombosOrderByWithAggregationInput[];
    by: Prisma.SuperContestCombosScalarFieldEnum[] | Prisma.SuperContestCombosScalarFieldEnum;
    having?: Prisma.SuperContestCombosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SuperContestCombosCountAggregateInputType | true;
    _avg?: SuperContestCombosAvgAggregateInputType;
    _sum?: SuperContestCombosSumAggregateInputType;
    _min?: SuperContestCombosMinAggregateInputType;
    _max?: SuperContestCombosMaxAggregateInputType;
};
export type SuperContestCombosGroupByOutputType = {
    first_move_id: number;
    second_move_id: number;
    _count: SuperContestCombosCountAggregateOutputType | null;
    _avg: SuperContestCombosAvgAggregateOutputType | null;
    _sum: SuperContestCombosSumAggregateOutputType | null;
    _min: SuperContestCombosMinAggregateOutputType | null;
    _max: SuperContestCombosMaxAggregateOutputType | null;
};
export type GetSuperContestCombosGroupByPayload<T extends SuperContestCombosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SuperContestCombosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SuperContestCombosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SuperContestCombosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SuperContestCombosGroupByOutputType[P]>;
}>>;
export type SuperContestCombosWhereInput = {
    AND?: Prisma.SuperContestCombosWhereInput | Prisma.SuperContestCombosWhereInput[];
    OR?: Prisma.SuperContestCombosWhereInput[];
    NOT?: Prisma.SuperContestCombosWhereInput | Prisma.SuperContestCombosWhereInput[];
    first_move_id?: Prisma.IntFilter<"SuperContestCombos"> | number;
    second_move_id?: Prisma.IntFilter<"SuperContestCombos"> | number;
    firstMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
    secondMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
};
export type SuperContestCombosOrderByWithRelationInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
    firstMove?: Prisma.MovesOrderByWithRelationInput;
    secondMove?: Prisma.MovesOrderByWithRelationInput;
};
export type SuperContestCombosWhereUniqueInput = Prisma.AtLeast<{
    first_move_id?: number;
    AND?: Prisma.SuperContestCombosWhereInput | Prisma.SuperContestCombosWhereInput[];
    OR?: Prisma.SuperContestCombosWhereInput[];
    NOT?: Prisma.SuperContestCombosWhereInput | Prisma.SuperContestCombosWhereInput[];
    second_move_id?: Prisma.IntFilter<"SuperContestCombos"> | number;
    firstMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
    secondMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
}, "first_move_id">;
export type SuperContestCombosOrderByWithAggregationInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
    _count?: Prisma.SuperContestCombosCountOrderByAggregateInput;
    _avg?: Prisma.SuperContestCombosAvgOrderByAggregateInput;
    _max?: Prisma.SuperContestCombosMaxOrderByAggregateInput;
    _min?: Prisma.SuperContestCombosMinOrderByAggregateInput;
    _sum?: Prisma.SuperContestCombosSumOrderByAggregateInput;
};
export type SuperContestCombosScalarWhereWithAggregatesInput = {
    AND?: Prisma.SuperContestCombosScalarWhereWithAggregatesInput | Prisma.SuperContestCombosScalarWhereWithAggregatesInput[];
    OR?: Prisma.SuperContestCombosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SuperContestCombosScalarWhereWithAggregatesInput | Prisma.SuperContestCombosScalarWhereWithAggregatesInput[];
    first_move_id?: Prisma.IntWithAggregatesFilter<"SuperContestCombos"> | number;
    second_move_id?: Prisma.IntWithAggregatesFilter<"SuperContestCombos"> | number;
};
export type SuperContestCombosCreateInput = {
    firstMove: Prisma.MovesCreateNestedOneWithoutSuperContestCombosInput;
    secondMove: Prisma.MovesCreateNestedOneWithoutSuperContestCombosSecondInput;
};
export type SuperContestCombosUncheckedCreateInput = {
    first_move_id: number;
    second_move_id: number;
};
export type SuperContestCombosUpdateInput = {
    firstMove?: Prisma.MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput;
    secondMove?: Prisma.MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput;
};
export type SuperContestCombosUncheckedUpdateInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuperContestCombosCreateManyInput = {
    first_move_id: number;
    second_move_id: number;
};
export type SuperContestCombosUpdateManyMutationInput = {};
export type SuperContestCombosUncheckedUpdateManyInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuperContestCombosListRelationFilter = {
    every?: Prisma.SuperContestCombosWhereInput;
    some?: Prisma.SuperContestCombosWhereInput;
    none?: Prisma.SuperContestCombosWhereInput;
};
export type SuperContestCombosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SuperContestCombosCountOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type SuperContestCombosAvgOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type SuperContestCombosMaxOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type SuperContestCombosMinOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type SuperContestCombosSumOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type SuperContestCombosCreateNestedManyWithoutFirstMoveInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.SuperContestCombosCreateWithoutFirstMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManyFirstMoveInputEnvelope;
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
};
export type SuperContestCombosCreateNestedManyWithoutSecondMoveInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.SuperContestCombosCreateWithoutSecondMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManySecondMoveInputEnvelope;
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
};
export type SuperContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.SuperContestCombosCreateWithoutFirstMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManyFirstMoveInputEnvelope;
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
};
export type SuperContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.SuperContestCombosCreateWithoutSecondMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManySecondMoveInputEnvelope;
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
};
export type SuperContestCombosUpdateManyWithoutFirstMoveNestedInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.SuperContestCombosCreateWithoutFirstMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput[];
    upsert?: Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput | Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManyFirstMoveInputEnvelope;
    set?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    disconnect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    delete?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    update?: Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput | Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput[];
    updateMany?: Prisma.SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput | Prisma.SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput[];
    deleteMany?: Prisma.SuperContestCombosScalarWhereInput | Prisma.SuperContestCombosScalarWhereInput[];
};
export type SuperContestCombosUpdateManyWithoutSecondMoveNestedInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.SuperContestCombosCreateWithoutSecondMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput[];
    upsert?: Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput | Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManySecondMoveInputEnvelope;
    set?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    disconnect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    delete?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    update?: Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput | Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput[];
    updateMany?: Prisma.SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput | Prisma.SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput[];
    deleteMany?: Prisma.SuperContestCombosScalarWhereInput | Prisma.SuperContestCombosScalarWhereInput[];
};
export type SuperContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.SuperContestCombosCreateWithoutFirstMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutFirstMoveInput[];
    upsert?: Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput | Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManyFirstMoveInputEnvelope;
    set?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    disconnect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    delete?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    update?: Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput | Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput[];
    updateMany?: Prisma.SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput | Prisma.SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput[];
    deleteMany?: Prisma.SuperContestCombosScalarWhereInput | Prisma.SuperContestCombosScalarWhereInput[];
};
export type SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput = {
    create?: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.SuperContestCombosCreateWithoutSecondMoveInput[] | Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.SuperContestCombosCreateOrConnectWithoutSecondMoveInput[];
    upsert?: Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput | Prisma.SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput[];
    createMany?: Prisma.SuperContestCombosCreateManySecondMoveInputEnvelope;
    set?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    disconnect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    delete?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    connect?: Prisma.SuperContestCombosWhereUniqueInput | Prisma.SuperContestCombosWhereUniqueInput[];
    update?: Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput | Prisma.SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput[];
    updateMany?: Prisma.SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput | Prisma.SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput[];
    deleteMany?: Prisma.SuperContestCombosScalarWhereInput | Prisma.SuperContestCombosScalarWhereInput[];
};
export type SuperContestCombosCreateWithoutFirstMoveInput = {
    secondMove: Prisma.MovesCreateNestedOneWithoutSuperContestCombosSecondInput;
};
export type SuperContestCombosUncheckedCreateWithoutFirstMoveInput = {
    second_move_id: number;
};
export type SuperContestCombosCreateOrConnectWithoutFirstMoveInput = {
    where: Prisma.SuperContestCombosWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput>;
};
export type SuperContestCombosCreateManyFirstMoveInputEnvelope = {
    data: Prisma.SuperContestCombosCreateManyFirstMoveInput | Prisma.SuperContestCombosCreateManyFirstMoveInput[];
    skipDuplicates?: boolean;
};
export type SuperContestCombosCreateWithoutSecondMoveInput = {
    firstMove: Prisma.MovesCreateNestedOneWithoutSuperContestCombosInput;
};
export type SuperContestCombosUncheckedCreateWithoutSecondMoveInput = {
    first_move_id: number;
};
export type SuperContestCombosCreateOrConnectWithoutSecondMoveInput = {
    where: Prisma.SuperContestCombosWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput>;
};
export type SuperContestCombosCreateManySecondMoveInputEnvelope = {
    data: Prisma.SuperContestCombosCreateManySecondMoveInput | Prisma.SuperContestCombosCreateManySecondMoveInput[];
    skipDuplicates?: boolean;
};
export type SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput = {
    where: Prisma.SuperContestCombosWhereUniqueInput;
    update: Prisma.XOR<Prisma.SuperContestCombosUpdateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedUpdateWithoutFirstMoveInput>;
    create: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutFirstMoveInput>;
};
export type SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput = {
    where: Prisma.SuperContestCombosWhereUniqueInput;
    data: Prisma.XOR<Prisma.SuperContestCombosUpdateWithoutFirstMoveInput, Prisma.SuperContestCombosUncheckedUpdateWithoutFirstMoveInput>;
};
export type SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput = {
    where: Prisma.SuperContestCombosScalarWhereInput;
    data: Prisma.XOR<Prisma.SuperContestCombosUpdateManyMutationInput, Prisma.SuperContestCombosUncheckedUpdateManyWithoutFirstMoveInput>;
};
export type SuperContestCombosScalarWhereInput = {
    AND?: Prisma.SuperContestCombosScalarWhereInput | Prisma.SuperContestCombosScalarWhereInput[];
    OR?: Prisma.SuperContestCombosScalarWhereInput[];
    NOT?: Prisma.SuperContestCombosScalarWhereInput | Prisma.SuperContestCombosScalarWhereInput[];
    first_move_id?: Prisma.IntFilter<"SuperContestCombos"> | number;
    second_move_id?: Prisma.IntFilter<"SuperContestCombos"> | number;
};
export type SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput = {
    where: Prisma.SuperContestCombosWhereUniqueInput;
    update: Prisma.XOR<Prisma.SuperContestCombosUpdateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedUpdateWithoutSecondMoveInput>;
    create: Prisma.XOR<Prisma.SuperContestCombosCreateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedCreateWithoutSecondMoveInput>;
};
export type SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput = {
    where: Prisma.SuperContestCombosWhereUniqueInput;
    data: Prisma.XOR<Prisma.SuperContestCombosUpdateWithoutSecondMoveInput, Prisma.SuperContestCombosUncheckedUpdateWithoutSecondMoveInput>;
};
export type SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput = {
    where: Prisma.SuperContestCombosScalarWhereInput;
    data: Prisma.XOR<Prisma.SuperContestCombosUpdateManyMutationInput, Prisma.SuperContestCombosUncheckedUpdateManyWithoutSecondMoveInput>;
};
export type SuperContestCombosCreateManyFirstMoveInput = {
    second_move_id: number;
};
export type SuperContestCombosCreateManySecondMoveInput = {
    first_move_id: number;
};
export type SuperContestCombosUpdateWithoutFirstMoveInput = {
    secondMove?: Prisma.MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput;
};
export type SuperContestCombosUncheckedUpdateWithoutFirstMoveInput = {
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuperContestCombosUncheckedUpdateManyWithoutFirstMoveInput = {
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuperContestCombosUpdateWithoutSecondMoveInput = {
    firstMove?: Prisma.MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput;
};
export type SuperContestCombosUncheckedUpdateWithoutSecondMoveInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuperContestCombosUncheckedUpdateManyWithoutSecondMoveInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuperContestCombosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    first_move_id?: boolean;
    second_move_id?: boolean;
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["superContestCombos"]>;
export type SuperContestCombosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    first_move_id?: boolean;
    second_move_id?: boolean;
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["superContestCombos"]>;
export type SuperContestCombosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    first_move_id?: boolean;
    second_move_id?: boolean;
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["superContestCombos"]>;
export type SuperContestCombosSelectScalar = {
    first_move_id?: boolean;
    second_move_id?: boolean;
};
export type SuperContestCombosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"first_move_id" | "second_move_id", ExtArgs["result"]["superContestCombos"]>;
export type SuperContestCombosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
};
export type SuperContestCombosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
};
export type SuperContestCombosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
};
export type $SuperContestCombosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SuperContestCombos";
    objects: {
        firstMove: Prisma.$MovesPayload<ExtArgs>;
        secondMove: Prisma.$MovesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        first_move_id: number;
        second_move_id: number;
    }, ExtArgs["result"]["superContestCombos"]>;
    composites: {};
};
export type SuperContestCombosGetPayload<S extends boolean | null | undefined | SuperContestCombosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload, S>;
export type SuperContestCombosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SuperContestCombosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SuperContestCombosCountAggregateInputType | true;
};
export interface SuperContestCombosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SuperContestCombos'];
        meta: {
            name: 'SuperContestCombos';
        };
    };
    /**
     * Find zero or one SuperContestCombos that matches the filter.
     * @param {SuperContestCombosFindUniqueArgs} args - Arguments to find a SuperContestCombos
     * @example
     * // Get one SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperContestCombosFindUniqueArgs>(args: Prisma.SelectSubset<T, SuperContestCombosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SuperContestCombos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperContestCombosFindUniqueOrThrowArgs} args - Arguments to find a SuperContestCombos
     * @example
     * // Get one SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperContestCombosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SuperContestCombosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SuperContestCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperContestCombosFindFirstArgs} args - Arguments to find a SuperContestCombos
     * @example
     * // Get one SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperContestCombosFindFirstArgs>(args?: Prisma.SelectSubset<T, SuperContestCombosFindFirstArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SuperContestCombos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperContestCombosFindFirstOrThrowArgs} args - Arguments to find a SuperContestCombos
     * @example
     * // Get one SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperContestCombosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SuperContestCombosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SuperContestCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperContestCombosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.findMany()
     *
     * // Get first 10 SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.findMany({ take: 10 })
     *
     * // Only select the `first_move_id`
     * const superContestCombosWithFirst_move_idOnly = await prisma.superContestCombos.findMany({ select: { first_move_id: true } })
     *
     */
    findMany<T extends SuperContestCombosFindManyArgs>(args?: Prisma.SelectSubset<T, SuperContestCombosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SuperContestCombos.
     * @param {SuperContestCombosCreateArgs} args - Arguments to create a SuperContestCombos.
     * @example
     * // Create one SuperContestCombos
     * const SuperContestCombos = await prisma.superContestCombos.create({
     *   data: {
     *     // ... data to create a SuperContestCombos
     *   }
     * })
     *
     */
    create<T extends SuperContestCombosCreateArgs>(args: Prisma.SelectSubset<T, SuperContestCombosCreateArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SuperContestCombos.
     * @param {SuperContestCombosCreateManyArgs} args - Arguments to create many SuperContestCombos.
     * @example
     * // Create many SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SuperContestCombosCreateManyArgs>(args?: Prisma.SelectSubset<T, SuperContestCombosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SuperContestCombos and returns the data saved in the database.
     * @param {SuperContestCombosCreateManyAndReturnArgs} args - Arguments to create many SuperContestCombos.
     * @example
     * // Create many SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SuperContestCombos and only return the `first_move_id`
     * const superContestCombosWithFirst_move_idOnly = await prisma.superContestCombos.createManyAndReturn({
     *   select: { first_move_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SuperContestCombosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SuperContestCombosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SuperContestCombos.
     * @param {SuperContestCombosDeleteArgs} args - Arguments to delete one SuperContestCombos.
     * @example
     * // Delete one SuperContestCombos
     * const SuperContestCombos = await prisma.superContestCombos.delete({
     *   where: {
     *     // ... filter to delete one SuperContestCombos
     *   }
     * })
     *
     */
    delete<T extends SuperContestCombosDeleteArgs>(args: Prisma.SelectSubset<T, SuperContestCombosDeleteArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SuperContestCombos.
     * @param {SuperContestCombosUpdateArgs} args - Arguments to update one SuperContestCombos.
     * @example
     * // Update one SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SuperContestCombosUpdateArgs>(args: Prisma.SelectSubset<T, SuperContestCombosUpdateArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SuperContestCombos.
     * @param {SuperContestCombosDeleteManyArgs} args - Arguments to filter SuperContestCombos to delete.
     * @example
     * // Delete a few SuperContestCombos
     * const { count } = await prisma.superContestCombos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SuperContestCombosDeleteManyArgs>(args?: Prisma.SelectSubset<T, SuperContestCombosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SuperContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperContestCombosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SuperContestCombosUpdateManyArgs>(args: Prisma.SelectSubset<T, SuperContestCombosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SuperContestCombos and returns the data updated in the database.
     * @param {SuperContestCombosUpdateManyAndReturnArgs} args - Arguments to update many SuperContestCombos.
     * @example
     * // Update many SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SuperContestCombos and only return the `first_move_id`
     * const superContestCombosWithFirst_move_idOnly = await prisma.superContestCombos.updateManyAndReturn({
     *   select: { first_move_id: true },
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
    updateManyAndReturn<T extends SuperContestCombosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SuperContestCombosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SuperContestCombos.
     * @param {SuperContestCombosUpsertArgs} args - Arguments to update or create a SuperContestCombos.
     * @example
     * // Update or create a SuperContestCombos
     * const superContestCombos = await prisma.superContestCombos.upsert({
     *   create: {
     *     // ... data to create a SuperContestCombos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperContestCombos we want to update
     *   }
     * })
     */
    upsert<T extends SuperContestCombosUpsertArgs>(args: Prisma.SelectSubset<T, SuperContestCombosUpsertArgs<ExtArgs>>): Prisma.Prisma__SuperContestCombosClient<runtime.Types.Result.GetResult<Prisma.$SuperContestCombosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SuperContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperContestCombosCountArgs} args - Arguments to filter SuperContestCombos to count.
     * @example
     * // Count the number of SuperContestCombos
     * const count = await prisma.superContestCombos.count({
     *   where: {
     *     // ... the filter for the SuperContestCombos we want to count
     *   }
     * })
    **/
    count<T extends SuperContestCombosCountArgs>(args?: Prisma.Subset<T, SuperContestCombosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SuperContestCombosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SuperContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperContestCombosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperContestCombosAggregateArgs>(args: Prisma.Subset<T, SuperContestCombosAggregateArgs>): Prisma.PrismaPromise<GetSuperContestCombosAggregateType<T>>;
    /**
     * Group by SuperContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperContestCombosGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SuperContestCombosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SuperContestCombosGroupByArgs['orderBy'];
    } : {
        orderBy?: SuperContestCombosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SuperContestCombosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperContestCombosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SuperContestCombos model
     */
    readonly fields: SuperContestCombosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SuperContestCombos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SuperContestCombosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    firstMove<T extends Prisma.MovesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MovesDefaultArgs<ExtArgs>>): Prisma.Prisma__MovesClient<runtime.Types.Result.GetResult<Prisma.$MovesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    secondMove<T extends Prisma.MovesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MovesDefaultArgs<ExtArgs>>): Prisma.Prisma__MovesClient<runtime.Types.Result.GetResult<Prisma.$MovesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SuperContestCombos model
 */
export interface SuperContestCombosFieldRefs {
    readonly first_move_id: Prisma.FieldRef<"SuperContestCombos", 'Int'>;
    readonly second_move_id: Prisma.FieldRef<"SuperContestCombos", 'Int'>;
}
/**
 * SuperContestCombos findUnique
 */
export type SuperContestCombosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which SuperContestCombos to fetch.
     */
    where: Prisma.SuperContestCombosWhereUniqueInput;
};
/**
 * SuperContestCombos findUniqueOrThrow
 */
export type SuperContestCombosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which SuperContestCombos to fetch.
     */
    where: Prisma.SuperContestCombosWhereUniqueInput;
};
/**
 * SuperContestCombos findFirst
 */
export type SuperContestCombosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which SuperContestCombos to fetch.
     */
    where?: Prisma.SuperContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuperContestCombos to fetch.
     */
    orderBy?: Prisma.SuperContestCombosOrderByWithRelationInput | Prisma.SuperContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SuperContestCombos.
     */
    cursor?: Prisma.SuperContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuperContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuperContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuperContestCombos.
     */
    distinct?: Prisma.SuperContestCombosScalarFieldEnum | Prisma.SuperContestCombosScalarFieldEnum[];
};
/**
 * SuperContestCombos findFirstOrThrow
 */
export type SuperContestCombosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which SuperContestCombos to fetch.
     */
    where?: Prisma.SuperContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuperContestCombos to fetch.
     */
    orderBy?: Prisma.SuperContestCombosOrderByWithRelationInput | Prisma.SuperContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SuperContestCombos.
     */
    cursor?: Prisma.SuperContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuperContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuperContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuperContestCombos.
     */
    distinct?: Prisma.SuperContestCombosScalarFieldEnum | Prisma.SuperContestCombosScalarFieldEnum[];
};
/**
 * SuperContestCombos findMany
 */
export type SuperContestCombosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which SuperContestCombos to fetch.
     */
    where?: Prisma.SuperContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SuperContestCombos to fetch.
     */
    orderBy?: Prisma.SuperContestCombosOrderByWithRelationInput | Prisma.SuperContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SuperContestCombos.
     */
    cursor?: Prisma.SuperContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SuperContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SuperContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SuperContestCombos.
     */
    distinct?: Prisma.SuperContestCombosScalarFieldEnum | Prisma.SuperContestCombosScalarFieldEnum[];
};
/**
 * SuperContestCombos create
 */
export type SuperContestCombosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * The data needed to create a SuperContestCombos.
     */
    data: Prisma.XOR<Prisma.SuperContestCombosCreateInput, Prisma.SuperContestCombosUncheckedCreateInput>;
};
/**
 * SuperContestCombos createMany
 */
export type SuperContestCombosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperContestCombos.
     */
    data: Prisma.SuperContestCombosCreateManyInput | Prisma.SuperContestCombosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SuperContestCombos createManyAndReturn
 */
export type SuperContestCombosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * The data used to create many SuperContestCombos.
     */
    data: Prisma.SuperContestCombosCreateManyInput | Prisma.SuperContestCombosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SuperContestCombos update
 */
export type SuperContestCombosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * The data needed to update a SuperContestCombos.
     */
    data: Prisma.XOR<Prisma.SuperContestCombosUpdateInput, Prisma.SuperContestCombosUncheckedUpdateInput>;
    /**
     * Choose, which SuperContestCombos to update.
     */
    where: Prisma.SuperContestCombosWhereUniqueInput;
};
/**
 * SuperContestCombos updateMany
 */
export type SuperContestCombosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperContestCombos.
     */
    data: Prisma.XOR<Prisma.SuperContestCombosUpdateManyMutationInput, Prisma.SuperContestCombosUncheckedUpdateManyInput>;
    /**
     * Filter which SuperContestCombos to update
     */
    where?: Prisma.SuperContestCombosWhereInput;
    /**
     * Limit how many SuperContestCombos to update.
     */
    limit?: number;
};
/**
 * SuperContestCombos updateManyAndReturn
 */
export type SuperContestCombosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * The data used to update SuperContestCombos.
     */
    data: Prisma.XOR<Prisma.SuperContestCombosUpdateManyMutationInput, Prisma.SuperContestCombosUncheckedUpdateManyInput>;
    /**
     * Filter which SuperContestCombos to update
     */
    where?: Prisma.SuperContestCombosWhereInput;
    /**
     * Limit how many SuperContestCombos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SuperContestCombos upsert
 */
export type SuperContestCombosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * The filter to search for the SuperContestCombos to update in case it exists.
     */
    where: Prisma.SuperContestCombosWhereUniqueInput;
    /**
     * In case the SuperContestCombos found by the `where` argument doesn't exist, create a new SuperContestCombos with this data.
     */
    create: Prisma.XOR<Prisma.SuperContestCombosCreateInput, Prisma.SuperContestCombosUncheckedCreateInput>;
    /**
     * In case the SuperContestCombos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SuperContestCombosUpdateInput, Prisma.SuperContestCombosUncheckedUpdateInput>;
};
/**
 * SuperContestCombos delete
 */
export type SuperContestCombosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
    /**
     * Filter which SuperContestCombos to delete.
     */
    where: Prisma.SuperContestCombosWhereUniqueInput;
};
/**
 * SuperContestCombos deleteMany
 */
export type SuperContestCombosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SuperContestCombos to delete
     */
    where?: Prisma.SuperContestCombosWhereInput;
    /**
     * Limit how many SuperContestCombos to delete.
     */
    limit?: number;
};
/**
 * SuperContestCombos without action
 */
export type SuperContestCombosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperContestCombos
     */
    select?: Prisma.SuperContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SuperContestCombos
     */
    omit?: Prisma.SuperContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuperContestCombosInclude<ExtArgs> | null;
};
