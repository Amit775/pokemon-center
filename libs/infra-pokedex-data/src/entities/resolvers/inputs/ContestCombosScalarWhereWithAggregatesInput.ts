import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ContestCombosScalarWhereWithAggregatesInput", {})
export class ContestCombosScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContestCombosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContestCombosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContestCombosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  first_move_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  second_move_id?: IntWithAggregatesFilter | undefined;
}
