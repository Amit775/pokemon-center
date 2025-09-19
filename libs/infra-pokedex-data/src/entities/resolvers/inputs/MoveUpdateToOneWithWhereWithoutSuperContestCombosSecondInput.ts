import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutSuperContestCombosSecondInput } from "../inputs/MoveUpdateWithoutSuperContestCombosSecondInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutSuperContestCombosSecondInput", {})
export class MoveUpdateToOneWithWhereWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutSuperContestCombosSecondInput;
}
