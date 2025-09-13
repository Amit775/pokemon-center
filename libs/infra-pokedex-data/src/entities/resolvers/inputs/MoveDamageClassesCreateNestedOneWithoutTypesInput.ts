import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesCreateOrConnectWithoutTypesInput } from "../inputs/MoveDamageClassesCreateOrConnectWithoutTypesInput";
import { MoveDamageClassesCreateWithoutTypesInput } from "../inputs/MoveDamageClassesCreateWithoutTypesInput";
import { MoveDamageClassesWhereUniqueInput } from "../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassesCreateNestedOneWithoutTypesInput", {})
export class MoveDamageClassesCreateNestedOneWithoutTypesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassesCreateWithoutTypesInput, {
    nullable: true
  })
  create?: MoveDamageClassesCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: MoveDamageClassesCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveDamageClassesWhereUniqueInput | undefined;
}
