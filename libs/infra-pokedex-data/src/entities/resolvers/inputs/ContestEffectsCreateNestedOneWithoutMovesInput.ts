import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsCreateOrConnectWithoutMovesInput } from "../inputs/ContestEffectsCreateOrConnectWithoutMovesInput";
import { ContestEffectsCreateWithoutMovesInput } from "../inputs/ContestEffectsCreateWithoutMovesInput";
import { ContestEffectsWhereUniqueInput } from "../inputs/ContestEffectsWhereUniqueInput";

@TypeGraphQL.InputType("ContestEffectsCreateNestedOneWithoutMovesInput", {})
export class ContestEffectsCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestEffectsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestEffectsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestEffectsWhereUniqueInput | undefined;
}
