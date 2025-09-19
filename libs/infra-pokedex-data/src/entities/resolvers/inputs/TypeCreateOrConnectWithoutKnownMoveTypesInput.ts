import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutKnownMoveTypesInput } from "../inputs/TypeCreateWithoutKnownMoveTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutKnownMoveTypesInput", {})
export class TypeCreateOrConnectWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutKnownMoveTypesInput;
}
