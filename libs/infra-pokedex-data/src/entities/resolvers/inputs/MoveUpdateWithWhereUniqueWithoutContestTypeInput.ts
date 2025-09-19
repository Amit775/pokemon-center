import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutContestTypeInput } from "../inputs/MoveUpdateWithoutContestTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateWithWhereUniqueWithoutContestTypeInput", {})
export class MoveUpdateWithWhereUniqueWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutContestTypeInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutContestTypeInput;
}
