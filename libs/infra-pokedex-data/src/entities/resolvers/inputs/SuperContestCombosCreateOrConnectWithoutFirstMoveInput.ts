import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateWithoutFirstMoveInput } from "../inputs/SuperContestCombosCreateWithoutFirstMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosCreateOrConnectWithoutFirstMoveInput", {})
export class SuperContestCombosCreateOrConnectWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateWithoutFirstMoveInput, {
    nullable: false
  })
  create!: SuperContestCombosCreateWithoutFirstMoveInput;
}
