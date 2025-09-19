import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { PokemonTypeWhereInput } from "../inputs/PokemonTypeWhereInput";
import { PokemonTypesPokemon_idType_idCompoundUniqueInput } from "../inputs/PokemonTypesPokemon_idType_idCompoundUniqueInput";
import { TypeRelationFilter } from "../inputs/TypeRelationFilter";

@TypeGraphQL.InputType("PokemonTypeWhereUniqueInput", {})
export class PokemonTypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonTypesPokemon_idType_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_type_id?: PokemonTypesPokemon_idType_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereInput], {
    nullable: true
  })
  AND?: PokemonTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereInput], {
    nullable: true
  })
  OR?: PokemonTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeWhereInput], {
    nullable: true
  })
  NOT?: PokemonTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  slot?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeRelationFilter, {
    nullable: true
  })
  type?: TypeRelationFilter | undefined;
}
