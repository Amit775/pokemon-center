import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateManyBabyTriggerItemInputEnvelope } from "../inputs/EvolutionChainsCreateManyBabyTriggerItemInputEnvelope";
import { EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput";
import { EvolutionChainsCreateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsCreateWithoutBabyTriggerItemInput";
import { EvolutionChainsWhereUniqueInput } from "../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput", {})
export class EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => [EvolutionChainsCreateWithoutBabyTriggerItemInput], {
    nullable: true
  })
  create?: EvolutionChainsCreateWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput], {
    nullable: true
  })
  connectOrCreate?: EvolutionChainsCreateOrConnectWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateManyBabyTriggerItemInputEnvelope, {
    nullable: true
  })
  createMany?: EvolutionChainsCreateManyBabyTriggerItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainsWhereUniqueInput], {
    nullable: true
  })
  connect?: EvolutionChainsWhereUniqueInput[] | undefined;
}
