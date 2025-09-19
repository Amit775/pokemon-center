import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectCreateWithoutMovesInput } from "../inputs/ContestEffectCreateWithoutMovesInput";
import { ContestEffectUpdateWithoutMovesInput } from "../inputs/ContestEffectUpdateWithoutMovesInput";
import { ContestEffectWhereInput } from "../inputs/ContestEffectWhereInput";

@TypeGraphQL.InputType("ContestEffectUpsertWithoutMovesInput", {})
export class ContestEffectUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: ContestEffectUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestEffectCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestEffectCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  where?: ContestEffectWhereInput | undefined;
}
