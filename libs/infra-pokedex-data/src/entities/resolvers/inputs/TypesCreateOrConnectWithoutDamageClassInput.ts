import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutDamageClassInput } from "../inputs/TypesCreateWithoutDamageClassInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutDamageClassInput", {})
export class TypesCreateOrConnectWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutDamageClassInput, {
    nullable: false
  })
  create!: TypesCreateWithoutDamageClassInput;
}
