import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutSuperContestCombosInput } from "../inputs/MovesCreateOrConnectWithoutSuperContestCombosInput";
import { MovesCreateWithoutSuperContestCombosInput } from "../inputs/MovesCreateWithoutSuperContestCombosInput";
import { MovesUpdateToOneWithWhereWithoutSuperContestCombosInput } from "../inputs/MovesUpdateToOneWithWhereWithoutSuperContestCombosInput";
import { MovesUpsertWithoutSuperContestCombosInput } from "../inputs/MovesUpsertWithoutSuperContestCombosInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput", {})
export class MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestCombosInput, {
    nullable: true
  })
  create?: MovesCreateWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutSuperContestCombosInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpsertWithoutSuperContestCombosInput, {
    nullable: true
  })
  upsert?: MovesUpsertWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateToOneWithWhereWithoutSuperContestCombosInput, {
    nullable: true
  })
  update?: MovesUpdateToOneWithWhereWithoutSuperContestCombosInput | undefined;
}
