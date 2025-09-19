import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ContestComboScalarWhereWithAggregatesInput", {})
export class ContestComboScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContestComboScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContestComboScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContestComboScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContestComboScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  first_move_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  second_move_id?: IntWithAggregatesFilter | undefined;
}
