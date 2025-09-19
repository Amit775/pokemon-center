import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainCreateWithoutBabyTriggerItemInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput", {})
export class EvolutionChainCreateOrConnectWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainCreateWithoutBabyTriggerItemInput, {
    nullable: false
  })
  create!: EvolutionChainCreateWithoutBabyTriggerItemInput;
}
