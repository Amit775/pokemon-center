import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainWhereInput } from "../inputs/EvolutionChainWhereInput";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ItemsNullableRelationFilter } from "../inputs/ItemsNullableRelationFilter";
import { PokemonSpeciesListRelationFilter } from "../inputs/PokemonSpeciesListRelationFilter";

@TypeGraphQL.InputType("EvolutionChainWhereUniqueInput", {})
export class EvolutionChainWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereInput], {
    nullable: true
  })
  AND?: EvolutionChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereInput], {
    nullable: true
  })
  OR?: EvolutionChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereInput], {
    nullable: true
  })
  NOT?: EvolutionChainWhereInput[] | undefined;

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
