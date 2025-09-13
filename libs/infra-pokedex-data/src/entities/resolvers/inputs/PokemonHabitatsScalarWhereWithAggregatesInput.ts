import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonHabitatsScalarWhereWithAggregatesInput", {})
export class PokemonHabitatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonHabitatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonHabitatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonHabitatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonHabitatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
