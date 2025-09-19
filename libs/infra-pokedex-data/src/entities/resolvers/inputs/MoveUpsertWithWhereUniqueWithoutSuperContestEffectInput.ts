import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutSuperContestEffectInput } from "../inputs/MoveCreateWithoutSuperContestEffectInput";
import { MoveUpdateWithoutSuperContestEffectInput } from "../inputs/MoveUpdateWithoutSuperContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpsertWithWhereUniqueWithoutSuperContestEffectInput", {})
export class MoveUpsertWithWhereUniqueWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutSuperContestEffectInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutSuperContestEffectInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestEffectInput, {
    nullable: false
  })
  create!: MoveCreateWithoutSuperContestEffectInput;
}
