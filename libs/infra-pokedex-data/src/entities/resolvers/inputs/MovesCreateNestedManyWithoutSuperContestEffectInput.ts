import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManySuperContestEffectInputEnvelope } from "../inputs/MovesCreateManySuperContestEffectInputEnvelope";
import { MovesCreateOrConnectWithoutSuperContestEffectInput } from "../inputs/MovesCreateOrConnectWithoutSuperContestEffectInput";
import { MovesCreateWithoutSuperContestEffectInput } from "../inputs/MovesCreateWithoutSuperContestEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutSuperContestEffectInput", {})
export class MovesCreateNestedManyWithoutSuperContestEffectInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutSuperContestEffectInput], {
    nullable: true
  })
  create?: MovesCreateWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutSuperContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutSuperContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManySuperContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManySuperContestEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
