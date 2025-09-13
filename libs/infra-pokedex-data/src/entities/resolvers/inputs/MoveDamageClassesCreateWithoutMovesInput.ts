import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateNestedManyWithoutDamageClassInput } from "../inputs/TypesCreateNestedManyWithoutDamageClassInput";

@TypeGraphQL.InputType("MoveDamageClassesCreateWithoutMovesInput", {})
export class MoveDamageClassesCreateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypesCreateNestedManyWithoutDamageClassInput, {
    nullable: true
  })
  types?: TypesCreateNestedManyWithoutDamageClassInput | undefined;
}
