import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyUpdateWithoutDamageTypeInput } from "../inputs/TypeEfficacyUpdateWithoutDamageTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput", {})
export class TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateWithoutDamageTypeInput, {
    nullable: false
  })
  data!: TypeEfficacyUpdateWithoutDamageTypeInput;
}
