import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedManyWithoutDamageClassInput } from "../inputs/MovesCreateNestedManyWithoutDamageClassInput";

@TypeGraphQL.InputType("MoveDamageClassesCreateWithoutTypesInput", {})
export class MoveDamageClassesCreateWithoutTypesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MovesCreateNestedManyWithoutDamageClassInput, {
    nullable: true
  })
  moves?: MovesCreateNestedManyWithoutDamageClassInput | undefined;
}
