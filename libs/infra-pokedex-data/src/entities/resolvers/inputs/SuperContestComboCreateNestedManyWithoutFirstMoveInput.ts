import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateManyFirstMoveInputEnvelope } from "../inputs/SuperContestComboCreateManyFirstMoveInputEnvelope";
import { SuperContestComboCreateOrConnectWithoutFirstMoveInput } from "../inputs/SuperContestComboCreateOrConnectWithoutFirstMoveInput";
import { SuperContestComboCreateWithoutFirstMoveInput } from "../inputs/SuperContestComboCreateWithoutFirstMoveInput";
import { SuperContestComboWhereUniqueInput } from "../inputs/SuperContestComboWhereUniqueInput";

@TypeGraphQL.InputType("SuperContestComboCreateNestedManyWithoutFirstMoveInput", {})
export class SuperContestComboCreateNestedManyWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => [SuperContestComboCreateWithoutFirstMoveInput], {
    nullable: true
  })
  create?: SuperContestComboCreateWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboCreateOrConnectWithoutFirstMoveInput], {
    nullable: true
  })
  connectOrCreate?: SuperContestComboCreateOrConnectWithoutFirstMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboCreateManyFirstMoveInputEnvelope, {
    nullable: true
  })
  createMany?: SuperContestComboCreateManyFirstMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereUniqueInput], {
    nullable: true
  })
  connect?: SuperContestComboWhereUniqueInput[] | undefined;
}
