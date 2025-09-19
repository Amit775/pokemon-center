import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutContestCombosInput } from "../inputs/MoveCreateWithoutContestCombosInput";
import { MoveUpdateWithoutContestCombosInput } from "../inputs/MoveUpdateWithoutContestCombosInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutContestCombosInput", {})
export class MoveUpsertWithoutContestCombosInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutContestCombosInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutContestCombosInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutContestCombosInput, {
    nullable: false
  })
  create!: MoveCreateWithoutContestCombosInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
