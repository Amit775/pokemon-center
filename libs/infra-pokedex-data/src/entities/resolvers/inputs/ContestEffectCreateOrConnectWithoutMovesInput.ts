import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectCreateWithoutMovesInput } from "../inputs/ContestEffectCreateWithoutMovesInput";
import { ContestEffectWhereUniqueInput } from "../inputs/ContestEffectWhereUniqueInput";

@TypeGraphQL.InputType("ContestEffectCreateOrConnectWithoutMovesInput", {})
export class ContestEffectCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestEffectCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestEffectCreateWithoutMovesInput;
}
