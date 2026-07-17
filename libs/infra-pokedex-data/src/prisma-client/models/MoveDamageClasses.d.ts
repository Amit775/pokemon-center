import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MoveDamageClasses
 * @@TypeGraphQL.type(name: "MoveDamageClass")
 */
export type MoveDamageClassesModel = runtime.Types.Result.DefaultSelection<Prisma.$MoveDamageClassesPayload>;
export type AggregateMoveDamageClasses = {
    _count: MoveDamageClassesCountAggregateOutputType | null;
    _avg: MoveDamageClassesAvgAggregateOutputType | null;
    _sum: MoveDamageClassesSumAggregateOutputType | null;
    _min: MoveDamageClassesMinAggregateOutputType | null;
    _max: MoveDamageClassesMaxAggregateOutputType | null;
};
export type MoveDamageClassesAvgAggregateOutputType = {
    id: number | null;
};
export type MoveDamageClassesSumAggregateOutputType = {
    id: number | null;
};
export type MoveDamageClassesMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type MoveDamageClassesMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
};
export type MoveDamageClassesCountAggregateOutputType = {
    id: number;
    identifier: number;
    _all: number;
};
export type MoveDamageClassesAvgAggregateInputType = {
    id?: true;
};
export type MoveDamageClassesSumAggregateInputType = {
    id?: true;
};
export type MoveDamageClassesMinAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type MoveDamageClassesMaxAggregateInputType = {
    id?: true;
    identifier?: true;
};
export type MoveDamageClassesCountAggregateInputType = {
    id?: true;
    identifier?: true;
    _all?: true;
};
export type MoveDamageClassesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MoveDamageClasses to aggregate.
     */
    where?: Prisma.MoveDamageClassesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveDamageClasses to fetch.
     */
    orderBy?: Prisma.MoveDamageClassesOrderByWithRelationInput | Prisma.MoveDamageClassesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MoveDamageClassesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveDamageClasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveDamageClasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MoveDamageClasses
    **/
    _count?: true | MoveDamageClassesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MoveDamageClassesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MoveDamageClassesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MoveDamageClassesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MoveDamageClassesMaxAggregateInputType;
};
export type GetMoveDamageClassesAggregateType<T extends MoveDamageClassesAggregateArgs> = {
    [P in keyof T & keyof AggregateMoveDamageClasses]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMoveDamageClasses[P]> : Prisma.GetScalarType<T[P], AggregateMoveDamageClasses[P]>;
};
export type MoveDamageClassesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoveDamageClassesWhereInput;
    orderBy?: Prisma.MoveDamageClassesOrderByWithAggregationInput | Prisma.MoveDamageClassesOrderByWithAggregationInput[];
    by: Prisma.MoveDamageClassesScalarFieldEnum[] | Prisma.MoveDamageClassesScalarFieldEnum;
    having?: Prisma.MoveDamageClassesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MoveDamageClassesCountAggregateInputType | true;
    _avg?: MoveDamageClassesAvgAggregateInputType;
    _sum?: MoveDamageClassesSumAggregateInputType;
    _min?: MoveDamageClassesMinAggregateInputType;
    _max?: MoveDamageClassesMaxAggregateInputType;
};
export type MoveDamageClassesGroupByOutputType = {
    id: number;
    identifier: string;
    _count: MoveDamageClassesCountAggregateOutputType | null;
    _avg: MoveDamageClassesAvgAggregateOutputType | null;
    _sum: MoveDamageClassesSumAggregateOutputType | null;
    _min: MoveDamageClassesMinAggregateOutputType | null;
    _max: MoveDamageClassesMaxAggregateOutputType | null;
};
export type GetMoveDamageClassesGroupByPayload<T extends MoveDamageClassesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MoveDamageClassesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MoveDamageClassesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MoveDamageClassesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MoveDamageClassesGroupByOutputType[P]>;
}>>;
export type MoveDamageClassesWhereInput = {
    AND?: Prisma.MoveDamageClassesWhereInput | Prisma.MoveDamageClassesWhereInput[];
    OR?: Prisma.MoveDamageClassesWhereInput[];
    NOT?: Prisma.MoveDamageClassesWhereInput | Prisma.MoveDamageClassesWhereInput[];
    id?: Prisma.IntFilter<"MoveDamageClasses"> | number;
    identifier?: Prisma.StringFilter<"MoveDamageClasses"> | string;
    moves?: Prisma.MovesListRelationFilter;
    types?: Prisma.TypesListRelationFilter;
};
export type MoveDamageClassesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    moves?: Prisma.MovesOrderByRelationAggregateInput;
    types?: Prisma.TypesOrderByRelationAggregateInput;
};
export type MoveDamageClassesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MoveDamageClassesWhereInput | Prisma.MoveDamageClassesWhereInput[];
    OR?: Prisma.MoveDamageClassesWhereInput[];
    NOT?: Prisma.MoveDamageClassesWhereInput | Prisma.MoveDamageClassesWhereInput[];
    identifier?: Prisma.StringFilter<"MoveDamageClasses"> | string;
    moves?: Prisma.MovesListRelationFilter;
    types?: Prisma.TypesListRelationFilter;
}, "id">;
export type MoveDamageClassesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    _count?: Prisma.MoveDamageClassesCountOrderByAggregateInput;
    _avg?: Prisma.MoveDamageClassesAvgOrderByAggregateInput;
    _max?: Prisma.MoveDamageClassesMaxOrderByAggregateInput;
    _min?: Prisma.MoveDamageClassesMinOrderByAggregateInput;
    _sum?: Prisma.MoveDamageClassesSumOrderByAggregateInput;
};
export type MoveDamageClassesScalarWhereWithAggregatesInput = {
    AND?: Prisma.MoveDamageClassesScalarWhereWithAggregatesInput | Prisma.MoveDamageClassesScalarWhereWithAggregatesInput[];
    OR?: Prisma.MoveDamageClassesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MoveDamageClassesScalarWhereWithAggregatesInput | Prisma.MoveDamageClassesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MoveDamageClasses"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"MoveDamageClasses"> | string;
};
export type MoveDamageClassesCreateInput = {
    id: number;
    identifier: string;
    moves?: Prisma.MovesCreateNestedManyWithoutDamageClassInput;
    types?: Prisma.TypesCreateNestedManyWithoutDamageClassInput;
};
export type MoveDamageClassesUncheckedCreateInput = {
    id: number;
    identifier: string;
    moves?: Prisma.MovesUncheckedCreateNestedManyWithoutDamageClassInput;
    types?: Prisma.TypesUncheckedCreateNestedManyWithoutDamageClassInput;
};
export type MoveDamageClassesUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    moves?: Prisma.MovesUpdateManyWithoutDamageClassNestedInput;
    types?: Prisma.TypesUpdateManyWithoutDamageClassNestedInput;
};
export type MoveDamageClassesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    moves?: Prisma.MovesUncheckedUpdateManyWithoutDamageClassNestedInput;
    types?: Prisma.TypesUncheckedUpdateManyWithoutDamageClassNestedInput;
};
export type MoveDamageClassesCreateManyInput = {
    id: number;
    identifier: string;
};
export type MoveDamageClassesUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveDamageClassesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MoveDamageClassesScalarRelationFilter = {
    is?: Prisma.MoveDamageClassesWhereInput;
    isNot?: Prisma.MoveDamageClassesWhereInput;
};
export type MoveDamageClassesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveDamageClassesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MoveDamageClassesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveDamageClassesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
};
export type MoveDamageClassesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MoveDamageClassesNullableScalarRelationFilter = {
    is?: Prisma.MoveDamageClassesWhereInput | null;
    isNot?: Prisma.MoveDamageClassesWhereInput | null;
};
export type MoveDamageClassesCreateNestedOneWithoutMovesInput = {
    create?: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutMovesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutMovesInput>;
    connectOrCreate?: Prisma.MoveDamageClassesCreateOrConnectWithoutMovesInput;
    connect?: Prisma.MoveDamageClassesWhereUniqueInput;
};
export type MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput = {
    create?: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutMovesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutMovesInput>;
    connectOrCreate?: Prisma.MoveDamageClassesCreateOrConnectWithoutMovesInput;
    upsert?: Prisma.MoveDamageClassesUpsertWithoutMovesInput;
    connect?: Prisma.MoveDamageClassesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput, Prisma.MoveDamageClassesUpdateWithoutMovesInput>, Prisma.MoveDamageClassesUncheckedUpdateWithoutMovesInput>;
};
export type MoveDamageClassesCreateNestedOneWithoutTypesInput = {
    create?: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutTypesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutTypesInput>;
    connectOrCreate?: Prisma.MoveDamageClassesCreateOrConnectWithoutTypesInput;
    connect?: Prisma.MoveDamageClassesWhereUniqueInput;
};
export type MoveDamageClassesUpdateOneWithoutTypesNestedInput = {
    create?: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutTypesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutTypesInput>;
    connectOrCreate?: Prisma.MoveDamageClassesCreateOrConnectWithoutTypesInput;
    upsert?: Prisma.MoveDamageClassesUpsertWithoutTypesInput;
    disconnect?: Prisma.MoveDamageClassesWhereInput | boolean;
    delete?: Prisma.MoveDamageClassesWhereInput | boolean;
    connect?: Prisma.MoveDamageClassesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput, Prisma.MoveDamageClassesUpdateWithoutTypesInput>, Prisma.MoveDamageClassesUncheckedUpdateWithoutTypesInput>;
};
export type MoveDamageClassesCreateWithoutMovesInput = {
    id: number;
    identifier: string;
    types?: Prisma.TypesCreateNestedManyWithoutDamageClassInput;
};
export type MoveDamageClassesUncheckedCreateWithoutMovesInput = {
    id: number;
    identifier: string;
    types?: Prisma.TypesUncheckedCreateNestedManyWithoutDamageClassInput;
};
export type MoveDamageClassesCreateOrConnectWithoutMovesInput = {
    where: Prisma.MoveDamageClassesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutMovesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutMovesInput>;
};
export type MoveDamageClassesUpsertWithoutMovesInput = {
    update: Prisma.XOR<Prisma.MoveDamageClassesUpdateWithoutMovesInput, Prisma.MoveDamageClassesUncheckedUpdateWithoutMovesInput>;
    create: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutMovesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutMovesInput>;
    where?: Prisma.MoveDamageClassesWhereInput;
};
export type MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput = {
    where?: Prisma.MoveDamageClassesWhereInput;
    data: Prisma.XOR<Prisma.MoveDamageClassesUpdateWithoutMovesInput, Prisma.MoveDamageClassesUncheckedUpdateWithoutMovesInput>;
};
export type MoveDamageClassesUpdateWithoutMovesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    types?: Prisma.TypesUpdateManyWithoutDamageClassNestedInput;
};
export type MoveDamageClassesUncheckedUpdateWithoutMovesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    types?: Prisma.TypesUncheckedUpdateManyWithoutDamageClassNestedInput;
};
export type MoveDamageClassesCreateWithoutTypesInput = {
    id: number;
    identifier: string;
    moves?: Prisma.MovesCreateNestedManyWithoutDamageClassInput;
};
export type MoveDamageClassesUncheckedCreateWithoutTypesInput = {
    id: number;
    identifier: string;
    moves?: Prisma.MovesUncheckedCreateNestedManyWithoutDamageClassInput;
};
export type MoveDamageClassesCreateOrConnectWithoutTypesInput = {
    where: Prisma.MoveDamageClassesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutTypesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutTypesInput>;
};
export type MoveDamageClassesUpsertWithoutTypesInput = {
    update: Prisma.XOR<Prisma.MoveDamageClassesUpdateWithoutTypesInput, Prisma.MoveDamageClassesUncheckedUpdateWithoutTypesInput>;
    create: Prisma.XOR<Prisma.MoveDamageClassesCreateWithoutTypesInput, Prisma.MoveDamageClassesUncheckedCreateWithoutTypesInput>;
    where?: Prisma.MoveDamageClassesWhereInput;
};
export type MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput = {
    where?: Prisma.MoveDamageClassesWhereInput;
    data: Prisma.XOR<Prisma.MoveDamageClassesUpdateWithoutTypesInput, Prisma.MoveDamageClassesUncheckedUpdateWithoutTypesInput>;
};
export type MoveDamageClassesUpdateWithoutTypesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    moves?: Prisma.MovesUpdateManyWithoutDamageClassNestedInput;
};
export type MoveDamageClassesUncheckedUpdateWithoutTypesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    moves?: Prisma.MovesUncheckedUpdateManyWithoutDamageClassNestedInput;
};
/**
 * Count Type MoveDamageClassesCountOutputType
 */
export type MoveDamageClassesCountOutputType = {
    moves: number;
    types: number;
};
export type MoveDamageClassesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moves?: boolean | MoveDamageClassesCountOutputTypeCountMovesArgs;
    types?: boolean | MoveDamageClassesCountOutputTypeCountTypesArgs;
};
/**
 * MoveDamageClassesCountOutputType without action
 */
export type MoveDamageClassesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClassesCountOutputType
     */
    select?: Prisma.MoveDamageClassesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MoveDamageClassesCountOutputType without action
 */
export type MoveDamageClassesCountOutputTypeCountMovesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovesWhereInput;
};
/**
 * MoveDamageClassesCountOutputType without action
 */
export type MoveDamageClassesCountOutputTypeCountTypesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypesWhereInput;
};
export type MoveDamageClassesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    moves?: boolean | Prisma.MoveDamageClasses$movesArgs<ExtArgs>;
    types?: boolean | Prisma.MoveDamageClasses$typesArgs<ExtArgs>;
    _count?: boolean | Prisma.MoveDamageClassesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moveDamageClasses"]>;
export type MoveDamageClassesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["moveDamageClasses"]>;
export type MoveDamageClassesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
}, ExtArgs["result"]["moveDamageClasses"]>;
export type MoveDamageClassesSelectScalar = {
    id?: boolean;
    identifier?: boolean;
};
export type MoveDamageClassesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier", ExtArgs["result"]["moveDamageClasses"]>;
export type MoveDamageClassesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    moves?: boolean | Prisma.MoveDamageClasses$movesArgs<ExtArgs>;
    types?: boolean | Prisma.MoveDamageClasses$typesArgs<ExtArgs>;
    _count?: boolean | Prisma.MoveDamageClassesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MoveDamageClassesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MoveDamageClassesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MoveDamageClassesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MoveDamageClasses";
    objects: {
        moves: Prisma.$MovesPayload<ExtArgs>[];
        types: Prisma.$TypesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
    }, ExtArgs["result"]["moveDamageClasses"]>;
    composites: {};
};
export type MoveDamageClassesGetPayload<S extends boolean | null | undefined | MoveDamageClassesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload, S>;
export type MoveDamageClassesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MoveDamageClassesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MoveDamageClassesCountAggregateInputType | true;
};
export interface MoveDamageClassesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MoveDamageClasses'];
        meta: {
            name: 'MoveDamageClasses';
        };
    };
    /**
     * Find zero or one MoveDamageClasses that matches the filter.
     * @param {MoveDamageClassesFindUniqueArgs} args - Arguments to find a MoveDamageClasses
     * @example
     * // Get one MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveDamageClassesFindUniqueArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MoveDamageClasses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveDamageClassesFindUniqueOrThrowArgs} args - Arguments to find a MoveDamageClasses
     * @example
     * // Get one MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveDamageClassesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MoveDamageClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveDamageClassesFindFirstArgs} args - Arguments to find a MoveDamageClasses
     * @example
     * // Get one MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveDamageClassesFindFirstArgs>(args?: Prisma.SelectSubset<T, MoveDamageClassesFindFirstArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MoveDamageClasses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveDamageClassesFindFirstOrThrowArgs} args - Arguments to find a MoveDamageClasses
     * @example
     * // Get one MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveDamageClassesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MoveDamageClassesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MoveDamageClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveDamageClassesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.findMany()
     *
     * // Get first 10 MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const moveDamageClassesWithIdOnly = await prisma.moveDamageClasses.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MoveDamageClassesFindManyArgs>(args?: Prisma.SelectSubset<T, MoveDamageClassesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MoveDamageClasses.
     * @param {MoveDamageClassesCreateArgs} args - Arguments to create a MoveDamageClasses.
     * @example
     * // Create one MoveDamageClasses
     * const MoveDamageClasses = await prisma.moveDamageClasses.create({
     *   data: {
     *     // ... data to create a MoveDamageClasses
     *   }
     * })
     *
     */
    create<T extends MoveDamageClassesCreateArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesCreateArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MoveDamageClasses.
     * @param {MoveDamageClassesCreateManyArgs} args - Arguments to create many MoveDamageClasses.
     * @example
     * // Create many MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MoveDamageClassesCreateManyArgs>(args?: Prisma.SelectSubset<T, MoveDamageClassesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MoveDamageClasses and returns the data saved in the database.
     * @param {MoveDamageClassesCreateManyAndReturnArgs} args - Arguments to create many MoveDamageClasses.
     * @example
     * // Create many MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MoveDamageClasses and only return the `id`
     * const moveDamageClassesWithIdOnly = await prisma.moveDamageClasses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MoveDamageClassesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MoveDamageClassesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MoveDamageClasses.
     * @param {MoveDamageClassesDeleteArgs} args - Arguments to delete one MoveDamageClasses.
     * @example
     * // Delete one MoveDamageClasses
     * const MoveDamageClasses = await prisma.moveDamageClasses.delete({
     *   where: {
     *     // ... filter to delete one MoveDamageClasses
     *   }
     * })
     *
     */
    delete<T extends MoveDamageClassesDeleteArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesDeleteArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MoveDamageClasses.
     * @param {MoveDamageClassesUpdateArgs} args - Arguments to update one MoveDamageClasses.
     * @example
     * // Update one MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MoveDamageClassesUpdateArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesUpdateArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MoveDamageClasses.
     * @param {MoveDamageClassesDeleteManyArgs} args - Arguments to filter MoveDamageClasses to delete.
     * @example
     * // Delete a few MoveDamageClasses
     * const { count } = await prisma.moveDamageClasses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MoveDamageClassesDeleteManyArgs>(args?: Prisma.SelectSubset<T, MoveDamageClassesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MoveDamageClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveDamageClassesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MoveDamageClassesUpdateManyArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MoveDamageClasses and returns the data updated in the database.
     * @param {MoveDamageClassesUpdateManyAndReturnArgs} args - Arguments to update many MoveDamageClasses.
     * @example
     * // Update many MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MoveDamageClasses and only return the `id`
     * const moveDamageClassesWithIdOnly = await prisma.moveDamageClasses.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoveDamageClassesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MoveDamageClasses.
     * @param {MoveDamageClassesUpsertArgs} args - Arguments to update or create a MoveDamageClasses.
     * @example
     * // Update or create a MoveDamageClasses
     * const moveDamageClasses = await prisma.moveDamageClasses.upsert({
     *   create: {
     *     // ... data to create a MoveDamageClasses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoveDamageClasses we want to update
     *   }
     * })
     */
    upsert<T extends MoveDamageClassesUpsertArgs>(args: Prisma.SelectSubset<T, MoveDamageClassesUpsertArgs<ExtArgs>>): Prisma.Prisma__MoveDamageClassesClient<runtime.Types.Result.GetResult<Prisma.$MoveDamageClassesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MoveDamageClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveDamageClassesCountArgs} args - Arguments to filter MoveDamageClasses to count.
     * @example
     * // Count the number of MoveDamageClasses
     * const count = await prisma.moveDamageClasses.count({
     *   where: {
     *     // ... the filter for the MoveDamageClasses we want to count
     *   }
     * })
    **/
    count<T extends MoveDamageClassesCountArgs>(args?: Prisma.Subset<T, MoveDamageClassesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MoveDamageClassesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MoveDamageClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveDamageClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoveDamageClassesAggregateArgs>(args: Prisma.Subset<T, MoveDamageClassesAggregateArgs>): Prisma.PrismaPromise<GetMoveDamageClassesAggregateType<T>>;
    /**
     * Group by MoveDamageClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveDamageClassesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MoveDamageClassesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MoveDamageClassesGroupByArgs['orderBy'];
    } : {
        orderBy?: MoveDamageClassesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MoveDamageClassesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveDamageClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MoveDamageClasses model
     */
    readonly fields: MoveDamageClassesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MoveDamageClasses.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MoveDamageClassesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    moves<T extends Prisma.MoveDamageClasses$movesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MoveDamageClasses$movesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    types<T extends Prisma.MoveDamageClasses$typesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MoveDamageClasses$typesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MoveDamageClasses model
 */
export interface MoveDamageClassesFieldRefs {
    readonly id: Prisma.FieldRef<"MoveDamageClasses", 'Int'>;
    readonly identifier: Prisma.FieldRef<"MoveDamageClasses", 'String'>;
}
/**
 * MoveDamageClasses findUnique
 */
export type MoveDamageClassesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveDamageClasses to fetch.
     */
    where: Prisma.MoveDamageClassesWhereUniqueInput;
};
/**
 * MoveDamageClasses findUniqueOrThrow
 */
export type MoveDamageClassesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveDamageClasses to fetch.
     */
    where: Prisma.MoveDamageClassesWhereUniqueInput;
};
/**
 * MoveDamageClasses findFirst
 */
export type MoveDamageClassesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveDamageClasses to fetch.
     */
    where?: Prisma.MoveDamageClassesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveDamageClasses to fetch.
     */
    orderBy?: Prisma.MoveDamageClassesOrderByWithRelationInput | Prisma.MoveDamageClassesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoveDamageClasses.
     */
    cursor?: Prisma.MoveDamageClassesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveDamageClasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveDamageClasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveDamageClasses.
     */
    distinct?: Prisma.MoveDamageClassesScalarFieldEnum | Prisma.MoveDamageClassesScalarFieldEnum[];
};
/**
 * MoveDamageClasses findFirstOrThrow
 */
export type MoveDamageClassesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveDamageClasses to fetch.
     */
    where?: Prisma.MoveDamageClassesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveDamageClasses to fetch.
     */
    orderBy?: Prisma.MoveDamageClassesOrderByWithRelationInput | Prisma.MoveDamageClassesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MoveDamageClasses.
     */
    cursor?: Prisma.MoveDamageClassesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveDamageClasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveDamageClasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveDamageClasses.
     */
    distinct?: Prisma.MoveDamageClassesScalarFieldEnum | Prisma.MoveDamageClassesScalarFieldEnum[];
};
/**
 * MoveDamageClasses findMany
 */
export type MoveDamageClassesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * Filter, which MoveDamageClasses to fetch.
     */
    where?: Prisma.MoveDamageClassesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MoveDamageClasses to fetch.
     */
    orderBy?: Prisma.MoveDamageClassesOrderByWithRelationInput | Prisma.MoveDamageClassesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MoveDamageClasses.
     */
    cursor?: Prisma.MoveDamageClassesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MoveDamageClasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MoveDamageClasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MoveDamageClasses.
     */
    distinct?: Prisma.MoveDamageClassesScalarFieldEnum | Prisma.MoveDamageClassesScalarFieldEnum[];
};
/**
 * MoveDamageClasses create
 */
export type MoveDamageClassesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * The data needed to create a MoveDamageClasses.
     */
    data: Prisma.XOR<Prisma.MoveDamageClassesCreateInput, Prisma.MoveDamageClassesUncheckedCreateInput>;
};
/**
 * MoveDamageClasses createMany
 */
export type MoveDamageClassesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoveDamageClasses.
     */
    data: Prisma.MoveDamageClassesCreateManyInput | Prisma.MoveDamageClassesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MoveDamageClasses createManyAndReturn
 */
export type MoveDamageClassesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * The data used to create many MoveDamageClasses.
     */
    data: Prisma.MoveDamageClassesCreateManyInput | Prisma.MoveDamageClassesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MoveDamageClasses update
 */
export type MoveDamageClassesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * The data needed to update a MoveDamageClasses.
     */
    data: Prisma.XOR<Prisma.MoveDamageClassesUpdateInput, Prisma.MoveDamageClassesUncheckedUpdateInput>;
    /**
     * Choose, which MoveDamageClasses to update.
     */
    where: Prisma.MoveDamageClassesWhereUniqueInput;
};
/**
 * MoveDamageClasses updateMany
 */
export type MoveDamageClassesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MoveDamageClasses.
     */
    data: Prisma.XOR<Prisma.MoveDamageClassesUpdateManyMutationInput, Prisma.MoveDamageClassesUncheckedUpdateManyInput>;
    /**
     * Filter which MoveDamageClasses to update
     */
    where?: Prisma.MoveDamageClassesWhereInput;
    /**
     * Limit how many MoveDamageClasses to update.
     */
    limit?: number;
};
/**
 * MoveDamageClasses updateManyAndReturn
 */
export type MoveDamageClassesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * The data used to update MoveDamageClasses.
     */
    data: Prisma.XOR<Prisma.MoveDamageClassesUpdateManyMutationInput, Prisma.MoveDamageClassesUncheckedUpdateManyInput>;
    /**
     * Filter which MoveDamageClasses to update
     */
    where?: Prisma.MoveDamageClassesWhereInput;
    /**
     * Limit how many MoveDamageClasses to update.
     */
    limit?: number;
};
/**
 * MoveDamageClasses upsert
 */
export type MoveDamageClassesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * The filter to search for the MoveDamageClasses to update in case it exists.
     */
    where: Prisma.MoveDamageClassesWhereUniqueInput;
    /**
     * In case the MoveDamageClasses found by the `where` argument doesn't exist, create a new MoveDamageClasses with this data.
     */
    create: Prisma.XOR<Prisma.MoveDamageClassesCreateInput, Prisma.MoveDamageClassesUncheckedCreateInput>;
    /**
     * In case the MoveDamageClasses was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MoveDamageClassesUpdateInput, Prisma.MoveDamageClassesUncheckedUpdateInput>;
};
/**
 * MoveDamageClasses delete
 */
export type MoveDamageClassesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
    /**
     * Filter which MoveDamageClasses to delete.
     */
    where: Prisma.MoveDamageClassesWhereUniqueInput;
};
/**
 * MoveDamageClasses deleteMany
 */
export type MoveDamageClassesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MoveDamageClasses to delete
     */
    where?: Prisma.MoveDamageClassesWhereInput;
    /**
     * Limit how many MoveDamageClasses to delete.
     */
    limit?: number;
};
/**
 * MoveDamageClasses.moves
 */
export type MoveDamageClasses$movesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Moves
     */
    select?: Prisma.MovesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Moves
     */
    omit?: Prisma.MovesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MovesInclude<ExtArgs> | null;
    where?: Prisma.MovesWhereInput;
    orderBy?: Prisma.MovesOrderByWithRelationInput | Prisma.MovesOrderByWithRelationInput[];
    cursor?: Prisma.MovesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovesScalarFieldEnum | Prisma.MovesScalarFieldEnum[];
};
/**
 * MoveDamageClasses.types
 */
export type MoveDamageClasses$typesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.TypesOrderByWithRelationInput | Prisma.TypesOrderByWithRelationInput[];
    cursor?: Prisma.TypesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypesScalarFieldEnum | Prisma.TypesScalarFieldEnum[];
};
/**
 * MoveDamageClasses without action
 */
export type MoveDamageClassesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveDamageClasses
     */
    select?: Prisma.MoveDamageClassesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MoveDamageClasses
     */
    omit?: Prisma.MoveDamageClassesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MoveDamageClassesInclude<ExtArgs> | null;
};
