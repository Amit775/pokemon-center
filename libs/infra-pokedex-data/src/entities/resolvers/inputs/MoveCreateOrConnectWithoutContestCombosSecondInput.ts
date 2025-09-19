import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutContestCombosSecondInput } from "../inputs/MoveCreateWithoutContestCombosSecondInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutContestCombosSecondInput", {})
export class MoveCreateOrConnectWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutContestCombosSecondInput, {
    nullable: false
  })
  create!: MoveCreateWithoutContestCombosSecondInput;
}
