import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCreateWithoutTypesInput } from "../inputs/MoveDamageClassCreateWithoutTypesInput";
import { MoveDamageClassWhereUniqueInput } from "../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassCreateOrConnectWithoutTypesInput", {})
export class MoveDamageClassCreateOrConnectWithoutTypesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateWithoutTypesInput, {
    nullable: false
  })
  create!: MoveDamageClassCreateWithoutTypesInput;
}
