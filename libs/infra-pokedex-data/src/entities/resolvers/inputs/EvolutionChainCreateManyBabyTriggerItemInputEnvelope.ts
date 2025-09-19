import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateManyBabyTriggerItemInput } from "../inputs/EvolutionChainCreateManyBabyTriggerItemInput";

@TypeGraphQL.InputType("EvolutionChainCreateManyBabyTriggerItemInputEnvelope", {})
export class EvolutionChainCreateManyBabyTriggerItemInputEnvelope {
  @TypeGraphQL.Field(_type => [EvolutionChainCreateManyBabyTriggerItemInput], {
    nullable: false
  })
  data!: EvolutionChainCreateManyBabyTriggerItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
