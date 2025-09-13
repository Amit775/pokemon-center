import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MachinesScalarWhereInput", {})
export class MachinesScalarWhereInput {
  @TypeGraphQL.Field(_type => [MachinesScalarWhereInput], {
    nullable: true
  })
  AND?: MachinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesScalarWhereInput], {
    nullable: true
  })
  OR?: MachinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesScalarWhereInput], {
    nullable: true
  })
  NOT?: MachinesScalarWhereInput[] | undefined;

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
