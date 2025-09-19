import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyContestEffectInputEnvelope } from "../inputs/MoveCreateManyContestEffectInputEnvelope";
import { MoveCreateOrConnectWithoutContestEffectInput } from "../inputs/MoveCreateOrConnectWithoutContestEffectInput";
import { MoveCreateWithoutContestEffectInput } from "../inputs/MoveCreateWithoutContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutContestEffectInput", {})
export class MoveCreateNestedManyWithoutContestEffectInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutContestEffectInput], {
    nullable: true
  })
  create?: MoveCreateWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyContestEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
