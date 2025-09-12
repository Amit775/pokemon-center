import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutContestCombosInput } from "../inputs/MovesCreateOrConnectWithoutContestCombosInput";
import { MovesCreateWithoutContestCombosInput } from "../inputs/MovesCreateWithoutContestCombosInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutContestCombosInput", {})
export class MovesCreateNestedOneWithoutContestCombosInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutContestCombosInput, {
    nullable: true
  })
  create?: MovesCreateWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutContestCombosInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
