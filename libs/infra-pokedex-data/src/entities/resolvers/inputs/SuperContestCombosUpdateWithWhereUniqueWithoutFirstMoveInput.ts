import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosUpdateWithoutFirstMoveInput } from "../inputs/SuperContestCombosUpdateWithoutFirstMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput", {})
export class SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  data!: SuperContestCombosUpdateWithoutFirstMoveInput;
}
