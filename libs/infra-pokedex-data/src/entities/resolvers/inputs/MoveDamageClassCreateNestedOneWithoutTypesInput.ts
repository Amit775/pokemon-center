import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCreateOrConnectWithoutTypesInput } from "../inputs/MoveDamageClassCreateOrConnectWithoutTypesInput";
import { MoveDamageClassCreateWithoutTypesInput } from "../inputs/MoveDamageClassCreateWithoutTypesInput";
import { MoveDamageClassWhereUniqueInput } from "../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassCreateNestedOneWithoutTypesInput", {})
export class MoveDamageClassCreateNestedOneWithoutTypesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassCreateWithoutTypesInput, {
    nullable: true
  })
  create?: MoveDamageClassCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: MoveDamageClassCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveDamageClassWhereUniqueInput | undefined;
}
