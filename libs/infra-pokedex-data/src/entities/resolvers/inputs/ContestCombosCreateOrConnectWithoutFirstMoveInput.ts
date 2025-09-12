import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateWithoutFirstMoveInput } from "../inputs/ContestCombosCreateWithoutFirstMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosCreateOrConnectWithoutFirstMoveInput", {})
export class ContestCombosCreateOrConnectWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestCombosCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: ContestCombosCreateWithoutFirstMoveInput;
}
