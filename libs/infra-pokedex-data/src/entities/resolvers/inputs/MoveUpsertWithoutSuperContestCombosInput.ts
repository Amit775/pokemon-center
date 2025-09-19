import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutSuperContestCombosInput } from "../inputs/MoveCreateWithoutSuperContestCombosInput";
import { MoveUpdateWithoutSuperContestCombosInput } from "../inputs/MoveUpdateWithoutSuperContestCombosInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutSuperContestCombosInput", {})
export class MoveUpsertWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutSuperContestCombosInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutSuperContestCombosInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestCombosInput, {
    nullable: false
  })
  create!: MoveCreateWithoutSuperContestCombosInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
