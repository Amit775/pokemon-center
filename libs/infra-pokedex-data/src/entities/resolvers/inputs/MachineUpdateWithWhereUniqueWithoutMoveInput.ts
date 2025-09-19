import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineUpdateWithoutMoveInput } from "../inputs/MachineUpdateWithoutMoveInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpdateWithWhereUniqueWithoutMoveInput", {})
export class MachineUpdateWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineUpdateWithoutMoveInput, {
    nullable: false
  })
  data!: MachineUpdateWithoutMoveInput;
}
