import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutKnownMoveTypesInput } from "../inputs/TypesUpdateWithoutKnownMoveTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput", {})
export class TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutKnownMoveTypesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutKnownMoveTypesInput;
}
