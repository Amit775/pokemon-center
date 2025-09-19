import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateWithoutFirstMoveInput } from "../inputs/SuperContestComboCreateWithoutFirstMoveInput";
import { SuperContestComboUpdateWithoutFirstMoveInput } from "../inputs/SuperContestComboUpdateWithoutFirstMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboUpsertWithWhereUniqueWithoutFirstMoveInput", {})
export class SuperContestComboUpsertWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestComboUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  update!: SuperContestComboUpdateWithoutFirstMoveInput;

  @TypeGraphQL.Field(_type => SuperContestComboCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: SuperContestComboCreateWithoutFirstMoveInput;
}
