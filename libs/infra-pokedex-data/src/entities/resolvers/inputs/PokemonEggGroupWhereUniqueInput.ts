import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupRelationFilter } from "../inputs/EggGroupRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonEggGroupWhereInput } from "../inputs/PokemonEggGroupWhereInput";
import { PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput } from "../inputs/PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";

@TypeGraphQL.InputType("PokemonEggGroupWhereUniqueInput", {})
export class PokemonEggGroupWhereUniqueInput {
  @TypeGraphQL.Field(_type => PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput, {
    nullable: true
  })
  species_id_egg_group_id?: PokemonEggGroupsSpecies_idEgg_group_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereInput], {
    nullable: true
  })
  AND?: PokemonEggGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereInput], {
    nullable: true
  })
  OR?: PokemonEggGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereInput], {
    nullable: true
  })
  NOT?: PokemonEggGroupWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EggGroupRelationFilter, {
    nullable: true
  })
  eggGroup?: EggGroupRelationFilter | undefined;
}
