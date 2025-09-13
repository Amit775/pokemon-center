import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosCreateManyFirstMoveInputEnvelope } from "../inputs/SuperContestCombosCreateManyFirstMoveInputEnvelope";
import { SuperContestCombosCreateOrConnectWithoutFirstMoveInput } from "../inputs/SuperContestCombosCreateOrConnectWithoutFirstMoveInput";
import { SuperContestCombosCreateWithoutFirstMoveInput } from "../inputs/SuperContestCombosCreateWithoutFirstMoveInput";
import { SuperContestCombosWhereUniqueInput } from "../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestCombosCreateNestedManyWithoutFirstMoveInput", {})
export class SuperContestCombosCreateNestedManyWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => [SuperContestCombosCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: SuperContestCombosCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestCombosCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestCombosCreateManyFirstMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereUniqueInput], {
    nullable: true
  })
  connect?: SuperContestCombosWhereUniqueInput[] | undefined;
}
