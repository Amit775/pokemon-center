import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationOrderByRelationAggregateInput } from "../inputs/GenerationOrderByRelationAggregateInput";
import { LocationOrderByRelationAggregateInput } from "../inputs/LocationOrderByRelationAggregateInput";
import { PokedexOrderByRelationAggregateInput } from "../inputs/PokedexOrderByRelationAggregateInput";
import { VersionGroupRegionOrderByRelationAggregateInput } from "../inputs/VersionGroupRegionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RegionOrderByWithRelationInput", {})
export class RegionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenerationOrderByRelationAggregateInput, {
    nullable: true
  })
  generations?: GenerationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationOrderByRelationAggregateInput, {
    nullable: true
  })
  locations?: LocationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexOrderByRelationAggregateInput, {
    nullable: true
  })
  pokedexes?: PokedexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionOrderByRelationAggregateInput | undefined;
}
