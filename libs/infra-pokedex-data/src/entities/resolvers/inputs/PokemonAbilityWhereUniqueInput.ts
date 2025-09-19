import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityRelationFilter } from "../inputs/AbilityRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput } from "../inputs/PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput";
import { PokemonAbilityWhereInput } from "../inputs/PokemonAbilityWhereInput";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";

@TypeGraphQL.InputType("PokemonAbilityWhereUniqueInput", {})
export class PokemonAbilityWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput, {
    nullable: true
  })
  pokemon_id_ability_id?: PokemonAbilitiesPokemon_idAbility_idCompoundUniqueInput | undefined;

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
