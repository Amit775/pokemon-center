import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassUpdateWithoutTypesInput } from "../inputs/MoveDamageClassUpdateWithoutTypesInput";
import { MoveDamageClassWhereInput } from "../inputs/MoveDamageClassWhereInput";

@TypeGraphQL.InputType("MoveDamageClassUpdateToOneWithWhereWithoutTypesInput", {})
export class MoveDamageClassUpdateToOneWithWhereWithoutTypesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassUpdateWithoutTypesInput, {
    nullable: false
  })
  data!: MoveDamageClassUpdateWithoutTypesInput;
}
