import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutKnownMoveTypesInput } from "../inputs/TypeCreateWithoutKnownMoveTypesInput";
import { TypeUpdateWithoutKnownMoveTypesInput } from "../inputs/TypeUpdateWithoutKnownMoveTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutKnownMoveTypesInput", {})
export class TypeUpsertWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutKnownMoveTypesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutKnownMoveTypesInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
