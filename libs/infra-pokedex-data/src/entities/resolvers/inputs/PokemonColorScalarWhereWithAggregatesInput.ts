import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonColorScalarWhereWithAggregatesInput", {})
export class PokemonColorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonColorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonColorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonColorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
