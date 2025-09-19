import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EvolutionTriggerCreateInput } from "../../../inputs/EvolutionTriggerCreateInput";
import { EvolutionTriggerUpdateInput } from "../../../inputs/EvolutionTriggerUpdateInput";
import { EvolutionTriggerWhereUniqueInput } from "../../../inputs/EvolutionTriggerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEvolutionTriggerArgs {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggerWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionTriggerCreateInput, {
    nullable: false
  })
  create!: EvolutionTriggerCreateInput;

  @TypeGraphQL.Field(_type => EvolutionTriggerUpdateInput, {
    nullable: false
  })
  update!: EvolutionTriggerUpdateInput;
}
