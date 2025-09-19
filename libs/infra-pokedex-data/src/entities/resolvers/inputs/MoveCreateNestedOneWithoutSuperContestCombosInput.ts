import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutSuperContestCombosInput } from "../inputs/MoveCreateOrConnectWithoutSuperContestCombosInput";
import { MoveCreateWithoutSuperContestCombosInput } from "../inputs/MoveCreateWithoutSuperContestCombosInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutSuperContestCombosInput", {})
export class MoveCreateNestedOneWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestCombosInput, {
    nullable: true
  })
  create?: MoveCreateWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutSuperContestCombosInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
