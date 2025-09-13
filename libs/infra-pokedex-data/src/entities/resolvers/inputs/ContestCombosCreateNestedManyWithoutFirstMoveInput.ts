import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosCreateManyFirstMoveInputEnvelope } from "../inputs/ContestCombosCreateManyFirstMoveInputEnvelope";
import { ContestCombosCreateOrConnectWithoutFirstMoveInput } from "../inputs/ContestCombosCreateOrConnectWithoutFirstMoveInput";
import { ContestCombosCreateWithoutFirstMoveInput } from "../inputs/ContestCombosCreateWithoutFirstMoveInput";
import { ContestCombosWhereUniqueInput } from "../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.InputType("ContestCombosCreateNestedManyWithoutFirstMoveInput", {})
export class ContestCombosCreateNestedManyWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => [ContestCombosCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: ContestCombosCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestCombosCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestCombosCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestCombosCreateManyFirstMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereUniqueInput], {
    nullable: true
  })
  connect?: ContestCombosWhereUniqueInput[] | undefined;
}
