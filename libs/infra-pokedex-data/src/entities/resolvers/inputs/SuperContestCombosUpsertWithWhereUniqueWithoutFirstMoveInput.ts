import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateWithoutFirstMoveInput } from "../inputs/SuperContestCombosCreateWithoutFirstMoveInput";
import { SuperContestCombosUpdateWithoutFirstMoveInput } from "../inputs/SuperContestCombosUpdateWithoutFirstMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput", {})
export class SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestCombosUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  update!: SuperContestCombosUpdateWithoutFirstMoveInput;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: SuperContestCombosCreateWithoutFirstMoveInput;
}
