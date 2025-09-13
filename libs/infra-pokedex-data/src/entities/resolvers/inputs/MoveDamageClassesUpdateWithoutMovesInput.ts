import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateManyWithoutDamageClassNestedInput } from "../inputs/TypesUpdateManyWithoutDamageClassNestedInput";

@TypeGraphQL.InputType("MoveDamageClassesUpdateWithoutMovesInput", {})
export class MoveDamageClassesUpdateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  types?: TypesUpdateManyWithoutDamageClassNestedInput | undefined;
}
