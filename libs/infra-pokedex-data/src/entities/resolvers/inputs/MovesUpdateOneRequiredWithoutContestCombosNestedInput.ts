import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutContestCombosInput } from "../inputs/MovesCreateOrConnectWithoutContestCombosInput";
import { MovesCreateWithoutContestCombosInput } from "../inputs/MovesCreateWithoutContestCombosInput";
import { MovesUpdateToOneWithWhereWithoutContestCombosInput } from "../inputs/MovesUpdateToOneWithWhereWithoutContestCombosInput";
import { MovesUpsertWithoutContestCombosInput } from "../inputs/MovesUpsertWithoutContestCombosInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateOneRequiredWithoutContestCombosNestedInput", {})
export class MovesUpdateOneRequiredWithoutContestCombosNestedInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutContestCombosInput, {
    nullable: true
  })
  create?: MovesCreateWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutContestCombosInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpsertWithoutContestCombosInput, {
    nullable: true
  })
  upsert?: MovesUpsertWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateToOneWithWhereWithoutContestCombosInput, {
    nullable: true
  })
  update?: MovesUpdateToOneWithWhereWithoutContestCombosInput | undefined;
}
