import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateWithoutBattleStylePreferencesInput } from "../inputs/NaturesCreateWithoutBattleStylePreferencesInput";
import { NaturesWhereUniqueInput } from "../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.InputType("NaturesCreateOrConnectWithoutBattleStylePreferencesInput", {})
export class NaturesCreateOrConnectWithoutBattleStylePreferencesInput {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesCreateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  create!: NaturesCreateWithoutBattleStylePreferencesInput;
}
