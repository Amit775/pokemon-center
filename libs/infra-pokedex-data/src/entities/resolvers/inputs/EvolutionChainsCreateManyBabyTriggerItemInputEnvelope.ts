import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateManyBabyTriggerItemInput } from "../inputs/EvolutionChainsCreateManyBabyTriggerItemInput";

@TypeGraphQL.InputType("EvolutionChainsCreateManyBabyTriggerItemInputEnvelope", {})
export class EvolutionChainsCreateManyBabyTriggerItemInputEnvelope {
  @TypeGraphQL.Field(_type => [EvolutionChainsCreateManyBabyTriggerItemInput], {
    nullable: false
  })
  data!: EvolutionChainsCreateManyBabyTriggerItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
