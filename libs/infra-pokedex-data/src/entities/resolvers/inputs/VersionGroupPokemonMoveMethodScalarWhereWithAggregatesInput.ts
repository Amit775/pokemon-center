import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput", {})
export class VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VersionGroupPokemonMoveMethodScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntWithAggregatesFilter | undefined;
}
