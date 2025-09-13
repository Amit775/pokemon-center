import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonMoveMethodsScalarWhereWithAggregatesInput", {})
export class PokemonMoveMethodsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonMoveMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonMoveMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonMoveMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonMoveMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
