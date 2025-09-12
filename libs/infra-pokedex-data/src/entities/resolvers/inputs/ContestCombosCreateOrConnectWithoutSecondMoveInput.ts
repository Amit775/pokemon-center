import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateWithoutSecondMoveInput } from "../inputs/ContestCombosCreateWithoutSecondMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosCreateOrConnectWithoutSecondMoveInput", {})
export class ContestCombosCreateOrConnectWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestCombosCreateWithoutSecondMoveInput, {
    nullable: false
  })
  create!: ContestCombosCreateWithoutSecondMoveInput;
}
