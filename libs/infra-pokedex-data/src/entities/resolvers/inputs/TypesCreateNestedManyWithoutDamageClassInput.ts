import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateManyDamageClassInputEnvelope } from "../inputs/TypesCreateManyDamageClassInputEnvelope";
import { TypesCreateOrConnectWithoutDamageClassInput } from "../inputs/TypesCreateOrConnectWithoutDamageClassInput";
import { TypesCreateWithoutDamageClassInput } from "../inputs/TypesCreateWithoutDamageClassInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedManyWithoutDamageClassInput", {})
export class TypesCreateNestedManyWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => [TypesCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: TypesCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypesCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => TypesCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: TypesCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypesWhereUniqueInput], {
    nullable: true
  })
  connect?: TypesWhereUniqueInput[] | undefined;
}
