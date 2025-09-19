import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerCreateWithoutEvolutionInput } from "../inputs/EvolutionTriggerCreateWithoutEvolutionInput";
import { EvolutionTriggerWhereUniqueInput } from "../inputs/EvolutionTriggerWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionTriggerCreateOrConnectWithoutEvolutionInput", {})
export class EvolutionTriggerCreateOrConnectWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggerWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionTriggerCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: EvolutionTriggerCreateWithoutEvolutionInput;
}
