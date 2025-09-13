import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesUpdateWithoutMovesInput } from "../inputs/MoveDamageClassesUpdateWithoutMovesInput";
import { MoveDamageClassesWhereInput } from "../inputs/MoveDamageClassesWhereInput";

@TypeGraphQL.InputType("MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput", {})
export class MoveDamageClassesUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  where?: MoveDamageClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: MoveDamageClassesUpdateWithoutMovesInput;
}
