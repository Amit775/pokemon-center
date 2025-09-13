import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesListRelationFilter } from "../inputs/BerriesListRelationFilter";
import { BerryFlavorsListRelationFilter } from "../inputs/BerryFlavorsListRelationFilter";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MoveDamageClassesNullableRelationFilter } from "../inputs/MoveDamageClassesNullableRelationFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";
import { NaturesListRelationFilter } from "../inputs/NaturesListRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { PokemonFormTypesListRelationFilter } from "../inputs/PokemonFormTypesListRelationFilter";
import { PokemonTypesListRelationFilter } from "../inputs/PokemonTypesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TypeEfficacyListRelationFilter } from "../inputs/TypeEfficacyListRelationFilter";
import { TypeGameIndicesListRelationFilter } from "../inputs/TypeGameIndicesListRelationFilter";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesWhereUniqueInput", {})
export class TypesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereInput], {
    nullable: true
  })
  AND?: TypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereInput], {
    nullable: true
  })
  OR?: TypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereInput], {
    nullable: true
  })
  NOT?: TypesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesNullableRelationFilter, {
    nullable: true
  })
  damageClass?: MoveDamageClassesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesListRelationFilter, {
    nullable: true
  })
  pokemonTypes?: PokemonTypesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesListRelationFilter, {
    nullable: true
  })
  formTypes?: PokemonFormTypesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesListRelationFilter, {
    nullable: true
  })
  gameIndices?: TypeGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyListRelationFilter, {
    nullable: true
  })
  efficacy?: TypeEfficacyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyListRelationFilter, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsListRelationFilter, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NaturesListRelationFilter, {
    nullable: true
  })
  natures?: NaturesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NaturesListRelationFilter, {
    nullable: true
  })
  naturesIncreased?: NaturesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerriesListRelationFilter, {
    nullable: true
  })
  naturalGiftTypes?: BerriesListRelationFilter | undefined;
}
