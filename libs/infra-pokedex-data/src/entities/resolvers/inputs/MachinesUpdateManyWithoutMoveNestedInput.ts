import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyMoveInputEnvelope } from "../inputs/MachinesCreateManyMoveInputEnvelope";
import { MachinesCreateOrConnectWithoutMoveInput } from "../inputs/MachinesCreateOrConnectWithoutMoveInput";
import { MachinesCreateWithoutMoveInput } from "../inputs/MachinesCreateWithoutMoveInput";
import { MachinesScalarWhereInput } from "../inputs/MachinesScalarWhereInput";
import { MachinesUpdateManyWithWhereWithoutMoveInput } from "../inputs/MachinesUpdateManyWithWhereWithoutMoveInput";
import { MachinesUpdateWithWhereUniqueWithoutMoveInput } from "../inputs/MachinesUpdateWithWhereUniqueWithoutMoveInput";
import { MachinesUpsertWithWhereUniqueWithoutMoveInput } from "../inputs/MachinesUpsertWithWhereUniqueWithoutMoveInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpdateManyWithoutMoveNestedInput", {})
export class MachinesUpdateManyWithoutMoveNestedInput {
  @TypeGraphQL.Field(_type => [MachinesCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MachinesCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MachinesCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpsertWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  upsert?: MachinesUpsertWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MachinesCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  set?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  delete?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  connect?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpdateWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  update?: MachinesUpdateWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpdateManyWithWhereWithoutMoveInput], {
    nullable: true
  })
  updateMany?: MachinesUpdateManyWithWhereWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MachinesScalarWhereInput[] | undefined;
}
