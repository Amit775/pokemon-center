import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryListRelationFilter } from "../inputs/BerryListRelationFilter";
import { EvolutionChainListRelationFilter } from "../inputs/EvolutionChainListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItemCategoryRelationFilter } from "../inputs/ItemCategoryRelationFilter";
import { ItemFlagMapListRelationFilter } from "../inputs/ItemFlagMapListRelationFilter";
import { ItemFlingEffectsNullableRelationFilter } from "../inputs/ItemFlingEffectsNullableRelationFilter";
import { ItemGameIndexListRelationFilter } from "../inputs/ItemGameIndexListRelationFilter";
import { ItemWhereInput } from "../inputs/ItemWhereInput";
import { MachineListRelationFilter } from "../inputs/MachineListRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { PokemonItemListRelationFilter } from "../inputs/PokemonItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemWhereUniqueInput", {})
export class ItemWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereInput], {
    nullable: true
  })
  AND?: ItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereInput], {
    nullable: true
  })
  OR?: ItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemWhereInput], {
    nullable: true
  })
  NOT?: ItemWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ItemCategoryRelationFilter, {
    nullable: true
  })
  category?: ItemCategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsNullableRelationFilter, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonItemListRelationFilter, {
    nullable: true
  })
  pokemonItems?: PokemonItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MachineListRelationFilter, {
    nullable: true
  })
  machines?: MachineListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BerryListRelationFilter, {
    nullable: true
  })
  berries?: BerryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexListRelationFilter, {
    nullable: true
  })
  gameIndices?: ItemGameIndexListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: ItemFlagMapListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainListRelationFilter, {
    nullable: true
  })
  babyTriggerItems?: EvolutionChainListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  triggerItems?: PokemonEvolutionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  heldItems?: PokemonEvolutionListRelationFilter | undefined;
}
