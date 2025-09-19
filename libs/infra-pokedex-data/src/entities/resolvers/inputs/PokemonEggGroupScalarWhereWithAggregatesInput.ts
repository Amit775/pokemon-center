import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonEggGroupScalarWhereWithAggregatesInput", {})
export class PokemonEggGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonEggGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonEggGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonEggGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  species_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  egg_group_id?: IntWithAggregatesFilter | undefined;
}
