import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityRelationFilter } from "../inputs/AbilityRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";

@TypeGraphQL.InputType("PokemonAbilityWhereInput", {})
export class PokemonAbilityWhereInput {
  @TypeGraphQL.Field(_type => [PokemonAbilityWhereInput], {
    nullable: true
  })
  AND?: PokemonAbilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereInput], {
    nullable: true
  })
  OR?: PokemonAbilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereInput], {
    nullable: true
  })
  NOT?: PokemonAbilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ability_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_hidden?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  slot?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AbilityRelationFilter, {
    nullable: true
  })
  ability?: AbilityRelationFilter | undefined;
}
