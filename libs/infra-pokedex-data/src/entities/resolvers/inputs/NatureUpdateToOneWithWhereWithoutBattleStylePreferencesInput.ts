import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureUpdateWithoutBattleStylePreferencesInput } from "../inputs/NatureUpdateWithoutBattleStylePreferencesInput";
import { NatureWhereInput } from "../inputs/NatureWhereInput";

@TypeGraphQL.InputType("NatureUpdateToOneWithWhereWithoutBattleStylePreferencesInput", {})
export class NatureUpdateToOneWithWhereWithoutBattleStylePreferencesInput {
  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  where?: NatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureUpdateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  data!: NatureUpdateWithoutBattleStylePreferencesInput;
}
