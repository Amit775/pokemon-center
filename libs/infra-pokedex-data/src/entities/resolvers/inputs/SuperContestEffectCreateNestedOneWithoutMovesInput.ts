import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectCreateOrConnectWithoutMovesInput } from "../inputs/SuperContestEffectCreateOrConnectWithoutMovesInput";
import { SuperContestEffectCreateWithoutMovesInput } from "../inputs/SuperContestEffectCreateWithoutMovesInput";
import { SuperContestEffectWhereUniqueInput } from "../inputs/SuperContestEffectWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestEffectCreateNestedOneWithoutMovesInput", {})
export class SuperContestEffectCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectCreateWithoutMovesInput, {
    nullable: true
  })
  create?: SuperContestEffectCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: SuperContestEffectCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: SuperContestEffectWhereUniqueInput | undefined;
}
