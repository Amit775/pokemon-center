import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterListRelationFilter } from "../inputs/EncounterListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PokemonAbilityListRelationFilter } from "../inputs/PokemonAbilityListRelationFilter";
import { PokemonFormListRelationFilter } from "../inputs/PokemonFormListRelationFilter";
import { PokemonGameIndexListRelationFilter } from "../inputs/PokemonGameIndexListRelationFilter";
import { PokemonItemListRelationFilter } from "../inputs/PokemonItemListRelationFilter";
import { PokemonMoveListRelationFilter } from "../inputs/PokemonMoveListRelationFilter";
import { PokemonSpeciesRelationFilter } from "../inputs/PokemonSpeciesRelationFilter";
import { PokemonStatListRelationFilter } from "../inputs/PokemonStatListRelationFilter";
import { PokemonTypeListRelationFilter } from "../inputs/PokemonTypeListRelationFilter";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokemonWhereUniqueInput", {})
export class PokemonWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  AND?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  OR?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  NOT?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  species_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  height?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  weight?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  base_experience?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  order?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_default?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormListRelationFilter, {
    nullable: true
  })
  forms?: PokemonFormListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityListRelationFilter, {
    nullable: true
  })
  abilities?: PokemonAbilityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveListRelationFilter, {
    nullable: true
  })
  moves?: PokemonMoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonStatListRelationFilter, {
    nullable: true
  })
  stats?: PokemonStatListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeListRelationFilter, {
    nullable: true
  })
  types?: PokemonTypeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonItemListRelationFilter, {
    nullable: true
  })
  items?: PokemonItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexListRelationFilter, {
    nullable: true
  })
  gameIndices?: PokemonGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterListRelationFilter, {
    nullable: true
  })
  encounters?: EncounterListRelationFilter | undefined;
}
