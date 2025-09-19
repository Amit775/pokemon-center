import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MoveEffectScalarWhereWithAggregatesInput", {})
export class MoveEffectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MoveEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MoveEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MoveEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MoveEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;
}
