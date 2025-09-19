import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorListRelationFilter } from "../inputs/BerryFlavorListRelationFilter";
import { BerryListRelationFilter } from "../inputs/BerryListRelationFilter";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MoveDamageClassesNullableRelationFilter } from "../inputs/MoveDamageClassesNullableRelationFilter";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";
import { NatureListRelationFilter } from "../inputs/NatureListRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { PokemonFormTypeListRelationFilter } from "../inputs/PokemonFormTypeListRelationFilter";
import { PokemonTypeListRelationFilter } from "../inputs/PokemonTypeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypeEfficacyListRelationFilter } from "../inputs/TypeEfficacyListRelationFilter";
import { TypeGameIndexListRelationFilter } from "../inputs/TypeGameIndexListRelationFilter";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeWhereUniqueInput", {})
export class TypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereInput], {
    nullable: true
  })
  AND?: TypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereInput], {
    nullable: true
  })
  OR?: TypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereInput], {
    nullable: true
  })
  NOT?: TypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  damage_class_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesNullableRelationFilter, {
    nullable: true
  })
  damageClass?: MoveDamageClassesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeListRelationFilter, {
    nullable: true
  })
  pokemonTypes?: PokemonTypeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeListRelationFilter, {
    nullable: true
  })
  formTypes?: PokemonFormTypeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexListRelationFilter, {
    nullable: true
  })
  gameIndices?: TypeGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyListRelationFilter, {
    nullable: true
  })
  efficacy?: TypeEfficacyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyListRelationFilter, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorListRelationFilter, {
    nullable: true
  })
  berryFlavors?: BerryFlavorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NatureListRelationFilter, {
    nullable: true
  })
  natures?: NatureListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NatureListRelationFilter, {
    nullable: true
  })
  naturesIncreased?: NatureListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryListRelationFilter, {
    nullable: true
  })
  naturalGiftTypes?: BerryListRelationFilter | undefined;
}
