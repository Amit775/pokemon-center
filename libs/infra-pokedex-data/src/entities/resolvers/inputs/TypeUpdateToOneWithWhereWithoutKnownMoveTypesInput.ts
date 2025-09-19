import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutKnownMoveTypesInput } from "../inputs/TypeUpdateWithoutKnownMoveTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutKnownMoveTypesInput", {})
export class TypeUpdateToOneWithWhereWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutKnownMoveTypesInput;
}
