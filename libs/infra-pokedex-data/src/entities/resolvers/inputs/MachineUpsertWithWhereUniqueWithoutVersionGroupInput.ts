import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateWithoutVersionGroupInput } from "../inputs/MachineCreateWithoutVersionGroupInput";
import { MachineUpdateWithoutVersionGroupInput } from "../inputs/MachineUpdateWithoutVersionGroupInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class MachineUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: MachineUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => MachineCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: MachineCreateWithoutVersionGroupInput;
}
