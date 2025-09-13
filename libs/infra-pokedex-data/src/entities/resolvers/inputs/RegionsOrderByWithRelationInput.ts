import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsOrderByRelationAggregateInput } from "../inputs/GenerationsOrderByRelationAggregateInput";
import { LocationsOrderByRelationAggregateInput } from "../inputs/LocationsOrderByRelationAggregateInput";
import { PokedexesOrderByRelationAggregateInput } from "../inputs/PokedexesOrderByRelationAggregateInput";
import { VersionGroupRegionsOrderByRelationAggregateInput } from "../inputs/VersionGroupRegionsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RegionsOrderByWithRelationInput", {})
export class RegionsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenerationsOrderByRelationAggregateInput, {
    nullable: true
  })
  generations?: GenerationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationsOrderByRelationAggregateInput, {
    nullable: true
  })
  locations?: LocationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokedexes?: PokedexesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionsOrderByRelationAggregateInput | undefined;
}
