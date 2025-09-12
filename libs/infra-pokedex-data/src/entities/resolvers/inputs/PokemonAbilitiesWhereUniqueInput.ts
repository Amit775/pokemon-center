import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesRelationFilter } from "../inputs/AbilitiesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput } from "../inputs/PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput";
import { PokemonAbilitiesWhereInput } from "../inputs/PokemonAbilitiesWhereInput";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";

@TypeGraphQL.InputType("PokemonAbilitiesWhereUniqueInput", {})
export class PokemonAbilitiesWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_ability_id?: PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput | undefined;

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
