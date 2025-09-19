import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutDamageClassInput } from "../inputs/TypeCreateWithoutDamageClassInput";
import { TypeUpdateWithoutDamageClassInput } from "../inputs/TypeUpdateWithoutDamageClassInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpsertWithWhereUniqueWithoutDamageClassInput", {})
export class TypeUpsertWithWhereUniqueWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutDamageClassInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutDamageClassInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutDamageClassInput, {
    nullable: false
  })
  create!: TypeCreateWithoutDamageClassInput;
}
