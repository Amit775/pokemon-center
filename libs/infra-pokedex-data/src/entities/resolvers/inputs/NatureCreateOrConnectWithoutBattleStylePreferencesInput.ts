import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateWithoutBattleStylePreferencesInput } from "../inputs/NatureCreateWithoutBattleStylePreferencesInput";
import { NatureWhereUniqueInput } from "../inputs/NatureWhereUniqueInput";

@TypeGraphQL.InputType("NatureCreateOrConnectWithoutBattleStylePreferencesInput", {})
export class NatureCreateOrConnectWithoutBattleStylePreferencesInput {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureCreateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  create!: NatureCreateWithoutBattleStylePreferencesInput;
}
