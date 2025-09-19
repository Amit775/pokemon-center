import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateNestedManyWithoutDamageClassInput } from "../inputs/TypeCreateNestedManyWithoutDamageClassInput";

@TypeGraphQL.InputType("MoveDamageClassCreateWithoutMovesInput", {})
export class MoveDamageClassCreateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeCreateNestedManyWithoutDamageClassInput, {
    nullable: true
  })
  types?: TypeCreateNestedManyWithoutDamageClassInput | undefined;
}
