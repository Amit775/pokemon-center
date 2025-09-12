import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateManyBabyTriggerItemInputEnvelope } from "../inputs/EvolutionChainsCreateManyBabyTriggerItemInputEnvelope";
import { EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput";
import { EvolutionChainsCreateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsCreateWithoutBabyTriggerItemInput";
import { EvolutionChainsScalarWhereInput } from "../inputs/EvolutionChainsScalarWhereInput";
import { EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput";
import { EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput";
import { EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput";
import { EvolutionChainsWhereUniqueInput } from "../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput", {})
export class EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput {
  @TypeGraphQL.Field(_type => [EvolutionChainsCreateWithoutBabyTriggerItemInput], {
    nullable: true
  })
  create?: EvolutionChainsCreateWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput], {
    nullable: true
  })
  connectOrCreate?: EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput], {
    nullable: true
  })
  upsert?: EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateManyBabyTriggerItemInputEnvelope, {
    nullable: true
  })
  createMany?: EvolutionChainsCreateManyBabyTriggerItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsWhereUniqueInput], {
    nullable: true
  })
  set?: EvolutionChainsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EvolutionChainsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsWhereUniqueInput], {
    nullable: true
  })
  delete?: EvolutionChainsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsWhereUniqueInput], {
    nullable: true
  })
  connect?: EvolutionChainsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput], {
    nullable: true
  })
  update?: EvolutionChainsUpdateWithWhereUniqueWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput], {
    nullable: true
  })
  updateMany?: EvolutionChainsUpdateManyWithWhereWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EvolutionChainsScalarWhereInput[] | undefined;
}
