import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutKnownMoveTypesInput } from "../inputs/TypesCreateWithoutKnownMoveTypesInput";
import { TypesUpdateWithoutKnownMoveTypesInput } from "../inputs/TypesUpdateWithoutKnownMoveTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutKnownMoveTypesInput", {})
export class TypesUpsertWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutKnownMoveTypesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutKnownMoveTypesInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
