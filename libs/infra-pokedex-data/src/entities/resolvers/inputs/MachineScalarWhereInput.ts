import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MachineScalarWhereInput", {})
export class MachineScalarWhereInput {
  @TypeGraphQL.Field(_type => [MachineScalarWhereInput], {
    nullable: true
  })
  AND?: MachineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarWhereInput], {
    nullable: true
  })
  OR?: MachineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarWhereInput], {
    nullable: true
  })
  NOT?: MachineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  machine_number?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_id?: IntFilter | undefined;
}
