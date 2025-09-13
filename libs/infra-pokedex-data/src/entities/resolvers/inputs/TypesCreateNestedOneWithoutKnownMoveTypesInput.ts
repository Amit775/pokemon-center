import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutKnownMoveTypesInput } from "../inputs/TypesCreateOrConnectWithoutKnownMoveTypesInput";
import { TypesCreateWithoutKnownMoveTypesInput } from "../inputs/TypesCreateWithoutKnownMoveTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutKnownMoveTypesInput", {})
export class TypesCreateNestedOneWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutKnownMoveTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutKnownMoveTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
