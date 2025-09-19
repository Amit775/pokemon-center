import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MachineScalarWhereWithAggregatesInput", {})
export class MachineScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MachineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MachineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MachineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MachineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  machine_number?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  item_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  move_id?: IntWithAggregatesFilter | undefined;
}
