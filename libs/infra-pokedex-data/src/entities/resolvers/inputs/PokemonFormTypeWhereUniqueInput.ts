import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonFormRelationFilter } from "../inputs/PokemonFormRelationFilter";
import { PokemonFormTypeWhereInput } from "../inputs/PokemonFormTypeWhereInput";
import { PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput } from "../inputs/PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput";
import { TypeRelationFilter } from "../inputs/TypeRelationFilter";

@TypeGraphQL.InputType("PokemonFormTypeWhereUniqueInput", {})
export class PokemonFormTypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_form_id_type_id?: PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereInput], {
    nullable: true
  })
  AND?: PokemonFormTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereInput], {
    nullable: true
  })
  OR?: PokemonFormTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_form_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  slot?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormRelationFilter, {
    nullable: true
  })
  pokemonForm?: PokemonFormRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeRelationFilter, {
    nullable: true
  })
  type?: TypeRelationFilter | undefined;
}
