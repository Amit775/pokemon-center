import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonMoveMethodScalarWhereWithAggregatesInput", {})
export class PokemonMoveMethodScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonMoveMethodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonMoveMethodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonMoveMethodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonMoveMethodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
