import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCreateWithoutMovesInput } from "../inputs/MoveDamageClassCreateWithoutMovesInput";
import { MoveDamageClassUpdateWithoutMovesInput } from "../inputs/MoveDamageClassUpdateWithoutMovesInput";
import { MoveDamageClassWhereInput } from "../inputs/MoveDamageClassWhereInput";

@TypeGraphQL.InputType("MoveDamageClassUpsertWithoutMovesInput", {})
export class MoveDamageClassUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: MoveDamageClassUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveDamageClassCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassWhereInput | undefined;
}
