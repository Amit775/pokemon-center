import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectCreateOrConnectWithoutMovesInput } from "../inputs/ContestEffectCreateOrConnectWithoutMovesInput";
import { ContestEffectCreateWithoutMovesInput } from "../inputs/ContestEffectCreateWithoutMovesInput";
import { ContestEffectUpdateToOneWithWhereWithoutMovesInput } from "../inputs/ContestEffectUpdateToOneWithWhereWithoutMovesInput";
import { ContestEffectUpsertWithoutMovesInput } from "../inputs/ContestEffectUpsertWithoutMovesInput";
import { ContestEffectWhereInput } from "../inputs/ContestEffectWhereInput";
import { ContestEffectWhereUniqueInput } from "../inputs/ContestEffectWhereUniqueInput";

@TypeGraphQL.InputType("ContestEffectUpdateOneWithoutMovesNestedInput", {})
export class ContestEffectUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => ContestEffectCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestEffectCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestEffectCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: ContestEffectUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  disconnect?: ContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  delete?: ContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: ContestEffectUpdateToOneWithWhereWithoutMovesInput | undefined;
}
