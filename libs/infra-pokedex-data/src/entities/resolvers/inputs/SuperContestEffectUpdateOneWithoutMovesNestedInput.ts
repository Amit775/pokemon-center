import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectCreateOrConnectWithoutMovesInput } from "../inputs/SuperContestEffectCreateOrConnectWithoutMovesInput";
import { SuperContestEffectCreateWithoutMovesInput } from "../inputs/SuperContestEffectCreateWithoutMovesInput";
import { SuperContestEffectUpdateToOneWithWhereWithoutMovesInput } from "../inputs/SuperContestEffectUpdateToOneWithWhereWithoutMovesInput";
import { SuperContestEffectUpsertWithoutMovesInput } from "../inputs/SuperContestEffectUpsertWithoutMovesInput";
import { SuperContestEffectWhereInput } from "../inputs/SuperContestEffectWhereInput";
import { SuperContestEffectWhereUniqueInput } from "../inputs/SuperContestEffectWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestEffectUpdateOneWithoutMovesNestedInput", {})
export class SuperContestEffectUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => SuperContestEffectCreateWithoutMovesInput, {
    nullable: true
  })
  create?: SuperContestEffectCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: SuperContestEffectCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: SuperContestEffectUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  disconnect?: SuperContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  delete?: SuperContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: SuperContestEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: SuperContestEffectUpdateToOneWithWhereWithoutMovesInput | undefined;
}
