import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokemonEggGroupsScalarWhereWithAggregatesInput", {})
export class PokemonEggGroupsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokemonEggGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokemonEggGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokemonEggGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  species_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  egg_group_id?: IntWithAggregatesFilter | undefined;
}
