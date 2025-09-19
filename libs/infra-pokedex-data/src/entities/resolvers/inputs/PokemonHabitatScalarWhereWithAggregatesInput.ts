import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonHabitatScalarWhereWithAggregatesInput", {})
export class PokemonHabitatScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonHabitatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonHabitatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonHabitatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonHabitatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
