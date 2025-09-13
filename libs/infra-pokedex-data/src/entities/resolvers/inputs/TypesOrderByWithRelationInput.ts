import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesOrderByRelationAggregateInput } from "../inputs/BerriesOrderByRelationAggregateInput";
import { BerryFlavorsOrderByRelationAggregateInput } from "../inputs/BerryFlavorsOrderByRelationAggregateInput";
import { GenerationsOrderByWithRelationInput } from "../inputs/GenerationsOrderByWithRelationInput";
import { MoveDamageClassesOrderByWithRelationInput } from "../inputs/MoveDamageClassesOrderByWithRelationInput";
import { MovesOrderByRelationAggregateInput } from "../inputs/MovesOrderByRelationAggregateInput";
import { NaturesOrderByRelationAggregateInput } from "../inputs/NaturesOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonFormTypesOrderByRelationAggregateInput } from "../inputs/PokemonFormTypesOrderByRelationAggregateInput";
import { PokemonTypesOrderByRelationAggregateInput } from "../inputs/PokemonTypesOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TypeEfficacyOrderByRelationAggregateInput } from "../inputs/TypeEfficacyOrderByRelationAggregateInput";
import { TypeGameIndicesOrderByRelationAggregateInput } from "../inputs/TypeGameIndicesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypesOrderByWithRelationInput", {})
export class TypesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  damage_class_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesOrderByWithRelationInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MovesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonTypes?: PokemonTypesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesOrderByRelationAggregateInput, {
    nullable: true
  })
  formTypes?: PokemonFormTypesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: TypeGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyOrderByRelationAggregateInput, {
    nullable: true
  })
  efficacy?: TypeEfficacyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyOrderByRelationAggregateInput, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsOrderByRelationAggregateInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesOrderByRelationAggregateInput, {
    nullable: true
  })
  natures?: NaturesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesOrderByRelationAggregateInput, {
    nullable: true
  })
  naturesIncreased?: NaturesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerriesOrderByRelationAggregateInput, {
    nullable: true
  })
  naturalGiftTypes?: BerriesOrderByRelationAggregateInput | undefined;
}
