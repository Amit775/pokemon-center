import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutDamageClassInput } from "../inputs/TypeUpdateWithoutDamageClassInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateWithWhereUniqueWithoutDamageClassInput", {})
export class TypeUpdateWithWhereUniqueWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutDamageClassInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutDamageClassInput;
}
