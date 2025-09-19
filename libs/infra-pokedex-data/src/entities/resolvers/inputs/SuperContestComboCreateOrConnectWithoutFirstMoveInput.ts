import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateWithoutFirstMoveInput } from "../inputs/SuperContestComboCreateWithoutFirstMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboCreateOrConnectWithoutFirstMoveInput", {})
export class SuperContestComboCreateOrConnectWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => SuperContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestComboCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: SuperContestComboCreateWithoutFirstMoveInput;
}
