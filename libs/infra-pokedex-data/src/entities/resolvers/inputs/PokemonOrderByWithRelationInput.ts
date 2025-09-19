import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterOrderByRelationAggregateInput } from "../inputs/EncounterOrderByRelationAggregateInput";
import { PokemonAbilityOrderByRelationAggregateInput } from "../inputs/PokemonAbilityOrderByRelationAggregateInput";
import { PokemonFormOrderByRelationAggregateInput } from "../inputs/PokemonFormOrderByRelationAggregateInput";
import { PokemonGameIndexOrderByRelationAggregateInput } from "../inputs/PokemonGameIndexOrderByRelationAggregateInput";
import { PokemonItemOrderByRelationAggregateInput } from "../inputs/PokemonItemOrderByRelationAggregateInput";
import { PokemonMoveOrderByRelationAggregateInput } from "../inputs/PokemonMoveOrderByRelationAggregateInput";
import { PokemonSpeciesOrderByWithRelationInput } from "../inputs/PokemonSpeciesOrderByWithRelationInput";
import { PokemonStatOrderByRelationAggregateInput } from "../inputs/PokemonStatOrderByRelationAggregateInput";
import { PokemonTypeOrderByRelationAggregateInput } from "../inputs/PokemonTypeOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonOrderByWithRelationInput", {})
export class PokemonOrderByWithRelationInput {
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
  species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  weight?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  base_experience?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormOrderByRelationAggregateInput, {
    nullable: true
  })
  forms?: PokemonFormOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityOrderByRelationAggregateInput, {
    nullable: true
  })
  abilities?: PokemonAbilityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: PokemonMoveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatOrderByRelationAggregateInput, {
    nullable: true
  })
  stats?: PokemonStatOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeOrderByRelationAggregateInput, {
    nullable: true
  })
  types?: PokemonTypeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemOrderByRelationAggregateInput, {
    nullable: true
  })
  items?: PokemonItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: PokemonGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncounterOrderByRelationAggregateInput | undefined;
}
