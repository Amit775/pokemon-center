import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutContestCombosSecondInput } from "../inputs/MovesCreateOrConnectWithoutContestCombosSecondInput";
import { MovesCreateWithoutContestCombosSecondInput } from "../inputs/MovesCreateWithoutContestCombosSecondInput";
import { MovesUpdateToOneWithWhereWithoutContestCombosSecondInput } from "../inputs/MovesUpdateToOneWithWhereWithoutContestCombosSecondInput";
import { MovesUpsertWithoutContestCombosSecondInput } from "../inputs/MovesUpsertWithoutContestCombosSecondInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput", {})
export class MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutContestCombosSecondInput, {
    nullable: true
  })
  create?: MovesCreateWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutContestCombosSecondInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpsertWithoutContestCombosSecondInput, {
    nullable: true
  })
  upsert?: MovesUpsertWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateToOneWithWhereWithoutContestCombosSecondInput, {
    nullable: true
  })
  update?: MovesUpdateToOneWithWhereWithoutContestCombosSecondInput | undefined;
}
