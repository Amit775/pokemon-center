import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectCreateOrConnectWithoutMovesInput } from "../inputs/ContestEffectCreateOrConnectWithoutMovesInput";
import { ContestEffectCreateWithoutMovesInput } from "../inputs/ContestEffectCreateWithoutMovesInput";
import { ContestEffectWhereUniqueInput } from "../inputs/ContestEffectWhereUniqueInput";

@TypeGraphQL.InputType("ContestEffectCreateNestedOneWithoutMovesInput", {})
export class ContestEffectCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestEffectCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestEffectCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestEffectCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestEffectWhereUniqueInput | undefined;
}
