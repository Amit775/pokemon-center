import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupRelationFilter } from "../inputs/EggGroupRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";

@TypeGraphQL.InputType("PokemonEggGroupWhereInput", {})
export class PokemonEggGroupWhereInput {
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
