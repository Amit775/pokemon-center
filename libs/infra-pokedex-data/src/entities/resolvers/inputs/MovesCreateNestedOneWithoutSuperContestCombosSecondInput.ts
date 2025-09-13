import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutSuperContestCombosSecondInput } from "../inputs/MovesCreateOrConnectWithoutSuperContestCombosSecondInput";
import { MovesCreateWithoutSuperContestCombosSecondInput } from "../inputs/MovesCreateWithoutSuperContestCombosSecondInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutSuperContestCombosSecondInput", {})
export class MovesCreateNestedOneWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestCombosSecondInput, {
    nullable: true
  })
  create?: MovesCreateWithoutSuperContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutSuperContestCombosSecondInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutSuperContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
