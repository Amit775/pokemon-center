import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutDamageClassInput } from "../inputs/TypeCreateWithoutDamageClassInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutDamageClassInput", {})
export class TypeCreateOrConnectWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutDamageClassInput, {
    nullable: false
  })
  create!: TypeCreateWithoutDamageClassInput;
}
