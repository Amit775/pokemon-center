import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput", {})
export class VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemon_move_method_id?: IntWithAggregatesFilter | undefined;
}
