import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesUpdateWithoutBattleStylePreferencesInput } from "../inputs/NaturesUpdateWithoutBattleStylePreferencesInput";
import { NaturesWhereInput } from "../inputs/NaturesWhereInput";

@TypeGraphQL.InputType("NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput", {})
export class NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput {
  @TypeGraphQL.Field(_type => NaturesWhereInput, {
    nullable: true
  })
  where?: NaturesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateWithoutBattleStylePreferencesInput, {
    nullable: false
  })
  data!: NaturesUpdateWithoutBattleStylePreferencesInput;
}
