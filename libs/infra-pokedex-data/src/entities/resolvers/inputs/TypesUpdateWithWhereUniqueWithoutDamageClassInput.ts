import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutDamageClassInput } from "../inputs/TypesUpdateWithoutDamageClassInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateWithWhereUniqueWithoutDamageClassInput", {})
export class TypesUpdateWithWhereUniqueWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutDamageClassInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutDamageClassInput;
}
