import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { PokemonTypesPokemon_idType_idCompoundUniqueInput } from "../inputs/PokemonTypesPokemon_idType_idCompoundUniqueInput";
import { PokemonTypesWhereInput } from "../inputs/PokemonTypesWhereInput";
import { TypesRelationFilter } from "../inputs/TypesRelationFilter";

@TypeGraphQL.InputType("PokemonTypesWhereUniqueInput", {})
export class PokemonTypesWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonTypesPokemon_idType_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_type_id?: PokemonTypesPokemon_idType_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereInput], {
    nullable: true
  })
  AND?: PokemonTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereInput], {
    nullable: true
  })
  OR?: PokemonTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereInput], {
    nullable: true
  })
  NOT?: PokemonTypesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TypesRelationFilter, {
    nullable: true
  })
  type?: TypesRelationFilter | undefined;
}
