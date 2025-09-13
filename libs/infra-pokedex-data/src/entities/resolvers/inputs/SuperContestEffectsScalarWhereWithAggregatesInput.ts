import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SuperContestEffectsScalarWhereWithAggregatesInput", {})
export class SuperContestEffectsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SuperContestEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SuperContestEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SuperContestEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SuperContestEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  appeal?: IntWithAggregatesFilter | undefined;
}
