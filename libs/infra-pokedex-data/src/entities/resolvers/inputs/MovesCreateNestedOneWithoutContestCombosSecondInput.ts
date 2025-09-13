import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutContestCombosSecondInput } from "../inputs/MovesCreateOrConnectWithoutContestCombosSecondInput";
import { MovesCreateWithoutContestCombosSecondInput } from "../inputs/MovesCreateWithoutContestCombosSecondInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutContestCombosSecondInput", {})
export class MovesCreateNestedOneWithoutContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutContestCombosSecondInput, {
    nullable: true
  })
  create?: MovesCreateWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutContestCombosSecondInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestCombosSecondInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
