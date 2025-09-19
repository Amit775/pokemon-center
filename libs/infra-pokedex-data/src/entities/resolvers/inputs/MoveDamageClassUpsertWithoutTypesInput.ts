import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCreateWithoutTypesInput } from "../inputs/MoveDamageClassCreateWithoutTypesInput";
import { MoveDamageClassUpdateWithoutTypesInput } from "../inputs/MoveDamageClassUpdateWithoutTypesInput";
import { MoveDamageClassWhereInput } from "../inputs/MoveDamageClassWhereInput";

@TypeGraphQL.InputType("MoveDamageClassUpsertWithoutTypesInput", {})
export class MoveDamageClassUpsertWithoutTypesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassUpdateWithoutTypesInput, {
    nullable: false
  })
  update!: MoveDamageClassUpdateWithoutTypesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateWithoutTypesInput, {
    nullable: false
  })
  create!: MoveDamageClassCreateWithoutTypesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassWhereInput | undefined;
}
