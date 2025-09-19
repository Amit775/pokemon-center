import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutContestCombosInput } from "../inputs/MoveCreateOrConnectWithoutContestCombosInput";
import { MoveCreateWithoutContestCombosInput } from "../inputs/MoveCreateWithoutContestCombosInput";
import { MoveUpdateToOneWithWhereWithoutContestCombosInput } from "../inputs/MoveUpdateToOneWithWhereWithoutContestCombosInput";
import { MoveUpsertWithoutContestCombosInput } from "../inputs/MoveUpsertWithoutContestCombosInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutContestCombosNestedInput", {})
export class MoveUpdateOneRequiredWithoutContestCombosNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutContestCombosInput, {
    nullable: true
  })
  create?: MoveCreateWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutContestCombosInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutContestCombosInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutContestCombosInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutContestCombosInput | undefined;
}
