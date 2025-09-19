import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateNestedOneWithoutEfficacyTargetInput } from "../inputs/TypeCreateNestedOneWithoutEfficacyTargetInput";

@TypeGraphQL.InputType("TypeEfficacyCreateWithoutDamageTypeInput", {})
export class TypeEfficacyCreateWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_factor!: number;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutEfficacyTargetInput, {
    nullable: false
  })
  targetType!: TypeCreateNestedOneWithoutEfficacyTargetInput;
}
