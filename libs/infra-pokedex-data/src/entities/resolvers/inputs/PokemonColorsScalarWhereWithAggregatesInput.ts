import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonColorsScalarWhereWithAggregatesInput", {})
export class PokemonColorsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonColorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonColorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonColorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonColorsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
