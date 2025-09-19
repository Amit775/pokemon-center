import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutKnownMoveTypesInput } from "../inputs/TypeCreateOrConnectWithoutKnownMoveTypesInput";
import { TypeCreateWithoutKnownMoveTypesInput } from "../inputs/TypeCreateWithoutKnownMoveTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedOneWithoutKnownMoveTypesInput", {})
export class TypeCreateNestedOneWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutKnownMoveTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutKnownMoveTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;
}
