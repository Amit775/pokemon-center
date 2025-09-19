import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SuperContestEffectScalarWhereWithAggregatesInput", {})
export class SuperContestEffectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SuperContestEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SuperContestEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SuperContestEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SuperContestEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  appeal?: IntWithAggregatesFilter | undefined;
}
