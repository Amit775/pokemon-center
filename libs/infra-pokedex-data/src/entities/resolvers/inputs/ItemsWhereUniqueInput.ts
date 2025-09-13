import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesListRelationFilter } from "../inputs/BerriesListRelationFilter";
import { EvolutionChainsListRelationFilter } from "../inputs/EvolutionChainsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItemCategoriesRelationFilter } from "../inputs/ItemCategoriesRelationFilter";
import { ItemFlagMapListRelationFilter } from "../inputs/ItemFlagMapListRelationFilter";
import { ItemFlingEffectsNullableRelationFilter } from "../inputs/ItemFlingEffectsNullableRelationFilter";
import { ItemGameIndicesListRelationFilter } from "../inputs/ItemGameIndicesListRelationFilter";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";
import { MachinesListRelationFilter } from "../inputs/MachinesListRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { PokemonItemsListRelationFilter } from "../inputs/PokemonItemsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemsWhereUniqueInput", {})
export class ItemsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereInput], {
    nullable: true
  })
  AND?: ItemsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereInput], {
    nullable: true
  })
  OR?: ItemsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsWhereInput], {
    nullable: true
  })
  NOT?: ItemsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  category_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cost?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  fling_power?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  fling_effect_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesRelationFilter, {
    nullable: true
  })
  category?: ItemCategoriesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsNullableRelationFilter, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsListRelationFilter, {
    nullable: true
  })
  pokemonItems?: PokemonItemsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MachinesListRelationFilter, {
    nullable: true
  })
  machines?: MachinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerriesListRelationFilter, {
    nullable: true
  })
  berries?: BerriesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesListRelationFilter, {
    nullable: true
  })
  gameIndices?: ItemGameIndicesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: ItemFlagMapListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsListRelationFilter, {
    nullable: true
  })
  babyTriggerItems?: EvolutionChainsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  triggerItems?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  heldItems?: PokemonEvolutionListRelationFilter | undefined;
}
