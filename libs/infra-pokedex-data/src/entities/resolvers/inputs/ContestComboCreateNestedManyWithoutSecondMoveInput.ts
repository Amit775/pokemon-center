import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateManySecondMoveInputEnvelope } from "../inputs/ContestComboCreateManySecondMoveInputEnvelope";
import { ContestComboCreateOrConnectWithoutSecondMoveInput } from "../inputs/ContestComboCreateOrConnectWithoutSecondMoveInput";
import { ContestComboCreateWithoutSecondMoveInput } from "../inputs/ContestComboCreateWithoutSecondMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboCreateNestedManyWithoutSecondMoveInput", {})
export class ContestComboCreateNestedManyWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => [ContestComboCreateWithoutSecondMoveInput], {
    nullable: true
  })
  create?: ContestComboCreateWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboCreateOrConnectWithoutSecondMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestComboCreateOrConnectWithoutSecondMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestComboCreateManySecondMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestComboCreateManySecondMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereUniqueInput], {
    nullable: true
  })
  connect?: ContestComboWhereUniqueInput[] | undefined;
}
