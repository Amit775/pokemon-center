import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManySuperContestEffectInputEnvelope } from "../inputs/MoveCreateManySuperContestEffectInputEnvelope";
import { MoveCreateOrConnectWithoutSuperContestEffectInput } from "../inputs/MoveCreateOrConnectWithoutSuperContestEffectInput";
import { MoveCreateWithoutSuperContestEffectInput } from "../inputs/MoveCreateWithoutSuperContestEffectInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutSuperContestEffectInput", {})
export class MoveCreateNestedManyWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutSuperContestEffectInput], {
    nullable: true
  })
  create?: MoveCreateWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutSuperContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManySuperContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManySuperContestEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
