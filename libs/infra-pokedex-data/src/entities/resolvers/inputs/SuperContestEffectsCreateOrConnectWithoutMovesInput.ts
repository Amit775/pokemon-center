import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsCreateWithoutMovesInput } from "../inputs/SuperContestEffectsCreateWithoutMovesInput";
import { SuperContestEffectsWhereUniqueInput } from "../inputs/SuperContestEffectsWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestEffectsCreateOrConnectWithoutMovesInput", {})
export class SuperContestEffectsCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestEffectsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: SuperContestEffectsCreateWithoutMovesInput;
}
