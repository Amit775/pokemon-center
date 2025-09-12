import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateWithoutSecondMoveInput } from "../inputs/SuperContestCombosCreateWithoutSecondMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosCreateOrConnectWithoutSecondMoveInput", {})
export class SuperContestCombosCreateOrConnectWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateWithoutSecondMoveInput, {
    nullable: false
  })
  create!: SuperContestCombosCreateWithoutSecondMoveInput;
}
