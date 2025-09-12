import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateManyDamageTypeInputEnvelope } from "../inputs/TypeEfficacyCreateManyDamageTypeInputEnvelope";
import { TypeEfficacyCreateOrConnectWithoutDamageTypeInput } from "../inputs/TypeEfficacyCreateOrConnectWithoutDamageTypeInput";
import { TypeEfficacyCreateWithoutDamageTypeInput } from "../inputs/TypeEfficacyCreateWithoutDamageTypeInput";
import { TypeEfficacyScalarWhereInput } from "../inputs/TypeEfficacyScalarWhereInput";
import { TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput } from "../inputs/TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput";
import { TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput } from "../inputs/TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput";
import { TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput } from "../inputs/TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateManyWithoutDamageTypeNestedInput", {})
export class TypeEfficacyUpdateManyWithoutDamageTypeNestedInput {
  @TypeGraphQL.Field(_type => [TypeEfficacyCreateWithoutDamageTypeInput], {
    nullable: true
  })
  create?: TypeEfficacyCreateWithoutDamageTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyCreateOrConnectWithoutDamageTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeEfficacyCreateOrConnectWithoutDamageTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput], {
    nullable: true
  })
  upsert?: TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateManyDamageTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeEfficacyCreateManyDamageTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  set?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeEfficacyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput], {
    nullable: true
  })
  update?: TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput], {
    nullable: true
  })
  updateMany?: TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeEfficacyScalarWhereInput[] | undefined;
}
