import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MoveMetaCategories
 * @@TypeGraphQL.type(name: "MoveMetaCategory")
 */
export type MoveMetaCategoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$MoveMetaCategoriesPayload>;
export type AggregateMoveMetaCategories = {
    _count: MoveMetaCategoriesCountAggregateOutputType | null;
    _avg: MoveMetaCategoriesAvgAggregateOutputType | null;
    _sum: MoveMetaCategoriesSumAggregateOutputType | null;
    _min: MoveMetaCategoriesMinAggregateOutputType | null;
    _max: MoveMetaCategoriesMaxAggregateOutputType | null;
};
export type MoveMetaCategoriesAvgAggregateOutputType = {
    id: number | null;
};
export type MoveMetaCategoriesSumAggregateOutputType = {
    id: number | null;
};
export type MoveMetaCategoriesMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type MoveMetaCategoriesMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type MoveMetaCategoriesCountAggregateOutputType = {
    id: number;
    identifier: number;
    _all: number;
};
export type MoveMetaCategoriesAvgAggregateInputType = {
    id?: true;
};
export type MoveMetaCategoriesSumAggregateInputType = {
    id?: true;
};
export type MoveMetaCategoriesMinAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type MoveMetaCategoriesMaxAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type MoveMetaCategoriesCountAggregateInputType = {
    id?: true;
    identifier?: true;
    _all?: true;
};
export type MoveMetaCategoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MoveMetaCategories to aggregate.
     */
    where?: Prisma.MoveMetaCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaCategories to fetch.
     */
    orderBy?: Prisma.MoveMetaCategoriesOrderByWithRelationInput | Prisma.MoveMetaCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MoveMetaCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MoveMetaCategories
    **/
    _count?: true | MoveMetaCategoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MoveMetaCategoriesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MoveMetaCategoriesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MoveMetaCategoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MoveMetaCategoriesMaxAggregateInputType;
};
export type GetMoveMetaCategoriesAggregateType<T extends MoveMetaCategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateMoveMetaCategories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMoveMetaCategories[P]> : Prisma.GetScalarType<T[P], AggregateMoveMetaCategories[P]>;
};
export type MoveMetaCategoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoveMetaCategoriesWhereInput;
    orderBy?: Prisma.MoveMetaCategoriesOrderByWithAggregationInput | Prisma.MoveMetaCategoriesOrderByWithAggregationInput[];
    by: Prisma.MoveMetaCategoriesScalarFieldEnum[] | Prisma.MoveMetaCategoriesScalarFieldEnum;
    having?: Prisma.MoveMetaCategoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MoveMetaCategoriesCountAggregateInputType | true;
    _avg?: MoveMetaCategoriesAvgAggregateInputType;
    _sum?: MoveMetaCategoriesSumAggregateInputType;
    _min?: MoveMetaCategoriesMinAggregateInputType;
    _max?: MoveMetaCategoriesMaxAggregateInputType;
};
export type MoveMetaCategoriesGroupByOutputType = {
    id: number;
    identifier: string;
    _count: MoveMetaCategoriesCountAggregateOutputType | null;
    _avg: MoveMetaCategoriesAvgAggregateOutputType | null;
    _sum: MoveMetaCategoriesSumAggregateOutputType | null;
    _min: MoveMetaCategoriesMinAggregateOutputType | null;
    _max: MoveMetaCategoriesMaxAggregateOutputType | null;
};
export type GetMoveMetaCategoriesGroupByPayload<T extends MoveMetaCategoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MoveMetaCategoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MoveMetaCategoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MoveMetaCategoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MoveMetaCategoriesGroupByOutputType[P]>;
}>>;
export type MoveMetaCategoriesWhereInput = {
    AND?: Prisma.MoveMetaCategoriesWhereInput | Prisma.MoveMetaCategoriesWhereInput[];
    OR?: Prisma.MoveMetaCategoriesWhereInput[];
    NOT?: Prisma.MoveMetaCategoriesWhereInput | Prisma.MoveMetaCategoriesWhereInput[];
    id?: Prisma.IntFilter<"MoveMetaCategories"> | number;
    identifier?: Prisma.StringFilter<"MoveMetaCategories"> | string;
    meta?: Prisma.MoveMetaListRelationFilter;
};
export type MoveMetaCategoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    meta?: Prisma.MoveMetaOrderByRelationAggregateInput;
};
export type MoveMetaCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MoveMetaCategoriesWhereInput | Prisma.MoveMetaCategoriesWhereInput[];
    OR?: Prisma.MoveMetaCategoriesWhereInput[];
    NOT?: Prisma.MoveMetaCategoriesWhereInput | Prisma.MoveMetaCategoriesWhereInput[];
    identifier?: Prisma.StringFilter<"MoveMetaCategories"> | string;
    meta?: Prisma.MoveMetaListRelationFilter;
}, "id">;
export type MoveMetaCategoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    _count?: Prisma.MoveMetaCategoriesCountOrderByAggregateInput;
    _avg?: Prisma.MoveMetaCategoriesAvgOrderByAggregateInput;
    _max?: Prisma.MoveMetaCategoriesMaxOrderByAggregateInput;
    _min?: Prisma.MoveMetaCategoriesMinOrderByAggregateInput;
    _sum?: Prisma.MoveMetaCategoriesSumOrderByAggregateInput;
};
export type MoveMetaCategoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.MoveMetaCategoriesScalarWhereWithAggregatesInput | Prisma.MoveMetaCategoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.MoveMetaCategoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MoveMetaCategoriesScalarWhereWithAggregatesInput | Prisma.MoveMetaCategoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MoveMetaCategories"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"MoveMetaCategories"> | string;
};
export type MoveMetaCategoriesCreateInput = {
    id: number;
    identifier: string;
    meta?: Prisma.MoveMetaCreateNestedManyWithoutMetaCategoryInput;
};
export type MoveMetaCategoriesUncheckedCreateInput = {
    id: number;
    identifier: string;
    meta?: Prisma.MoveMetaUncheckedCreateNestedManyWithoutMetaCategoryInput;
};
export type MoveMetaCategoriesUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    meta?: Prisma.MoveMetaUpdateManyWithoutMetaCategoryNestedInput;
};
export type MoveMetaCategoriesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    meta?: Prisma.MoveMetaUncheckedUpdateManyWithoutMetaCategoryNestedInput;
};
export type MoveMetaCategoriesCreateManyInput = {
    id: number;
    identifier: string;
};
export type MoveMetaCategoriesUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveMetaCategoriesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveMetaCategoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveMetaCategoriesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MoveMetaCategoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveMetaCategoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveMetaCategoriesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MoveMetaCategoriesScalarRelationFilter = {
    is?: Prisma.MoveMetaCategoriesWhereInput;
    isNot?: Prisma.MoveMetaCategoriesWhereInput;
};
export type MoveMetaCategoriesCreateNestedOneWithoutMetaInput = {
    create?: Prisma.XOR<Prisma.MoveMetaCategoriesCreateWithoutMetaInput, Prisma.MoveMetaCategoriesUncheckedCreateWithoutMetaInput>;
    connectOrCreate?: Prisma.MoveMetaCategoriesCreateOrConnectWithoutMetaInput;
    connect?: Prisma.MoveMetaCategoriesWhereUniqueInput;
};
export type MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput = {
    create?: Prisma.XOR<Prisma.MoveMetaCategoriesCreateWithoutMetaInput, Prisma.MoveMetaCategoriesUncheckedCreateWithoutMetaInput>;
    connectOrCreate?: Prisma.MoveMetaCategoriesCreateOrConnectWithoutMetaInput;
    upsert?: Prisma.MoveMetaCategoriesUpsertWithoutMetaInput;
    connect?: Prisma.MoveMetaCategoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput, Prisma.MoveMetaCategoriesUpdateWithoutMetaInput>, Prisma.MoveMetaCategoriesUncheckedUpdateWithoutMetaInput>;
};
export type MoveMetaCategoriesCreateWithoutMetaInput = {
    id: number;
    identifier: string;
};
export type MoveMetaCategoriesUncheckedCreateWithoutMetaInput = {
    id: number;
    identifier: string;
};
export type MoveMetaCategoriesCreateOrConnectWithoutMetaInput = {
    where: Prisma.MoveMetaCategoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoveMetaCategoriesCreateWithoutMetaInput, Prisma.MoveMetaCategoriesUncheckedCreateWithoutMetaInput>;
};
export type MoveMetaCategoriesUpsertWithoutMetaInput = {
    update: Prisma.XOR<Prisma.MoveMetaCategoriesUpdateWithoutMetaInput, Prisma.MoveMetaCategoriesUncheckedUpdateWithoutMetaInput>;
    create: Prisma.XOR<Prisma.MoveMetaCategoriesCreateWithoutMetaInput, Prisma.MoveMetaCategoriesUncheckedCreateWithoutMetaInput>;
    where?: Prisma.MoveMetaCategoriesWhereInput;
};
export type MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput = {
    where?: Prisma.MoveMetaCategoriesWhereInput;
    data: Prisma.XOR<Prisma.MoveMetaCategoriesUpdateWithoutMetaInput, Prisma.MoveMetaCategoriesUncheckedUpdateWithoutMetaInput>;
};
export type MoveMetaCategoriesUpdateWithoutMetaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveMetaCategoriesUncheckedUpdateWithoutMetaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type MoveMetaCategoriesCountOutputType
 */
export type MoveMetaCategoriesCountOutputType = {
    meta: number;
};
export type MoveMetaCategoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meta?: boolean | MoveMetaCategoriesCountOutputTypeCountMetaArgs;
};
/**
 * MoveMetaCategoriesCountOutputType without action
 */
export type MoveMetaCategoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategoriesCountOutputType
     */
    select?: Prisma.MoveMetaCategoriesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MoveMetaCategoriesCountOutputType without action
 */
export type MoveMetaCategoriesCountOutputTypeCountMetaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoveMetaWhereInput;
};
export type MoveMetaCategoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    meta?: boolean | Prisma.MoveMetaCategories$metaArgs<ExtArgs>;
    _count?: boolean | Prisma.MoveMetaCategoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moveMetaCategories"]>;
export type MoveMetaCategoriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["moveMetaCategories"]>;
export type MoveMetaCategoriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["moveMetaCategories"]>;
export type MoveMetaCategoriesSelectScalar = {
    id?: boolean;
    identifier?: boolean;
};
export type MoveMetaCategoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier", ExtArgs["result"]["moveMetaCategories"]>;
export type MoveMetaCategoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    meta?: boolean | Prisma.MoveMetaCategories$metaArgs<ExtArgs>;
    _count?: boolean | Prisma.MoveMetaCategoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MoveMetaCategoriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MoveMetaCategoriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MoveMetaCategoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MoveMetaCategories";
    objects: {
        meta: Prisma.$MoveMetaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
    }, ExtArgs["result"]["moveMetaCategories"]>;
    composites: {};
};
export type MoveMetaCategoriesGetPayload<S extends boolean | null | undefined | MoveMetaCategoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload, S>;
export type MoveMetaCategoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MoveMetaCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MoveMetaCategoriesCountAggregateInputType | true;
};
export interface MoveMetaCategoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MoveMetaCategories'];
        meta: {
            name: 'MoveMetaCategories';
        };
    };
    /**
     * Find zero or one MoveMetaCategories that matches the filter.
     * @param {MoveMetaCategoriesFindUniqueArgs} args - Arguments to find a MoveMetaCategories
     * @example
     * // Get one MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveMetaCategoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MoveMetaCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveMetaCategoriesFindUniqueOrThrowArgs} args - Arguments to find a MoveMetaCategories
     * @example
     * // Get one MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveMetaCategoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MoveMetaCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaCategoriesFindFirstArgs} args - Arguments to find a MoveMetaCategories
     * @example
     * // Get one MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveMetaCategoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, MoveMetaCategoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MoveMetaCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaCategoriesFindFirstOrThrowArgs} args - Arguments to find a MoveMetaCategories
     * @example
     * // Get one MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveMetaCategoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MoveMetaCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MoveMetaCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.findMany()
     *
     * // Get first 10 MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const moveMetaCategoriesWithIdOnly = await prisma.moveMetaCategories.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MoveMetaCategoriesFindManyArgs>(args?: Prisma.SelectSubset<T, MoveMetaCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MoveMetaCategories.
     * @param {MoveMetaCategoriesCreateArgs} args - Arguments to create a MoveMetaCategories.
     * @example
     * // Create one MoveMetaCategories
     * const MoveMetaCategories = await prisma.moveMetaCategories.create({
     *   data: {
     *     // ... data to create a MoveMetaCategories
     *   }
     * })
     *
     */
    create<T extends MoveMetaCategoriesCreateArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesCreateArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MoveMetaCategories.
     * @param {MoveMetaCategoriesCreateManyArgs} args - Arguments to create many MoveMetaCategories.
     * @example
     * // Create many MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MoveMetaCategoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, MoveMetaCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MoveMetaCategories and returns the data saved in the database.
     * @param {MoveMetaCategoriesCreateManyAndReturnArgs} args - Arguments to create many MoveMetaCategories.
     * @example
     * // Create many MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MoveMetaCategories and only return the `id`
     * const moveMetaCategoriesWithIdOnly = await prisma.moveMetaCategories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MoveMetaCategoriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MoveMetaCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MoveMetaCategories.
     * @param {MoveMetaCategoriesDeleteArgs} args - Arguments to delete one MoveMetaCategories.
     * @example
     * // Delete one MoveMetaCategories
     * const MoveMetaCategories = await prisma.moveMetaCategories.delete({
     *   where: {
     *     // ... filter to delete one MoveMetaCategories
     *   }
     * })
     *
     */
    delete<T extends MoveMetaCategoriesDeleteArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MoveMetaCategories.
     * @param {MoveMetaCategoriesUpdateArgs} args - Arguments to update one MoveMetaCategories.
     * @example
     * // Update one MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MoveMetaCategoriesUpdateArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MoveMetaCategories.
     * @param {MoveMetaCategoriesDeleteManyArgs} args - Arguments to filter MoveMetaCategories to delete.
     * @example
     * // Delete a few MoveMetaCategories
     * const { count } = await prisma.moveMetaCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MoveMetaCategoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, MoveMetaCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MoveMetaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MoveMetaCategoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MoveMetaCategories and returns the data updated in the database.
     * @param {MoveMetaCategoriesUpdateManyAndReturnArgs} args - Arguments to update many MoveMetaCategories.
     * @example
     * // Update many MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MoveMetaCategories and only return the `id`
     * const moveMetaCategoriesWithIdOnly = await prisma.moveMetaCategories.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoveMetaCategoriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MoveMetaCategories.
     * @param {MoveMetaCategoriesUpsertArgs} args - Arguments to update or create a MoveMetaCategories.
     * @example
     * // Update or create a MoveMetaCategories
     * const moveMetaCategories = await prisma.moveMetaCategories.upsert({
     *   create: {
     *     // ... data to create a MoveMetaCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoveMetaCategories we want to update
     *   }
     * })
     */
    upsert<T extends MoveMetaCategoriesUpsertArgs>(args: Prisma.SelectSubset<T, MoveMetaCategoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__MoveMetaCategoriesClient<runtime.Types.Result.GetResult<Prisma.$MoveMetaCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MoveMetaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaCategoriesCountArgs} args - Arguments to filter MoveMetaCategories to count.
     * @example
     * // Count the number of MoveMetaCategories
     * const count = await prisma.moveMetaCategories.count({
     *   where: {
     *     // ... the filter for the MoveMetaCategories we want to count
     *   }
     * })
    **/
    count<T extends MoveMetaCategoriesCountArgs>(args?: Prisma.Subset<T, MoveMetaCategoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MoveMetaCategoriesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MoveMetaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoveMetaCategoriesAggregateArgs>(args: Prisma.Subset<T, MoveMetaCategoriesAggregateArgs>): Prisma.PrismaPromise<GetMoveMetaCategoriesAggregateType<T>>;
    /**
     * Group by MoveMetaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveMetaCategoriesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MoveMetaCategoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MoveMetaCategoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: MoveMetaCategoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MoveMetaCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveMetaCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MoveMetaCategories model
     */
    readonly fields: MoveMetaCategoriesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MoveMetaCategories.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MoveMetaCategoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    meta<T extends Prisma.MoveMetaCategories$metaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MoveMetaCategories$metaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MoveMetaCategories model
 */
export interface MoveMetaCategoriesFieldRefs {
    readonly id: Prisma.FieldRef<"MoveMetaCategories", 'Int'>;
    readonly identifier: Prisma.FieldRef<"MoveMetaCategories", 'String'>;
}
/**
 * MoveMetaCategories findUnique
 */
export type MoveMetaCategoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaCategories to fetch.
     */
    where: Prisma.MoveMetaCategoriesWhereUniqueInput;
};
/**
 * MoveMetaCategories findUniqueOrThrow
 */
export type MoveMetaCategoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaCategories to fetch.
     */
    where: Prisma.MoveMetaCategoriesWhereUniqueInput;
};
/**
 * MoveMetaCategories findFirst
 */
export type MoveMetaCategoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaCategories to fetch.
     */
    where?: Prisma.MoveMetaCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaCategories to fetch.
     */
    orderBy?: Prisma.MoveMetaCategoriesOrderByWithRelationInput | Prisma.MoveMetaCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoveMetaCategories.
     */
    cursor?: Prisma.MoveMetaCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveMetaCategories.
     */
    distinct?: Prisma.MoveMetaCategoriesScalarFieldEnum | Prisma.MoveMetaCategoriesScalarFieldEnum[];
};
/**
 * MoveMetaCategories findFirstOrThrow
 */
export type MoveMetaCategoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaCategories to fetch.
     */
    where?: Prisma.MoveMetaCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaCategories to fetch.
     */
    orderBy?: Prisma.MoveMetaCategoriesOrderByWithRelationInput | Prisma.MoveMetaCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoveMetaCategories.
     */
    cursor?: Prisma.MoveMetaCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveMetaCategories.
     */
    distinct?: Prisma.MoveMetaCategoriesScalarFieldEnum | Prisma.MoveMetaCategoriesScalarFieldEnum[];
};
/**
 * MoveMetaCategories findMany
 */
export type MoveMetaCategoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveMetaCategories to fetch.
     */
    where?: Prisma.MoveMetaCategoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveMetaCategories to fetch.
     */
    orderBy?: Prisma.MoveMetaCategoriesOrderByWithRelationInput | Prisma.MoveMetaCategoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MoveMetaCategories.
     */
    cursor?: Prisma.MoveMetaCategoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveMetaCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveMetaCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveMetaCategories.
     */
    distinct?: Prisma.MoveMetaCategoriesScalarFieldEnum | Prisma.MoveMetaCategoriesScalarFieldEnum[];
};
/**
 * MoveMetaCategories create
 */
export type MoveMetaCategoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a MoveMetaCategories.
     */
    data: Prisma.XOR<Prisma.MoveMetaCategoriesCreateInput, Prisma.MoveMetaCategoriesUncheckedCreateInput>;
};
/**
 * MoveMetaCategories createMany
 */
export type MoveMetaCategoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoveMetaCategories.
     */
    data: Prisma.MoveMetaCategoriesCreateManyInput | Prisma.MoveMetaCategoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MoveMetaCategories createManyAndReturn
 */
export type MoveMetaCategoriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many MoveMetaCategories.
     */
    data: Prisma.MoveMetaCategoriesCreateManyInput | Prisma.MoveMetaCategoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MoveMetaCategories update
 */
export type MoveMetaCategoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a MoveMetaCategories.
     */
    data: Prisma.XOR<Prisma.MoveMetaCategoriesUpdateInput, Prisma.MoveMetaCategoriesUncheckedUpdateInput>;
    /**
     * Choose, which MoveMetaCategories to update.
     */
    where: Prisma.MoveMetaCategoriesWhereUniqueInput;
};
/**
 * MoveMetaCategories updateMany
 */
export type MoveMetaCategoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MoveMetaCategories.
     */
    data: Prisma.XOR<Prisma.MoveMetaCategoriesUpdateManyMutationInput, Prisma.MoveMetaCategoriesUncheckedUpdateManyInput>;
    /**
     * Filter which MoveMetaCategories to update
     */
    where?: Prisma.MoveMetaCategoriesWhereInput;
    /**
     * Limit how many MoveMetaCategories to update.
     */
    limit?: number;
};
/**
 * MoveMetaCategories updateManyAndReturn
 */
export type MoveMetaCategoriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * The data used to update MoveMetaCategories.
     */
    data: Prisma.XOR<Prisma.MoveMetaCategoriesUpdateManyMutationInput, Prisma.MoveMetaCategoriesUncheckedUpdateManyInput>;
    /**
     * Filter which MoveMetaCategories to update
     */
    where?: Prisma.MoveMetaCategoriesWhereInput;
    /**
     * Limit how many MoveMetaCategories to update.
     */
    limit?: number;
};
/**
 * MoveMetaCategories upsert
 */
export type MoveMetaCategoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the MoveMetaCategories to update in case it exists.
     */
    where: Prisma.MoveMetaCategoriesWhereUniqueInput;
    /**
     * In case the MoveMetaCategories found by the `where` argument doesn't exist, create a new MoveMetaCategories with this data.
     */
    create: Prisma.XOR<Prisma.MoveMetaCategoriesCreateInput, Prisma.MoveMetaCategoriesUncheckedCreateInput>;
    /**
     * In case the MoveMetaCategories was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MoveMetaCategoriesUpdateInput, Prisma.MoveMetaCategoriesUncheckedUpdateInput>;
};
/**
 * MoveMetaCategories delete
 */
export type MoveMetaCategoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
    /**
     * Filter which MoveMetaCategories to delete.
     */
    where: Prisma.MoveMetaCategoriesWhereUniqueInput;
};
/**
 * MoveMetaCategories deleteMany
 */
export type MoveMetaCategoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MoveMetaCategories to delete
     */
    where?: Prisma.MoveMetaCategoriesWhereInput;
    /**
     * Limit how many MoveMetaCategories to delete.
     */
    limit?: number;
};
/**
 * MoveMetaCategories.meta
 */
export type MoveMetaCategories$metaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * MoveMetaCategories without action
 */
export type MoveMetaCategoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveMetaCategories
     */
    select?: Prisma.MoveMetaCategoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveMetaCategories
     */
    omit?: Prisma.MoveMetaCategoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveMetaCategoriesInclude<ExtArgs> | null;
};
