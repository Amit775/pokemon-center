import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateManyWithoutDamageClassNestedInput } from "../inputs/TypeUpdateManyWithoutDamageClassNestedInput";

@TypeGraphQL.InputType("MoveDamageClassUpdateWithoutMovesInput", {})
export class MoveDamageClassUpdateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  types?: TypeUpdateManyWithoutDamageClassNestedInput | undefined;
}
