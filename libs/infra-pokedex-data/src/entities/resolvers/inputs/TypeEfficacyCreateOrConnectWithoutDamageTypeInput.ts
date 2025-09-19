import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyCreateWithoutDamageTypeInput } from "../inputs/TypeEfficacyCreateWithoutDamageTypeInput";
import { TypeEfficacyWhereUniqueInput } from "../inputs/TypeEfficacyWhereUniqueInput";

@TypeGraphQL.InputType("TypeEfficacyCreateOrConnectWithoutDamageTypeInput", {})
export class TypeEfficacyCreateOrConnectWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereUniqueInput, {
    nullable: false
  })
  where!: TypeEfficacyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeEfficacyCreateWithoutDamageTypeInput, {
    nullable: false
  })
  create!: TypeEfficacyCreateWithoutDamageTypeInput;
}
