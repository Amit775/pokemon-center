import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateManySecondMoveInputEnvelope } from "../inputs/SuperContestCombosCreateManySecondMoveInputEnvelope";
import { SuperContestCombosCreateOrConnectWithoutSecondMoveInput } from "../inputs/SuperContestCombosCreateOrConnectWithoutSecondMoveInput";
import { SuperContestCombosCreateWithoutSecondMoveInput } from "../inputs/SuperContestCombosCreateWithoutSecondMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosCreateNestedManyWithoutSecondMoveInput", {})
export class SuperContestCombosCreateNestedManyWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => [SuperContestCombosCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: SuperContestCombosCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestCombosCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestCombosCreateManySecondMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereUniqueInput], {
    nullable: true
  })
  connect?: SuperContestCombosWhereUniqueInput[] | undefined;
}
