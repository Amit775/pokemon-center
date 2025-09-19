import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineUpdateWithoutVersionGroupInput } from "../inputs/MachineUpdateWithoutVersionGroupInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class MachineUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: MachineUpdateWithoutVersionGroupInput;
}
