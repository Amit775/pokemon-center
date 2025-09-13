import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItemsNullableRelationFilter } from "../inputs/ItemsNullableRelationFilter";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";

@TypeGraphQL.InputType("EvolutionChainsWhereInput", {})
export class EvolutionChainsWhereInput {
  @TypeGraphQL.Field(_type => [EvolutionChainsWhereInput], {
    nullable: true
  })
  AND?: EvolutionChainsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsWhereInput], {
    nullable: true
  })
  OR?: EvolutionChainsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsWhereInput], {
    nullable: true
  })
  NOT?: EvolutionChainsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  baby_trigger_item_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsNullableRelationFilter, {
    nullable: true
  })
  babyTriggerItem?: ItemsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesListRelationFilter, {
    nullable: true
  })
  species?: PokemonSpeciesListRelationFilter | undefined;
}
