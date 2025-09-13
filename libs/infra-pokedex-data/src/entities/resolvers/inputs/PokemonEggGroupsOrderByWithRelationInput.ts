import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsOrderByWithRelationInput } from "../inputs/EggGroupsOrderByWithRelationInput";
import { PokemonSpeciesOrderByWithRelationInput } from "../inputs/PokemonSpeciesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonEggGroupsOrderByWithRelationInput", {})
export class PokemonEggGroupsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  egg_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsOrderByWithRelationInput, {
    nullable: true
  })
  eggGroup?: EggGroupsOrderByWithRelationInput | undefined;
}
