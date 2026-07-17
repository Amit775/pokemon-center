import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MoveMetaAilments
 * @@TypeGraphQL.type(name: "MoveMetaAilment")
 */
export type MoveMetaAilmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$MoveMetaAilmentsPayload>;
export type AggregateMoveMetaAilments = {
    _count: MoveMetaAilmentsCountAggregateOutputType | null;
    _avg: MoveMetaAilmentsAvgAggregateOutputType | null;
    _sum: MoveMetaAilmentsSumAggregateOutputType | null;
    _min: MoveMetaAilmentsMinAggregateOutputType | null;
    _max: MoveMetaAilmentsMaxAggregateOutputType | null;
};
export type MoveMetaAilmentsAvgAggregateOutputType = {
    id: number | null;
};
export type MoveMetaAilmentsSumAggregateOutputType = {
    id: number | null;
};
export type MoveMetaAilmentsMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type MoveMetaAilmentsMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type MoveMetaAilmentsCountAggregateOutputType = {
    id: number;
    identifier: number;
    _all: number;
};
export type MoveMetaAilmentsAvgAggregateInputType = {
    id?: true;
};
export type MoveMetaAilmentsSumAggregateInputType = {
    id?: true;
};
export type MoveMetaAilmentsMinAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type MoveMetaAilmentsMaxAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type MoveMetaAilmentsCountAggregateInputType = {
    id?: true;
    identifier?: true;
    _all?: true;
};
export type MoveMetaAilmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MoveMetaAilments to aggregate.
     */
    where?: Prisma.MoveMetaAilmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaAilments to fetch.
     */
    orderBy?: Prisma.MoveMetaAilmentsOrderByWithRelationInput | Prisma.MoveMetaAilmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MoveMetaAilmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaAilments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaAilments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MoveMetaAilments
    **/
    _count?: true | MoveMetaAilmentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MoveMetaAilmentsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MoveMetaAilmentsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MoveMetaAilmentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MoveMetaAilmentsMaxAggregateInputType;
};
export type GetMoveMetaAilmentsAggregateType<T extends MoveMetaAilmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateMoveMetaAilments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMoveMetaAilments[P]> : Prisma.GetScalarType<T[P], AggregateMoveMetaAilments[P]>;
};
export type MoveMetaAilmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoveMetaAilmentsWhereInput;
    orderBy?: Prisma.MoveMetaAilmentsOrderByWithAggregationInput | Prisma.MoveMetaAilmentsOrderByWithAggregationInput[];
    by: Prisma.MoveMetaAilmentsScalarFieldEnum[] | Prisma.MoveMetaAilmentsScalarFieldEnum;
    having?: Prisma.MoveMetaAilmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MoveMetaAilmentsCountAggregateInputType | true;
    _avg?: MoveMetaAilmentsAvgAggregateInputType;
    _sum?: MoveMetaAilmentsSumAggregateInputType;
    _min?: MoveMetaAilmentsMinAggregateInputType;
    _max?: MoveMetaAilmentsMaxAggregateInputType;
};
export type MoveMetaAilmentsGroupByOutputType = {
    id: number;
    identifier: string;
    _count: MoveMetaAilmentsCountAggregateOutputType | null;
    _avg: MoveMetaAilmentsAvgAggregateOutputType | null;
    _sum: MoveMetaAilmentsSumAggregateOutputType | null;
    _min: MoveMetaAilmentsMinAggregateOutputType | null;
    _max: MoveMetaAilmentsMaxAggregateOutputType | null;
};
export type GetMoveMetaAilmentsGroupByPayload<T extends MoveMetaAilmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MoveMetaAilmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MoveMetaAilmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MoveMetaAilmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MoveMetaAilmentsGroupByOutputType[P]>;
}>>;
export type MoveMetaAilmentsWhereInput = {
    AND?: Prisma.MoveMetaAilmentsWhereInput | Prisma.MoveMetaAilmentsWhereInput[];
    OR?: Prisma.MoveMetaAilmentsWhereInput[];
    NOT?: Prisma.MoveMetaAilmentsWhereInput | Prisma.MoveMetaAilmentsWhereInput[];
    id?: Prisma.IntFilter<"MoveMetaAilments"> | number;
    identifier?: Prisma.StringFilter<"MoveMetaAilments"> | string;
    meta?: Prisma.MoveMetaListRelationFilter;
};
export type MoveMetaAilmentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    meta?: Prisma.MoveMetaOrderByRelationAggregateInput;
};
export type MoveMetaAilmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MoveMetaAilmentsWhereInput | Prisma.MoveMetaAilmentsWhereInput[];
    OR?: Prisma.MoveMetaAilmentsWhereInput[];
    NOT?: Prisma.MoveMetaAilmentsWhereInput | Prisma.MoveMetaAilmentsWhereInput[];
    identifier?: Prisma.StringFilter<"MoveMetaAilments"> | string;
    meta?: Prisma.MoveMetaListRelationFilter;
}, "id">;
export type MoveMetaAilmentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    _count?: Prisma.MoveMetaAilmentsCountOrderByAggregateInput;
    _avg?: Prisma.MoveMetaAilmentsAvgOrderByAggregateInput;
    _max?: Prisma.MoveMetaAilmentsMaxOrderByAggregateInput;
    _min?: Prisma.MoveMetaAilmentsMinOrderByAggregateInput;
    _sum?: Prisma.MoveMetaAilmentsSumOrderByAggregateInput;
};
export type MoveMetaAilmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.MoveMetaAilmentsScalarWhereWithAggregatesInput | Prisma.MoveMetaAilmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.MoveMetaAilmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MoveMetaAilmentsScalarWhereWithAggregatesInput | Prisma.MoveMetaAilmentsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MoveMetaAilments"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"MoveMetaAilments"> | string;
};
export type MoveMetaAilmentsCreateInput = {
    id: number;
    identifier: string;
    meta?: Prisma.MoveMetaCreateNestedManyWithoutMetaAilmentInput;
};
export type MoveMetaAilmentsUncheckedCreateInput = {
    id: number;
    identifier: string;
    meta?: Prisma.MoveMetaUncheckedCreateNestedManyWithoutMetaAilmentInput;
};
export type MoveMetaAilmentsUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    meta?: Prisma.MoveMetaUpdateManyWithoutMetaAilmentNestedInput;
};
export type MoveMetaAilmentsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    meta?: Prisma.MoveMetaUncheckedUpdateManyWithoutMetaAilmentNestedInput;
};
export type MoveMetaAilmentsCreateManyInput = {
    id: number;
    identifier: string;
};
export type MoveMetaAilmentsUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveMetaAilmentsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveMetaAilmentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveMetaAilmentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MoveMetaAilmentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveMetaAilmentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveMetaAilmentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MoveMetaAilmentsNullableScalarRelationFilter = {
    is?: Prisma.MoveMetaAilmentsWhereInput | null;
    isNot?: Prisma.MoveMetaAilmentsWhereInput | null;
};
export type MoveMetaAilmentsCreateNestedOneWithoutMetaInput = {
    create?: Prisma.XOR<Prisma.MoveMetaAilmentsCreateWithoutMetaInput, Prisma.MoveMetaAilmentsUncheckedCreateWithoutMetaInput>;
    connectOrCreate?: Prisma.MoveMetaAilmentsCreateOrConnectWithoutMetaInput;
    connect?: Prisma.MoveMetaAilmentsWhereUniqueInput;
};
export type MoveMetaAilmentsUpdateOneWithoutMetaNestedInput = {
    create?: Prisma.XOR<Prisma.MoveMetaAilmentsCreateWithoutMetaInput, Prisma.MoveMetaAilmentsUncheckedCreateWithoutMetaInput>;
    connectOrCreate?: Prisma.MoveMetaAilmentsCreateOrConnectWithoutMetaInput;
    upsert?: Prisma.MoveMetaAilmentsUpsertWithoutMetaInput;
    disconnect?: Prisma.MoveMetaAilmentsWhereInput | boolean;
    delete?: Prisma.MoveMetaAilmentsWhereInput | boolean;
    connect?: Prisma.MoveMetaAilmentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput, Prisma.MoveMetaAilmentsUpdateWithoutMetaInput>, Prisma.MoveMetaAilmentsUncheckedUpdateWithoutMetaInput>;
};
export type MoveMetaAilmentsCreateWithoutMetaInput = {
    id: number;
    identifier: string;
};
export type MoveMetaAilmentsUncheckedCreateWithoutMetaInput = {
    id: number;
    identifier: string;
};
export type MoveMetaAilmentsCreateOrConnectWithoutMetaInput = {
    where: Prisma.MoveMetaAilmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoveMetaAilmentsCreateWithoutMetaInput, Prisma.MoveMetaAilmentsUncheckedCreateWithoutMetaInput>;
};
export type MoveMetaAilmentsUpsertWithoutMetaInput = {
    update: Prisma.XOR<Prisma.MoveMetaAilmentsUpdateWithoutMetaInput, Prisma.MoveMetaAilmentsUncheckedUpdateWithoutMetaInput>;
    create: Prisma.XOR<Prisma.MoveMetaAilmentsCreateWithoutMetaInput, Prisma.MoveMetaAilmentsUncheckedCreateWithoutMetaInput>;
    where?: Prisma.MoveMetaAilmentsWhereInput;
};
export type MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput = {
    where?: Prisma.MoveMetaAilmentsWhereInput;
    data: Prisma.XOR<Prisma.MoveMetaAilmentsUpdateWithoutMetaInput, Prisma.MoveMetaAilmentsUncheckedUpdateWithoutMetaInput>;
};
export type MoveMetaAilmentsUpdateWithoutMetaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveMetaAilmentsUncheckedUpdateWithoutMetaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type MoveMetaAilmentsCountOutputType
 */
export type MoveMetaAilmentsCountOutputType = {
    meta: number;
};
export type MoveMetaAilmentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meta?: boolean | MoveMetaAilmentsCountOutputTypeCountMetaArgs;
};
/**
 * MoveMetaAilmentsCountOutputType without action
 */
export type MoveMetaAilmentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilmentsCountOutputType
     */
    select?: Prisma.MoveMetaAilmentsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MoveMetaAilmentsCountOutputType without action
 */
export type MoveMetaAilmentsCountOutputTypeCountMetaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoveMetaWhereInput;
};
export type MoveMetaAilmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    meta?: boolean | Prisma.MoveMetaAilments$metaArgs<ExtArgs>;
    _count?: boolean | Prisma.MoveMetaAilmentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moveMetaAilments"]>;
export type MoveMetaAilmentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["moveMetaAilments"]>;
export type MoveMetaAilmentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["moveMetaAilments"]>;
export type MoveMetaAilmentsSelectScalar = {
    id?: boolean;
    identifier?: boolean;
};
export type MoveMetaAilmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier", ExtArgs["result"]["moveMetaAilments"]>;
export type MoveMetaAilmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meta?: boolean | Prisma.MoveMetaAilments$metaArgs<ExtArgs>;
    _count?: boolean | Prisma.MoveMetaAilmentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MoveMetaAilmentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MoveMetaAilmentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MoveMetaAilmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MoveMetaAilments";
    objects: {
        meta: Prisma.$MoveMetaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
    }, ExtArgs["result"]["moveMetaAilments"]>;
    composites: {};
};
export type MoveMetaAilmentsGetPayload<S extends boolean | null | undefined | MoveMetaAilmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload, S>;
export type MoveMetaAilmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MoveMetaAilmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MoveMetaAilmentsCountAggregateInputType | true;
};
export interface MoveMetaAilmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MoveMetaAilments'];
        meta: {
            name: 'MoveMetaAilments';
        };
    };
    /**
     * Find zero or one MoveMetaAilments that matches the filter.
     * @param {MoveMetaAilmentsFindUniqueArgs} args - Arguments to find a MoveMetaAilments
     * @example
     * // Get one MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveMetaAilmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MoveMetaAilments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveMetaAilmentsFindUniqueOrThrowArgs} args - Arguments to find a MoveMetaAilments
     * @example
     * // Get one MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveMetaAilmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MoveMetaAilments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaAilmentsFindFirstArgs} args - Arguments to find a MoveMetaAilments
     * @example
     * // Get one MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveMetaAilmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, MoveMetaAilmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MoveMetaAilments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaAilmentsFindFirstOrThrowArgs} args - Arguments to find a MoveMetaAilments
     * @example
     * // Get one MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveMetaAilmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MoveMetaAilmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MoveMetaAilments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaAilmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.findMany()
     *
     * // Get first 10 MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const moveMetaAilmentsWithIdOnly = await prisma.moveMetaAilments.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MoveMetaAilmentsFindManyArgs>(args?: Prisma.SelectSubset<T, MoveMetaAilmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MoveMetaAilments.
     * @param {MoveMetaAilmentsCreateArgs} args - Arguments to create a MoveMetaAilments.
     * @example
     * // Create one MoveMetaAilments
     * const MoveMetaAilments = await prisma.moveMetaAilments.create({
     *   data: {
     *     // ... data to create a MoveMetaAilments
     *   }
     * })
     *
     */
    create<T extends MoveMetaAilmentsCreateArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsCreateArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MoveMetaAilments.
     * @param {MoveMetaAilmentsCreateManyArgs} args - Arguments to create many MoveMetaAilments.
     * @example
     * // Create many MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MoveMetaAilmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, MoveMetaAilmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MoveMetaAilments and returns the data saved in the database.
     * @param {MoveMetaAilmentsCreateManyAndReturnArgs} args - Arguments to create many MoveMetaAilments.
     * @example
     * // Create many MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MoveMetaAilments and only return the `id`
     * const moveMetaAilmentsWithIdOnly = await prisma.moveMetaAilments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MoveMetaAilmentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MoveMetaAilmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MoveMetaAilments.
     * @param {MoveMetaAilmentsDeleteArgs} args - Arguments to delete one MoveMetaAilments.
     * @example
     * // Delete one MoveMetaAilments
     * const MoveMetaAilments = await prisma.moveMetaAilments.delete({
     *   where: {
     *     // ... filter to delete one MoveMetaAilments
     *   }
     * })
     *
     */
    delete<T extends MoveMetaAilmentsDeleteArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MoveMetaAilments.
     * @param {MoveMetaAilmentsUpdateArgs} args - Arguments to update one MoveMetaAilments.
     * @example
     * // Update one MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MoveMetaAilmentsUpdateArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MoveMetaAilments.
     * @param {MoveMetaAilmentsDeleteManyArgs} args - Arguments to filter MoveMetaAilments to delete.
     * @example
     * // Delete a few MoveMetaAilments
     * const { count } = await prisma.moveMetaAilments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MoveMetaAilmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, MoveMetaAilmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MoveMetaAilments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaAilmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MoveMetaAilmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MoveMetaAilments and returns the data updated in the database.
     * @param {MoveMetaAilmentsUpdateManyAndReturnArgs} args - Arguments to update many MoveMetaAilments.
     * @example
     * // Update many MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MoveMetaAilments and only return the `id`
     * const moveMetaAilmentsWithIdOnly = await prisma.moveMetaAilments.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoveMetaAilmentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MoveMetaAilments.
     * @param {MoveMetaAilmentsUpsertArgs} args - Arguments to update or create a MoveMetaAilments.
     * @example
     * // Update or create a MoveMetaAilments
     * const moveMetaAilments = await prisma.moveMetaAilments.upsert({
     *   create: {
     *     // ... data to create a MoveMetaAilments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoveMetaAilments we want to update
     *   }
     * })
     */
    upsert<T extends MoveMetaAilmentsUpsertArgs>(args: Prisma.SelectSubset<T, MoveMetaAilmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__MoveMetaAilmentsClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaAilmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MoveMetaAilments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaAilmentsCountArgs} args - Arguments to filter MoveMetaAilments to count.
     * @example
     * // Count the number of MoveMetaAilments
     * const count = await prisma.moveMetaAilments.count({
     *   where: {
     *     // ... the filter for the MoveMetaAilments we want to count
     *   }
     * })
    **/
    count<T extends MoveMetaAilmentsCountArgs>(args?: Prisma.Subset<T, MoveMetaAilmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MoveMetaAilmentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MoveMetaAilments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaAilmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoveMetaAilmentsAggregateArgs>(args: Prisma.Subset<T, MoveMetaAilmentsAggregateArgs>): Prisma.PrismaPromise<GetMoveMetaAilmentsAggregateType<T>>;
    /**
     * Group by MoveMetaAilments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaAilmentsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MoveMetaAilmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MoveMetaAilmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: MoveMetaAilmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MoveMetaAilmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveMetaAilmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MoveMetaAilments model
     */
    readonly fields: MoveMetaAilmentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MoveMetaAilments.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MoveMetaAilmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    meta<T extends Prisma.MoveMetaAilments$metaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MoveMetaAilments$metaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MoveMetaAilments model
 */
export interface MoveMetaAilmentsFieldRefs {
    readonly id: Prisma.FieldRef<"MoveMetaAilments", 'Int'>;
    readonly identifier: Prisma.FieldRef<"MoveMetaAilments", 'String'>;
}
/**
 * MoveMetaAilments findUnique
 */
export type MoveMetaAilmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaAilments to fetch.
     */
    where: Prisma.MoveMetaAilmentsWhereUniqueInput;
};
/**
 * MoveMetaAilments findUniqueOrThrow
 */
export type MoveMetaAilmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaAilments to fetch.
     */
    where: Prisma.MoveMetaAilmentsWhereUniqueInput;
};
/**
 * MoveMetaAilments findFirst
 */
export type MoveMetaAilmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaAilments to fetch.
     */
    where?: Prisma.MoveMetaAilmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaAilments to fetch.
     */
    orderBy?: Prisma.MoveMetaAilmentsOrderByWithRelationInput | Prisma.MoveMetaAilmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoveMetaAilments.
     */
    cursor?: Prisma.MoveMetaAilmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaAilments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaAilments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveMetaAilments.
     */
    distinct?: Prisma.MoveMetaAilmentsScalarFieldEnum | Prisma.MoveMetaAilmentsScalarFieldEnum[];
};
/**
 * MoveMetaAilments findFirstOrThrow
 */
export type MoveMetaAilmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaAilments to fetch.
     */
    where?: Prisma.MoveMetaAilmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaAilments to fetch.
     */
    orderBy?: Prisma.MoveMetaAilmentsOrderByWithRelationInput | Prisma.MoveMetaAilmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoveMetaAilments.
     */
    cursor?: Prisma.MoveMetaAilmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaAilments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaAilments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveMetaAilments.
     */
    distinct?: Prisma.MoveMetaAilmentsScalarFieldEnum | Prisma.MoveMetaAilmentsScalarFieldEnum[];
};
/**
 * MoveMetaAilments findMany
 */
export type MoveMetaAilmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaAilments to fetch.
     */
    where?: Prisma.MoveMetaAilmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaAilments to fetch.
     */
    orderBy?: Prisma.MoveMetaAilmentsOrderByWithRelationInput | Prisma.MoveMetaAilmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MoveMetaAilments.
     */
    cursor?: Prisma.MoveMetaAilmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaAilments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaAilments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveMetaAilments.
     */
    distinct?: Prisma.MoveMetaAilmentsScalarFieldEnum | Prisma.MoveMetaAilmentsScalarFieldEnum[];
};
/**
 * MoveMetaAilments create
 */
export type MoveMetaAilmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * The data needed to create a MoveMetaAilments.
     */
    data: Prisma.XOR<Prisma.MoveMetaAilmentsCreateInput, Prisma.MoveMetaAilmentsUncheckedCreateInput>;
};
/**
 * MoveMetaAilments createMany
 */
export type MoveMetaAilmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoveMetaAilments.
     */
    data: Prisma.MoveMetaAilmentsCreateManyInput | Prisma.MoveMetaAilmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MoveMetaAilments createManyAndReturn
 */
export type MoveMetaAilmentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * The data used to create many MoveMetaAilments.
     */
    data: Prisma.MoveMetaAilmentsCreateManyInput | Prisma.MoveMetaAilmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MoveMetaAilments update
 */
export type MoveMetaAilmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * The data needed to update a MoveMetaAilments.
     */
    data: Prisma.XOR<Prisma.MoveMetaAilmentsUpdateInput, Prisma.MoveMetaAilmentsUncheckedUpdateInput>;
    /**
     * Choose, which MoveMetaAilments to update.
     */
    where: Prisma.MoveMetaAilmentsWhereUniqueInput;
};
/**
 * MoveMetaAilments updateMany
 */
export type MoveMetaAilmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MoveMetaAilments.
     */
    data: Prisma.XOR<Prisma.MoveMetaAilmentsUpdateManyMutationInput, Prisma.MoveMetaAilmentsUncheckedUpdateManyInput>;
    /**
     * Filter which MoveMetaAilments to update
     */
    where?: Prisma.MoveMetaAilmentsWhereInput;
    /**
     * Limit how many MoveMetaAilments to update.
     */
    limit?: number;
};
/**
 * MoveMetaAilments updateManyAndReturn
 */
export type MoveMetaAilmentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * The data used to update MoveMetaAilments.
     */
    data: Prisma.XOR<Prisma.MoveMetaAilmentsUpdateManyMutationInput, Prisma.MoveMetaAilmentsUncheckedUpdateManyInput>;
    /**
     * Filter which MoveMetaAilments to update
     */
    where?: Prisma.MoveMetaAilmentsWhereInput;
    /**
     * Limit how many MoveMetaAilments to update.
     */
    limit?: number;
};
/**
 * MoveMetaAilments upsert
 */
export type MoveMetaAilmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * The filter to search for the MoveMetaAilments to update in case it exists.
     */
    where: Prisma.MoveMetaAilmentsWhereUniqueInput;
    /**
     * In case the MoveMetaAilments found by the `where` argument doesn't exist, create a new MoveMetaAilments with this data.
     */
    create: Prisma.XOR<Prisma.MoveMetaAilmentsCreateInput, Prisma.MoveMetaAilmentsUncheckedCreateInput>;
    /**
     * In case the MoveMetaAilments was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MoveMetaAilmentsUpdateInput, Prisma.MoveMetaAilmentsUncheckedUpdateInput>;
};
/**
 * MoveMetaAilments delete
 */
export type MoveMetaAilmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
    /**
     * Filter which MoveMetaAilments to delete.
     */
    where: Prisma.MoveMetaAilmentsWhereUniqueInput;
};
/**
 * MoveMetaAilments deleteMany
 */
export type MoveMetaAilmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MoveMetaAilments to delete
     */
    where?: Prisma.MoveMetaAilmentsWhereInput;
    /**
     * Limit how many MoveMetaAilments to delete.
     */
    limit?: number;
};
/**
 * MoveMetaAilments.meta
 */
export type MoveMetaAilments$metaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMeta
     */
    select?: Prisma.MoveMetaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMeta
     */
    omit?: Prisma.MoveMetaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaInclude<ExtArgs> | null;
    where?: Prisma.MoveMetaWhereInput;
    orderBy?: Prisma.MoveMetaOrderByWithRelationInput | Prisma.MoveMetaOrderByWithRelationInput[];
    cursor?: Prisma.MoveMetaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MoveMetaScalarFieldEnum | Prisma.MoveMetaScalarFieldEnum[];
};
/**
 * MoveMetaAilments without action
 */
export type MoveMetaAilmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaAilments
     */
    select?: Prisma.MoveMetaAilmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaAilments
     */
    omit?: Prisma.MoveMetaAilmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaAilmentsInclude<ExtArgs> | null;
};
