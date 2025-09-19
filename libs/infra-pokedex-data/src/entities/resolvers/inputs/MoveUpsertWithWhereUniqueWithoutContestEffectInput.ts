import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutContestEffectInput } from "../inputs/MoveCreateWithoutContestEffectInput";
import { MoveUpdateWithoutContestEffectInput } from "../inputs/MoveUpdateWithoutContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpsertWithWhereUniqueWithoutContestEffectInput", {})
export class MoveUpsertWithWhereUniqueWithoutContestEffectInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutContestEffectInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutContestEffectInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutContestEffectInput, {
    nullable: false
  })
  create!: MoveCreateWithoutContestEffectInput;
}
