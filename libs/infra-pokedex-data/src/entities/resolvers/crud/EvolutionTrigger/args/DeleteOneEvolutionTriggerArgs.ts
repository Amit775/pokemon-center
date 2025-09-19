import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerWhereUniqueInput } from "../../../inputs/EvolutionTriggerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggerWhereUniqueInput;
}
