import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsCreateWithoutBabyTriggerItemInput";
import { EvolutionChainsUpdateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsUpdateWithoutBabyTriggerItemInput";
import { EvolutionChainsWhereUniqueInput } from "../inputs/EvolutionChainsWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput", {})
export class EvolutionChainsUpsertWithWhereUniqueWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => EvolutionChainsWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainsUpdateWithoutBabyTriggerItemInput, {
    nullable: false
  })
  update!: EvolutionChainsUpdateWithoutBabyTriggerItemInput;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateWithoutBabyTriggerItemInput, {
    nullable: false
  })
  create!: EvolutionChainsCreateWithoutBabyTriggerItemInput;
}
