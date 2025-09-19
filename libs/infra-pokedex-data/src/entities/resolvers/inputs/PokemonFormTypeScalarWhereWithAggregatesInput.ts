import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonFormTypeScalarWhereWithAggregatesInput", {})
export class PokemonFormTypeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonFormTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonFormTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonFormTypeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_form_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  type_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  slot?: IntWithAggregatesFilter | undefined;
}
