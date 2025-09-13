import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyItemInputEnvelope } from "../inputs/MachinesCreateManyItemInputEnvelope";
import { MachinesCreateOrConnectWithoutItemInput } from "../inputs/MachinesCreateOrConnectWithoutItemInput";
import { MachinesCreateWithoutItemInput } from "../inputs/MachinesCreateWithoutItemInput";
import { MachinesScalarWhereInput } from "../inputs/MachinesScalarWhereInput";
import { MachinesUpdateManyWithWhereWithoutItemInput } from "../inputs/MachinesUpdateManyWithWhereWithoutItemInput";
import { MachinesUpdateWithWhereUniqueWithoutItemInput } from "../inputs/MachinesUpdateWithWhereUniqueWithoutItemInput";
import { MachinesUpsertWithWhereUniqueWithoutItemInput } from "../inputs/MachinesUpsertWithWhereUniqueWithoutItemInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpdateManyWithoutItemNestedInput", {})
export class MachinesUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [MachinesCreateWithoutItemInput], {
    nullable: true
  })
  create?: MachinesCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: MachinesCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: MachinesUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: MachinesCreateManyItemInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MachinesUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: MachinesUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: MachinesUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MachinesScalarWhereInput[] | undefined;
}
