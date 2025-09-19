import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutContestCombosSecondInput } from "../inputs/MoveCreateOrConnectWithoutContestCombosSecondInput";
import { MoveCreateWithoutContestCombosSecondInput } from "../inputs/MoveCreateWithoutContestCombosSecondInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutContestCombosSecondInput", {})
export class MoveCreateNestedOneWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutContestCombosSecondInput, {
    nullable: true
  })
  create?: MoveCreateWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutContestCombosSecondInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
