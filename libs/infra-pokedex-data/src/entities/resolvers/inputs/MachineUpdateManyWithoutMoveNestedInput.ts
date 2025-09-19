import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyMoveInputEnvelope } from "../inputs/MachineCreateManyMoveInputEnvelope";
import { MachineCreateOrConnectWithoutMoveInput } from "../inputs/MachineCreateOrConnectWithoutMoveInput";
import { MachineCreateWithoutMoveInput } from "../inputs/MachineCreateWithoutMoveInput";
import { MachineScalarWhereInput } from "../inputs/MachineScalarWhereInput";
import { MachineUpdateManyWithWhereWithoutMoveInput } from "../inputs/MachineUpdateManyWithWhereWithoutMoveInput";
import { MachineUpdateWithWhereUniqueWithoutMoveInput } from "../inputs/MachineUpdateWithWhereUniqueWithoutMoveInput";
import { MachineUpsertWithWhereUniqueWithoutMoveInput } from "../inputs/MachineUpsertWithWhereUniqueWithoutMoveInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpdateManyWithoutMoveNestedInput", {})
export class MachineUpdateManyWithoutMoveNestedInput {
  @TypeGraphQL.Field(_type => [MachineCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MachineCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MachineCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpsertWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  upsert?: MachineUpsertWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MachineCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  set?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  delete?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  connect?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpdateWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  update?: MachineUpdateWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpdateManyWithWhereWithoutMoveInput], {
    nullable: true
  })
  updateMany?: MachineUpdateManyWithWhereWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MachineScalarWhereInput[] | undefined;
}
