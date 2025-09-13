import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesCreateOrConnectWithoutMovesInput } from "../inputs/MoveDamageClassesCreateOrConnectWithoutMovesInput";
import { MoveDamageClassesCreateWithoutMovesInput } from "../inputs/MoveDamageClassesCreateWithoutMovesInput";
import { MoveDamageClassesWhereUniqueInput } from "../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassesCreateNestedOneWithoutMovesInput", {})
export class MoveDamageClassesCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassesCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveDamageClassesCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveDamageClassesCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveDamageClassesWhereUniqueInput | undefined;
}
