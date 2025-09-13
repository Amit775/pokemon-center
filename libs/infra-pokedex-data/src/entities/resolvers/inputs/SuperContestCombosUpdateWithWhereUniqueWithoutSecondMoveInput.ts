import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosUpdateWithoutSecondMoveInput } from "../inputs/SuperContestCombosUpdateWithoutSecondMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput", {})
export class SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateWithoutSecondMoveInput, {
    nullable: false
  })
  data!: SuperContestCombosUpdateWithoutSecondMoveInput;
}
