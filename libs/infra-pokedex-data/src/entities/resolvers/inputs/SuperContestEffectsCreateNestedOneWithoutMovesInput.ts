import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsCreateOrConnectWithoutMovesInput } from "../inputs/SuperContestEffectsCreateOrConnectWithoutMovesInput";
import { SuperContestEffectsCreateWithoutMovesInput } from "../inputs/SuperContestEffectsCreateWithoutMovesInput";
import { SuperContestEffectsWhereUniqueInput } from "../inputs/SuperContestEffectsWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestEffectsCreateNestedOneWithoutMovesInput", {})
export class SuperContestEffectsCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: SuperContestEffectsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: SuperContestEffectsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereUniqueInput, {
    nullable: true
  })
  connect?: SuperContestEffectsWhereUniqueInput | undefined;
}
