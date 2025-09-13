import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyContestEffectInputEnvelope } from "../inputs/MovesCreateManyContestEffectInputEnvelope";
import { MovesCreateOrConnectWithoutContestEffectInput } from "../inputs/MovesCreateOrConnectWithoutContestEffectInput";
import { MovesCreateWithoutContestEffectInput } from "../inputs/MovesCreateWithoutContestEffectInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutContestEffectInput", {})
export class MovesCreateNestedManyWithoutContestEffectInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutContestEffectInput], {
    nullable: true
  })
  create?: MovesCreateWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutContestEffectInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestEffectInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyContestEffectInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyContestEffectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
