import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SuperContestCombosScalarWhereWithAggregatesInput", {})
export class SuperContestCombosScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SuperContestCombosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SuperContestCombosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SuperContestCombosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  first_move_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  second_move_id?: IntWithAggregatesFilter | undefined;
}
