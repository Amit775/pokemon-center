import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyItemInputEnvelope } from "../inputs/MachineCreateManyItemInputEnvelope";
import { MachineCreateOrConnectWithoutItemInput } from "../inputs/MachineCreateOrConnectWithoutItemInput";
import { MachineCreateWithoutItemInput } from "../inputs/MachineCreateWithoutItemInput";
import { MachineScalarWhereInput } from "../inputs/MachineScalarWhereInput";
import { MachineUpdateManyWithWhereWithoutItemInput } from "../inputs/MachineUpdateManyWithWhereWithoutItemInput";
import { MachineUpdateWithWhereUniqueWithoutItemInput } from "../inputs/MachineUpdateWithWhereUniqueWithoutItemInput";
import { MachineUpsertWithWhereUniqueWithoutItemInput } from "../inputs/MachineUpsertWithWhereUniqueWithoutItemInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpdateManyWithoutItemNestedInput", {})
export class MachineUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [MachineCreateWithoutItemInput], {
    nullable: true
  })
  create?: MachineCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: MachineCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: MachineUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: MachineCreateManyItemInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MachineUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: MachineUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: MachineUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MachineScalarWhereInput[] | undefined;
}
