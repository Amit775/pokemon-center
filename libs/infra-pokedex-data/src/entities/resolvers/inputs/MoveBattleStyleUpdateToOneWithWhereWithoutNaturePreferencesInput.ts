import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleUpdateWithoutNaturePreferencesInput } from "../inputs/MoveBattleStyleUpdateWithoutNaturePreferencesInput";
import { MoveBattleStyleWhereInput } from "../inputs/MoveBattleStyleWhereInput";

@TypeGraphQL.InputType("MoveBattleStyleUpdateToOneWithWhereWithoutNaturePreferencesInput", {})
export class MoveBattleStyleUpdateToOneWithWhereWithoutNaturePreferencesInput {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  where?: MoveBattleStyleWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateWithoutNaturePreferencesInput, {
    nullable: false
  })
  data!: MoveBattleStyleUpdateWithoutNaturePreferencesInput;
}
