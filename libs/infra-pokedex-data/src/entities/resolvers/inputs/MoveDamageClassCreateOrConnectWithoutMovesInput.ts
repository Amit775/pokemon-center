import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCreateWithoutMovesInput } from "../inputs/MoveDamageClassCreateWithoutMovesInput";
import { MoveDamageClassWhereUniqueInput } from "../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassCreateOrConnectWithoutMovesInput", {})
export class MoveDamageClassCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveDamageClassCreateWithoutMovesInput;
}
