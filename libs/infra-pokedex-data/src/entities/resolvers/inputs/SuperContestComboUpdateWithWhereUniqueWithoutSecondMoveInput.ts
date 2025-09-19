import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboUpdateWithoutSecondMoveInput } from "../inputs/SuperContestComboUpdateWithoutSecondMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboUpdateWithWhereUniqueWithoutSecondMoveInput", {})
export class SuperContestComboUpdateWithWhereUniqueWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestComboUpdateWithoutSecondMoveInput, {
    nullable: false
  })
  data!: SuperContestComboUpdateWithoutSecondMoveInput;
}
