import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyMoveInputEnvelope } from "../inputs/MachineCreateManyMoveInputEnvelope";
import { MachineCreateOrConnectWithoutMoveInput } from "../inputs/MachineCreateOrConnectWithoutMoveInput";
import { MachineCreateWithoutMoveInput } from "../inputs/MachineCreateWithoutMoveInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineCreateNestedManyWithoutMoveInput", {})
export class MachineCreateNestedManyWithoutMoveInput {
  @TypeGraphQL.Field(_type => [MachineCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MachineCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MachineCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MachineCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  connect?: MachineWhereUniqueInput[] | undefined;
}
