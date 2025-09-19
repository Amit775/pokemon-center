import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutSuperContestCombosInput } from "../inputs/MoveCreateOrConnectWithoutSuperContestCombosInput";
import { MoveCreateWithoutSuperContestCombosInput } from "../inputs/MoveCreateWithoutSuperContestCombosInput";
import { MoveUpdateToOneWithWhereWithoutSuperContestCombosInput } from "../inputs/MoveUpdateToOneWithWhereWithoutSuperContestCombosInput";
import { MoveUpsertWithoutSuperContestCombosInput } from "../inputs/MoveUpsertWithoutSuperContestCombosInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput", {})
export class MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutSuperContestCombosInput, {
    nullable: true
  })
  create?: MoveCreateWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutSuperContestCombosInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutSuperContestCombosInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutSuperContestCombosInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutSuperContestCombosInput | undefined;
}
