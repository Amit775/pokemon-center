import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesUpdateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStylesUpdateWithoutNaturePreferencesInput";
import { MoveBattleStylesWhereInput } from "../inputs/MoveBattleStylesWhereInput";

@TypeGraphQL.InputType("MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput", {})
export class MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  where?: MoveBattleStylesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateWithoutNaturePreferencesInput, {
    nullable: false
  })
  data!: MoveBattleStylesUpdateWithoutNaturePreferencesInput;
}
