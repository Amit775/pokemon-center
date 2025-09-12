import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsCreateWithoutMovesInput } from "../inputs/ContestEffectsCreateWithoutMovesInput";
import { ContestEffectsUpdateWithoutMovesInput } from "../inputs/ContestEffectsUpdateWithoutMovesInput";
import { ContestEffectsWhereInput } from "../inputs/ContestEffectsWhereInput";

@TypeGraphQL.InputType("ContestEffectsUpsertWithoutMovesInput", {})
export class ContestEffectsUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectsUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: ContestEffectsUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestEffectsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestEffectsCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  where?: ContestEffectsWhereInput | undefined;
}
