import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyScalarWhereInput } from "../inputs/TypeEfficacyScalarWhereInput";
import { TypeEfficacyUpdateManyMutationInput } from "../inputs/TypeEfficacyUpdateManyMutationInput";

@TypeGraphQL.InputType("TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput", {})
export class TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput {
  @TypeGraphQL.Field(_type => TypeEfficacyScalarWhereInput, {
    nullable: false
  })
  where!: TypeEfficacyScalarWhereInput;

  @TypeGraphQL.Field(_type => TypeEfficacyUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeEfficacyUpdateManyMutationInput;
}
