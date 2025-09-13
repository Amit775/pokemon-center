import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateManyWithoutDamageClassNestedInput } from "../inputs/MovesUpdateManyWithoutDamageClassNestedInput";

@TypeGraphQL.InputType("MoveDamageClassesUpdateWithoutTypesInput", {})
export class MoveDamageClassesUpdateWithoutTypesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutDamageClassNestedInput | undefined;
}
