import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesCreateWithoutTypesInput } from "../inputs/MoveDamageClassesCreateWithoutTypesInput";
import { MoveDamageClassesWhereUniqueInput } from "../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassesCreateOrConnectWithoutTypesInput", {})
export class MoveDamageClassesCreateOrConnectWithoutTypesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateWithoutTypesInput, {
    nullable: false
  })
  create!: MoveDamageClassesCreateWithoutTypesInput;
}
