import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsRelationFilter } from "../inputs/EggGroupsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput } from "../inputs/PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput";
import { PokemonEggGroupsWhereInput } from "../inputs/PokemonEggGroupsWhereInput";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";

@TypeGraphQL.InputType("PokemonEggGroupsWhereUniqueInput", {})
export class PokemonEggGroupsWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput, {
    nullable: true
  })
  species_id_egg_group_id?: PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput | undefined;

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
