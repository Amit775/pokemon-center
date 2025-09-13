import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutSuperContestCombosInput } from "../inputs/MovesCreateOrConnectWithoutSuperContestCombosInput";
import { MovesCreateWithoutSuperContestCombosInput } from "../inputs/MovesCreateWithoutSuperContestCombosInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutSuperContestCombosInput", {})
export class MovesCreateNestedOneWithoutSuperContestCombosInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutSuperContestCombosInput, {
    nullable: true
  })
  create?: MovesCreateWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutSuperContestCombosInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutSuperContestCombosInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
