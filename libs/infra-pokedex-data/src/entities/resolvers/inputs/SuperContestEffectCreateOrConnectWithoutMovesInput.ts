import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectCreateWithoutMovesInput } from "../inputs/SuperContestEffectCreateWithoutMovesInput";
import { SuperContestEffectWhereUniqueInput } from "../inputs/SuperContestEffectWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestEffectCreateOrConnectWithoutMovesInput", {})
export class SuperContestEffectCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestEffectCreateWithoutMovesInput, {
    nullable: false
  })
  create!: SuperContestEffectCreateWithoutMovesInput;
}
