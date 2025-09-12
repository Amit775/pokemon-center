import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonItemsScalarWhereWithAggregatesInput", {})
export class PokemonItemsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonItemsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonItemsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonItemsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  item_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rarity?: IntWithAggregatesFilter | undefined;
}
