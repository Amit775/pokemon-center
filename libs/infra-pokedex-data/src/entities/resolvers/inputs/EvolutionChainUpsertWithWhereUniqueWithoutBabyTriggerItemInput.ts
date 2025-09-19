import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainCreateWithoutBabyTriggerItemInput";
import { EvolutionChainUpdateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainUpdateWithoutBabyTriggerItemInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainUpsertWithWhereUniqueWithoutBabyTriggerItemInput", {})
export class EvolutionChainUpsertWithWhereUniqueWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainUpdateWithoutBabyTriggerItemInput, {
    nullable: false
  })
  update!: EvolutionChainUpdateWithoutBabyTriggerItemInput;

  @TypeGraphQL.Field(_type => EvolutionChainCreateWithoutBabyTriggerItemInput, {
    nullable: false
  })
  create!: EvolutionChainCreateWithoutBabyTriggerItemInput;
}
