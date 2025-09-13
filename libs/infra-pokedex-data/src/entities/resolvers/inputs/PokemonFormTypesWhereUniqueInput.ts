import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput } from "../inputs/PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput";
import { PokemonFormTypesWhereInput } from "../inputs/PokemonFormTypesWhereInput";
import { PokemonFormsRelationFilter } from "../inputs/PokemonFormsRelationFilter";
import { TypesRelationFilter } from "../inputs/TypesRelationFilter";

@TypeGraphQL.InputType("PokemonFormTypesWhereUniqueInput", {})
export class PokemonFormTypesWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_form_id_type_id?: PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereInput], {
    nullable: true
  })
  AND?: PokemonFormTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereInput], {
    nullable: true
  })
  OR?: PokemonFormTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesWhereInput], {
    nullable: true
  })
  NOT?: PokemonFormTypesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PokemonFormsRelationFilter, {
    nullable: true
  })
  pokemonForm?: PokemonFormsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesRelationFilter, {
    nullable: true
  })
  type?: TypesRelationFilter | undefined;
}
