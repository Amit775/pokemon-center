import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SuperContestComboScalarWhereWithAggregatesInput", {})
export class SuperContestComboScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SuperContestComboScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SuperContestComboScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SuperContestComboScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  first_move_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  second_move_id?: IntWithAggregatesFilter | undefined;
}
