import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerWhereInput } from "../inputs/EvolutionTriggerWhereInput";

@TypeGraphQL.InputType("EvolutionTriggerRelationFilter", {})
export class EvolutionTriggerRelationFilter {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  is?: EvolutionTriggerWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  isNot?: EvolutionTriggerWhereInput | undefined;
}
