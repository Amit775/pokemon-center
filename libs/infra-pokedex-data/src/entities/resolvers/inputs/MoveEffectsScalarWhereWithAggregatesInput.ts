import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MoveEffectsScalarWhereWithAggregatesInput", {})
export class MoveEffectsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;
}
