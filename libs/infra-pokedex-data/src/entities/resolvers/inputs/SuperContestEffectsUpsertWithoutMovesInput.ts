import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsCreateWithoutMovesInput } from "../inputs/SuperContestEffectsCreateWithoutMovesInput";
import { SuperContestEffectsUpdateWithoutMovesInput } from "../inputs/SuperContestEffectsUpdateWithoutMovesInput";
import { SuperContestEffectsWhereInput } from "../inputs/SuperContestEffectsWhereInput";

@TypeGraphQL.InputType("SuperContestEffectsUpsertWithoutMovesInput", {})
export class SuperContestEffectsUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectsUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: SuperContestEffectsUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => SuperContestEffectsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: SuperContestEffectsCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectsWhereInput | undefined;
}
