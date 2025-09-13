import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesRelationFilter } from "../inputs/AbilitiesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";

@TypeGraphQL.InputType("PokemonAbilitiesWhereInput", {})
export class PokemonAbilitiesWhereInput {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereInput], {
    nullable: true
  })
  AND?: PokemonAbilitiesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereInput], {
    nullable: true
  })
  OR?: PokemonAbilitiesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereInput], {
    nullable: true
  })
  NOT?: PokemonAbilitiesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => AbilitiesRelationFilter, {
    nullable: true
  })
  ability?: AbilitiesRelationFilter | undefined;
}
