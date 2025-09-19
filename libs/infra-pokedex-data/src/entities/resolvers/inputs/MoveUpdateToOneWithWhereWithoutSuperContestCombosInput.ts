import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutSuperContestCombosInput } from "../inputs/MoveUpdateWithoutSuperContestCombosInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutSuperContestCombosInput", {})
export class MoveUpdateToOneWithWhereWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutSuperContestCombosInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutSuperContestCombosInput;
}
