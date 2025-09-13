import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateManyDamageClassInputEnvelope } from "../inputs/TypesCreateManyDamageClassInputEnvelope";
import { TypesCreateOrConnectWithoutDamageClassInput } from "../inputs/TypesCreateOrConnectWithoutDamageClassInput";
import { TypesCreateWithoutDamageClassInput } from "../inputs/TypesCreateWithoutDamageClassInput";
import { TypesScalarWhereInput } from "../inputs/TypesScalarWhereInput";
import { TypesUpdateManyWithWhereWithoutDamageClassInput } from "../inputs/TypesUpdateManyWithWhereWithoutDamageClassInput";
import { TypesUpdateWithWhereUniqueWithoutDamageClassInput } from "../inputs/TypesUpdateWithWhereUniqueWithoutDamageClassInput";
import { TypesUpsertWithWhereUniqueWithoutDamageClassInput } from "../inputs/TypesUpsertWithWhereUniqueWithoutDamageClassInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateManyWithoutDamageClassNestedInput", {})
export class TypesUpdateManyWithoutDamageClassNestedInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: TypesCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpsertWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  upsert?: TypesUpsertWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => TypesCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: TypesCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  set?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  delete?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateWithWhereUniqueWithoutDamageClassInput], {
    nullable: true
  })
  update?: TypesUpdateWithWhereUniqueWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesUpdateManyWithWhereWithoutDamageClassInput], {
    nullable: true
  })
  updateMany?: TypesUpdateManyWithWhereWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TypesScalarWhereInput[] | undefined;
}
