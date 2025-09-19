import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectCreateWithoutMovesInput } from "../inputs/SuperContestEffectCreateWithoutMovesInput";
import { SuperContestEffectUpdateWithoutMovesInput } from "../inputs/SuperContestEffectUpdateWithoutMovesInput";
import { SuperContestEffectWhereInput } from "../inputs/SuperContestEffectWhereInput";

@TypeGraphQL.InputType("SuperContestEffectUpsertWithoutMovesInput", {})
export class SuperContestEffectUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: SuperContestEffectUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => SuperContestEffectCreateWithoutMovesInput, {
    nullable: false
  })
  create!: SuperContestEffectCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectWhereInput | undefined;
}
