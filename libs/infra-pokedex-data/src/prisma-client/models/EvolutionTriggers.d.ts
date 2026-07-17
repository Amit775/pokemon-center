import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model EvolutionTriggers
 * @@TypeGraphQL.type(name: "EvolutionTrigger")
 */
export type EvolutionTriggersModel = runtime.Types.Result.DefaultSelection<Prisma.$EvolutionTriggersPayload>;
export type AggregateEvolutionTriggers = {
    _count: EvolutionTriggersCountAggregateOutputType | null;
    _avg: EvolutionTriggersAvgAggregateOutputType | null;
    _sum: EvolutionTriggersSumAggregateOutputType | null;
    _min: EvolutionTriggersMinAggregateOutputType | null;
    _max: EvolutionTriggersMaxAggregateOutputType | null;
};
export type EvolutionTriggersAvgAggregateOutputType = {
    id: number | null;
};
export type EvolutionTriggersSumAggregateOutputType = {
    id: number | null;
};
export type EvolutionTriggersMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type EvolutionTriggersMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type EvolutionTriggersCountAggregateOutputType = {
    id: number;
    identifier: number;
    _all: number;
};
export type EvolutionTriggersAvgAggregateInputType = {
    id?: true;
};
export type EvolutionTriggersSumAggregateInputType = {
    id?: true;
};
export type EvolutionTriggersMinAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type EvolutionTriggersMaxAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type EvolutionTriggersCountAggregateInputType = {
    id?: true;
    identifier?: true;
    _all?: true;
};
export type EvolutionTriggersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EvolutionTriggers to aggregate.
     */
    where?: Prisma.EvolutionTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionTriggers to fetch.
     */
    orderBy?: Prisma.EvolutionTriggersOrderByWithRelationInput | Prisma.EvolutionTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EvolutionTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EvolutionTriggers
    **/
    _count?: true | EvolutionTriggersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EvolutionTriggersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EvolutionTriggersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EvolutionTriggersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EvolutionTriggersMaxAggregateInputType;
};
export type GetEvolutionTriggersAggregateType<T extends EvolutionTriggersAggregateArgs> = {
    [P in keyof T & keyof AggregateEvolutionTriggers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvolutionTriggers[P]> : Prisma.GetScalarType<T[P], AggregateEvolutionTriggers[P]>;
};
export type EvolutionTriggersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvolutionTriggersWhereInput;
    orderBy?: Prisma.EvolutionTriggersOrderByWithAggregationInput | Prisma.EvolutionTriggersOrderByWithAggregationInput[];
    by: Prisma.EvolutionTriggersScalarFieldEnum[] | Prisma.EvolutionTriggersScalarFieldEnum;
    having?: Prisma.EvolutionTriggersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvolutionTriggersCountAggregateInputType | true;
    _avg?: EvolutionTriggersAvgAggregateInputType;
    _sum?: EvolutionTriggersSumAggregateInputType;
    _min?: EvolutionTriggersMinAggregateInputType;
    _max?: EvolutionTriggersMaxAggregateInputType;
};
export type EvolutionTriggersGroupByOutputType = {
    id: number;
    identifier: string;
    _count: EvolutionTriggersCountAggregateOutputType | null;
    _avg: EvolutionTriggersAvgAggregateOutputType | null;
    _sum: EvolutionTriggersSumAggregateOutputType | null;
    _min: EvolutionTriggersMinAggregateOutputType | null;
    _max: EvolutionTriggersMaxAggregateOutputType | null;
};
export type GetEvolutionTriggersGroupByPayload<T extends EvolutionTriggersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvolutionTriggersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvolutionTriggersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvolutionTriggersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvolutionTriggersGroupByOutputType[P]>;
}>>;
export type EvolutionTriggersWhereInput = {
    AND?: Prisma.EvolutionTriggersWhereInput | Prisma.EvolutionTriggersWhereInput[];
    OR?: Prisma.EvolutionTriggersWhereInput[];
    NOT?: Prisma.EvolutionTriggersWhereInput | Prisma.EvolutionTriggersWhereInput[];
    id?: Prisma.IntFilter<"EvolutionTriggers"> | number;
    identifier?: Prisma.StringFilter<"EvolutionTriggers"> | string;
    evolution?: Prisma.PokemonEvolutionListRelationFilter;
};
export type EvolutionTriggersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    evolution?: Prisma.PokemonEvolutionOrderByRelationAggregateInput;
};
export type EvolutionTriggersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EvolutionTriggersWhereInput | Prisma.EvolutionTriggersWhereInput[];
    OR?: Prisma.EvolutionTriggersWhereInput[];
    NOT?: Prisma.EvolutionTriggersWhereInput | Prisma.EvolutionTriggersWhereInput[];
    identifier?: Prisma.StringFilter<"EvolutionTriggers"> | string;
    evolution?: Prisma.PokemonEvolutionListRelationFilter;
}, "id">;
export type EvolutionTriggersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    _count?: Prisma.EvolutionTriggersCountOrderByAggregateInput;
    _avg?: Prisma.EvolutionTriggersAvgOrderByAggregateInput;
    _max?: Prisma.EvolutionTriggersMaxOrderByAggregateInput;
    _min?: Prisma.EvolutionTriggersMinOrderByAggregateInput;
    _sum?: Prisma.EvolutionTriggersSumOrderByAggregateInput;
};
export type EvolutionTriggersScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvolutionTriggersScalarWhereWithAggregatesInput | Prisma.EvolutionTriggersScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvolutionTriggersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvolutionTriggersScalarWhereWithAggregatesInput | Prisma.EvolutionTriggersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"EvolutionTriggers"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"EvolutionTriggers"> | string;
};
export type EvolutionTriggersCreateInput = {
    id: number;
    identifier: string;
    evolution?: Prisma.PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput;
};
export type EvolutionTriggersUncheckedCreateInput = {
    id: number;
    identifier: string;
    evolution?: Prisma.PokemonEvolutionUncheckedCreateNestedManyWithoutEvolutionTriggerInput;
};
export type EvolutionTriggersUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    evolution?: Prisma.PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput;
};
export type EvolutionTriggersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    evolution?: Prisma.PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput;
};
export type EvolutionTriggersCreateManyInput = {
    id: number;
    identifier: string;
};
export type EvolutionTriggersUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvolutionTriggersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvolutionTriggersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type EvolutionTriggersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EvolutionTriggersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type EvolutionTriggersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type EvolutionTriggersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EvolutionTriggersScalarRelationFilter = {
    is?: Prisma.EvolutionTriggersWhereInput;
    isNot?: Prisma.EvolutionTriggersWhereInput;
};
export type EvolutionTriggersCreateNestedOneWithoutEvolutionInput = {
    create?: Prisma.XOR<Prisma.EvolutionTriggersCreateWithoutEvolutionInput, Prisma.EvolutionTriggersUncheckedCreateWithoutEvolutionInput>;
    connectOrCreate?: Prisma.EvolutionTriggersCreateOrConnectWithoutEvolutionInput;
    connect?: Prisma.EvolutionTriggersWhereUniqueInput;
};
export type EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput = {
    create?: Prisma.XOR<Prisma.EvolutionTriggersCreateWithoutEvolutionInput, Prisma.EvolutionTriggersUncheckedCreateWithoutEvolutionInput>;
    connectOrCreate?: Prisma.EvolutionTriggersCreateOrConnectWithoutEvolutionInput;
    upsert?: Prisma.EvolutionTriggersUpsertWithoutEvolutionInput;
    connect?: Prisma.EvolutionTriggersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput, Prisma.EvolutionTriggersUpdateWithoutEvolutionInput>, Prisma.EvolutionTriggersUncheckedUpdateWithoutEvolutionInput>;
};
export type EvolutionTriggersCreateWithoutEvolutionInput = {
    id: number;
    identifier: string;
};
export type EvolutionTriggersUncheckedCreateWithoutEvolutionInput = {
    id: number;
    identifier: string;
};
export type EvolutionTriggersCreateOrConnectWithoutEvolutionInput = {
    where: Prisma.EvolutionTriggersWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvolutionTriggersCreateWithoutEvolutionInput, Prisma.EvolutionTriggersUncheckedCreateWithoutEvolutionInput>;
};
export type EvolutionTriggersUpsertWithoutEvolutionInput = {
    update: Prisma.XOR<Prisma.EvolutionTriggersUpdateWithoutEvolutionInput, Prisma.EvolutionTriggersUncheckedUpdateWithoutEvolutionInput>;
    create: Prisma.XOR<Prisma.EvolutionTriggersCreateWithoutEvolutionInput, Prisma.EvolutionTriggersUncheckedCreateWithoutEvolutionInput>;
    where?: Prisma.EvolutionTriggersWhereInput;
};
export type EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput = {
    where?: Prisma.EvolutionTriggersWhereInput;
    data: Prisma.XOR<Prisma.EvolutionTriggersUpdateWithoutEvolutionInput, Prisma.EvolutionTriggersUncheckedUpdateWithoutEvolutionInput>;
};
export type EvolutionTriggersUpdateWithoutEvolutionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvolutionTriggersUncheckedUpdateWithoutEvolutionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type EvolutionTriggersCountOutputType
 */
export type EvolutionTriggersCountOutputType = {
    evolution: number;
};
export type EvolutionTriggersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evolution?: boolean | EvolutionTriggersCountOutputTypeCountEvolutionArgs;
};
/**
 * EvolutionTriggersCountOutputType without action
 */
export type EvolutionTriggersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggersCountOutputType
     */
    select?: Prisma.EvolutionTriggersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EvolutionTriggersCountOutputType without action
 */
export type EvolutionTriggersCountOutputTypeCountEvolutionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonEvolutionWhereInput;
};
export type EvolutionTriggersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    evolution?: boolean | Prisma.EvolutionTriggers$evolutionArgs<ExtArgs>;
    _count?: boolean | Prisma.EvolutionTriggersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evolutionTriggers"]>;
export type EvolutionTriggersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["evolutionTriggers"]>;
export type EvolutionTriggersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["evolutionTriggers"]>;
export type EvolutionTriggersSelectScalar = {
    id?: boolean;
    identifier?: boolean;
};
export type EvolutionTriggersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier", ExtArgs["result"]["evolutionTriggers"]>;
export type EvolutionTriggersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evolution?: boolean | Prisma.EvolutionTriggers$evolutionArgs<ExtArgs>;
    _count?: boolean | Prisma.EvolutionTriggersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvolutionTriggersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EvolutionTriggersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EvolutionTriggersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvolutionTriggers";
    objects: {
        evolution: Prisma.$PokemonEvolutionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
    }, ExtArgs["result"]["evolutionTriggers"]>;
    composites: {};
};
export type EvolutionTriggersGetPayload<S extends boolean | null | undefined | EvolutionTriggersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload, S>;
export type EvolutionTriggersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvolutionTriggersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvolutionTriggersCountAggregateInputType | true;
};
export interface EvolutionTriggersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvolutionTriggers'];
        meta: {
            name: 'EvolutionTriggers';
        };
    };
    /**
     * Find zero or one EvolutionTriggers that matches the filter.
     * @param {EvolutionTriggersFindUniqueArgs} args - Arguments to find a EvolutionTriggers
     * @example
     * // Get one EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvolutionTriggersFindUniqueArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EvolutionTriggers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvolutionTriggersFindUniqueOrThrowArgs} args - Arguments to find a EvolutionTriggers
     * @example
     * // Get one EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvolutionTriggersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EvolutionTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionTriggersFindFirstArgs} args - Arguments to find a EvolutionTriggers
     * @example
     * // Get one EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvolutionTriggersFindFirstArgs>(args?: Prisma.SelectSubset<T, EvolutionTriggersFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EvolutionTriggers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionTriggersFindFirstOrThrowArgs} args - Arguments to find a EvolutionTriggers
     * @example
     * // Get one EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvolutionTriggersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvolutionTriggersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EvolutionTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionTriggersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.findMany()
     *
     * // Get first 10 EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const evolutionTriggersWithIdOnly = await prisma.evolutionTriggers.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EvolutionTriggersFindManyArgs>(args?: Prisma.SelectSubset<T, EvolutionTriggersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EvolutionTriggers.
     * @param {EvolutionTriggersCreateArgs} args - Arguments to create a EvolutionTriggers.
     * @example
     * // Create one EvolutionTriggers
     * const EvolutionTriggers = await prisma.evolutionTriggers.create({
     *   data: {
     *     // ... data to create a EvolutionTriggers
     *   }
     * })
     *
     */
    create<T extends EvolutionTriggersCreateArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersCreateArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EvolutionTriggers.
     * @param {EvolutionTriggersCreateManyArgs} args - Arguments to create many EvolutionTriggers.
     * @example
     * // Create many EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EvolutionTriggersCreateManyArgs>(args?: Prisma.SelectSubset<T, EvolutionTriggersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EvolutionTriggers and returns the data saved in the database.
     * @param {EvolutionTriggersCreateManyAndReturnArgs} args - Arguments to create many EvolutionTriggers.
     * @example
     * // Create many EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EvolutionTriggers and only return the `id`
     * const evolutionTriggersWithIdOnly = await prisma.evolutionTriggers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EvolutionTriggersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvolutionTriggersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EvolutionTriggers.
     * @param {EvolutionTriggersDeleteArgs} args - Arguments to delete one EvolutionTriggers.
     * @example
     * // Delete one EvolutionTriggers
     * const EvolutionTriggers = await prisma.evolutionTriggers.delete({
     *   where: {
     *     // ... filter to delete one EvolutionTriggers
     *   }
     * })
     *
     */
    delete<T extends EvolutionTriggersDeleteArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersDeleteArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EvolutionTriggers.
     * @param {EvolutionTriggersUpdateArgs} args - Arguments to update one EvolutionTriggers.
     * @example
     * // Update one EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EvolutionTriggersUpdateArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersUpdateArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EvolutionTriggers.
     * @param {EvolutionTriggersDeleteManyArgs} args - Arguments to filter EvolutionTriggers to delete.
     * @example
     * // Delete a few EvolutionTriggers
     * const { count } = await prisma.evolutionTriggers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EvolutionTriggersDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvolutionTriggersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EvolutionTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionTriggersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EvolutionTriggersUpdateManyArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EvolutionTriggers and returns the data updated in the database.
     * @param {EvolutionTriggersUpdateManyAndReturnArgs} args - Arguments to update many EvolutionTriggers.
     * @example
     * // Update many EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EvolutionTriggers and only return the `id`
     * const evolutionTriggersWithIdOnly = await prisma.evolutionTriggers.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvolutionTriggersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EvolutionTriggers.
     * @param {EvolutionTriggersUpsertArgs} args - Arguments to update or create a EvolutionTriggers.
     * @example
     * // Update or create a EvolutionTriggers
     * const evolutionTriggers = await prisma.evolutionTriggers.upsert({
     *   create: {
     *     // ... data to create a EvolutionTriggers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvolutionTriggers we want to update
     *   }
     * })
     */
    upsert<T extends EvolutionTriggersUpsertArgs>(args: Prisma.SelectSubset<T, EvolutionTriggersUpsertArgs<ExtArgs>>): Prisma.Prisma__EvolutionTriggersClient<runtime.Types.Result.GetResult<Prisma.$EvolutionTriggersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EvolutionTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionTriggersCountArgs} args - Arguments to filter EvolutionTriggers to count.
     * @example
     * // Count the number of EvolutionTriggers
     * const count = await prisma.evolutionTriggers.count({
     *   where: {
     *     // ... the filter for the EvolutionTriggers we want to count
     *   }
     * })
    **/
    count<T extends EvolutionTriggersCountArgs>(args?: Prisma.Subset<T, EvolutionTriggersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvolutionTriggersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EvolutionTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionTriggersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvolutionTriggersAggregateArgs>(args: Prisma.Subset<T, EvolutionTriggersAggregateArgs>): Prisma.PrismaPromise<GetEvolutionTriggersAggregateType<T>>;
    /**
     * Group by EvolutionTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvolutionTriggersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EvolutionTriggersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvolutionTriggersGroupByArgs['orderBy'];
    } : {
        orderBy?: EvolutionTriggersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvolutionTriggersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvolutionTriggersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EvolutionTriggers model
     */
    readonly fields: EvolutionTriggersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EvolutionTriggers.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EvolutionTriggersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evolution<T extends Prisma.EvolutionTriggers$evolutionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvolutionTriggers$evolutionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonEvolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EvolutionTriggers model
 */
export interface EvolutionTriggersFieldRefs {
    readonly id: Prisma.FieldRef<"EvolutionTriggers", 'Int'>;
    readonly identifier: Prisma.FieldRef<"EvolutionTriggers", 'String'>;
}
/**
 * EvolutionTriggers findUnique
 */
export type EvolutionTriggersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionTriggers to fetch.
     */
    where: Prisma.EvolutionTriggersWhereUniqueInput;
};
/**
 * EvolutionTriggers findUniqueOrThrow
 */
export type EvolutionTriggersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionTriggers to fetch.
     */
    where: Prisma.EvolutionTriggersWhereUniqueInput;
};
/**
 * EvolutionTriggers findFirst
 */
export type EvolutionTriggersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionTriggers to fetch.
     */
    where?: Prisma.EvolutionTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionTriggers to fetch.
     */
    orderBy?: Prisma.EvolutionTriggersOrderByWithRelationInput | Prisma.EvolutionTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EvolutionTriggers.
     */
    cursor?: Prisma.EvolutionTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EvolutionTriggers.
     */
    distinct?: Prisma.EvolutionTriggersScalarFieldEnum | Prisma.EvolutionTriggersScalarFieldEnum[];
};
/**
 * EvolutionTriggers findFirstOrThrow
 */
export type EvolutionTriggersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionTriggers to fetch.
     */
    where?: Prisma.EvolutionTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionTriggers to fetch.
     */
    orderBy?: Prisma.EvolutionTriggersOrderByWithRelationInput | Prisma.EvolutionTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EvolutionTriggers.
     */
    cursor?: Prisma.EvolutionTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EvolutionTriggers.
     */
    distinct?: Prisma.EvolutionTriggersScalarFieldEnum | Prisma.EvolutionTriggersScalarFieldEnum[];
};
/**
 * EvolutionTriggers findMany
 */
export type EvolutionTriggersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * Filter, which EvolutionTriggers to fetch.
     */
    where?: Prisma.EvolutionTriggersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EvolutionTriggers to fetch.
     */
    orderBy?: Prisma.EvolutionTriggersOrderByWithRelationInput | Prisma.EvolutionTriggersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EvolutionTriggers.
     */
    cursor?: Prisma.EvolutionTriggersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EvolutionTriggers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EvolutionTriggers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EvolutionTriggers.
     */
    distinct?: Prisma.EvolutionTriggersScalarFieldEnum | Prisma.EvolutionTriggersScalarFieldEnum[];
};
/**
 * EvolutionTriggers create
 */
export type EvolutionTriggersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * The data needed to create a EvolutionTriggers.
     */
    data: Prisma.XOR<Prisma.EvolutionTriggersCreateInput, Prisma.EvolutionTriggersUncheckedCreateInput>;
};
/**
 * EvolutionTriggers createMany
 */
export type EvolutionTriggersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvolutionTriggers.
     */
    data: Prisma.EvolutionTriggersCreateManyInput | Prisma.EvolutionTriggersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EvolutionTriggers createManyAndReturn
 */
export type EvolutionTriggersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * The data used to create many EvolutionTriggers.
     */
    data: Prisma.EvolutionTriggersCreateManyInput | Prisma.EvolutionTriggersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EvolutionTriggers update
 */
export type EvolutionTriggersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * The data needed to update a EvolutionTriggers.
     */
    data: Prisma.XOR<Prisma.EvolutionTriggersUpdateInput, Prisma.EvolutionTriggersUncheckedUpdateInput>;
    /**
     * Choose, which EvolutionTriggers to update.
     */
    where: Prisma.EvolutionTriggersWhereUniqueInput;
};
/**
 * EvolutionTriggers updateMany
 */
export type EvolutionTriggersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EvolutionTriggers.
     */
    data: Prisma.XOR<Prisma.EvolutionTriggersUpdateManyMutationInput, Prisma.EvolutionTriggersUncheckedUpdateManyInput>;
    /**
     * Filter which EvolutionTriggers to update
     */
    where?: Prisma.EvolutionTriggersWhereInput;
    /**
     * Limit how many EvolutionTriggers to update.
     */
    limit?: number;
};
/**
 * EvolutionTriggers updateManyAndReturn
 */
export type EvolutionTriggersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * The data used to update EvolutionTriggers.
     */
    data: Prisma.XOR<Prisma.EvolutionTriggersUpdateManyMutationInput, Prisma.EvolutionTriggersUncheckedUpdateManyInput>;
    /**
     * Filter which EvolutionTriggers to update
     */
    where?: Prisma.EvolutionTriggersWhereInput;
    /**
     * Limit how many EvolutionTriggers to update.
     */
    limit?: number;
};
/**
 * EvolutionTriggers upsert
 */
export type EvolutionTriggersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * The filter to search for the EvolutionTriggers to update in case it exists.
     */
    where: Prisma.EvolutionTriggersWhereUniqueInput;
    /**
     * In case the EvolutionTriggers found by the `where` argument doesn't exist, create a new EvolutionTriggers with this data.
     */
    create: Prisma.XOR<Prisma.EvolutionTriggersCreateInput, Prisma.EvolutionTriggersUncheckedCreateInput>;
    /**
     * In case the EvolutionTriggers was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EvolutionTriggersUpdateInput, Prisma.EvolutionTriggersUncheckedUpdateInput>;
};
/**
 * EvolutionTriggers delete
 */
export type EvolutionTriggersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
    /**
     * Filter which EvolutionTriggers to delete.
     */
    where: Prisma.EvolutionTriggersWhereUniqueInput;
};
/**
 * EvolutionTriggers deleteMany
 */
export type EvolutionTriggersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EvolutionTriggers to delete
     */
    where?: Prisma.EvolutionTriggersWhereInput;
    /**
     * Limit how many EvolutionTriggers to delete.
     */
    limit?: number;
};
/**
 * EvolutionTriggers.evolution
 */
export type EvolutionTriggers$evolutionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PokemonEvolutionWhereInput;
    orderBy?: Prisma.PokemonEvolutionOrderByWithRelationInput | Prisma.PokemonEvolutionOrderByWithRelationInput[];
    cursor?: Prisma.PokemonEvolutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonEvolutionScalarFieldEnum | Prisma.PokemonEvolutionScalarFieldEnum[];
};
/**
 * EvolutionTriggers without action
 */
export type EvolutionTriggersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvolutionTriggers
     */
    select?: Prisma.EvolutionTriggersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EvolutionTriggers
     */
    omit?: Prisma.EvolutionTriggersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EvolutionTriggersInclude<ExtArgs> | null;
};
