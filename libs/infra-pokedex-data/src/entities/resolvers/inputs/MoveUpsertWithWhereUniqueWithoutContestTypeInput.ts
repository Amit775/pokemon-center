import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutContestTypeInput } from "../inputs/MoveCreateWithoutContestTypeInput";
import { MoveUpdateWithoutContestTypeInput } from "../inputs/MoveUpdateWithoutContestTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpsertWithWhereUniqueWithoutContestTypeInput", {})
export class MoveUpsertWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutContestTypeInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutContestTypeInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutContestTypeInput, {
    nullable: false
  })
  create!: MoveCreateWithoutContestTypeInput;
}
