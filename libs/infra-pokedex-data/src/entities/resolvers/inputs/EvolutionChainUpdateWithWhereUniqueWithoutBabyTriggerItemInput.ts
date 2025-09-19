import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainUpdateWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainUpdateWithoutBabyTriggerItemInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainUpdateWithWhereUniqueWithoutBabyTriggerItemInput", {})
export class EvolutionChainUpdateWithWhereUniqueWithoutBabyTriggerItemInput {
  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainUpdateWithoutBabyTriggerItemInput, {
    nullable: false
  })
  data!: EvolutionChainUpdateWithoutBabyTriggerItemInput;
}
