import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectUpdateWithoutMovesInput } from "../inputs/SuperContestEffectUpdateWithoutMovesInput";
import { SuperContestEffectWhereInput } from "../inputs/SuperContestEffectWhereInput";

@TypeGraphQL.InputType("SuperContestEffectUpdateToOneWithWhereWithoutMovesInput", {})
export class SuperContestEffectUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: SuperContestEffectUpdateWithoutMovesInput;
}
