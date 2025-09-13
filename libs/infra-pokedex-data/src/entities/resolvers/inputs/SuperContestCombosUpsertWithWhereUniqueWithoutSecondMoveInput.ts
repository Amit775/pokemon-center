import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateWithoutSecondMoveInput } from "../inputs/SuperContestCombosCreateWithoutSecondMoveInput";
import { SuperContestCombosUpdateWithoutSecondMoveInput } from "../inputs/SuperContestCombosUpdateWithoutSecondMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput", {})
export class SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateWithoutSecondMoveInput, {
    nullable: false
  })
  update!: SuperContestCombosUpdateWithoutSecondMoveInput;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateWithoutSecondMoveInput, {
    nullable: false
  })
  create!: SuperContestCombosCreateWithoutSecondMoveInput;
}
