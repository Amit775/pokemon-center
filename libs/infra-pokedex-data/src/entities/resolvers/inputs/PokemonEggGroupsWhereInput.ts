import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsRelationFilter } from "../inputs/EggGroupsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";

@TypeGraphQL.InputType("PokemonEggGroupsWhereInput", {})
export class PokemonEggGroupsWhereInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereInput], {
    nullable: true
  })
  AND?: PokemonEggGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereInput], {
    nullable: true
  })
  OR?: PokemonEggGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereInput], {
    nullable: true
  })
  NOT?: PokemonEggGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  species_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  egg_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EggGroupsRelationFilter, {
    nullable: true
  })
  eggGroup?: EggGroupsRelationFilter | undefined;
}
