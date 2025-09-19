import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutContestCombosSecondInput } from "../inputs/MoveCreateWithoutContestCombosSecondInput";
import { MoveUpdateWithoutContestCombosSecondInput } from "../inputs/MoveUpdateWithoutContestCombosSecondInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutContestCombosSecondInput", {})
export class MoveUpsertWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutContestCombosSecondInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutContestCombosSecondInput, {
    nullable: false
  })
  create!: MoveCreateWithoutContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
