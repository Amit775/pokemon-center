import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyDamageClassInputEnvelope } from "../inputs/MoveCreateManyDamageClassInputEnvelope";
import { MoveCreateOrConnectWithoutDamageClassInput } from "../inputs/MoveCreateOrConnectWithoutDamageClassInput";
import { MoveCreateWithoutDamageClassInput } from "../inputs/MoveCreateWithoutDamageClassInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutDamageClassInput } from "../inputs/MoveUpdateManyWithWhereWithoutDamageClassInput";
import { MoveUpdateWithWhereUniqueWithoutDamageClassInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutDamageClassInput";
import { MoveUpsertWithWhereUniqueWithoutDamageClassInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutDamageClassInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutDamageClassNestedInput", {})
export class MoveUpdateManyWithoutDamageClassNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: MoveCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  set?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutDamageClassInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
