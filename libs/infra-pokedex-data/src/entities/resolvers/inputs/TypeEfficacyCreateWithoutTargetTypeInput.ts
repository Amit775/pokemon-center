import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateNestedOneWithoutEfficacyInput } from "../inputs/TypesCreateNestedOneWithoutEfficacyInput";

@TypeGraphQL.InputType("TypeEfficacyCreateWithoutTargetTypeInput", {})
export class TypeEfficacyCreateWithoutTargetTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_factor!: number;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutEfficacyInput, {
    nullable: false
  })
  damageType!: TypesCreateNestedOneWithoutEfficacyInput;
}
