import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutContestCombosSecondInput } from "../inputs/MoveUpdateWithoutContestCombosSecondInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutContestCombosSecondInput", {})
export class MoveUpdateToOneWithWhereWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutContestCombosSecondInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutContestCombosSecondInput;
}
