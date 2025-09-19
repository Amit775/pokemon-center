import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateManyDamageClassInputEnvelope } from "../inputs/TypeCreateManyDamageClassInputEnvelope";
import { TypeCreateOrConnectWithoutDamageClassInput } from "../inputs/TypeCreateOrConnectWithoutDamageClassInput";
import { TypeCreateWithoutDamageClassInput } from "../inputs/TypeCreateWithoutDamageClassInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedManyWithoutDamageClassInput", {})
export class TypeCreateNestedManyWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: TypeCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: TypeCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeWhereUniqueInput[] | undefined;
}
