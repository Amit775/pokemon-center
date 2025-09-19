import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateWithoutMoveInput } from "../inputs/MachineCreateWithoutMoveInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineCreateOrConnectWithoutMoveInput", {})
export class MachineCreateOrConnectWithoutMoveInput {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineCreateWithoutMoveInput, {
    nullable: false
  })
  create!: MachineCreateWithoutMoveInput;
}
