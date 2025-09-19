import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerCreateInput } from "../../../inputs/EvolutionTriggerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerCreateInput, {
    nullable: false
  })
  data!: EvolutionTriggerCreateInput;
}
