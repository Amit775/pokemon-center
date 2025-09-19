import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateManyBabyTriggerItemInputEnvelope } from "../inputs/EvolutionChainCreateManyBabyTriggerItemInputEnvelope";
import { EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput";
import { EvolutionChainCreateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainCreateWithoutBabyTriggerItemInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainCreateNestedManyWithoutBabyTriggerItemInput", {})
export class EvolutionChainCreateNestedManyWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => [EvolutionChainCreateWithoutBabyTriggerItemInput], {
    nullable: true
  })
  create?: EvolutionChainCreateWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput], {
    nullable: true
  })
  connectOrCreate?: EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput[] | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainCreateManyBabyTriggerItemInputEnvelope, {
    nullable: true
  })
  createMany?: EvolutionChainCreateManyBabyTriggerItemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EvolutionChainWhereUniqueInput], {
    nullable: true
  })
  connect?: EvolutionChainWhereUniqueInput[] | undefined;
}
