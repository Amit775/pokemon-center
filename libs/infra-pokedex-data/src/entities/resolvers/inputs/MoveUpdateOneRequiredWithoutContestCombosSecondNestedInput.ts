import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutContestCombosSecondInput } from "../inputs/MoveCreateOrConnectWithoutContestCombosSecondInput";
import { MoveCreateWithoutContestCombosSecondInput } from "../inputs/MoveCreateWithoutContestCombosSecondInput";
import { MoveUpdateToOneWithWhereWithoutContestCombosSecondInput } from "../inputs/MoveUpdateToOneWithWhereWithoutContestCombosSecondInput";
import { MoveUpsertWithoutContestCombosSecondInput } from "../inputs/MoveUpsertWithoutContestCombosSecondInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput", {})
export class MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutContestCombosSecondInput, {
    nullable: true
  })
  create?: MoveCreateWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutContestCombosSecondInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutContestCombosSecondInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutContestCombosSecondInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutContestCombosSecondInput | undefined;
}
