import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokedexVersionGroupsScalarWhereWithAggregatesInput", {})
export class PokedexVersionGroupsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokedexVersionGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokedexVersionGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokedexVersionGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokedex_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;
}
