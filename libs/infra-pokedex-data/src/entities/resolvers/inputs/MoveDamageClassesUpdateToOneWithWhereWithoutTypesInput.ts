import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesUpdateWithoutTypesInput } from "../inputs/MoveDamageClassesUpdateWithoutTypesInput";
import { MoveDamageClassesWhereInput } from "../inputs/MoveDamageClassesWhereInput";

@TypeGraphQL.InputType("MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput", {})
export class MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateWithoutTypesInput, {
    nullable: false
  })
  data!: MoveDamageClassesUpdateWithoutTypesInput;
}
