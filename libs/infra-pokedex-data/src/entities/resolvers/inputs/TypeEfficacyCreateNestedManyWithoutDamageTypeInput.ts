import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateManyDamageTypeInputEnvelope } from "../inputs/TypeEfficacyCreateManyDamageTypeInputEnvelope";
import { TypeEfficacyCreateOrConnectWithoutDamageTypeInput } from "../inputs/TypeEfficacyCreateOrConnectWithoutDamageTypeInput";
import { TypeEfficacyCreateWithoutDamageTypeInput } from "../inputs/TypeEfficacyCreateWithoutDamageTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyCreateNestedManyWithoutDamageTypeInput", {})
export class TypeEfficacyCreateNestedManyWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => [TypeEfficacyCreateWithoutDamageTypeInput], {
    nullable: true
  })
  create?: TypeEfficacyCreateWithoutDamageTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyCreateOrConnectWithoutDamageTypeInput], {
    nullable: true
  })
  connectOrCreate?: TypeEfficacyCreateOrConnectWithoutDamageTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateManyDamageTypeInputEnvelope, {
    nullable: true
  })
  createMany?: TypeEfficacyCreateManyDamageTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeEfficacyWhereUniqueInput[] | undefined;
}
