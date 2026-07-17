import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ContestCombos
 * @@TypeGraphQL.type(name: "ContestCombo")
 */
export type ContestCombosModel = runtime.Types.Result.DefaultSelection<Prisma.$ContestCombosPayload>;
export type AggregateContestCombos = {
    _count: ContestCombosCountAggregateOutputType | null;
    _avg: ContestCombosAvgAggregateOutputType | null;
    _sum: ContestCombosSumAggregateOutputType | null;
    _min: ContestCombosMinAggregateOutputType | null;
    _max: ContestCombosMaxAggregateOutputType | null;
};
export type ContestCombosAvgAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type ContestCombosSumAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type ContestCombosMinAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type ContestCombosMaxAggregateOutputType = {
    first_move_id: number | null;
    second_move_id: number | null;
};
export type ContestCombosCountAggregateOutputType = {
    first_move_id: number;
    second_move_id: number;
    _all: number;
};
export type ContestCombosAvgAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type ContestCombosSumAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type ContestCombosMinAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type ContestCombosMaxAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
};
export type ContestCombosCountAggregateInputType = {
    first_move_id?: true;
    second_move_id?: true;
    _all?: true;
};
export type ContestCombosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContestCombos to aggregate.
     */
    where?: Prisma.ContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestCombos to fetch.
     */
    orderBy?: Prisma.ContestCombosOrderByWithRelationInput | Prisma.ContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ContestCombos
    **/
    _count?: true | ContestCombosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ContestCombosAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ContestCombosSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContestCombosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContestCombosMaxAggregateInputType;
};
export type GetContestCombosAggregateType<T extends ContestCombosAggregateArgs> = {
    [P in keyof T & keyof AggregateContestCombos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContestCombos[P]> : Prisma.GetScalarType<T[P], AggregateContestCombos[P]>;
};
export type ContestCombosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContestCombosWhereInput;
    orderBy?: Prisma.ContestCombosOrderByWithAggregationInput | Prisma.ContestCombosOrderByWithAggregationInput[];
    by: Prisma.ContestCombosScalarFieldEnum[] | Prisma.ContestCombosScalarFieldEnum;
    having?: Prisma.ContestCombosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContestCombosCountAggregateInputType | true;
    _avg?: ContestCombosAvgAggregateInputType;
    _sum?: ContestCombosSumAggregateInputType;
    _min?: ContestCombosMinAggregateInputType;
    _max?: ContestCombosMaxAggregateInputType;
};
export type ContestCombosGroupByOutputType = {
    first_move_id: number;
    second_move_id: number;
    _count: ContestCombosCountAggregateOutputType | null;
    _avg: ContestCombosAvgAggregateOutputType | null;
    _sum: ContestCombosSumAggregateOutputType | null;
    _min: ContestCombosMinAggregateOutputType | null;
    _max: ContestCombosMaxAggregateOutputType | null;
};
export type GetContestCombosGroupByPayload<T extends ContestCombosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContestCombosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContestCombosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContestCombosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContestCombosGroupByOutputType[P]>;
}>>;
export type ContestCombosWhereInput = {
    AND?: Prisma.ContestCombosWhereInput | Prisma.ContestCombosWhereInput[];
    OR?: Prisma.ContestCombosWhereInput[];
    NOT?: Prisma.ContestCombosWhereInput | Prisma.ContestCombosWhereInput[];
    first_move_id?: Prisma.IntFilter<"ContestCombos"> | number;
    second_move_id?: Prisma.IntFilter<"ContestCombos"> | number;
    firstMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
    secondMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
};
export type ContestCombosOrderByWithRelationInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
    firstMove?: Prisma.MovesOrderByWithRelationInput;
    secondMove?: Prisma.MovesOrderByWithRelationInput;
};
export type ContestCombosWhereUniqueInput = Prisma.AtLeast<{
    first_move_id?: number;
    AND?: Prisma.ContestCombosWhereInput | Prisma.ContestCombosWhereInput[];
    OR?: Prisma.ContestCombosWhereInput[];
    NOT?: Prisma.ContestCombosWhereInput | Prisma.ContestCombosWhereInput[];
    second_move_id?: Prisma.IntFilter<"ContestCombos"> | number;
    firstMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
    secondMove?: Prisma.XOR<Prisma.MovesScalarRelationFilter, Prisma.MovesWhereInput>;
}, "first_move_id">;
export type ContestCombosOrderByWithAggregationInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
    _count?: Prisma.ContestCombosCountOrderByAggregateInput;
    _avg?: Prisma.ContestCombosAvgOrderByAggregateInput;
    _max?: Prisma.ContestCombosMaxOrderByAggregateInput;
    _min?: Prisma.ContestCombosMinOrderByAggregateInput;
    _sum?: Prisma.ContestCombosSumOrderByAggregateInput;
};
export type ContestCombosScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContestCombosScalarWhereWithAggregatesInput | Prisma.ContestCombosScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContestCombosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContestCombosScalarWhereWithAggregatesInput | Prisma.ContestCombosScalarWhereWithAggregatesInput[];
    first_move_id?: Prisma.IntWithAggregatesFilter<"ContestCombos"> | number;
    second_move_id?: Prisma.IntWithAggregatesFilter<"ContestCombos"> | number;
};
export type ContestCombosCreateInput = {
    firstMove: Prisma.MovesCreateNestedOneWithoutContestCombosInput;
    secondMove: Prisma.MovesCreateNestedOneWithoutContestCombosSecondInput;
};
export type ContestCombosUncheckedCreateInput = {
    first_move_id: number;
    second_move_id: number;
};
export type ContestCombosUpdateInput = {
    firstMove?: Prisma.MovesUpdateOneRequiredWithoutContestCombosNestedInput;
    secondMove?: Prisma.MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput;
};
export type ContestCombosUncheckedUpdateInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestCombosCreateManyInput = {
    first_move_id: number;
    second_move_id: number;
};
export type ContestCombosUpdateManyMutationInput = {};
export type ContestCombosUncheckedUpdateManyInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestCombosListRelationFilter = {
    every?: Prisma.ContestCombosWhereInput;
    some?: Prisma.ContestCombosWhereInput;
    none?: Prisma.ContestCombosWhereInput;
};
export type ContestCombosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContestCombosCountOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type ContestCombosAvgOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type ContestCombosMaxOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type ContestCombosMinOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type ContestCombosSumOrderByAggregateInput = {
    first_move_id?: Prisma.SortOrder;
    second_move_id?: Prisma.SortOrder;
};
export type ContestCombosCreateNestedManyWithoutFirstMoveInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.ContestCombosCreateWithoutFirstMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput[];
    createMany?: Prisma.ContestCombosCreateManyFirstMoveInputEnvelope;
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
};
export type ContestCombosCreateNestedManyWithoutSecondMoveInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.ContestCombosCreateWithoutSecondMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput[];
    createMany?: Prisma.ContestCombosCreateManySecondMoveInputEnvelope;
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
};
export type ContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.ContestCombosCreateWithoutFirstMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput[];
    createMany?: Prisma.ContestCombosCreateManyFirstMoveInputEnvelope;
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
};
export type ContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.ContestCombosCreateWithoutSecondMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput[];
    createMany?: Prisma.ContestCombosCreateManySecondMoveInputEnvelope;
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
};
export type ContestCombosUpdateManyWithoutFirstMoveNestedInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.ContestCombosCreateWithoutFirstMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput[];
    upsert?: Prisma.ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput | Prisma.ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput[];
    createMany?: Prisma.ContestCombosCreateManyFirstMoveInputEnvelope;
    set?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    disconnect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    delete?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    update?: Prisma.ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput | Prisma.ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput[];
    updateMany?: Prisma.ContestCombosUpdateManyWithWhereWithoutFirstMoveInput | Prisma.ContestCombosUpdateManyWithWhereWithoutFirstMoveInput[];
    deleteMany?: Prisma.ContestCombosScalarWhereInput | Prisma.ContestCombosScalarWhereInput[];
};
export type ContestCombosUpdateManyWithoutSecondMoveNestedInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.ContestCombosCreateWithoutSecondMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput[];
    upsert?: Prisma.ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput | Prisma.ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput[];
    createMany?: Prisma.ContestCombosCreateManySecondMoveInputEnvelope;
    set?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    disconnect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    delete?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    update?: Prisma.ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput | Prisma.ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput[];
    updateMany?: Prisma.ContestCombosUpdateManyWithWhereWithoutSecondMoveInput | Prisma.ContestCombosUpdateManyWithWhereWithoutSecondMoveInput[];
    deleteMany?: Prisma.ContestCombosScalarWhereInput | Prisma.ContestCombosScalarWhereInput[];
};
export type ContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput> | Prisma.ContestCombosCreateWithoutFirstMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput | Prisma.ContestCombosCreateOrConnectWithoutFirstMoveInput[];
    upsert?: Prisma.ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput | Prisma.ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput[];
    createMany?: Prisma.ContestCombosCreateManyFirstMoveInputEnvelope;
    set?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    disconnect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    delete?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    update?: Prisma.ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput | Prisma.ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput[];
    updateMany?: Prisma.ContestCombosUpdateManyWithWhereWithoutFirstMoveInput | Prisma.ContestCombosUpdateManyWithWhereWithoutFirstMoveInput[];
    deleteMany?: Prisma.ContestCombosScalarWhereInput | Prisma.ContestCombosScalarWhereInput[];
};
export type ContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput = {
    create?: Prisma.XOR<Prisma.ContestCombosCreateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput> | Prisma.ContestCombosCreateWithoutSecondMoveInput[] | Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput[];
    connectOrCreate?: Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput | Prisma.ContestCombosCreateOrConnectWithoutSecondMoveInput[];
    upsert?: Prisma.ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput | Prisma.ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput[];
    createMany?: Prisma.ContestCombosCreateManySecondMoveInputEnvelope;
    set?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    disconnect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    delete?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    connect?: Prisma.ContestCombosWhereUniqueInput | Prisma.ContestCombosWhereUniqueInput[];
    update?: Prisma.ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput | Prisma.ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput[];
    updateMany?: Prisma.ContestCombosUpdateManyWithWhereWithoutSecondMoveInput | Prisma.ContestCombosUpdateManyWithWhereWithoutSecondMoveInput[];
    deleteMany?: Prisma.ContestCombosScalarWhereInput | Prisma.ContestCombosScalarWhereInput[];
};
export type ContestCombosCreateWithoutFirstMoveInput = {
    secondMove: Prisma.MovesCreateNestedOneWithoutContestCombosSecondInput;
};
export type ContestCombosUncheckedCreateWithoutFirstMoveInput = {
    second_move_id: number;
};
export type ContestCombosCreateOrConnectWithoutFirstMoveInput = {
    where: Prisma.ContestCombosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContestCombosCreateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput>;
};
export type ContestCombosCreateManyFirstMoveInputEnvelope = {
    data: Prisma.ContestCombosCreateManyFirstMoveInput | Prisma.ContestCombosCreateManyFirstMoveInput[];
    skipDuplicates?: boolean;
};
export type ContestCombosCreateWithoutSecondMoveInput = {
    firstMove: Prisma.MovesCreateNestedOneWithoutContestCombosInput;
};
export type ContestCombosUncheckedCreateWithoutSecondMoveInput = {
    first_move_id: number;
};
export type ContestCombosCreateOrConnectWithoutSecondMoveInput = {
    where: Prisma.ContestCombosWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContestCombosCreateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput>;
};
export type ContestCombosCreateManySecondMoveInputEnvelope = {
    data: Prisma.ContestCombosCreateManySecondMoveInput | Prisma.ContestCombosCreateManySecondMoveInput[];
    skipDuplicates?: boolean;
};
export type ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput = {
    where: Prisma.ContestCombosWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContestCombosUpdateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedUpdateWithoutFirstMoveInput>;
    create: Prisma.XOR<Prisma.ContestCombosCreateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedCreateWithoutFirstMoveInput>;
};
export type ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput = {
    where: Prisma.ContestCombosWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContestCombosUpdateWithoutFirstMoveInput, Prisma.ContestCombosUncheckedUpdateWithoutFirstMoveInput>;
};
export type ContestCombosUpdateManyWithWhereWithoutFirstMoveInput = {
    where: Prisma.ContestCombosScalarWhereInput;
    data: Prisma.XOR<Prisma.ContestCombosUpdateManyMutationInput, Prisma.ContestCombosUncheckedUpdateManyWithoutFirstMoveInput>;
};
export type ContestCombosScalarWhereInput = {
    AND?: Prisma.ContestCombosScalarWhereInput | Prisma.ContestCombosScalarWhereInput[];
    OR?: Prisma.ContestCombosScalarWhereInput[];
    NOT?: Prisma.ContestCombosScalarWhereInput | Prisma.ContestCombosScalarWhereInput[];
    first_move_id?: Prisma.IntFilter<"ContestCombos"> | number;
    second_move_id?: Prisma.IntFilter<"ContestCombos"> | number;
};
export type ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput = {
    where: Prisma.ContestCombosWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContestCombosUpdateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedUpdateWithoutSecondMoveInput>;
    create: Prisma.XOR<Prisma.ContestCombosCreateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedCreateWithoutSecondMoveInput>;
};
export type ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput = {
    where: Prisma.ContestCombosWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContestCombosUpdateWithoutSecondMoveInput, Prisma.ContestCombosUncheckedUpdateWithoutSecondMoveInput>;
};
export type ContestCombosUpdateManyWithWhereWithoutSecondMoveInput = {
    where: Prisma.ContestCombosScalarWhereInput;
    data: Prisma.XOR<Prisma.ContestCombosUpdateManyMutationInput, Prisma.ContestCombosUncheckedUpdateManyWithoutSecondMoveInput>;
};
export type ContestCombosCreateManyFirstMoveInput = {
    second_move_id: number;
};
export type ContestCombosCreateManySecondMoveInput = {
    first_move_id: number;
};
export type ContestCombosUpdateWithoutFirstMoveInput = {
    secondMove?: Prisma.MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput;
};
export type ContestCombosUncheckedUpdateWithoutFirstMoveInput = {
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestCombosUncheckedUpdateManyWithoutFirstMoveInput = {
    second_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestCombosUpdateWithoutSecondMoveInput = {
    firstMove?: Prisma.MovesUpdateOneRequiredWithoutContestCombosNestedInput;
};
export type ContestCombosUncheckedUpdateWithoutSecondMoveInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestCombosUncheckedUpdateManyWithoutSecondMoveInput = {
    first_move_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContestCombosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    first_move_id?: boolean;
    second_move_id?: boolean;
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contestCombos"]>;
export type ContestCombosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    first_move_id?: boolean;
    second_move_id?: boolean;
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contestCombos"]>;
export type ContestCombosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    first_move_id?: boolean;
    second_move_id?: boolean;
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contestCombos"]>;
export type ContestCombosSelectScalar = {
    first_move_id?: boolean;
    second_move_id?: boolean;
};
export type ContestCombosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"first_move_id" | "second_move_id", ExtArgs["result"]["contestCombos"]>;
export type ContestCombosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
};
export type ContestCombosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
};
export type ContestCombosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    firstMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
    secondMove?: boolean | Prisma.MovesDefaultArgs<ExtArgs>;
};
export type $ContestCombosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContestCombos";
    objects: {
        firstMove: Prisma.$MovesPayload<ExtArgs>;
        secondMove: Prisma.$MovesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        first_move_id: number;
        second_move_id: number;
    }, ExtArgs["result"]["contestCombos"]>;
    composites: {};
};
export type ContestCombosGetPayload<S extends boolean | null | undefined | ContestCombosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload, S>;
export type ContestCombosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContestCombosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContestCombosCountAggregateInputType | true;
};
export interface ContestCombosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContestCombos'];
        meta: {
            name: 'ContestCombos';
        };
    };
    /**
     * Find zero or one ContestCombos that matches the filter.
     * @param {ContestCombosFindUniqueArgs} args - Arguments to find a ContestCombos
     * @example
     * // Get one ContestCombos
     * const contestCombos = await prisma.contestCombos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestCombosFindUniqueArgs>(args: Prisma.SelectSubset<T, ContestCombosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ContestCombos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestCombosFindUniqueOrThrowArgs} args - Arguments to find a ContestCombos
     * @example
     * // Get one ContestCombos
     * const contestCombos = await prisma.contestCombos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestCombosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContestCombosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContestCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCombosFindFirstArgs} args - Arguments to find a ContestCombos
     * @example
     * // Get one ContestCombos
     * const contestCombos = await prisma.contestCombos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestCombosFindFirstArgs>(args?: Prisma.SelectSubset<T, ContestCombosFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ContestCombos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCombosFindFirstOrThrowArgs} args - Arguments to find a ContestCombos
     * @example
     * // Get one ContestCombos
     * const contestCombos = await prisma.contestCombos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestCombosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContestCombosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ContestCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCombosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestCombos
     * const contestCombos = await prisma.contestCombos.findMany()
     *
     * // Get first 10 ContestCombos
     * const contestCombos = await prisma.contestCombos.findMany({ take: 10 })
     *
     * // Only select the `first_move_id`
     * const contestCombosWithFirst_move_idOnly = await prisma.contestCombos.findMany({ select: { first_move_id: true } })
     *
     */
    findMany<T extends ContestCombosFindManyArgs>(args?: Prisma.SelectSubset<T, ContestCombosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ContestCombos.
     * @param {ContestCombosCreateArgs} args - Arguments to create a ContestCombos.
     * @example
     * // Create one ContestCombos
     * const ContestCombos = await prisma.contestCombos.create({
     *   data: {
     *     // ... data to create a ContestCombos
     *   }
     * })
     *
     */
    create<T extends ContestCombosCreateArgs>(args: Prisma.SelectSubset<T, ContestCombosCreateArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ContestCombos.
     * @param {ContestCombosCreateManyArgs} args - Arguments to create many ContestCombos.
     * @example
     * // Create many ContestCombos
     * const contestCombos = await prisma.contestCombos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ContestCombosCreateManyArgs>(args?: Prisma.SelectSubset<T, ContestCombosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ContestCombos and returns the data saved in the database.
     * @param {ContestCombosCreateManyAndReturnArgs} args - Arguments to create many ContestCombos.
     * @example
     * // Create many ContestCombos
     * const contestCombos = await prisma.contestCombos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ContestCombos and only return the `first_move_id`
     * const contestCombosWithFirst_move_idOnly = await prisma.contestCombos.createManyAndReturn({
     *   select: { first_move_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ContestCombosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContestCombosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ContestCombos.
     * @param {ContestCombosDeleteArgs} args - Arguments to delete one ContestCombos.
     * @example
     * // Delete one ContestCombos
     * const ContestCombos = await prisma.contestCombos.delete({
     *   where: {
     *     // ... filter to delete one ContestCombos
     *   }
     * })
     *
     */
    delete<T extends ContestCombosDeleteArgs>(args: Prisma.SelectSubset<T, ContestCombosDeleteArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ContestCombos.
     * @param {ContestCombosUpdateArgs} args - Arguments to update one ContestCombos.
     * @example
     * // Update one ContestCombos
     * const contestCombos = await prisma.contestCombos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ContestCombosUpdateArgs>(args: Prisma.SelectSubset<T, ContestCombosUpdateArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ContestCombos.
     * @param {ContestCombosDeleteManyArgs} args - Arguments to filter ContestCombos to delete.
     * @example
     * // Delete a few ContestCombos
     * const { count } = await prisma.contestCombos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ContestCombosDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContestCombosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCombosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestCombos
     * const contestCombos = await prisma.contestCombos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ContestCombosUpdateManyArgs>(args: Prisma.SelectSubset<T, ContestCombosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ContestCombos and returns the data updated in the database.
     * @param {ContestCombosUpdateManyAndReturnArgs} args - Arguments to update many ContestCombos.
     * @example
     * // Update many ContestCombos
     * const contestCombos = await prisma.contestCombos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ContestCombos and only return the `first_move_id`
     * const contestCombosWithFirst_move_idOnly = await prisma.contestCombos.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContestCombosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContestCombosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ContestCombos.
     * @param {ContestCombosUpsertArgs} args - Arguments to update or create a ContestCombos.
     * @example
     * // Update or create a ContestCombos
     * const contestCombos = await prisma.contestCombos.upsert({
     *   create: {
     *     // ... data to create a ContestCombos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestCombos we want to update
     *   }
     * })
     */
    upsert<T extends ContestCombosUpsertArgs>(args: Prisma.SelectSubset<T, ContestCombosUpsertArgs<ExtArgs>>): Prisma.Prisma__ContestCombosClient<runtime.Types.Result.GetResult<Prisma.$ContestCombosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCombosCountArgs} args - Arguments to filter ContestCombos to count.
     * @example
     * // Count the number of ContestCombos
     * const count = await prisma.contestCombos.count({
     *   where: {
     *     // ... the filter for the ContestCombos we want to count
     *   }
     * })
    **/
    count<T extends ContestCombosCountArgs>(args?: Prisma.Subset<T, ContestCombosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContestCombosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCombosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContestCombosAggregateArgs>(args: Prisma.Subset<T, ContestCombosAggregateArgs>): Prisma.PrismaPromise<GetContestCombosAggregateType<T>>;
    /**
     * Group by ContestCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCombosGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ContestCombosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContestCombosGroupByArgs['orderBy'];
    } : {
        orderBy?: ContestCombosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContestCombosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestCombosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ContestCombos model
     */
    readonly fields: ContestCombosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ContestCombos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ContestCombosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ContestCombos model
 */
export interface ContestCombosFieldRefs {
    readonly first_move_id: Prisma.FieldRef<"ContestCombos", 'Int'>;
    readonly second_move_id: Prisma.FieldRef<"ContestCombos", 'Int'>;
}
/**
 * ContestCombos findUnique
 */
export type ContestCombosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which ContestCombos to fetch.
     */
    where: Prisma.ContestCombosWhereUniqueInput;
};
/**
 * ContestCombos findUniqueOrThrow
 */
export type ContestCombosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which ContestCombos to fetch.
     */
    where: Prisma.ContestCombosWhereUniqueInput;
};
/**
 * ContestCombos findFirst
 */
export type ContestCombosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which ContestCombos to fetch.
     */
    where?: Prisma.ContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestCombos to fetch.
     */
    orderBy?: Prisma.ContestCombosOrderByWithRelationInput | Prisma.ContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContestCombos.
     */
    cursor?: Prisma.ContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContestCombos.
     */
    distinct?: Prisma.ContestCombosScalarFieldEnum | Prisma.ContestCombosScalarFieldEnum[];
};
/**
 * ContestCombos findFirstOrThrow
 */
export type ContestCombosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which ContestCombos to fetch.
     */
    where?: Prisma.ContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestCombos to fetch.
     */
    orderBy?: Prisma.ContestCombosOrderByWithRelationInput | Prisma.ContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ContestCombos.
     */
    cursor?: Prisma.ContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContestCombos.
     */
    distinct?: Prisma.ContestCombosScalarFieldEnum | Prisma.ContestCombosScalarFieldEnum[];
};
/**
 * ContestCombos findMany
 */
export type ContestCombosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * Filter, which ContestCombos to fetch.
     */
    where?: Prisma.ContestCombosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ContestCombos to fetch.
     */
    orderBy?: Prisma.ContestCombosOrderByWithRelationInput | Prisma.ContestCombosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ContestCombos.
     */
    cursor?: Prisma.ContestCombosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ContestCombos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ContestCombos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ContestCombos.
     */
    distinct?: Prisma.ContestCombosScalarFieldEnum | Prisma.ContestCombosScalarFieldEnum[];
};
/**
 * ContestCombos create
 */
export type ContestCombosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * The data needed to create a ContestCombos.
     */
    data: Prisma.XOR<Prisma.ContestCombosCreateInput, Prisma.ContestCombosUncheckedCreateInput>;
};
/**
 * ContestCombos createMany
 */
export type ContestCombosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestCombos.
     */
    data: Prisma.ContestCombosCreateManyInput | Prisma.ContestCombosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ContestCombos createManyAndReturn
 */
export type ContestCombosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * The data used to create many ContestCombos.
     */
    data: Prisma.ContestCombosCreateManyInput | Prisma.ContestCombosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ContestCombos update
 */
export type ContestCombosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * The data needed to update a ContestCombos.
     */
    data: Prisma.XOR<Prisma.ContestCombosUpdateInput, Prisma.ContestCombosUncheckedUpdateInput>;
    /**
     * Choose, which ContestCombos to update.
     */
    where: Prisma.ContestCombosWhereUniqueInput;
};
/**
 * ContestCombos updateMany
 */
export type ContestCombosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestCombos.
     */
    data: Prisma.XOR<Prisma.ContestCombosUpdateManyMutationInput, Prisma.ContestCombosUncheckedUpdateManyInput>;
    /**
     * Filter which ContestCombos to update
     */
    where?: Prisma.ContestCombosWhereInput;
    /**
     * Limit how many ContestCombos to update.
     */
    limit?: number;
};
/**
 * ContestCombos updateManyAndReturn
 */
export type ContestCombosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * The data used to update ContestCombos.
     */
    data: Prisma.XOR<Prisma.ContestCombosUpdateManyMutationInput, Prisma.ContestCombosUncheckedUpdateManyInput>;
    /**
     * Filter which ContestCombos to update
     */
    where?: Prisma.ContestCombosWhereInput;
    /**
     * Limit how many ContestCombos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ContestCombos upsert
 */
export type ContestCombosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * The filter to search for the ContestCombos to update in case it exists.
     */
    where: Prisma.ContestCombosWhereUniqueInput;
    /**
     * In case the ContestCombos found by the `where` argument doesn't exist, create a new ContestCombos with this data.
     */
    create: Prisma.XOR<Prisma.ContestCombosCreateInput, Prisma.ContestCombosUncheckedCreateInput>;
    /**
     * In case the ContestCombos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ContestCombosUpdateInput, Prisma.ContestCombosUncheckedUpdateInput>;
};
/**
 * ContestCombos delete
 */
export type ContestCombosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
    /**
     * Filter which ContestCombos to delete.
     */
    where: Prisma.ContestCombosWhereUniqueInput;
};
/**
 * ContestCombos deleteMany
 */
export type ContestCombosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ContestCombos to delete
     */
    where?: Prisma.ContestCombosWhereInput;
    /**
     * Limit how many ContestCombos to delete.
     */
    limit?: number;
};
/**
 * ContestCombos without action
 */
export type ContestCombosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCombos
     */
    select?: Prisma.ContestCombosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ContestCombos
     */
    omit?: Prisma.ContestCombosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ContestCombosInclude<ExtArgs> | null;
};
