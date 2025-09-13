import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateNestedOneWithoutEfficacyInput } from "../inputs/TypesCreateNestedOneWithoutEfficacyInput";
import { TypesCreateNestedOneWithoutEfficacyTargetInput } from "../inputs/TypesCreateNestedOneWithoutEfficacyTargetInput";

@TypeGraphQL.InputType("TypeEfficacyCreateInput", {})
export class TypeEfficacyCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_factor!: number;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutEfficacyInput, {
    nullable: false
  })
  damageType!: TypesCreateNestedOneWithoutEfficacyInput;

  @TypeGraphQL.Field(_type => TypesCreateNestedOneWithoutEfficacyTargetInput, {
    nullable: false
  })
  targetType!: TypesCreateNestedOneWithoutEfficacyTargetInput;
}
