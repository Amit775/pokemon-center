import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutSuperContestCombosSecondInput } from "../inputs/MoveCreateOrConnectWithoutSuperContestCombosSecondInput";
import { MoveCreateWithoutSuperContestCombosSecondInput } from "../inputs/MoveCreateWithoutSuperContestCombosSecondInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutSuperContestCombosSecondInput", {})
export class MoveCreateNestedOneWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestCombosSecondInput, {
    nullable: true
  })
  create?: MoveCreateWithoutSuperContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutSuperContestCombosSecondInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutSuperContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
