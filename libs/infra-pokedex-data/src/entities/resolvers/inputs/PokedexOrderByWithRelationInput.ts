import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupOrderByRelationAggregateInput } from "../inputs/PokedexVersionGroupOrderByRelationAggregateInput";
import { PokemonDexNumberOrderByRelationAggregateInput } from "../inputs/PokemonDexNumberOrderByRelationAggregateInput";
import { RegionOrderByWithRelationInput } from "../inputs/RegionOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokedexOrderByWithRelationInput", {})
export class PokedexOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  region_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_main_series?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberOrderByRelationAggregateInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumberOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupOrderByRelationAggregateInput | undefined;
}
