import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateManySecondMoveInputEnvelope } from "../inputs/ContestCombosCreateManySecondMoveInputEnvelope";
import { ContestCombosCreateOrConnectWithoutSecondMoveInput } from "../inputs/ContestCombosCreateOrConnectWithoutSecondMoveInput";
import { ContestCombosCreateWithoutSecondMoveInput } from "../inputs/ContestCombosCreateWithoutSecondMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosCreateNestedManyWithoutSecondMoveInput", {})
export class ContestCombosCreateNestedManyWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => [ContestCombosCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: ContestCombosCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestCombosCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestCombosCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestCombosCreateManySecondMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereUniqueInput], {
    nullable: true
  })
  connect?: ContestCombosWhereUniqueInput[] | undefined;
}
