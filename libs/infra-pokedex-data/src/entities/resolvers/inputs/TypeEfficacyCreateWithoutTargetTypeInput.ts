import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateNestedOneWithoutEfficacyInput } from "../inputs/TypeCreateNestedOneWithoutEfficacyInput";

@TypeGraphQL.InputType("TypeEfficacyCreateWithoutTargetTypeInput", {})
export class TypeEfficacyCreateWithoutTargetTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_factor!: number;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutEfficacyInput, {
    nullable: false
  })
  damageType!: TypeCreateNestedOneWithoutEfficacyInput;
}
