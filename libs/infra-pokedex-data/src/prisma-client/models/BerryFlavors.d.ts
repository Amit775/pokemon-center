import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model BerryFlavors
 * @@TypeGraphQL.type(name: "BerryFlavor")
 */
export type BerryFlavorsModel = runtime.Types.Result.DefaultSelection<Prisma.$BerryFlavorsPayload>;
export type AggregateBerryFlavors = {
    _count: BerryFlavorsCountAggregateOutputType | null;
    _avg: BerryFlavorsAvgAggregateOutputType | null;
    _sum: BerryFlavorsSumAggregateOutputType | null;
    _min: BerryFlavorsMinAggregateOutputType | null;
    _max: BerryFlavorsMaxAggregateOutputType | null;
};
export type BerryFlavorsAvgAggregateOutputType = {
    berry_id: number | null;
    contest_type_id: number | null;
    flavor: number | null;
};
export type BerryFlavorsSumAggregateOutputType = {
    berry_id: number | null;
    contest_type_id: number | null;
    flavor: number | null;
};
export type BerryFlavorsMinAggregateOutputType = {
    berry_id: number | null;
    contest_type_id: number | null;
    flavor: number | null;
};
export type BerryFlavorsMaxAggregateOutputType = {
    berry_id: number | null;
    contest_type_id: number | null;
    flavor: number | null;
};
export type BerryFlavorsCountAggregateOutputType = {
    berry_id: number;
    contest_type_id: number;
    flavor: number;
    _all: number;
};
export type BerryFlavorsAvgAggregateInputType = {
    berry_id?: true;
    contest_type_id?: true;
    flavor?: true;
};
export type BerryFlavorsSumAggregateInputType = {
    berry_id?: true;
    contest_type_id?: true;
    flavor?: true;
};
export type BerryFlavorsMinAggregateInputType = {
    berry_id?: true;
    contest_type_id?: true;
    flavor?: true;
};
export type BerryFlavorsMaxAggregateInputType = {
    berry_id?: true;
    contest_type_id?: true;
    flavor?: true;
};
export type BerryFlavorsCountAggregateInputType = {
    berry_id?: true;
    contest_type_id?: true;
    flavor?: true;
    _all?: true;
};
export type BerryFlavorsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BerryFlavors to aggregate.
     */
    where?: Prisma.BerryFlavorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BerryFlavors to fetch.
     */
    orderBy?: Prisma.BerryFlavorsOrderByWithRelationInput | Prisma.BerryFlavorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BerryFlavorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BerryFlavors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BerryFlavors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BerryFlavors
    **/
    _count?: true | BerryFlavorsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BerryFlavorsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BerryFlavorsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BerryFlavorsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BerryFlavorsMaxAggregateInputType;
};
export type GetBerryFlavorsAggregateType<T extends BerryFlavorsAggregateArgs> = {
    [P in keyof T & keyof AggregateBerryFlavors]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBerryFlavors[P]> : Prisma.GetScalarType<T[P], AggregateBerryFlavors[P]>;
};
export type BerryFlavorsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BerryFlavorsWhereInput;
    orderBy?: Prisma.BerryFlavorsOrderByWithAggregationInput | Prisma.BerryFlavorsOrderByWithAggregationInput[];
    by: Prisma.BerryFlavorsScalarFieldEnum[] | Prisma.BerryFlavorsScalarFieldEnum;
    having?: Prisma.BerryFlavorsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BerryFlavorsCountAggregateInputType | true;
    _avg?: BerryFlavorsAvgAggregateInputType;
    _sum?: BerryFlavorsSumAggregateInputType;
    _min?: BerryFlavorsMinAggregateInputType;
    _max?: BerryFlavorsMaxAggregateInputType;
};
export type BerryFlavorsGroupByOutputType = {
    berry_id: number;
    contest_type_id: number;
    flavor: number;
    _count: BerryFlavorsCountAggregateOutputType | null;
    _avg: BerryFlavorsAvgAggregateOutputType | null;
    _sum: BerryFlavorsSumAggregateOutputType | null;
    _min: BerryFlavorsMinAggregateOutputType | null;
    _max: BerryFlavorsMaxAggregateOutputType | null;
};
export type GetBerryFlavorsGroupByPayload<T extends BerryFlavorsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BerryFlavorsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BerryFlavorsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BerryFlavorsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BerryFlavorsGroupByOutputType[P]>;
}>>;
export type BerryFlavorsWhereInput = {
    AND?: Prisma.BerryFlavorsWhereInput | Prisma.BerryFlavorsWhereInput[];
    OR?: Prisma.BerryFlavorsWhereInput[];
    NOT?: Prisma.BerryFlavorsWhereInput | Prisma.BerryFlavorsWhereInput[];
    berry_id?: Prisma.IntFilter<"BerryFlavors"> | number;
    contest_type_id?: Prisma.IntFilter<"BerryFlavors"> | number;
    flavor?: Prisma.IntFilter<"BerryFlavors"> | number;
    berry?: Prisma.XOR<Prisma.BerriesScalarRelationFilter, Prisma.BerriesWhereInput>;
    contestType?: Prisma.XOR<Prisma.ContestTypesScalarRelationFilter, Prisma.ContestTypesWhereInput>;
    type?: Prisma.XOR<Prisma.TypesScalarRelationFilter, Prisma.TypesWhereInput>;
};
export type BerryFlavorsOrderByWithRelationInput = {
    berry_id?: Prisma.SortOrder;
    contest_type_id?: Prisma.SortOrder;
    flavor?: Prisma.SortOrder;
    berry?: Prisma.BerriesOrderByWithRelationInput;
    contestType?: Prisma.ContestTypesOrderByWithRelationInput;
    type?: Prisma.TypesOrderByWithRelationInput;
};
export type BerryFlavorsWhereUniqueInput = Prisma.AtLeast<{
    berry_id_contest_type_id?: Prisma.BerryFlavorsBerry_idContest_type_idCompoundUniqueInput;
    AND?: Prisma.BerryFlavorsWhereInput | Prisma.BerryFlavorsWhereInput[];
    OR?: Prisma.BerryFlavorsWhereInput[];
    NOT?: Prisma.BerryFlavorsWhereInput | Prisma.BerryFlavorsWhereInput[];
    berry_id?: Prisma.IntFilter<"BerryFlavors"> | number;
    contest_type_id?: Prisma.IntFilter<"BerryFlavors"> | number;
    flavor?: Prisma.IntFilter<"BerryFlavors"> | number;
    berry?: Prisma.XOR<Prisma.BerriesScalarRelationFilter, Prisma.BerriesWhereInput>;
    contestType?: Prisma.XOR<Prisma.ContestTypesScalarRelationFilter, Prisma.ContestTypesWhereInput>;
    type?: Prisma.XOR<Prisma.TypesScalarRelationFilter, Prisma.TypesWhereInput>;
}, "berry_id_contest_type_id">;
export type BerryFlavorsOrderByWithAggregationInput = {
    berry_id?: Prisma.SortOrder;
    contest_type_id?: Prisma.SortOrder;
    flavor?: Prisma.SortOrder;
    _count?: Prisma.BerryFlavorsCountOrderByAggregateInput;
    _avg?: Prisma.BerryFlavorsAvgOrderByAggregateInput;
    _max?: Prisma.BerryFlavorsMaxOrderByAggregateInput;
    _min?: Prisma.BerryFlavorsMinOrderByAggregateInput;
    _sum?: Prisma.BerryFlavorsSumOrderByAggregateInput;
};
export type BerryFlavorsScalarWhereWithAggregatesInput = {
    AND?: Prisma.BerryFlavorsScalarWhereWithAggregatesInput | Prisma.BerryFlavorsScalarWhereWithAggregatesInput[];
    OR?: Prisma.BerryFlavorsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BerryFlavorsScalarWhereWithAggregatesInput | Prisma.BerryFlavorsScalarWhereWithAggregatesInput[];
    berry_id?: Prisma.IntWithAggregatesFilter<"BerryFlavors"> | number;
    contest_type_id?: Prisma.IntWithAggregatesFilter<"BerryFlavors"> | number;
    flavor?: Prisma.IntWithAggregatesFilter<"BerryFlavors"> | number;
};
export type BerryFlavorsCreateInput = {
    flavor: number;
    berry: Prisma.BerriesCreateNestedOneWithoutFlavorsInput;
    contestType: Prisma.ContestTypesCreateNestedOneWithoutBerryFlavorsInput;
    type: Prisma.TypesCreateNestedOneWithoutBerryFlavorsInput;
};
export type BerryFlavorsUncheckedCreateInput = {
    berry_id: number;
    contest_type_id: number;
    flavor: number;
};
export type BerryFlavorsUpdateInput = {
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
    berry?: Prisma.BerriesUpdateOneRequiredWithoutFlavorsNestedInput;
    contestType?: Prisma.ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
    type?: Prisma.TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
};
export type BerryFlavorsUncheckedUpdateInput = {
    berry_id?: Prisma.IntFieldUpdateOperationsInput | number;
    contest_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsCreateManyInput = {
    berry_id: number;
    contest_type_id: number;
    flavor: number;
};
export type BerryFlavorsUpdateManyMutationInput = {
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsUncheckedUpdateManyInput = {
    berry_id?: Prisma.IntFieldUpdateOperationsInput | number;
    contest_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsListRelationFilter = {
    every?: Prisma.BerryFlavorsWhereInput;
    some?: Prisma.BerryFlavorsWhereInput;
    none?: Prisma.BerryFlavorsWhereInput;
};
export type BerryFlavorsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BerryFlavorsBerry_idContest_type_idCompoundUniqueInput = {
    berry_id: number;
    contest_type_id: number;
};
export type BerryFlavorsCountOrderByAggregateInput = {
    berry_id?: Prisma.SortOrder;
    contest_type_id?: Prisma.SortOrder;
    flavor?: Prisma.SortOrder;
};
export type BerryFlavorsAvgOrderByAggregateInput = {
    berry_id?: Prisma.SortOrder;
    contest_type_id?: Prisma.SortOrder;
    flavor?: Prisma.SortOrder;
};
export type BerryFlavorsMaxOrderByAggregateInput = {
    berry_id?: Prisma.SortOrder;
    contest_type_id?: Prisma.SortOrder;
    flavor?: Prisma.SortOrder;
};
export type BerryFlavorsMinOrderByAggregateInput = {
    berry_id?: Prisma.SortOrder;
    contest_type_id?: Prisma.SortOrder;
    flavor?: Prisma.SortOrder;
};
export type BerryFlavorsSumOrderByAggregateInput = {
    berry_id?: Prisma.SortOrder;
    contest_type_id?: Prisma.SortOrder;
    flavor?: Prisma.SortOrder;
};
export type BerryFlavorsCreateNestedManyWithoutTypeInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput> | Prisma.BerryFlavorsCreateWithoutTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyTypeInputEnvelope;
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
};
export type BerryFlavorsUncheckedCreateNestedManyWithoutTypeInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput> | Prisma.BerryFlavorsCreateWithoutTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyTypeInputEnvelope;
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
};
export type BerryFlavorsUpdateManyWithoutTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput> | Prisma.BerryFlavorsCreateWithoutTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput[];
    upsert?: Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput | Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyTypeInputEnvelope;
    set?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    disconnect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    delete?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    update?: Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput | Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?: Prisma.BerryFlavorsUpdateManyWithWhereWithoutTypeInput | Prisma.BerryFlavorsUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
};
export type BerryFlavorsUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput> | Prisma.BerryFlavorsCreateWithoutTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutTypeInput[];
    upsert?: Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput | Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyTypeInputEnvelope;
    set?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    disconnect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    delete?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    update?: Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput | Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?: Prisma.BerryFlavorsUpdateManyWithWhereWithoutTypeInput | Prisma.BerryFlavorsUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
};
export type BerryFlavorsCreateNestedManyWithoutContestTypeInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput> | Prisma.BerryFlavorsCreateWithoutContestTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyContestTypeInputEnvelope;
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
};
export type BerryFlavorsUncheckedCreateNestedManyWithoutContestTypeInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput> | Prisma.BerryFlavorsCreateWithoutContestTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyContestTypeInputEnvelope;
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
};
export type BerryFlavorsUpdateManyWithoutContestTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput> | Prisma.BerryFlavorsCreateWithoutContestTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput[];
    upsert?: Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput | Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyContestTypeInputEnvelope;
    set?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    disconnect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    delete?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    update?: Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput | Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput[];
    updateMany?: Prisma.BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput | Prisma.BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput[];
    deleteMany?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
};
export type BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput> | Prisma.BerryFlavorsCreateWithoutContestTypeInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput | Prisma.BerryFlavorsCreateOrConnectWithoutContestTypeInput[];
    upsert?: Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput | Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput[];
    createMany?: Prisma.BerryFlavorsCreateManyContestTypeInputEnvelope;
    set?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    disconnect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    delete?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    update?: Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput | Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput[];
    updateMany?: Prisma.BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput | Prisma.BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput[];
    deleteMany?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
};
export type BerryFlavorsCreateNestedManyWithoutBerryInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutBerryInput, Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput> | Prisma.BerryFlavorsCreateWithoutBerryInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput | Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput[];
    createMany?: Prisma.BerryFlavorsCreateManyBerryInputEnvelope;
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
};
export type BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutBerryInput, Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput> | Prisma.BerryFlavorsCreateWithoutBerryInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput | Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput[];
    createMany?: Prisma.BerryFlavorsCreateManyBerryInputEnvelope;
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
};
export type BerryFlavorsUpdateManyWithoutBerryNestedInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutBerryInput, Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput> | Prisma.BerryFlavorsCreateWithoutBerryInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput | Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput[];
    upsert?: Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput | Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput[];
    createMany?: Prisma.BerryFlavorsCreateManyBerryInputEnvelope;
    set?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    disconnect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    delete?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    update?: Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput | Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput[];
    updateMany?: Prisma.BerryFlavorsUpdateManyWithWhereWithoutBerryInput | Prisma.BerryFlavorsUpdateManyWithWhereWithoutBerryInput[];
    deleteMany?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
};
export type BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput = {
    create?: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutBerryInput, Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput> | Prisma.BerryFlavorsCreateWithoutBerryInput[] | Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput[];
    connectOrCreate?: Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput | Prisma.BerryFlavorsCreateOrConnectWithoutBerryInput[];
    upsert?: Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput | Prisma.BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput[];
    createMany?: Prisma.BerryFlavorsCreateManyBerryInputEnvelope;
    set?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    disconnect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    delete?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    connect?: Prisma.BerryFlavorsWhereUniqueInput | Prisma.BerryFlavorsWhereUniqueInput[];
    update?: Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput | Prisma.BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput[];
    updateMany?: Prisma.BerryFlavorsUpdateManyWithWhereWithoutBerryInput | Prisma.BerryFlavorsUpdateManyWithWhereWithoutBerryInput[];
    deleteMany?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
};
export type BerryFlavorsCreateWithoutTypeInput = {
    flavor: number;
    berry: Prisma.BerriesCreateNestedOneWithoutFlavorsInput;
    contestType: Prisma.ContestTypesCreateNestedOneWithoutBerryFlavorsInput;
};
export type BerryFlavorsUncheckedCreateWithoutTypeInput = {
    berry_id: number;
    flavor: number;
};
export type BerryFlavorsCreateOrConnectWithoutTypeInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput>;
};
export type BerryFlavorsCreateManyTypeInputEnvelope = {
    data: Prisma.BerryFlavorsCreateManyTypeInput | Prisma.BerryFlavorsCreateManyTypeInput[];
    skipDuplicates?: boolean;
};
export type BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    update: Prisma.XOR<Prisma.BerryFlavorsUpdateWithoutTypeInput, Prisma.BerryFlavorsUncheckedUpdateWithoutTypeInput>;
    create: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutTypeInput>;
};
export type BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateWithoutTypeInput, Prisma.BerryFlavorsUncheckedUpdateWithoutTypeInput>;
};
export type BerryFlavorsUpdateManyWithWhereWithoutTypeInput = {
    where: Prisma.BerryFlavorsScalarWhereInput;
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateManyMutationInput, Prisma.BerryFlavorsUncheckedUpdateManyWithoutTypeInput>;
};
export type BerryFlavorsScalarWhereInput = {
    AND?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
    OR?: Prisma.BerryFlavorsScalarWhereInput[];
    NOT?: Prisma.BerryFlavorsScalarWhereInput | Prisma.BerryFlavorsScalarWhereInput[];
    berry_id?: Prisma.IntFilter<"BerryFlavors"> | number;
    contest_type_id?: Prisma.IntFilter<"BerryFlavors"> | number;
    flavor?: Prisma.IntFilter<"BerryFlavors"> | number;
};
export type BerryFlavorsCreateWithoutContestTypeInput = {
    flavor: number;
    berry: Prisma.BerriesCreateNestedOneWithoutFlavorsInput;
    type: Prisma.TypesCreateNestedOneWithoutBerryFlavorsInput;
};
export type BerryFlavorsUncheckedCreateWithoutContestTypeInput = {
    berry_id: number;
    flavor: number;
};
export type BerryFlavorsCreateOrConnectWithoutContestTypeInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput>;
};
export type BerryFlavorsCreateManyContestTypeInputEnvelope = {
    data: Prisma.BerryFlavorsCreateManyContestTypeInput | Prisma.BerryFlavorsCreateManyContestTypeInput[];
    skipDuplicates?: boolean;
};
export type BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    update: Prisma.XOR<Prisma.BerryFlavorsUpdateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedUpdateWithoutContestTypeInput>;
    create: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedCreateWithoutContestTypeInput>;
};
export type BerryFlavorsUpdateWithWhereUniqueWithoutContestTypeInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateWithoutContestTypeInput, Prisma.BerryFlavorsUncheckedUpdateWithoutContestTypeInput>;
};
export type BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput = {
    where: Prisma.BerryFlavorsScalarWhereInput;
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateManyMutationInput, Prisma.BerryFlavorsUncheckedUpdateManyWithoutContestTypeInput>;
};
export type BerryFlavorsCreateWithoutBerryInput = {
    flavor: number;
    contestType: Prisma.ContestTypesCreateNestedOneWithoutBerryFlavorsInput;
    type: Prisma.TypesCreateNestedOneWithoutBerryFlavorsInput;
};
export type BerryFlavorsUncheckedCreateWithoutBerryInput = {
    contest_type_id: number;
    flavor: number;
};
export type BerryFlavorsCreateOrConnectWithoutBerryInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutBerryInput, Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput>;
};
export type BerryFlavorsCreateManyBerryInputEnvelope = {
    data: Prisma.BerryFlavorsCreateManyBerryInput | Prisma.BerryFlavorsCreateManyBerryInput[];
    skipDuplicates?: boolean;
};
export type BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    update: Prisma.XOR<Prisma.BerryFlavorsUpdateWithoutBerryInput, Prisma.BerryFlavorsUncheckedUpdateWithoutBerryInput>;
    create: Prisma.XOR<Prisma.BerryFlavorsCreateWithoutBerryInput, Prisma.BerryFlavorsUncheckedCreateWithoutBerryInput>;
};
export type BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput = {
    where: Prisma.BerryFlavorsWhereUniqueInput;
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateWithoutBerryInput, Prisma.BerryFlavorsUncheckedUpdateWithoutBerryInput>;
};
export type BerryFlavorsUpdateManyWithWhereWithoutBerryInput = {
    where: Prisma.BerryFlavorsScalarWhereInput;
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateManyMutationInput, Prisma.BerryFlavorsUncheckedUpdateManyWithoutBerryInput>;
};
export type BerryFlavorsCreateManyTypeInput = {
    berry_id: number;
    flavor: number;
};
export type BerryFlavorsUpdateWithoutTypeInput = {
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
    berry?: Prisma.BerriesUpdateOneRequiredWithoutFlavorsNestedInput;
    contestType?: Prisma.ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
};
export type BerryFlavorsUncheckedUpdateWithoutTypeInput = {
    berry_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsUncheckedUpdateManyWithoutTypeInput = {
    berry_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsCreateManyContestTypeInput = {
    berry_id: number;
    flavor: number;
};
export type BerryFlavorsUpdateWithoutContestTypeInput = {
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
    berry?: Prisma.BerriesUpdateOneRequiredWithoutFlavorsNestedInput;
    type?: Prisma.TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
};
export type BerryFlavorsUncheckedUpdateWithoutContestTypeInput = {
    berry_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsUncheckedUpdateManyWithoutContestTypeInput = {
    berry_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsCreateManyBerryInput = {
    contest_type_id: number;
    flavor: number;
};
export type BerryFlavorsUpdateWithoutBerryInput = {
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
    contestType?: Prisma.ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
    type?: Prisma.TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput;
};
export type BerryFlavorsUncheckedUpdateWithoutBerryInput = {
    contest_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsUncheckedUpdateManyWithoutBerryInput = {
    contest_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    flavor?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BerryFlavorsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    berry_id?: boolean;
    contest_type_id?: boolean;
    flavor?: boolean;
    berry?: boolean | Prisma.BerriesDefaultArgs<ExtArgs>;
    contestType?: boolean | Prisma.ContestTypesDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["berryFlavors"]>;
export type BerryFlavorsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    berry_id?: boolean;
    contest_type_id?: boolean;
    flavor?: boolean;
    berry?: boolean | Prisma.BerriesDefaultArgs<ExtArgs>;
    contestType?: boolean | Prisma.ContestTypesDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["berryFlavors"]>;
export type BerryFlavorsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    berry_id?: boolean;
    contest_type_id?: boolean;
    flavor?: boolean;
    berry?: boolean | Prisma.BerriesDefaultArgs<ExtArgs>;
    contestType?: boolean | Prisma.ContestTypesDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["berryFlavors"]>;
export type BerryFlavorsSelectScalar = {
    berry_id?: boolean;
    contest_type_id?: boolean;
    flavor?: boolean;
};
export type BerryFlavorsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"berry_id" | "contest_type_id" | "flavor", ExtArgs["result"]["berryFlavors"]>;
export type BerryFlavorsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    berry?: boolean | Prisma.BerriesDefaultArgs<ExtArgs>;
    contestType?: boolean | Prisma.ContestTypesDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
};
export type BerryFlavorsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    berry?: boolean | Prisma.BerriesDefaultArgs<ExtArgs>;
    contestType?: boolean | Prisma.ContestTypesDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
};
export type BerryFlavorsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    berry?: boolean | Prisma.BerriesDefaultArgs<ExtArgs>;
    contestType?: boolean | Prisma.ContestTypesDefaultArgs<ExtArgs>;
    type?: boolean | Prisma.TypesDefaultArgs<ExtArgs>;
};
export type $BerryFlavorsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BerryFlavors";
    objects: {
        berry: Prisma.$BerriesPayload<ExtArgs>;
        contestType: Prisma.$ContestTypesPayload<ExtArgs>;
        type: Prisma.$TypesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        berry_id: number;
        contest_type_id: number;
        flavor: number;
    }, ExtArgs["result"]["berryFlavors"]>;
    composites: {};
};
export type BerryFlavorsGetPayload<S extends boolean | null | undefined | BerryFlavorsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload, S>;
export type BerryFlavorsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BerryFlavorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BerryFlavorsCountAggregateInputType | true;
};
export interface BerryFlavorsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BerryFlavors'];
        meta: {
            name: 'BerryFlavors';
        };
    };
    /**
     * Find zero or one BerryFlavors that matches the filter.
     * @param {BerryFlavorsFindUniqueArgs} args - Arguments to find a BerryFlavors
     * @example
     * // Get one BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BerryFlavorsFindUniqueArgs>(args: Prisma.SelectSubset<T, BerryFlavorsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BerryFlavors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BerryFlavorsFindUniqueOrThrowArgs} args - Arguments to find a BerryFlavors
     * @example
     * // Get one BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BerryFlavorsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BerryFlavorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BerryFlavors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerryFlavorsFindFirstArgs} args - Arguments to find a BerryFlavors
     * @example
     * // Get one BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BerryFlavorsFindFirstArgs>(args?: Prisma.SelectSubset<T, BerryFlavorsFindFirstArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BerryFlavors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerryFlavorsFindFirstOrThrowArgs} args - Arguments to find a BerryFlavors
     * @example
     * // Get one BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BerryFlavorsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BerryFlavorsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BerryFlavors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerryFlavorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.findMany()
     *
     * // Get first 10 BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.findMany({ take: 10 })
     *
     * // Only select the `berry_id`
     * const berryFlavorsWithBerry_idOnly = await prisma.berryFlavors.findMany({ select: { berry_id: true } })
     *
     */
    findMany<T extends BerryFlavorsFindManyArgs>(args?: Prisma.SelectSubset<T, BerryFlavorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BerryFlavors.
     * @param {BerryFlavorsCreateArgs} args - Arguments to create a BerryFlavors.
     * @example
     * // Create one BerryFlavors
     * const BerryFlavors = await prisma.berryFlavors.create({
     *   data: {
     *     // ... data to create a BerryFlavors
     *   }
     * })
     *
     */
    create<T extends BerryFlavorsCreateArgs>(args: Prisma.SelectSubset<T, BerryFlavorsCreateArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BerryFlavors.
     * @param {BerryFlavorsCreateManyArgs} args - Arguments to create many BerryFlavors.
     * @example
     * // Create many BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BerryFlavorsCreateManyArgs>(args?: Prisma.SelectSubset<T, BerryFlavorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BerryFlavors and returns the data saved in the database.
     * @param {BerryFlavorsCreateManyAndReturnArgs} args - Arguments to create many BerryFlavors.
     * @example
     * // Create many BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BerryFlavors and only return the `berry_id`
     * const berryFlavorsWithBerry_idOnly = await prisma.berryFlavors.createManyAndReturn({
     *   select: { berry_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BerryFlavorsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BerryFlavorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BerryFlavors.
     * @param {BerryFlavorsDeleteArgs} args - Arguments to delete one BerryFlavors.
     * @example
     * // Delete one BerryFlavors
     * const BerryFlavors = await prisma.berryFlavors.delete({
     *   where: {
     *     // ... filter to delete one BerryFlavors
     *   }
     * })
     *
     */
    delete<T extends BerryFlavorsDeleteArgs>(args: Prisma.SelectSubset<T, BerryFlavorsDeleteArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BerryFlavors.
     * @param {BerryFlavorsUpdateArgs} args - Arguments to update one BerryFlavors.
     * @example
     * // Update one BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BerryFlavorsUpdateArgs>(args: Prisma.SelectSubset<T, BerryFlavorsUpdateArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BerryFlavors.
     * @param {BerryFlavorsDeleteManyArgs} args - Arguments to filter BerryFlavors to delete.
     * @example
     * // Delete a few BerryFlavors
     * const { count } = await prisma.berryFlavors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BerryFlavorsDeleteManyArgs>(args?: Prisma.SelectSubset<T, BerryFlavorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BerryFlavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerryFlavorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BerryFlavorsUpdateManyArgs>(args: Prisma.SelectSubset<T, BerryFlavorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BerryFlavors and returns the data updated in the database.
     * @param {BerryFlavorsUpdateManyAndReturnArgs} args - Arguments to update many BerryFlavors.
     * @example
     * // Update many BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BerryFlavors and only return the `berry_id`
     * const berryFlavorsWithBerry_idOnly = await prisma.berryFlavors.updateManyAndReturn({
     *   select: { berry_id: true },
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
    updateManyAndReturn<T extends BerryFlavorsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BerryFlavorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BerryFlavors.
     * @param {BerryFlavorsUpsertArgs} args - Arguments to update or create a BerryFlavors.
     * @example
     * // Update or create a BerryFlavors
     * const berryFlavors = await prisma.berryFlavors.upsert({
     *   create: {
     *     // ... data to create a BerryFlavors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BerryFlavors we want to update
     *   }
     * })
     */
    upsert<T extends BerryFlavorsUpsertArgs>(args: Prisma.SelectSubset<T, BerryFlavorsUpsertArgs<ExtArgs>>): Prisma.Prisma__BerryFlavorsClient<runtime.Types.Result.GetResult<Prisma.$BerryFlavorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BerryFlavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerryFlavorsCountArgs} args - Arguments to filter BerryFlavors to count.
     * @example
     * // Count the number of BerryFlavors
     * const count = await prisma.berryFlavors.count({
     *   where: {
     *     // ... the filter for the BerryFlavors we want to count
     *   }
     * })
    **/
    count<T extends BerryFlavorsCountArgs>(args?: Prisma.Subset<T, BerryFlavorsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BerryFlavorsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BerryFlavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerryFlavorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BerryFlavorsAggregateArgs>(args: Prisma.Subset<T, BerryFlavorsAggregateArgs>): Prisma.PrismaPromise<GetBerryFlavorsAggregateType<T>>;
    /**
     * Group by BerryFlavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerryFlavorsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BerryFlavorsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BerryFlavorsGroupByArgs['orderBy'];
    } : {
        orderBy?: BerryFlavorsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BerryFlavorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBerryFlavorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BerryFlavors model
     */
    readonly fields: BerryFlavorsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BerryFlavors.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BerryFlavorsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    berry<T extends Prisma.BerriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BerriesDefaultArgs<ExtArgs>>): Prisma.Prisma__BerriesClient<runtime.Types.Result.GetResult<Prisma.$BerriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    contestType<T extends Prisma.ContestTypesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContestTypesDefaultArgs<ExtArgs>>): Prisma.Prisma__ContestTypesClient<runtime.Types.Result.GetResult<Prisma.$ContestTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    type<T extends Prisma.TypesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypesDefaultArgs<ExtArgs>>): Prisma.Prisma__TypesClient<runtime.Types.Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BerryFlavors model
 */
export interface BerryFlavorsFieldRefs {
    readonly berry_id: Prisma.FieldRef<"BerryFlavors", 'Int'>;
    readonly contest_type_id: Prisma.FieldRef<"BerryFlavors", 'Int'>;
    readonly flavor: Prisma.FieldRef<"BerryFlavors", 'Int'>;
}
/**
 * BerryFlavors findUnique
 */
export type BerryFlavorsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BerryFlavors to fetch.
     */
    where: Prisma.BerryFlavorsWhereUniqueInput;
};
/**
 * BerryFlavors findUniqueOrThrow
 */
export type BerryFlavorsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BerryFlavors to fetch.
     */
    where: Prisma.BerryFlavorsWhereUniqueInput;
};
/**
 * BerryFlavors findFirst
 */
export type BerryFlavorsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BerryFlavors to fetch.
     */
    where?: Prisma.BerryFlavorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BerryFlavors to fetch.
     */
    orderBy?: Prisma.BerryFlavorsOrderByWithRelationInput | Prisma.BerryFlavorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BerryFlavors.
     */
    cursor?: Prisma.BerryFlavorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BerryFlavors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BerryFlavors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BerryFlavors.
     */
    distinct?: Prisma.BerryFlavorsScalarFieldEnum | Prisma.BerryFlavorsScalarFieldEnum[];
};
/**
 * BerryFlavors findFirstOrThrow
 */
export type BerryFlavorsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BerryFlavors to fetch.
     */
    where?: Prisma.BerryFlavorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BerryFlavors to fetch.
     */
    orderBy?: Prisma.BerryFlavorsOrderByWithRelationInput | Prisma.BerryFlavorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BerryFlavors.
     */
    cursor?: Prisma.BerryFlavorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BerryFlavors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BerryFlavors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BerryFlavors.
     */
    distinct?: Prisma.BerryFlavorsScalarFieldEnum | Prisma.BerryFlavorsScalarFieldEnum[];
};
/**
 * BerryFlavors findMany
 */
export type BerryFlavorsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BerryFlavors to fetch.
     */
    where?: Prisma.BerryFlavorsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BerryFlavors to fetch.
     */
    orderBy?: Prisma.BerryFlavorsOrderByWithRelationInput | Prisma.BerryFlavorsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BerryFlavors.
     */
    cursor?: Prisma.BerryFlavorsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BerryFlavors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BerryFlavors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BerryFlavors.
     */
    distinct?: Prisma.BerryFlavorsScalarFieldEnum | Prisma.BerryFlavorsScalarFieldEnum[];
};
/**
 * BerryFlavors create
 */
export type BerryFlavorsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BerryFlavors.
     */
    data: Prisma.XOR<Prisma.BerryFlavorsCreateInput, Prisma.BerryFlavorsUncheckedCreateInput>;
};
/**
 * BerryFlavors createMany
 */
export type BerryFlavorsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BerryFlavors.
     */
    data: Prisma.BerryFlavorsCreateManyInput | Prisma.BerryFlavorsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BerryFlavors createManyAndReturn
 */
export type BerryFlavorsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BerryFlavors
     */
    select?: Prisma.BerryFlavorsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BerryFlavors
     */
    omit?: Prisma.BerryFlavorsOmit<ExtArgs> | null;
    /**
     * The data used to create many BerryFlavors.
     */
    data: Prisma.BerryFlavorsCreateManyInput | Prisma.BerryFlavorsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerryFlavorsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BerryFlavors update
 */
export type BerryFlavorsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BerryFlavors.
     */
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateInput, Prisma.BerryFlavorsUncheckedUpdateInput>;
    /**
     * Choose, which BerryFlavors to update.
     */
    where: Prisma.BerryFlavorsWhereUniqueInput;
};
/**
 * BerryFlavors updateMany
 */
export type BerryFlavorsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BerryFlavors.
     */
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateManyMutationInput, Prisma.BerryFlavorsUncheckedUpdateManyInput>;
    /**
     * Filter which BerryFlavors to update
     */
    where?: Prisma.BerryFlavorsWhereInput;
    /**
     * Limit how many BerryFlavors to update.
     */
    limit?: number;
};
/**
 * BerryFlavors updateManyAndReturn
 */
export type BerryFlavorsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BerryFlavors
     */
    select?: Prisma.BerryFlavorsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BerryFlavors
     */
    omit?: Prisma.BerryFlavorsOmit<ExtArgs> | null;
    /**
     * The data used to update BerryFlavors.
     */
    data: Prisma.XOR<Prisma.BerryFlavorsUpdateManyMutationInput, Prisma.BerryFlavorsUncheckedUpdateManyInput>;
    /**
     * Filter which BerryFlavors to update
     */
    where?: Prisma.BerryFlavorsWhereInput;
    /**
     * Limit how many BerryFlavors to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BerryFlavorsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BerryFlavors upsert
 */
export type BerryFlavorsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BerryFlavors to update in case it exists.
     */
    where: Prisma.BerryFlavorsWhereUniqueInput;
    /**
     * In case the BerryFlavors found by the `where` argument doesn't exist, create a new BerryFlavors with this data.
     */
    create: Prisma.XOR<Prisma.BerryFlavorsCreateInput, Prisma.BerryFlavorsUncheckedCreateInput>;
    /**
     * In case the BerryFlavors was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BerryFlavorsUpdateInput, Prisma.BerryFlavorsUncheckedUpdateInput>;
};
/**
 * BerryFlavors delete
 */
export type BerryFlavorsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BerryFlavors to delete.
     */
    where: Prisma.BerryFlavorsWhereUniqueInput;
};
/**
 * BerryFlavors deleteMany
 */
export type BerryFlavorsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BerryFlavors to delete
     */
    where?: Prisma.BerryFlavorsWhereInput;
    /**
     * Limit how many BerryFlavors to delete.
     */
    limit?: number;
};
/**
 * BerryFlavors without action
 */
export type BerryFlavorsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
