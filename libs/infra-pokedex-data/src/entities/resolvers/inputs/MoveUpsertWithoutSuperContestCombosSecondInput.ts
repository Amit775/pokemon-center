import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutSuperContestCombosSecondInput } from "../inputs/MoveCreateWithoutSuperContestCombosSecondInput";
import { MoveUpdateWithoutSuperContestCombosSecondInput } from "../inputs/MoveUpdateWithoutSuperContestCombosSecondInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutSuperContestCombosSecondInput", {})
export class MoveUpsertWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutSuperContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  create!: MoveCreateWithoutSuperContestCombosSecondInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
