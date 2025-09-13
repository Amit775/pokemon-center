import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsOrderByRelationAggregateInput } from "../inputs/PokedexVersionGroupsOrderByRelationAggregateInput";
import { PokemonDexNumbersOrderByRelationAggregateInput } from "../inputs/PokemonDexNumbersOrderByRelationAggregateInput";
import { RegionsOrderByWithRelationInput } from "../inputs/RegionsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokedexesOrderByWithRelationInput", {})
export class PokedexesOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => RegionsOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersOrderByRelationAggregateInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupsOrderByRelationAggregateInput | undefined;
}
