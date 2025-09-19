import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineWhereInput } from "../inputs/MachineWhereInput";

@TypeGraphQL.InputType("MachineListRelationFilter", {})
export class MachineListRelationFilter {
  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  every?: MachineWhereInput | undefined;

  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  some?: MachineWhereInput | undefined;

  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  none?: MachineWhereInput | undefined;
}
