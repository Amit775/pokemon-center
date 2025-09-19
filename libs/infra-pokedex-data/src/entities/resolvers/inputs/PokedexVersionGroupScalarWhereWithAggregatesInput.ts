import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PokedexVersionGroupScalarWhereWithAggregatesInput", {})
export class PokedexVersionGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokedexVersionGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokedexVersionGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokedexVersionGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokedex_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;
}
