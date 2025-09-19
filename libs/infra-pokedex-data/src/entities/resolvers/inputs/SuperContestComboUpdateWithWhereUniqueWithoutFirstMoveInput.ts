import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboUpdateWithoutFirstMoveInput } from "../inputs/SuperContestComboUpdateWithoutFirstMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboUpdateWithWhereUniqueWithoutFirstMoveInput", {})
export class SuperContestComboUpdateWithWhereUniqueWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestComboUpdateWithoutFirstMoveInput, {
    nullable: false
  })
  data!: SuperContestComboUpdateWithoutFirstMoveInput;
}
