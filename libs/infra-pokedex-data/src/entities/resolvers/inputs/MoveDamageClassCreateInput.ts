import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedManyWithoutDamageClassInput } from "../inputs/MoveCreateNestedManyWithoutDamageClassInput";
import { TypeCreateNestedManyWithoutDamageClassInput } from "../inputs/TypeCreateNestedManyWithoutDamageClassInput";

@TypeGraphQL.InputType("MoveDamageClassCreateInput", {})
export class MoveDamageClassCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveCreateNestedManyWithoutDamageClassInput, {
    nullable: true
  })
  moves?: MoveCreateNestedManyWithoutDamageClassInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateNestedManyWithoutDamageClassInput, {
    nullable: true
  })
  types?: TypeCreateNestedManyWithoutDamageClassInput | undefined;
}
