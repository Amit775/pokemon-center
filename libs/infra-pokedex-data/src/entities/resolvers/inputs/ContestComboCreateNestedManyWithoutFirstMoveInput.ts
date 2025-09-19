import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateManyFirstMoveInputEnvelope } from "../inputs/ContestComboCreateManyFirstMoveInputEnvelope";
import { ContestComboCreateOrConnectWithoutFirstMoveInput } from "../inputs/ContestComboCreateOrConnectWithoutFirstMoveInput";
import { ContestComboCreateWithoutFirstMoveInput } from "../inputs/ContestComboCreateWithoutFirstMoveInput";
import { ContestComboWhereUniqueInput } from "../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.InputType("ContestComboCreateNestedManyWithoutFirstMoveInput", {})
export class ContestComboCreateNestedManyWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => [ContestComboCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: ContestComboCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: ContestComboCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => ContestComboCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: ContestComboCreateManyFirstMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereUniqueInput], {
    nullable: true
  })
  connect?: ContestComboWhereUniqueInput[] | undefined;
}
