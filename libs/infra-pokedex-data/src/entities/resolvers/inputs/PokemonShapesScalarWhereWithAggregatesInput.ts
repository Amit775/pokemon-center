import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonShapesScalarWhereWithAggregatesInput", {})
export class PokemonShapesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonShapesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonShapesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonShapesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonShapesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonShapesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
