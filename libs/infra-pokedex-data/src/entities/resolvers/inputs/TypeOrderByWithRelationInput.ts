import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorOrderByRelationAggregateInput } from "../inputs/BerryFlavorOrderByRelationAggregateInput";
import { BerryOrderByRelationAggregateInput } from "../inputs/BerryOrderByRelationAggregateInput";
import { GenerationOrderByWithRelationInput } from "../inputs/GenerationOrderByWithRelationInput";
import { MoveDamageClassOrderByWithRelationInput } from "../inputs/MoveDamageClassOrderByWithRelationInput";
import { MoveOrderByRelationAggregateInput } from "../inputs/MoveOrderByRelationAggregateInput";
import { NatureOrderByRelationAggregateInput } from "../inputs/NatureOrderByRelationAggregateInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonFormTypeOrderByRelationAggregateInput } from "../inputs/PokemonFormTypeOrderByRelationAggregateInput";
import { PokemonTypeOrderByRelationAggregateInput } from "../inputs/PokemonTypeOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TypeEfficacyOrderByRelationAggregateInput } from "../inputs/TypeEfficacyOrderByRelationAggregateInput";
import { TypeGameIndexOrderByRelationAggregateInput } from "../inputs/TypeGameIndexOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypeOrderByWithRelationInput", {})
export class TypeOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => GenerationOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassOrderByWithRelationInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MoveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonTypes?: PokemonTypeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeOrderByRelationAggregateInput, {
    nullable: true
  })
  formTypes?: PokemonFormTypeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: TypeGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyOrderByRelationAggregateInput, {
    nullable: true
  })
  efficacy?: TypeEfficacyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyOrderByRelationAggregateInput, {
    nullable: true
  })
  efficacyTarget?: TypeEfficacyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorOrderByRelationAggregateInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureOrderByRelationAggregateInput, {
    nullable: true
  })
  natures?: NatureOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureOrderByRelationAggregateInput, {
    nullable: true
  })
  naturesIncreased?: NatureOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  knownMoveTypes?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  partyTypes?: PokemonEvolutionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryOrderByRelationAggregateInput, {
    nullable: true
  })
  naturalGiftTypes?: BerryOrderByRelationAggregateInput | undefined;
}
