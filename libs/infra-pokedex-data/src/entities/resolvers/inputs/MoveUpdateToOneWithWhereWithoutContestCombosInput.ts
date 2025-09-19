import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutContestCombosInput } from "../inputs/MoveUpdateWithoutContestCombosInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutContestCombosInput", {})
export class MoveUpdateToOneWithWhereWithoutContestCombosInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutContestCombosInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutContestCombosInput;
}
