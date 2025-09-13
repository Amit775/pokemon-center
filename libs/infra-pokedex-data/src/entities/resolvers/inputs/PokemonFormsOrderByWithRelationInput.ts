import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsOrderByRelationAggregateInput } from "../inputs/PokemonFormGenerationsOrderByRelationAggregateInput";
import { PokemonFormTypesOrderByRelationAggregateInput } from "../inputs/PokemonFormTypesOrderByRelationAggregateInput";
import { PokemonOrderByWithRelationInput } from "../inputs/PokemonOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { VersionGroupsOrderByWithRelationInput } from "../inputs/VersionGroupsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormsOrderByWithRelationInput", {})
export class PokemonFormsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  form_identifier?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  introduced_in_version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_battle_only?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_mega?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  form_order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonOrderByWithRelationInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsOrderByRelationAggregateInput, {
    nullable: true
  })
  generations?: PokemonFormGenerationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesOrderByRelationAggregateInput, {
    nullable: true
  })
  types?: PokemonFormTypesOrderByRelationAggregateInput | undefined;
}
