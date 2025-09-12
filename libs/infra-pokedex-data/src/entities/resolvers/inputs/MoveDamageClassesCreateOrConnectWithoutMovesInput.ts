import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesCreateWithoutMovesInput } from "../inputs/MoveDamageClassesCreateWithoutMovesInput";
import { MoveDamageClassesWhereUniqueInput } from "../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassesCreateOrConnectWithoutMovesInput", {})
export class MoveDamageClassesCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveDamageClassesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveDamageClassesCreateWithoutMovesInput;
}
