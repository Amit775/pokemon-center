import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonItemScalarWhereWithAggregatesInput", {})
export class PokemonItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonItemScalarWhereWithAggregatesInput[] | undefined;

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
