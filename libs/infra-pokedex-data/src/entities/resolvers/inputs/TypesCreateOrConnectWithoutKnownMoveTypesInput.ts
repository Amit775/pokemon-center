import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutKnownMoveTypesInput } from "../inputs/TypesCreateWithoutKnownMoveTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutKnownMoveTypesInput", {})
export class TypesCreateOrConnectWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutKnownMoveTypesInput;
}
