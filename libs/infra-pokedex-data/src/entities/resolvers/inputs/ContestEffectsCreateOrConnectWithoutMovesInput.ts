import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsCreateWithoutMovesInput } from "../inputs/ContestEffectsCreateWithoutMovesInput";
import { ContestEffectsWhereUniqueInput } from "../inputs/ContestEffectsWhereUniqueInput";

@TypeGraphQL.InputType("ContestEffectsCreateOrConnectWithoutMovesInput", {})
export class ContestEffectsCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestEffectsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestEffectsCreateWithoutMovesInput;
}
