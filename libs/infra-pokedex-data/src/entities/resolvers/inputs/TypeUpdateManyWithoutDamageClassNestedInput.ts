import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateManyDamageClassInputEnvelope } from "../inputs/TypeCreateManyDamageClassInputEnvelope";
import { TypeCreateOrConnectWithoutDamageClassInput } from "../inputs/TypeCreateOrConnectWithoutDamageClassInput";
import { TypeCreateWithoutDamageClassInput } from "../inputs/TypeCreateWithoutDamageClassInput";
import { TypeScalarWhereInput } from "../inputs/TypeScalarWhereInput";
import { TypeUpdateManyWithWhereWithoutDamageClassInput } from "../inputs/TypeUpdateManyWithWhereWithoutDamageClassInput";
import { TypeUpdateWithWhereUniqueWithoutDamageClassInput } from "../inputs/TypeUpdateWithWhereUniqueWithoutDamageClassInput";
import { TypeUpsertWithWhereUniqueWithoutDamageClassInput } from "../inputs/TypeUpsertWithWhereUniqueWithoutDamageClassInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateManyWithoutDamageClassNestedInput", {})
export class TypeUpdateManyWithoutDamageClassNestedInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: TypeCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpsertWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  upsert?: TypeUpsertWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: TypeCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  set?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  delete?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpdateWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  update?: TypeUpdateWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeUpdateManyWithWhereWithoutDamageClassInput], {
    nullable: true
  })
  updateMany?: TypeUpdateManyWithWhereWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypeScalarWhereInput[] | undefined;
}
