import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateManyWithoutDamageClassNestedInput } from "../inputs/MoveUpdateManyWithoutDamageClassNestedInput";
import { TypeUpdateManyWithoutDamageClassNestedInput } from "../inputs/TypeUpdateManyWithoutDamageClassNestedInput";

@TypeGraphQL.InputType("MoveDamageClassUpdateInput", {})
export class MoveDamageClassUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  moves?: MoveUpdateManyWithoutDamageClassNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateManyWithoutDamageClassNestedInput, {
    nullable: true
  })
  types?: TypeUpdateManyWithoutDamageClassNestedInput | undefined;
}
