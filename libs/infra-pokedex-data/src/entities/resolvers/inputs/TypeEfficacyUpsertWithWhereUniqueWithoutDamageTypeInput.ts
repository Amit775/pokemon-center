import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateWithoutDamageTypeInput } from "../inputs/TypeEfficacyCreateWithoutDamageTypeInput";
import { TypeEfficacyUpdateWithoutDamageTypeInput } from "../inputs/TypeEfficacyUpdateWithoutDamageTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput", {})
export class TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateWithoutDamageTypeInput, {
    nullable: false
  })
  update!: TypeEfficacyUpdateWithoutDamageTypeInput;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateWithoutDamageTypeInput, {
    nullable: false
  })
  create!: TypeEfficacyCreateWithoutDamageTypeInput;
}
