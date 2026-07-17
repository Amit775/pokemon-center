import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model GrowthRates
 *
 */
export type GrowthRatesModel = runtime.Types.Result.DefaultSelection<Prisma.$GrowthRatesPayload>;
export type AggregateGrowthRates = {
    _count: GrowthRatesCountAggregateOutputType | null;
    _avg: GrowthRatesAvgAggregateOutputType | null;
    _sum: GrowthRatesSumAggregateOutputType | null;
    _min: GrowthRatesMinAggregateOutputType | null;
    _max: GrowthRatesMaxAggregateOutputType | null;
};
export type GrowthRatesAvgAggregateOutputType = {
    id: number | null;
};
export type GrowthRatesSumAggregateOutputType = {
    id: number | null;
};
export type GrowthRatesMinAggregateOutputType = {
    id: number | null;
    identifier: string | null;
    formula: string | null;
};
export type GrowthRatesMaxAggregateOutputType = {
    id: number | null;
    identifier: string | null;
    formula: string | null;
};
export type GrowthRatesCountAggregateOutputType = {
    id: number;
    identifier: number;
    formula: number;
    _all: number;
};
export type GrowthRatesAvgAggregateInputType = {
    id?: true;
};
export type GrowthRatesSumAggregateInputType = {
    id?: true;
};
export type GrowthRatesMinAggregateInputType = {
    id?: true;
    identifier?: true;
    formula?: true;
};
export type GrowthRatesMaxAggregateInputType = {
    id?: true;
    identifier?: true;
    formula?: true;
};
export type GrowthRatesCountAggregateInputType = {
    id?: true;
    identifier?: true;
    formula?: true;
    _all?: true;
};
export type GrowthRatesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GrowthRates to aggregate.
     */
    where?: Prisma.GrowthRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GrowthRates to fetch.
     */
    orderBy?: Prisma.GrowthRatesOrderByWithRelationInput | Prisma.GrowthRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GrowthRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GrowthRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GrowthRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GrowthRates
    **/
    _count?: true | GrowthRatesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: GrowthRatesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: GrowthRatesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GrowthRatesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GrowthRatesMaxAggregateInputType;
};
export type GetGrowthRatesAggregateType<T extends GrowthRatesAggregateArgs> = {
    [P in keyof T & keyof AggregateGrowthRates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGrowthRates[P]> : Prisma.GetScalarType<T[P], AggregateGrowthRates[P]>;
};
export type GrowthRatesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GrowthRatesWhereInput;
    orderBy?: Prisma.GrowthRatesOrderByWithAggregationInput | Prisma.GrowthRatesOrderByWithAggregationInput[];
    by: Prisma.GrowthRatesScalarFieldEnum[] | Prisma.GrowthRatesScalarFieldEnum;
    having?: Prisma.GrowthRatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GrowthRatesCountAggregateInputType | true;
    _avg?: GrowthRatesAvgAggregateInputType;
    _sum?: GrowthRatesSumAggregateInputType;
    _min?: GrowthRatesMinAggregateInputType;
    _max?: GrowthRatesMaxAggregateInputType;
};
export type GrowthRatesGroupByOutputType = {
    id: number;
    identifier: string;
    formula: string;
    _count: GrowthRatesCountAggregateOutputType | null;
    _avg: GrowthRatesAvgAggregateOutputType | null;
    _sum: GrowthRatesSumAggregateOutputType | null;
    _min: GrowthRatesMinAggregateOutputType | null;
    _max: GrowthRatesMaxAggregateOutputType | null;
};
export type GetGrowthRatesGroupByPayload<T extends GrowthRatesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GrowthRatesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GrowthRatesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GrowthRatesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GrowthRatesGroupByOutputType[P]>;
}>>;
export type GrowthRatesWhereInput = {
    AND?: Prisma.GrowthRatesWhereInput | Prisma.GrowthRatesWhereInput[];
    OR?: Prisma.GrowthRatesWhereInput[];
    NOT?: Prisma.GrowthRatesWhereInput | Prisma.GrowthRatesWhereInput[];
    id?: Prisma.IntFilter<"GrowthRates"> | number;
    identifier?: Prisma.StringFilter<"GrowthRates"> | string;
    formula?: Prisma.StringFilter<"GrowthRates"> | string;
    species?: Prisma.PokemonSpeciesListRelationFilter;
    experience?: Prisma.ExperienceListRelationFilter;
};
export type GrowthRatesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    formula?: Prisma.SortOrder;
    species?: Prisma.PokemonSpeciesOrderByRelationAggregateInput;
    experience?: Prisma.ExperienceOrderByRelationAggregateInput;
};
export type GrowthRatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.GrowthRatesWhereInput | Prisma.GrowthRatesWhereInput[];
    OR?: Prisma.GrowthRatesWhereInput[];
    NOT?: Prisma.GrowthRatesWhereInput | Prisma.GrowthRatesWhereInput[];
    identifier?: Prisma.StringFilter<"GrowthRates"> | string;
    formula?: Prisma.StringFilter<"GrowthRates"> | string;
    species?: Prisma.PokemonSpeciesListRelationFilter;
    experience?: Prisma.ExperienceListRelationFilter;
}, "id">;
export type GrowthRatesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    formula?: Prisma.SortOrder;
    _count?: Prisma.GrowthRatesCountOrderByAggregateInput;
    _avg?: Prisma.GrowthRatesAvgOrderByAggregateInput;
    _max?: Prisma.GrowthRatesMaxOrderByAggregateInput;
    _min?: Prisma.GrowthRatesMinOrderByAggregateInput;
    _sum?: Prisma.GrowthRatesSumOrderByAggregateInput;
};
export type GrowthRatesScalarWhereWithAggregatesInput = {
    AND?: Prisma.GrowthRatesScalarWhereWithAggregatesInput | Prisma.GrowthRatesScalarWhereWithAggregatesInput[];
    OR?: Prisma.GrowthRatesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GrowthRatesScalarWhereWithAggregatesInput | Prisma.GrowthRatesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"GrowthRates"> | number;
    identifier?: Prisma.StringWithAggregatesFilter<"GrowthRates"> | string;
    formula?: Prisma.StringWithAggregatesFilter<"GrowthRates"> | string;
};
export type GrowthRatesCreateInput = {
    id: number;
    identifier: string;
    formula: string;
    species?: Prisma.PokemonSpeciesCreateNestedManyWithoutGrowthRateInput;
    experience?: Prisma.ExperienceCreateNestedManyWithoutGrowthRateInput;
};
export type GrowthRatesUncheckedCreateInput = {
    id: number;
    identifier: string;
    formula: string;
    species?: Prisma.PokemonSpeciesUncheckedCreateNestedManyWithoutGrowthRateInput;
    experience?: Prisma.ExperienceUncheckedCreateNestedManyWithoutGrowthRateInput;
};
export type GrowthRatesUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput;
    experience?: Prisma.ExperienceUpdateManyWithoutGrowthRateNestedInput;
};
export type GrowthRatesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput;
    experience?: Prisma.ExperienceUncheckedUpdateManyWithoutGrowthRateNestedInput;
};
export type GrowthRatesCreateManyInput = {
    id: number;
    identifier: string;
    formula: string;
};
export type GrowthRatesUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type GrowthRatesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type GrowthRatesScalarRelationFilter = {
    is?: Prisma.GrowthRatesWhereInput;
    isNot?: Prisma.GrowthRatesWhereInput;
};
export type GrowthRatesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    formula?: Prisma.SortOrder;
};
export type GrowthRatesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type GrowthRatesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    formula?: Prisma.SortOrder;
};
export type GrowthRatesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    identifier?: Prisma.SortOrder;
    formula?: Prisma.SortOrder;
};
export type GrowthRatesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type GrowthRatesCreateNestedOneWithoutSpeciesInput = {
    create?: Prisma.XOR<Prisma.GrowthRatesCreateWithoutSpeciesInput, Prisma.GrowthRatesUncheckedCreateWithoutSpeciesInput>;
    connectOrCreate?: Prisma.GrowthRatesCreateOrConnectWithoutSpeciesInput;
    connect?: Prisma.GrowthRatesWhereUniqueInput;
};
export type GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput = {
    create?: Prisma.XOR<Prisma.GrowthRatesCreateWithoutSpeciesInput, Prisma.GrowthRatesUncheckedCreateWithoutSpeciesInput>;
    connectOrCreate?: Prisma.GrowthRatesCreateOrConnectWithoutSpeciesInput;
    upsert?: Prisma.GrowthRatesUpsertWithoutSpeciesInput;
    connect?: Prisma.GrowthRatesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput, Prisma.GrowthRatesUpdateWithoutSpeciesInput>, Prisma.GrowthRatesUncheckedUpdateWithoutSpeciesInput>;
};
export type GrowthRatesCreateNestedOneWithoutExperienceInput = {
    create?: Prisma.XOR<Prisma.GrowthRatesCreateWithoutExperienceInput, Prisma.GrowthRatesUncheckedCreateWithoutExperienceInput>;
    connectOrCreate?: Prisma.GrowthRatesCreateOrConnectWithoutExperienceInput;
    connect?: Prisma.GrowthRatesWhereUniqueInput;
};
export type GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: Prisma.XOR<Prisma.GrowthRatesCreateWithoutExperienceInput, Prisma.GrowthRatesUncheckedCreateWithoutExperienceInput>;
    connectOrCreate?: Prisma.GrowthRatesCreateOrConnectWithoutExperienceInput;
    upsert?: Prisma.GrowthRatesUpsertWithoutExperienceInput;
    connect?: Prisma.GrowthRatesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GrowthRatesUpdateToOneWithWhereWithoutExperienceInput, Prisma.GrowthRatesUpdateWithoutExperienceInput>, Prisma.GrowthRatesUncheckedUpdateWithoutExperienceInput>;
};
export type GrowthRatesCreateWithoutSpeciesInput = {
    id: number;
    identifier: string;
    formula: string;
    experience?: Prisma.ExperienceCreateNestedManyWithoutGrowthRateInput;
};
export type GrowthRatesUncheckedCreateWithoutSpeciesInput = {
    id: number;
    identifier: string;
    formula: string;
    experience?: Prisma.ExperienceUncheckedCreateNestedManyWithoutGrowthRateInput;
};
export type GrowthRatesCreateOrConnectWithoutSpeciesInput = {
    where: Prisma.GrowthRatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.GrowthRatesCreateWithoutSpeciesInput, Prisma.GrowthRatesUncheckedCreateWithoutSpeciesInput>;
};
export type GrowthRatesUpsertWithoutSpeciesInput = {
    update: Prisma.XOR<Prisma.GrowthRatesUpdateWithoutSpeciesInput, Prisma.GrowthRatesUncheckedUpdateWithoutSpeciesInput>;
    create: Prisma.XOR<Prisma.GrowthRatesCreateWithoutSpeciesInput, Prisma.GrowthRatesUncheckedCreateWithoutSpeciesInput>;
    where?: Prisma.GrowthRatesWhereInput;
};
export type GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput = {
    where?: Prisma.GrowthRatesWhereInput;
    data: Prisma.XOR<Prisma.GrowthRatesUpdateWithoutSpeciesInput, Prisma.GrowthRatesUncheckedUpdateWithoutSpeciesInput>;
};
export type GrowthRatesUpdateWithoutSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.ExperienceUpdateManyWithoutGrowthRateNestedInput;
};
export type GrowthRatesUncheckedUpdateWithoutSpeciesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.ExperienceUncheckedUpdateManyWithoutGrowthRateNestedInput;
};
export type GrowthRatesCreateWithoutExperienceInput = {
    id: number;
    identifier: string;
    formula: string;
    species?: Prisma.PokemonSpeciesCreateNestedManyWithoutGrowthRateInput;
};
export type GrowthRatesUncheckedCreateWithoutExperienceInput = {
    id: number;
    identifier: string;
    formula: string;
    species?: Prisma.PokemonSpeciesUncheckedCreateNestedManyWithoutGrowthRateInput;
};
export type GrowthRatesCreateOrConnectWithoutExperienceInput = {
    where: Prisma.GrowthRatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.GrowthRatesCreateWithoutExperienceInput, Prisma.GrowthRatesUncheckedCreateWithoutExperienceInput>;
};
export type GrowthRatesUpsertWithoutExperienceInput = {
    update: Prisma.XOR<Prisma.GrowthRatesUpdateWithoutExperienceInput, Prisma.GrowthRatesUncheckedUpdateWithoutExperienceInput>;
    create: Prisma.XOR<Prisma.GrowthRatesCreateWithoutExperienceInput, Prisma.GrowthRatesUncheckedCreateWithoutExperienceInput>;
    where?: Prisma.GrowthRatesWhereInput;
};
export type GrowthRatesUpdateToOneWithWhereWithoutExperienceInput = {
    where?: Prisma.GrowthRatesWhereInput;
    data: Prisma.XOR<Prisma.GrowthRatesUpdateWithoutExperienceInput, Prisma.GrowthRatesUncheckedUpdateWithoutExperienceInput>;
};
export type GrowthRatesUpdateWithoutExperienceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput;
};
export type GrowthRatesUncheckedUpdateWithoutExperienceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    identifier?: Prisma.StringFieldUpdateOperationsInput | string;
    formula?: Prisma.StringFieldUpdateOperationsInput | string;
    species?: Prisma.PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput;
};
/**
 * Count Type GrowthRatesCountOutputType
 */
export type GrowthRatesCountOutputType = {
    species: number;
    experience: number;
};
export type GrowthRatesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | GrowthRatesCountOutputTypeCountSpeciesArgs;
    experience?: boolean | GrowthRatesCountOutputTypeCountExperienceArgs;
};
/**
 * GrowthRatesCountOutputType without action
 */
export type GrowthRatesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRatesCountOutputType
     */
    select?: Prisma.GrowthRatesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * GrowthRatesCountOutputType without action
 */
export type GrowthRatesCountOutputTypeCountSpeciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PokemonSpeciesWhereInput;
};
/**
 * GrowthRatesCountOutputType without action
 */
export type GrowthRatesCountOutputTypeCountExperienceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
};
export type GrowthRatesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    formula?: boolean;
    species?: boolean | Prisma.GrowthRates$speciesArgs<ExtArgs>;
    experience?: boolean | Prisma.GrowthRates$experienceArgs<ExtArgs>;
    _count?: boolean | Prisma.GrowthRatesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["growthRates"]>;
export type GrowthRatesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    formula?: boolean;
}, ExtArgs["result"]["growthRates"]>;
export type GrowthRatesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    identifier?: boolean;
    formula?: boolean;
}, ExtArgs["result"]["growthRates"]>;
export type GrowthRatesSelectScalar = {
    id?: boolean;
    identifier?: boolean;
    formula?: boolean;
};
export type GrowthRatesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "identifier" | "formula", ExtArgs["result"]["growthRates"]>;
export type GrowthRatesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    species?: boolean | Prisma.GrowthRates$speciesArgs<ExtArgs>;
    experience?: boolean | Prisma.GrowthRates$experienceArgs<ExtArgs>;
    _count?: boolean | Prisma.GrowthRatesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GrowthRatesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GrowthRatesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GrowthRatesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GrowthRates";
    objects: {
        species: Prisma.$PokemonSpeciesPayload<ExtArgs>[];
        experience: Prisma.$ExperiencePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        identifier: string;
        formula: string;
    }, ExtArgs["result"]["growthRates"]>;
    composites: {};
};
export type GrowthRatesGetPayload<S extends boolean | null | undefined | GrowthRatesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload, S>;
export type GrowthRatesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GrowthRatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GrowthRatesCountAggregateInputType | true;
};
export interface GrowthRatesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GrowthRates'];
        meta: {
            name: 'GrowthRates';
        };
    };
    /**
     * Find zero or one GrowthRates that matches the filter.
     * @param {GrowthRatesFindUniqueArgs} args - Arguments to find a GrowthRates
     * @example
     * // Get one GrowthRates
     * const growthRates = await prisma.growthRates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrowthRatesFindUniqueArgs>(args: Prisma.SelectSubset<T, GrowthRatesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one GrowthRates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrowthRatesFindUniqueOrThrowArgs} args - Arguments to find a GrowthRates
     * @example
     * // Get one GrowthRates
     * const growthRates = await prisma.growthRates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrowthRatesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GrowthRatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GrowthRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthRatesFindFirstArgs} args - Arguments to find a GrowthRates
     * @example
     * // Get one GrowthRates
     * const growthRates = await prisma.growthRates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrowthRatesFindFirstArgs>(args?: Prisma.SelectSubset<T, GrowthRatesFindFirstArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GrowthRates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthRatesFindFirstOrThrowArgs} args - Arguments to find a GrowthRates
     * @example
     * // Get one GrowthRates
     * const growthRates = await prisma.growthRates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrowthRatesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GrowthRatesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more GrowthRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthRatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrowthRates
     * const growthRates = await prisma.growthRates.findMany()
     *
     * // Get first 10 GrowthRates
     * const growthRates = await prisma.growthRates.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const growthRatesWithIdOnly = await prisma.growthRates.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GrowthRatesFindManyArgs>(args?: Prisma.SelectSubset<T, GrowthRatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a GrowthRates.
     * @param {GrowthRatesCreateArgs} args - Arguments to create a GrowthRates.
     * @example
     * // Create one GrowthRates
     * const GrowthRates = await prisma.growthRates.create({
     *   data: {
     *     // ... data to create a GrowthRates
     *   }
     * })
     *
     */
    create<T extends GrowthRatesCreateArgs>(args: Prisma.SelectSubset<T, GrowthRatesCreateArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many GrowthRates.
     * @param {GrowthRatesCreateManyArgs} args - Arguments to create many GrowthRates.
     * @example
     * // Create many GrowthRates
     * const growthRates = await prisma.growthRates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GrowthRatesCreateManyArgs>(args?: Prisma.SelectSubset<T, GrowthRatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many GrowthRates and returns the data saved in the database.
     * @param {GrowthRatesCreateManyAndReturnArgs} args - Arguments to create many GrowthRates.
     * @example
     * // Create many GrowthRates
     * const growthRates = await prisma.growthRates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GrowthRates and only return the `id`
     * const growthRatesWithIdOnly = await prisma.growthRates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GrowthRatesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GrowthRatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a GrowthRates.
     * @param {GrowthRatesDeleteArgs} args - Arguments to delete one GrowthRates.
     * @example
     * // Delete one GrowthRates
     * const GrowthRates = await prisma.growthRates.delete({
     *   where: {
     *     // ... filter to delete one GrowthRates
     *   }
     * })
     *
     */
    delete<T extends GrowthRatesDeleteArgs>(args: Prisma.SelectSubset<T, GrowthRatesDeleteArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one GrowthRates.
     * @param {GrowthRatesUpdateArgs} args - Arguments to update one GrowthRates.
     * @example
     * // Update one GrowthRates
     * const growthRates = await prisma.growthRates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GrowthRatesUpdateArgs>(args: Prisma.SelectSubset<T, GrowthRatesUpdateArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more GrowthRates.
     * @param {GrowthRatesDeleteManyArgs} args - Arguments to filter GrowthRates to delete.
     * @example
     * // Delete a few GrowthRates
     * const { count } = await prisma.growthRates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GrowthRatesDeleteManyArgs>(args?: Prisma.SelectSubset<T, GrowthRatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GrowthRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthRatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrowthRates
     * const growthRates = await prisma.growthRates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GrowthRatesUpdateManyArgs>(args: Prisma.SelectSubset<T, GrowthRatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GrowthRates and returns the data updated in the database.
     * @param {GrowthRatesUpdateManyAndReturnArgs} args - Arguments to update many GrowthRates.
     * @example
     * // Update many GrowthRates
     * const growthRates = await prisma.growthRates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GrowthRates and only return the `id`
     * const growthRatesWithIdOnly = await prisma.growthRates.updateManyAndReturn({
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
    updateManyAndReturn<T extends GrowthRatesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GrowthRatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one GrowthRates.
     * @param {GrowthRatesUpsertArgs} args - Arguments to update or create a GrowthRates.
     * @example
     * // Update or create a GrowthRates
     * const growthRates = await prisma.growthRates.upsert({
     *   create: {
     *     // ... data to create a GrowthRates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrowthRates we want to update
     *   }
     * })
     */
    upsert<T extends GrowthRatesUpsertArgs>(args: Prisma.SelectSubset<T, GrowthRatesUpsertArgs<ExtArgs>>): Prisma.Prisma__GrowthRatesClient<runtime.Types.Result.GetResult<Prisma.$GrowthRatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of GrowthRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthRatesCountArgs} args - Arguments to filter GrowthRates to count.
     * @example
     * // Count the number of GrowthRates
     * const count = await prisma.growthRates.count({
     *   where: {
     *     // ... the filter for the GrowthRates we want to count
     *   }
     * })
    **/
    count<T extends GrowthRatesCountArgs>(args?: Prisma.Subset<T, GrowthRatesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GrowthRatesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a GrowthRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthRatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrowthRatesAggregateArgs>(args: Prisma.Subset<T, GrowthRatesAggregateArgs>): Prisma.PrismaPromise<GetGrowthRatesAggregateType<T>>;
    /**
     * Group by GrowthRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthRatesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends GrowthRatesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GrowthRatesGroupByArgs['orderBy'];
    } : {
        orderBy?: GrowthRatesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GrowthRatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrowthRatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GrowthRates model
     */
    readonly fields: GrowthRatesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for GrowthRates.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GrowthRatesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    species<T extends Prisma.GrowthRates$speciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GrowthRates$speciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PokemonSpeciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    experience<T extends Prisma.GrowthRates$experienceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GrowthRates$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the GrowthRates model
 */
export interface GrowthRatesFieldRefs {
    readonly id: Prisma.FieldRef<"GrowthRates", 'Int'>;
    readonly identifier: Prisma.FieldRef<"GrowthRates", 'String'>;
    readonly formula: Prisma.FieldRef<"GrowthRates", 'String'>;
}
/**
 * GrowthRates findUnique
 */
export type GrowthRatesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * Filter, which GrowthRates to fetch.
     */
    where: Prisma.GrowthRatesWhereUniqueInput;
};
/**
 * GrowthRates findUniqueOrThrow
 */
export type GrowthRatesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * Filter, which GrowthRates to fetch.
     */
    where: Prisma.GrowthRatesWhereUniqueInput;
};
/**
 * GrowthRates findFirst
 */
export type GrowthRatesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * Filter, which GrowthRates to fetch.
     */
    where?: Prisma.GrowthRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GrowthRates to fetch.
     */
    orderBy?: Prisma.GrowthRatesOrderByWithRelationInput | Prisma.GrowthRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GrowthRates.
     */
    cursor?: Prisma.GrowthRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GrowthRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GrowthRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GrowthRates.
     */
    distinct?: Prisma.GrowthRatesScalarFieldEnum | Prisma.GrowthRatesScalarFieldEnum[];
};
/**
 * GrowthRates findFirstOrThrow
 */
export type GrowthRatesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * Filter, which GrowthRates to fetch.
     */
    where?: Prisma.GrowthRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GrowthRates to fetch.
     */
    orderBy?: Prisma.GrowthRatesOrderByWithRelationInput | Prisma.GrowthRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GrowthRates.
     */
    cursor?: Prisma.GrowthRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GrowthRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GrowthRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GrowthRates.
     */
    distinct?: Prisma.GrowthRatesScalarFieldEnum | Prisma.GrowthRatesScalarFieldEnum[];
};
/**
 * GrowthRates findMany
 */
export type GrowthRatesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * Filter, which GrowthRates to fetch.
     */
    where?: Prisma.GrowthRatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GrowthRates to fetch.
     */
    orderBy?: Prisma.GrowthRatesOrderByWithRelationInput | Prisma.GrowthRatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GrowthRates.
     */
    cursor?: Prisma.GrowthRatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GrowthRates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GrowthRates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GrowthRates.
     */
    distinct?: Prisma.GrowthRatesScalarFieldEnum | Prisma.GrowthRatesScalarFieldEnum[];
};
/**
 * GrowthRates create
 */
export type GrowthRatesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * The data needed to create a GrowthRates.
     */
    data: Prisma.XOR<Prisma.GrowthRatesCreateInput, Prisma.GrowthRatesUncheckedCreateInput>;
};
/**
 * GrowthRates createMany
 */
export type GrowthRatesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrowthRates.
     */
    data: Prisma.GrowthRatesCreateManyInput | Prisma.GrowthRatesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * GrowthRates createManyAndReturn
 */
export type GrowthRatesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * The data used to create many GrowthRates.
     */
    data: Prisma.GrowthRatesCreateManyInput | Prisma.GrowthRatesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * GrowthRates update
 */
export type GrowthRatesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * The data needed to update a GrowthRates.
     */
    data: Prisma.XOR<Prisma.GrowthRatesUpdateInput, Prisma.GrowthRatesUncheckedUpdateInput>;
    /**
     * Choose, which GrowthRates to update.
     */
    where: Prisma.GrowthRatesWhereUniqueInput;
};
/**
 * GrowthRates updateMany
 */
export type GrowthRatesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update GrowthRates.
     */
    data: Prisma.XOR<Prisma.GrowthRatesUpdateManyMutationInput, Prisma.GrowthRatesUncheckedUpdateManyInput>;
    /**
     * Filter which GrowthRates to update
     */
    where?: Prisma.GrowthRatesWhereInput;
    /**
     * Limit how many GrowthRates to update.
     */
    limit?: number;
};
/**
 * GrowthRates updateManyAndReturn
 */
export type GrowthRatesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * The data used to update GrowthRates.
     */
    data: Prisma.XOR<Prisma.GrowthRatesUpdateManyMutationInput, Prisma.GrowthRatesUncheckedUpdateManyInput>;
    /**
     * Filter which GrowthRates to update
     */
    where?: Prisma.GrowthRatesWhereInput;
    /**
     * Limit how many GrowthRates to update.
     */
    limit?: number;
};
/**
 * GrowthRates upsert
 */
export type GrowthRatesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * The filter to search for the GrowthRates to update in case it exists.
     */
    where: Prisma.GrowthRatesWhereUniqueInput;
    /**
     * In case the GrowthRates found by the `where` argument doesn't exist, create a new GrowthRates with this data.
     */
    create: Prisma.XOR<Prisma.GrowthRatesCreateInput, Prisma.GrowthRatesUncheckedCreateInput>;
    /**
     * In case the GrowthRates was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GrowthRatesUpdateInput, Prisma.GrowthRatesUncheckedUpdateInput>;
};
/**
 * GrowthRates delete
 */
export type GrowthRatesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
    /**
     * Filter which GrowthRates to delete.
     */
    where: Prisma.GrowthRatesWhereUniqueInput;
};
/**
 * GrowthRates deleteMany
 */
export type GrowthRatesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GrowthRates to delete
     */
    where?: Prisma.GrowthRatesWhereInput;
    /**
     * Limit how many GrowthRates to delete.
     */
    limit?: number;
};
/**
 * GrowthRates.species
 */
export type GrowthRates$speciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSpecies
     */
    select?: Prisma.PokemonSpeciesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PokemonSpecies
     */
    omit?: Prisma.PokemonSpeciesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PokemonSpeciesInclude<ExtArgs> | null;
    where?: Prisma.PokemonSpeciesWhereInput;
    orderBy?: Prisma.PokemonSpeciesOrderByWithRelationInput | Prisma.PokemonSpeciesOrderByWithRelationInput[];
    cursor?: Prisma.PokemonSpeciesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PokemonSpeciesScalarFieldEnum | Prisma.PokemonSpeciesScalarFieldEnum[];
};
/**
 * GrowthRates.experience
 */
export type GrowthRates$experienceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
/**
 * GrowthRates without action
 */
export type GrowthRatesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthRates
     */
    select?: Prisma.GrowthRatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GrowthRates
     */
    omit?: Prisma.GrowthRatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GrowthRatesInclude<ExtArgs> | null;
};
